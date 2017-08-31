"use strict"
  
function app(people){
  var searchType = promptFor("Do you know the name of the person for whom you are searching? Please enter: yes or no", yesNo).toLowerCase();
    switch(searchType){
    case 'yes':
      var name = searchByName(people);
      if (name.length === 1){
      mainMenu(name, people);
      }
        else{
          var notAName = promptFor("Sorry, there are no results for that name. Would you like to try searching by entering the person's name again? Please enter: yes or no. If yes, check your spelling. Avoid using numbers or symbols.", yesNo).toLowerCase();
            if (notAName === "yes"){
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
  var firstName = promptFor("What is the person's first name?",chars);
  firstName = firstName.charAt(0).toUpperCase() + firstName.substr(1);
  var lastName = promptFor("What is the person's last name?",chars);
  lastName = lastName.charAt(0).toUpperCase() + lastName.substr(1);
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
  if (peoplesTraitInformation.length === 1){
    mainMenu(peoplesTraitInformation, people)
        //go to displaying person and prompt for finding decendents (mainmenu)
        } 
    else if (peoplesTraitInformation.length > 1){
      var refiningSearch = promptFor("Your current search has" + " " + peoplesTraitInformation.length + " results. Would you like to refine your search by searching more traits? Please enter: yes or no", yesNo).toLowerCase();
          if (refiningSearch === "yes"){
            searchByTrait(peoplesTraitInformation);
          }
          else if (refiningSearch === "no" && peoplesTraitInformation.length > 1){
            var namesOfCurrentSearch = creatingFirstAndLastNameOnly(peoplesTraitInformation, people);
            var choseOnePersonFromArray = promptFor("The following people meet your search criteria:" + "\n" + namesOfCurrentSearch + "\n" + "\n" + "Would you like more information regarding one of these individual's information, family, or descendants? Please enter: yes or no", yesNo).toLowerCase();
            if (choseOnePersonFromArray === "yes"){
              var chosenPerson = searchByName(people);
              mainMenu(chosenPerson, people);
            }
              else{
                alert("Thank you for searching!")
                app(people);
              }
          }
          // else{
          //   displayPeople(peoplesTraitInformation);
          //   mainMenu(peoplesTraitInformation , people)
          // }
    }
  }
//function searchByTrait(people){
//   var seachByTraitUserInput = promptFor ("By what trait would you like to search? Please enter one of the following traits: gender, age, eye color, height, weight, ID number, or occupation",chars).toLowerCase();
function searchByTrait(people){
  var seachByTraitUserInput = promptFor("By what trait would you like to search? Please enter one of the following traits: gender, age, eye color, height, weight, ID, or occupation",chars).toLowerCase();
  var peoplesTraitInformation = [];
  switch(seachByTraitUserInput){
    case 'eye color':
    var peoplesEyeColorSearch = searchByEyeColor(people);
      if (Array.isArray(peoplesEyeColorSearch) === true && peoplesEyeColorSearch.length >= 1){
        peoplesTraitInformation = peoplesEyeColorSearch;
        var refinedPeopleByTrait = refiningTraitSearch(peoplesTraitInformation, people);
      }
      else if(peoplesEyeColorSearch.length === 0){
        var notAnEyeColor = promptFor("That was not an eye color that matched a person in our database. Would you like to re-try entering the person's eye color? Please enter: yes or no", yesNo).toLowerCase();
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
    if (Array.isArray(peoplesWeightSearch) === true && peoplesWeightSearch.length >= 1){
      peoplesTraitInformation = peoplesWeightSearch;
      var refinedPeopleByTrait = refiningTraitSearch(peoplesTraitInformation, people);
      }
      else if (peoplesWeightSearch.length === 0){
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
    if (Array.isArray(peoplesHeightSearch) === true && peoplesHeightSearch.length >= 1){
      peoplesTraitInformation = peoplesHeightSearch;
      var refinedPeopleByTrait = refiningTraitSearch(peoplesTraitInformation, people);
      }
      else if (peoplesHeightSearch.length === 0){
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
    if (peoplesOccupationSearch.length >= 1){
     peoplesTraitInformation = peoplesOccupationSearch;
     var refinedPeopleByTrait = refiningTraitSearch(peoplesTraitInformation, people);
      }
      else if (peoplesOccupationSearch.length === 0){
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
    if (Array.isArray(peoplesAgeSearch) === true && peoplesAgeSearch.length >= 1){
     peoplesTraitInformation = peoplesAgeSearch;
     var refinedPeopleByTrait = refiningTraitSearch(peoplesTraitInformation, people);
      }
      else if (peoplesAgeSearch.length === 0){
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
      if (Array.isArray(peoplesGenderSearch) === true && peoplesGenderSearch.length >= 1){
        peoplesTraitInformation = peoplesGenderSearch;
        var refinedPeopleByTrait = refiningTraitSearch(peoplesTraitInformation, people);
      } 
        else if (peoplesGenderSearch.length === 0){
          var notAGender = promptFor("Your input was not a gender that matched a person in our database. Would you like ot re-try entering the person's gender? 'Yes or No'", yesNo).toLowerCase();
          if (notAGender === 'yes'){
            searchByGender(people);
          }
            else {
              searchByTrait(people);
            }
        }
	break;
    case 'id':
    var peoplesIdSearch = searchById(people);
      if (Array.isArray(peoplesIdSearch) === true && peoplesIdSearch.length >= 1){
        peoplesTraitInformation = peoplesIdSearch;
        var refinedPeopleByTrait = refiningTraitSearch(peoplesTraitInformation, people);
      } 
        else if (peoplesIdSearch.length === 0){
          var notAnId = promptFor("Your input was not an ID that matched a person in our database. Would you like ot re-try entering the person's ID? 'Yes or No'", yesNo).toLowerCase();
          if (notAnID === 'yes'){
            searchById(people);
          }
            else {
              searchByTrait(people);
            }
        }
    break;
    default:	
    displayPeople(refinedPeopleByTrait);
    mainMenu(refinedPeopleByTrait);
    break;
  }
  
}
/////////////////////////////////////////////////////////////////////////////////////////
//beginning of search functions
function searchByEyeColor(people) {
  var userInput =  promptFor("What is the eye color of the person for whom you are searching?",chars).toLowerCase();
  var myResults = [];
  for (var i = 0; i < people.length; i++) {
    if (userInput === people[i].eyeColor) {
      myResults.push(people[i]);
    }
  }
  return myResults;
}

function searchById(people) {
    var userInput =  promptFor("What is the ID number of the person for whom you are searching?",chars);
    var userInputNumber = parseInt(userInput);
    var myResults = [];
    for (var i = 0; i < people.length; i++){
        if (userInputNumber === people[i].id){
            myResults.push(people[i]);
        }
    }
    return myResults;
}

function searchByWeight(people) {
  var userInput =  promptFor("In pounds, what is the weight of the person for whom you are searching?",chars);
  var userInputNumber = parseInt(userInput);
  var myResults = [];
  for (var i = 0; i < people.length; i++){
    if (userInputNumber === people [i].weight){
      myResults.push(people[i]);
    }
  }
  return myResults();
}

function searchByHeight(people) {
	var userInput =  promptFor("In inches, what is the height of the person for whom you are searching?",chars);
  var userInputNumber = parseInt(userInput);
	var myResults = [];
	for (var i = 0; i < people.length; i++){
		if (userInputNumber === people[i].height){
			myResults.push(people[i]);
		}
	}
	return myResults;
}

function searchByOccupation(people){
  var occupationInput = promptFor("What is the occupation of the person for whom you are searching?",chars).toLowerCase();
  var myResults = people.filter(function (el){
    if (el.occupation === occupationInput){
      return true;
    }
  });
   return myResults;
}

 function searchByGender(people) {
  var userInput =  promptFor("What is the gender of the person for whom you are searching?",chars).toLowerCase();
  var myResults = [];
  for (var i = 0; i < people.length; i++) {
    if (userInput === people[i].gender) {
      myResults.push(people[i]);
    }
  }
  return myResults;
}

function searchByAge(people){
 var inputAge = promptFor("In years, what is the age of the person for whom you are searching?", chars);
    var myResults = people.filter(function (el){
    var personsAge = getAge(el.dob);
     if (inputAge === personsAge){
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
      }
   return age.toString();
}
//end of search functions


// Menu function to call once you find who you are looking for
function mainMenu(person, people){


  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Sorry, there are no individuals with that name in the database.");
    return app(people); 
  }

  var displayOption = promptFor("Your search(es) have returned this person:"+ " " + person[0].firstName + " " + person[0].lastName + " . Would you like to view " + person[0].firstName + " " + person[0].lastName + "'s personal information, family, or descendants?  Enter your preference or enter 'restart' or 'quit'",chars).toLowerCase();

  switch(displayOption){
    case "information":
    displayPerson(person);
    break;
    case "family":
    listOfFamily(person, people);
    break;
    case "descendants":
    listOfDescendants(person[0], people);
    break;
    case "restart":
    app(people); 
    break;
    case "quit":
    return;
    default:
    return mainMenu(person, people); // ask again
  }
}

// alerts a list of people
function displayPeople(people, person){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}
  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

function displayPerson(person){
  var personsDOB = person[0].dob;
  var personsAge = getAge(personsDOB);
  var personInfo = "First Name: "+ " " + person[0].firstName + "\n";
  personInfo += "Last Name: "+ " " + person[0].lastName + "\n";
  personInfo += "Gender:"+ " " + person[0].gender + "\n"; 
  personInfo += "ID:" + " " + person[0].id + "\n"; 
  personInfo += "Age:" + " " + personsAge + "\n"; 
  personInfo += "Height:" + " " + person[0].height + "\n";
  personInfo += "Weight:"+ " " + person[0].weight + "\n";
  personInfo += "Eye Color:" + " " +person[0].eyeColor + "\n";
  personInfo += "Occupation:"+ " " + person[0].occupation + "\n";
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
	alert(children);
}
 
 function listOfFamily(person, people){
   var familyInfo = findSpouseNames (person, people);
   var parentsNames = findParentsNames (person, people);
   var childrenName = findChildrensNames (person, people);
   // var listOfSiblings = findSiblings(person, people);
   
   var familyInfo = spouseName + "\n" + parentsNames + "\n" + listOfChildren; // put listOfSibllings in when its working
   alert(familyInfo);
}

function findChildrensNames (person,people){
  var listOfChildren = listOfDescendants(person[0], people)
  if(listOfChildren.length === 0){
    return "No children in database"
  }
  else{
    return listOfChildren;
  }
}

function findSpouseNames (person, people){
  var spouseID = person[0].currentSpouse;
  if (spouseID){
  var listSpouse = findById(spouseID, people);
  var spouseName ="Spouse:" + listSpouse[0].firstName + " " + listSpouse[0].lastName;
  return spouseName;
  }
  else {
    return "No Spouse";
  }
}

function findById(person,people) {
    var myResults = [];
    for (var i = 0; i < people.length; i++){
        if (person === people[i].id){
            myResults.push(people[i]);
        }
    }
    return myResults;
}

function findParentsNames(person, people){
 var parentsID = person[0].parents;
 if (parentsID.length >= 2){
      var parent1 = findById(parentsID[0], people);
      var parent1Name = parent1[0].firstName + " " + parent1[0].lastName;
      var parent2 = findById(parentsID[1], people);
      var parent2Name = parent2[0].firstName + " " + parent2[0].lastName;
      var listOfParentNames = "Parents:" + " " + parent1Name + " " + "and" + " " + parent2Name;
      return listOfParentNames;
    }
      else if (parentsID.length === 1){
        var parent = findById(parentsID[0], people);
        var parentName = "Parents:" + " " + parent[0].firstName + " " + parent[0].lastName;
        return parentName;
      }
      else {
        return "No parents listed"
      }
}
// ///////////////////////////////////////////////////////siblings is below here///////
// function gathersSiblings(person, people){
//     var myResults = [];
//     for (var i = 0; i < people.length; i++){
//         if (person.id === people[i].parents){
//             myResults.push(people[i]);
//         }
//     }
//     return myResults;
// }

// function findSiblings(person,people){
//   var parent = person[0].parents;
//   if (parent.length === 2){
//   var parent1ID = findById(parent[0],people);
//   var sibling1 = gathersSiblings(parent1ID, people);
//   var parent2ID = findById(parent[1], people);
//   var sibling2 = gathersSiblings(parent2ID[0], people);
//   var totalSiblings = "Siblings:" + " " + sibling1 + " " + sibling2;
//   return totalSiblings;
//   }
//   else if (parent.length === 1){
//     var parentID = findById(parent[0], people);
//     var siblings = gathersSiblings(parentID, people);
//     var listOfSiblings = "Siblings:" + " " + siblings;
//       if(siblings.length === 0){
//         return "No siblings in database"
//       }
//       else{
//         return listOfSiblings;
//       }
//   }
//   else{
//   return "No siblings in database"
//   }
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

