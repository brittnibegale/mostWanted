"use strict"
/*
Build all of your functions for displaying and gathering information below 
*/

// app is the function called to start the entire application
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
              searchByName(people)
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
    app(people); // restart app
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

//////////////////////////////////////////////////////////////////////////////////////////////////////

function searchByTrait(people){
  var seachByTraitUserInput = promptFor("Which trait would you like to search by? eye color or weight or height or occupation or age", chars).toLowerCase();
  var newTraitInformation;
  switch(seachByTraitUserInput){
    case 'eye color':
      if (searchByEyeColor === true){
      newTraitInformation = searchByEyeColor(people);
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
    if (searchByWeight === true){
      newTraitInformation = searchByWeight(people);
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
    if (searchByHeight === true){
      newTraitInformation = searchByHeight(people);
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
    if (searchByOccupation === true){
     newTraitInformation = searchByOccupation(people);
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
    if (searchByAge === true){
     newTraitInformation = searchByAge(people);
      }
      else {
        var notAnAge = promptFor("That was not an age that matched a person in our database. Would you like to re-try entering the person's age? yes or no", yesNo).toLowerCase();
          if (notAnAge === 'yes'){
            searchByAge(people);
          }
            else{
              searchByTrait(people);
            }
      }
    break;
    default:
    var nextTraitSearch = prompt("Would you like to keep searching traits? yes or no", yesNo).toLowerCase();
      if (nextTraitSearch === "yes"){
        searchByTrait(newTraitInformation);
      }
      else{
        //is this where you print
      }
    break;
  }
}

function searchByEyeColor(people) {
	var userInput =  prompt ("What is the eye color of the person for whom you are searching?");

	var myResults = [];
	for (var i = 0; i < people.length; i++) {
		if (userInput === people[i].eyeColor) {
			myResults.push(people[i]);
		}
	}
	return myResults;
}

function searchByWeight(people) {
	var userInput =  prompt ("In pounds, what is the weight of the person for whom you are searching?");
  var myResults = [];
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
	for (var i = 0; i < people.length; i++) {
		if (userInput === people[i].height) {
			myResults.push(people[i]);
		}
	}
	return myResults;
}

function searchByOccupation(people){
  var occupationInput = promptFor("What is their occupation?", chars).toLowerCase();
  var myResults = people.filter(function (el){
  if (el.occupation === occupationInput){
    return true;
  }
  });
   return myResults;
}

function searchByAge(people){
 var inputAge = prompt("Please type the person's age.", chars).toLowerCase();
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
//    if (personsAge == searchByAge()){
//      return true;
//    }
// }
////////////////////////////////////////////////////////////////////////

// Menu function to call once you find who you are looking for
// function mainMenu(person, people){

//   /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

//   if(!person){
//     alert("Could not find that individual.");
//     return app(people); // restart
//   }

//   var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

//   switch(displayOption){
//     case "info":
//     // TODO: get person's info
//     break;
//     case "family":
//     // TODO: get person's family
//     break;
//     case "descendants":
//     // TODO: get person's descendants
//     break;
//     case "restart":
//     app(people); // restart
//     break;
//     case "quit":
//     return; // stop execution
//     default:
//     return mainMenu(person, people); // ask again
//   }
// }

// // alerts a list of people
// function displayPeople(people){
//   alert(people.map(function(person){
//     return person.firstName + " " + person.lastName;
//   }).join("\n"));
// }

// function displayPerson(person){
//   // print all of the information about a person:
//   // height, weight, age, name, occupation, eye color.
//   var personInfo = "First Name: " + person.firstName + "\n";
//   personInfo += "Last Name: " + person.lastName + "\n";
//   // TODO: finish getting the rest of the information to display
//   alert(personInfo);
// }

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}



 

