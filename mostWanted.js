"use strict"



function searchById(people){
var id = prompt ("What is the person's ID number?");
var listOfIds = (peoplesTraitInformation.map(function(peoplesTraitInformation){
var listOfNames = (peoplesTraitInformation.map(function(peoplesTraitInformation){
return peoplesTraitInformation.firstName + " " + peoplesTraitInformation.lastName;
  }).join("\n"));
  return listOfNames;
  
  
function app(people){
  var searchType = promptFor("Do you know the name of the person for whom you are searching? Please enter: yes or no", yesNo).toLowerCase();
    switch(searchType){
    case 'yes':
      var name = searchByName(people);
      if (name === true){
      mainMenu(name, people);
      }
        else{
          var notAName = promptFor("Sorry, there are no results for that name. Would you like to try searching by entering the person's name again? Please enter: yes or no. If yes, check your spelling. Avoid using numbers or symbols.", yesNo).toLowerCase();
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
  var firstName = promptFor("What is the person's first name?",chars).toUpperCase(0);
  var lastName = promptFor("What is the person's last name?",chars).toUpperCase(0);
  
  var myResult = people.filter(function (el){
    if (el.firstName === firstName && el.lastName === lastName){
      return true; 
    }
  });
    return myResult;
}

function creatingFirstAndLastNameOnly(peoplesTraitInformation, people){
  var listOfNames = (peoplesTraitInformation.map(function(peoplesTraitInformation){
    return peoplesTraitInformation.firstName + " " + peoplesTraitInformation.lastName;
  }).join("\n"));
  return listOfNames;
}

function refiningTraitSearch(peoplesTraitInformation, people){
  var refiningSearch = promptFor("Would you like to refine your search by trait more? Please enter: yes or no", yesNo).toLowerCase();
  var refiningSearch = promptFor("Would you like to add additional criteria to your search? Please enter: yes or no", yesNo).toLowerCase();
        if (refiningSearch === "yes"){
          searchByTrait(peoplesTraitInformation);
        }
        else if (refiningSearch === "no" && peoplesTraitInformation.length > 1){
          var namesOfCurrentSearch = creatingFirstAndLastNameOnly(peoplesTraitInformation, people);
          var choseOnePersonFromArray = promptFor("The following people meet your search criteria:" + "\n" + namesOfCurrentSearch + "\n" + "\n" + "Would you like more information regarding one of these individual's information, family, or descendants? Please enter: yes or no", yesNo).toLowerCase();
          if (choseOnePerson === "yes"){
            var chosenPerson = searchByName(people);
            mainMenu(chosenPerson , people);
          }
            else{
              alert("Thank you for searching!")
              app(people);
            }
        }
        else{
          displayPeople(peoplesTraitInformation);
          mainMenu(peoplesTraitInformation , people)
        }
}

function searchByTrait(people){
  var seachByTraitUserInput = promptFor ("By what trait would you like to search? Please enter one of the following traits: gender, age, eye color, height, or occupation"),chars).toLowerCase();
  var peoplesTraitInformation = [];// ask if this should be an array or just an open variable
  switch(seachByTraitUserInput){
    case 'eye color':
    var peoplesEyeColorSearch = searchByEyeColor(people);
      if (Array.isArray(peoplesEyeColorSearch) === true && peoplesEyeColorSearch.length > 1){
        peoplesTraitInformation = peoplesEyeColorSearch;
        var refinedPeopleByTrait = refiningTraitSearch(peoplesTraitInformation, people);
      }

      else if(peoplesEyeColorSearch.length === 0){
        var notAnEyeColor = promptFor("That was not an eye color that matched a person in our database. Would you like to re-try entering the person's eye color? Please enter: yes or no", yesNo).toLowerCase();
      }
      else {
        var notAnEyeColor = promptFor("Sorry, there are no individuals who meet your criteria. Would you like to try searching by eye color again? Please enter: yes or no. If yes, try restricting your search to generic eye colors, such as brown, black, blue, hazel, or green.", yesNo).toLowerCase();
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
    if (Array.isArray(peoplesWeightSearch) === true && peoplesWeightSearch.length > 1){
      peoplesTraitInformation = peoplesWeightSearch;
      var refinedPeopleByTrait = refiningTraitSearch(peoplesTraitInformation, people);
      }
      else if (peoplesWeightSearch.length === 0){
        var notAWeight = promptFor("That was not a weight that matched a person in our database. Would you like to re-try entering the person's weight? yes or no", yesNo).toLowerCase();
      }
      else {
        var notAWeight = promptFor("Sorry, there are no individuals who meet your criteria. Would you like to try searching by weight again? Please enter: yes or no. If yes, search by whole numbers, not fractions or decimals. Avoid letters and symbols in your search.", yesNo).toLowerCase();
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
    if (Array.isArray(peoplesHeightSearch) === true && peoplesHeightSearch.length > 1){
      peoplesTraitInformation = peoplesHeightSearch;
      var refinedPeopleByTrait = refiningTraitSearch(peoplesTraitInformation, people);
      }
      else if (peoplesHeightSearch.length === 0){
        var notAHeight = prompt ("Sorry, there are no individuals who meet your criteria. Would you like to try searching by height again? Please enter: yes or no. If yes, try searching by whole numbers, not fractions or decimals. Avoid symbols or letters in your search.", yesNo).toLowerCase();
      }
      else {
        var notAHeight = prompt ("Sorry, there are no individuals who meet your criteria. Would you like to try searching by height again? Please enter: yes or no. If yes, try searching by whole numbers, not fractions or decimals. Avoid symbols or letters in your search.", yesNo).toLowerCase();
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
    if (Array.isArray(peoplesOccupationSearch) === true && peoplesOccupationSearch.length > 1){
     peoplesTraitInformation = peoplesOccupationSearch;
     var refinedPeopleByTrait = refiningTraitSearch(peoplesTraitInformation, people);
      }
      else if (peoplesOccupationSearch.length === 0){
        var notAnOccupation = promptFor("That was not an occupation that matched a person in our database. Would you like to re-try entering the person's occupation? yes or no", yesNo).toLowerCase();
      }
      else {
        var notAnOccupation = prompt ("Sorry, there are no individuals who meet your criteria. Would you like to try searching by occupation again? Please enter: yes or no. If yes, check your spelling and avoid numbers or symbols in your search.", yesNo).toLowerCase();
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
    if (Array.isArray(peoplesAgeSearch) === true && peoplesAgeSearch.length > 1){
     peoplesTraitInformation = peoplesAgeSearch;
     var refinedPeopleByTrait = refiningTraitSearch(peoplesTraitInformation, people);
      }
      else if (peoplesAgeSearch.length === 0){
        var notAnAge = promptFor("That was not an age that matched a person in our database. Would you like to re-try entering the person's age? 'Yes' or 'No'", yesNo).toLowerCase();
      }
      else {
        var notAnAge = promptFor("Sorry, there are no individuals who meet your criteria. Would you like to try searching by age again? Please enter: yes or no. If yes, try searching by whole numbers, not fractions or decimals. Avoid symbols or letters in your search.", yesNo).toLowerCase();
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
      if (Array.isArray(peoplesGenderSearch) === true && peoplesGenderSearch.length > 1){
        peoplesTraitInformation = peoplesGenderSearch;
        var refinedPeopleByTrait = refiningTraitSearch(peoplesTraitInformation, people);
      } 
        else if (peoplesGenderSearch.length === null){
          var notAGender = promptFor("Your input was not a gender that matched a person in our database. Would you like ot re-try entering the person's gender? 'Yes or No'", yesNo).toLowerCase();
        }
        else {
          var notAGender = prompt ("Sorry, there are no individuals who meet your criteria. Would you like to try searching by gender again? Please enter: yes or no. If yes, try searching by male or female. Avoid numbers or symbols in your search.", yesNo).toLowerCase();
          if (notAGender === 'yes'){
            searchByGender(people);
          }
            else {
              searchByTrait(people);
            }
        }
    default:	
    var nextTraitSearch = prompt ("Would you like to continue to search by traits? 'Yes or No'", yesNo).toLowerCase();
    var nextTraitSearch = prompt ("Would you like to continue searching by traits? Please enter: yes or no", yesNo).toLowerCase();
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
  var userInput =  prompt ("What is the eye color of the person for whom you are searching?",chars).toLowerCase();
  var myResults = [];
  for (var i = 0; i < people.length; i++) {
    if (userInput === people[i].eyeColor) {
      myResults.push(people[i]);
    }
  }
  return myResults;
}

function searchByWeight(people) {
  var userInput =  prompt ("In pounds, what is the weight of the person for whom you are searching?",chars);
  var findPeople = [];
  for (var i = 0; i < people.length; i++){
    if (userInput === people [i].weight){
      myResults.push(people[i]);
    }
  }
  return myResults;
}

function searchByHeight(people) {
	var userInput =  prompt ("In inches, what is the height of the person for whom you are searching?",chars);
	var myResults = [];
	for (var i = 0; i < people.length; i++){
		if (userInput === people[i].height){
			myResults.push(people[i]);
		}
	}
	return myResults;
}

function searchByOccupation(people){
  var occupationInput = prompt ("What is the occupation of the person for whom you are searching?",chars).toLowerCase();
  var myResults = people.filter(function (el){
    if (el.occupation === occupationInput){
      return true;
    }
  });
   return myResults;
}

 function searchByGender(people) {
  var userInput =  prompt ("What is the gender of the person for whom you are searching?",chars).toLowerCase();
  var myResults = [];
  for (var i = 0; i < people.length; i++) {
    if (userInput === people[i].gender) {
      myResults.push(people[i]);
    }
  }
  return myResults;
}


function searchByAge(people){
 var inputAge = prompt ("In years, what is the age of the person for whom you are searching?",chars);
 // var inputAge = promptFor("Please type the person's age.", chars);
// var inputAge = promptFor ("In years, what is the age of the person for whom you are searching?",chars);
}

// function searchByAge(people){
//  var inputAge = promptFor("In years, what is the age of the person for whom you are searching?", chars);
//  var peoplesAge = getAge(inputAge, people);
//  return peoplesAge;
//  // var inputAge = promptFor("Please type the person's age.", chars);
// // var inputAge = promptFor ("In years, what is the age of the person for whom you are searching?", chars);
// }


// function getAge(dob, people) {
//    var myResults = [];
//    var today = new Date();
//    var birthDate = new Date(dob);
//    var age = today.getFullYear() - birthDate.getFullYear();
//    var m = today.getMonth() - birthDate.getMonth();
  
//    for (var i = 0; i < people.length; i++) {
//       if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//        myResults.push(people[i]);
//       }
//     }
//    return myResults;
// }

// function matchAge(dob){
//    var personsAge = getAge();
//    if (personsAge == searchByAge()){ //////////////////////////////not sure if we actually need this/////////////
//      return true;
//    }
// }



// Menu function to call once you find who you are looking for
function mainMenu(person, people){


  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Sorry, there are no individuals with that name in the database.");
    return app(people); // restart
  }


  var displayOption = prompt (" "+ person.firstName + " " + person.lastName + " . Would you like to view " + person.firstName + " " + person.lastName + "'s personal information, family, or descendants?  Enter your preference or enter 'restart' or 'quit'").toLowerCase();

  var displayOption = prompt(" " + person.firstName + " "  + person.lastName + " . Would you like to view " + person.firstName + " " + person.lastName + "'s personal information, family, or descendants?  Enter your preference or enter 'restart' or 'quit'").toLowerCase();


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
  personInfo += "Gender:" + person.gender + "\n"; 
  personInfo += "Date of Birth:" + person.dob + "\n"; 
  personInfo += "Height:" + person.height + "\n";
  personInfo += "Weight:" + person.weight + "\n";
  personInfo += "Eye Color" + person.eyeColor + "\n";
  personInfo += "Occupation" + person.Occupation + "\n";
  // age once map is done
  alert(personInfo);
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
 
 function listOfFamily(person, people){
   var listSpouse = findSpouse(person, people);
   var listOfParents = findParents(person, people);
   var listOfSiblings = findSiblings(person, people);
   var personsId = findId(person, people);
   var parentsId = findId(listOfParents, people);
   var listOfChildren = listOfDescendants(person, people);
   var family = listSpouse + listOfParents + listOfSiblings + listOfChildren;
   return family;
}

function findSpouse(person, people){
  var myResult = people.filter(function(el){
       if (el.spouse === person.id){
           return true;
        }
  });
}

function findParents(person, people){//findparents
 var myResult = people.filter(function(el){
   if (el.parents[0] === person.parents[0] || el.parents[1] === person.parents[1]){
       return true;
    }
  });  
}

function findSiblings(person, people){
 var myResult = people.filter(function(el){
   if (el.person.parents === el.people.parents){
     return true;
    }
  });
}

// function findId(person, people){
//   person.id;
//    var idSearch = []
//        for (var i = 0; i < people.length; i++){
//            if (displayOption === people[i]){
//                 idSearch.push(people[i]);
//             }
//         }
// }


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
 
 
 
 
 //search by ID number
  function searchById(people) {
  var userInput =  promptFor("What is the ID number of the person for whom you are searching?");
  var findPeople = [];
  for (var i = 0; i < people.length; i++){
    if (userInput === people [i].id){
      myResults.push(people[i]);
    }
  }
  return myResults;
}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
