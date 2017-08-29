"use strict"

function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
    switch(searchType){
    case 'yes':
      var name = searchByName(people);
      if (name === true){
      mainMenu(name, people);
      }
        else{
          var notAName = promptFor("That was not a name of a person in our database. Would you like to re-try entering the person's name? yes or no", yesNo).toLowerCase();
            if (notAName === 'yes'){
              searchByName(people);
            }
            else {
              searchByTrait(people);
            }
        }
    break;
    case 'no':
    searchByTrait(people);
    break;
    default:
    app(people); 
    break;
  }
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars).toUpperCase(0);
  var lastName = promptFor("What is the person's last name?", chars).toUpperCase(0);
  
  var myResult = people.filter(function (el){
    if (el.firstName === firstName && el.lastName === lastName){
      return true; 
    }
  });
    return myResult;
}

// function creatingFirstAndLastNameOnly(peoplesTraitInformation,people){
//   for (i = 0; i < peoplesTraitInformation.length; i++){
//           var personInfo = "First Name: " + peoplesTraitInformation.firstName + "\n";
//           personInfo += "Last Name: " + peoplesTraitInformation.lastName + "\n";
//           personInfo.push(listOfFirstAndLastName);
//           var listOfFirstAndLastName = "";
//   }
//     return listOfFirstAndLastName;
// }

function creatingFirstAndLastNameOnly(peoplesTraitInformation,people){
  (people.map(function(peoplesTraitInformation){
    return peoplesTraitInformation.firstName + " " + peoplesTraitInformation.lastName;
  }).join("\n"));
}

function refiningTraitSearch(peoplesTraitInformation, people){
  var refiningSearch = promptFor("Would you like to refine your search by trait more?", yesNo).toLowerCase();
        if (refiningSearch === "yes"){
          searchByTrait(peoplesTraitInformation);
        }
        else if (refiningSearch === "no" && peoplesTraitInformation.length > 1){
          var namesOfCurrentSearch = creatingFirstAndLastNameOnly(peoplesTraitInformation, people);
          var choseOnePersonFromArray = promptFor("You have too many people in search." + namesOfCurrentSearch + "Would you like to know more about one of these people's information, family, or descendants? yes or no", yesNo).toLowerCase();
          if (choseOnePerson === "yes"){
            var chosenPerson = searchByName(people);
            mainMenu(chosenPerson , people);
          }
            else{
              alert("We hope our database has helped you find the person you were looking for. Have a great day!")
              app(people);
            }
        }
        else{
          displayPeople(peoplesTraitInformation);
          mainMenu(peoplesTraitInformation , people)
        }
}

function searchByTrait(people){
  var seachByTraitUserInput = prompt ("Which trait would you like to search by? eye color or gender or weight or height or occupation or age").toLowerCase();
  var peoplesTraitInformation = [];// ask if this should be an array or just an open variable
  switch(seachByTraitUserInput){
    case 'eye color':
    var peoplesEyeColorSearch = searchByEyeColor(people);
      if (Array.isArray(peoplesEyeColorSearch) === true){
        peoplesTraitInformation = peoplesEyeColorSearch;
        var refinedPeopleByTrait = refiningTraitSearch(peoplesTraitInformation, people);
      }
      else {
        var notAnEyeColor = promptFor("That was not an eye color that matched a person in our database. Would you like to re-try entering the person's eye color? yes or no", yesNo).toLowerCase();
          if (notAnEyeColor === 'yes'){
            searchByEyeColor(people);
          }
            else{
              searchByTrait(people);
            }
      }
    break;
    case 'weight':
    var peoplesWeightSearch = searchByWeight(people);
    if (Array.isArray(peoplesWeightSearch) === true){
      peoplesTraitInformation = peoplesWeightSearch;
      var refinedPeopleByTrait = refiningTraitSearch(peoplesTraitInformation, people);
      }
      else {
        var notAWeight = promptFor("That was not a weight that matched a person in our database. Would you like to re-try entering the person's weight? yes or no", yesNo).toLowerCase();
          if (notAWeight === 'yes'){
            searchByWeight(people);
          }
            else{
              searchByTrait(people);
            }
      }
    break;
    case 'height':
    var peoplesHeightSearch = searchByHeight(people);
    if (Array.isArray(peoplesHeightSearch) === true){
      peoplesTraitInformation = peoplesHeightSearch;
      var refinedPeopleByTrait = refiningTraitSearch(peoplesTraitInformation, people);
      }
      else {
        var notAHeight = promptFor("That was not a height that matched a person in our database. Would you like to re-try entering the person's height? yes or no", yesNo).toLowerCase();
          if (notAHeight === 'yes'){
            searchByHeight(people);
          }
            else{
              searchByTrait(people);
            }
      }
    break;
    case 'occupation': 
    var peoplesOccupationSearch = searchByOccupation(people);
    if (Array.isArray(peoplesOccupationSearch) === true){
     peoplesTraitInformation = peoplesOccupationSearch;
     var refinedPeopleByTrait = refiningTraitSearch(peoplesTraitInformation, people);
      }
      else {
        var notAnOccupation = promptFor("That was not an occupation that matched a person in our database. Would you like to re-try entering the person's occupation? yes or no", yesNo).toLowerCase();
          if (notAnOccupation === 'yes'){
            searchByOccupation(people);
          }
            else{
              searchByTrait(people);
            }
      }
    break;
    case 'age': 
    var peoplesAgeSearch = searchByAge(people);
    if (Array.isArray(peoplesAgeSearch) === true){
     peoplesTraitInformation = peoplesAgeSearch;
     var refinedPeopleByTrait = refiningTraitSearch(peoplesTraitInformation, people);
      }
      else {
        var notAnAge = promptFor("That was not an age that matched a person in our database. Would you like to re-try entering the person's age? 'Yes' or 'No'", yesNo).toLowerCase();
          if (notAnAge === 'yes'){
            searchByAge(people);
          }
            else{
              searchByTrait(people);
            }
      }
    break;
    case 'gender':
    var peoplesGenderSearch = searchByGender(people);
      if (Array.isArray(peoplesGenderSearch) === true){
        peoplesTraitInformation = peoplesGenderSearch;
        var refinedPeopleByTrait = refiningTraitSearch(peoplesTraitInformation, people);
      } 
        else {
          var notAGender = promptFor ("That was not a gender that matched a person in our database. Would you like ot re-try entering the person's gender? 'Yes or No'", yesNo).toLowerCase();
          if (notAGender === 'yes'){
            searchByGender(people);
          }
            else {
              searchByTrait(people);
            }
        }
    default:	
    var nextTraitSearch = prompt ("Would you like to continue to search by traits? 'Yes or No'", yesNo).toLowerCase();
      if (nextTraitSearch === "yes"){
        searchByTrait(peoplesTraitInformation);
        var refinedPeopleByTrait = refiningTraitSearch(peoplesTraitInformation, people);
      }
      else{
        mainMenu(peoplesTraitInformation, people);
      }
    break;
  }
}

function searchByEyeColor(people) {
  var userInput =  prompt ("What is the eye color of the person for whom you are searching?").toLowerCase();
  var findPeople = [];
  for (var i = 0; i < people.length; i++) {
    if (userInput === people[i].eyeColor) {
      findPeople.push(people[i]);
    }
  }
  return findPeople;
}

function searchByWeight(people) {
  var userInput =  prompt ("In pounds, what is the weight of the person for whom you are searching?");
  var findPeople = [];
  for (var i = 0; i < people.length; i++){
    if (userInput === people [i].weight){
      myResults.push(people[i]);
    }
  }
  return myResults;
}

function searchByHeight(people) {
	var userInput =  prompt ("In inches, what is the height of the person for whom you are searching?");
	var myResults = [];
	for (var i = 0; i < people.length; i++){
		if (userInput === people[i].height){
			myResults.push(people[i]);
		}
	}
	return myResults;
}

function searchByOccupation(people){
  var occupationInput = prompt ("What is the occupation of the person for whom you are searching?").toLowerCase();
  var myResults = people.filter(function (el){
    if (el.occupation === occupationInput){
      return true;
    }
  });
   return myResults;
}

 function searchByGender(people) {
  var userInput =  prompt ("What is the gender of the person for whom you are searching?").toLowerCase();
  var findPeople = [];
  for (var i = 0; i < people.length; i++) {
    if (userInput === people[i].gender) {
      findPeople.push(people[i]);
    }
  }
  return searchByGender(people);
}

function searchByAge(people){
 var inputAge = prompt ("In years, what is the age of the person for whom you are searching?");
 var inputAge = prompt("Please type the person's age.", chars);
 var myResults = people.filter(function(el){
   var personAge = getAge(el.dob);
    if (personAge === inputAge){
      return true;
    }
  });
 return myResults;
}

function getAge(dob) {
   var today = new Date();
   var birthDate = new Date(dob);
   var age = today.getFullYear() - birthDate.getFullYear();
   var m = today.getMonth() - birthDate.getMonth();
   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
       age--;
   }
   return age;
}

// function matchAge(dob){
//    var personsAge = getAge();
//    if (personsAge == searchByAge()){ //////////////////////////////not sure if we actually need this/////////////
//      return true;
//    }
// }
////////////////////////////////////////////////////////////////////////


// Menu function to call once you find who you are looking for
function mainMenu(person, people){


  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'").toLowerCase();

  switch(displayOption){
    case "info":
    displayPerson(person);
    break;
    case "family":
    return myResults;
    listOfFamily(person);// TODO: get person's family
    break;
    case "descendants":
    listOfDescendants(person);
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function listOfFamily(person, people){
    var listSpouse = findSpouse(person, people);
    var listParents = findParents(person, people);
    var listSiblings = findSiblings(person, people);
    var personsId = findId(person, people);
    var parentsId = findId(listofParents, people);
    var listOfChildren = listOfDescendants(personsId, people);
}

function findSpouse(person, people){
 var myResult = people.filter(function(el){
        if (el.currentSpouse === person.id){
            return true;
          }
    });
}

function findParents(person, people){//findparents
  var parents = people.filter(function(el){
      if (el.people.parents === el.person.parents){
        return true;
      }
    });
  }
   


function findId(person, people){
    var idSearch = []
        for (var i = 0; i < people.length; i++){
            if (displayOption === people[i]; i++){
          idSearch.push(people[i]);
        }
      }
    }
// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}
  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

function displayPerson(person){
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // personInfo += "Gender:" + person.gender + "\n"; //make this live once gender is running
  personInfo += "Date of Birth:" + person.dob + "\n"; 
  personInfo += "Height:" + person.height + "\n";
  personInfo += "Weight:" + person.weight + "\n";
  personInfo += "Eye Color" + person.eyeColor + "\n";
  personInfo += "Occupation" + person.Occupation + "\n";
  // age once map is done
  alert(personInfo);
}

function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

function chars(input){
  return true; 
}

function listOfFamily(person, people){

}

 


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 function listOfDescendants(person, people) {
	var children = people.filter(function (el) {
		for (var i = 0; i < el.parents.length; i++) {
			if (el.parents[i] === person.id) {
				return true;
			}
		}
	});	
	for (var i = 0; i < children.length; i++) {
		children = children.concat(listOfDescendants(children[i], people));
	}
	return children;
}
var test = listOfDescendants(allPeople[8], allPeople);
console.log(test);
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 //search by gender
 
 function searchByGender(people) {
	var userInput =  prompt ("What is the gender of the person for whom you are searching?");

	var findPeople = [];
	for (var i = 0; i < people.length; i++) {
		if (userInput === people[i].gender) {
			findPeople.push(people[i]);
		}
	}
	return searchByGender(people);
}
