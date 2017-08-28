"use strict"
/*
Build all of your functions for displaying and gathering information below 
*/

// // app is the function called to start the entire application
// //function app(people){
//   //var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
//   //if (userEntry !== "yes" && userEntry !== "no"){
//     //userEntry = prompt ("Do you know the name of the person you are looking for? Please enter 'yes' or 'no'.").toLowerCase();
//   }//why do we have two of these statements "do you know the name....?"?
//   //switch(searchType){
//     //case 'yes':
//     //searchByName(people);//TODO: search by name
//     //break;
//     //case 'no':
//     //doTheyKnowOccupationObject();
//     //break;
//     //default:
//     app(people); // restart app
//     break;
//   }
// }
// app is the function called to start the entire application
// function app(people){
//   var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
//     switch(searchType){
//     case 'yes':
//     var name = searchByName(people);
//     if (name === true){
//     console.log(name);
//     }
//     else{
//       alert("That was not a name person in our database. Let's try searching by traits.")
//       searchByTrait(people);
//     }
//     break;
//     case 'no':
//     searchByTrait(people);
//     break;
//     default:
//     app(people); // restart app
//     break;
//   }
// }

// function searchByName(people){
//   var firstName = promptFor("What is the person's first name?", chars).toUpperCase(0);
//   var lastName = promptFor("What is the person's last name?", chars).toUpperCase(0);
//   var myResult = people.filter(function (el)){
//   if (el.firstName === firstName && el.lastName === lastName){
//     return true; 
//   }
//   return myResult;
// }

  var myResult = people.filter(function (el){
  if (el.firstName === firstName && el.lastName === lastName){
    return true; 
  }
  return myResult;
  });
}

function searchByTrait(people){
  var seachByTraitUserInput = promptFor("Which trait would you like to search by? eye color or weight or height or occupation or age", chars).toLowerCase();
  var passingInformation;
  switch(seachByTraitUserInput){
    case 'eye color':
    passingInformation = searchByEyeColor(people);
    break;
    case 'weight':
    var personsWeight = searchByWeight(people);
    break;
    case 'height':
    var personsHeight = searchByHeight(people);
    break;
    case 'occupation': 
    var personsOccupation = searchByOccupation(people);
    break;
    case 'age': 
    var personsAge = seachByAge(people);
    break;
    default:
    searchByTrait(people);
    break;
  }

}

// function searchByTrait(people){
//   var seachByTraitUserInput = promptFor("Which trait would you like to search by? eye color or weight or height or occupation or age", chars).toLowerCase();
//   switch(seachByTraitUserInput){
//     case 'eye color':
//     var personsEyeColor = searchByEyeColor(people);
//     break;
//     case 'weight':
//     var personsWeight = searchByWeight(people);
//     break;
//     case 'height':
//     var personsHeight = searchByHeight(people);
//     break;
//     case 'occupation' 
//     var personsOccupation = searchByOccupation(people);
//     break;
//     case 'age' 
//     var personsAge = seachByAge(people);//remember to change age to this 
//     break;
//     default:
//     searchByTrait(people);
//     break;
//   }
// }

// function searchByEyeColor(people) {
// 	var userInput =  prompt ("What is the eye color of the person for whom you are searching?");

// 	var findPeople = [];
// 	for (var i = 0; i < people.length; i++) {
// 		if (userInput === people[i].eyeColor) {
// 			findPeople.push(people[i]);
// 		}
// 	}
// 	return findPeople;
// }

// searchByEyeColor();
// }


// function searchByWeight(people) {
// 	var userInput =  prompt ("In pounds, what is the weight of the person for whom you are searching?");
// }

function ageSearch(people){
  var inputAge = prompt("Please type the person's age.", chars).toLowerCase();
  var theResults = people.filter(function(el){
    var personAge = getAge(el.dob);
    if (personAge === inputAge){
      return true;
    } 
  });
  console.log(theResults);
  return theResults;
} 
ageSearch();

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

function matchAge(dob){
    var personsAge = getAge();
    if (personsAge == doYouKnowAge()){
      return true;
    }
}

// 	var findPeople = [];
// 	for (var i = 0; i < people.length; i++) {
// 		if (userInput === people[i].weight) {
// 			findPeople.push(people[i]);
// 		}
// 	}
// 	return findPeople;
// }

searchByHeight ();
function searchByWeight(people) {
	var userInput =  prompt ("In pounds, what is the weight of the person for whom you are searching?");
  var findPeople = [];
  for (var i = 0; i < people.length; i++){
    if (userInput === people [i].weight){
      findPeople.push(people[i]);
    }
  }
  return findPeople;
}


function searchByHeight(people) {
	var userInput =  prompt ("In inches, what is the height of the person for whom you are searching?");

	var findPeople = [];
	for (var i = 0; i < people.length; i++) {
		if (userInput === people[i].height) {
			findPeople.push(people[i]);
		}
	}
	return findPeople;
}

function searchByOccupation(people){
  var occupationInput = promptFor("What is their occupation?", chars).toLowerCase();
  var myResults = people.filter(function (el){
  if (el.occupation === occupationInput){
    return true;// where is this returning to?
  }
});
}
// Menu function to call once you find who you are looking for

function doTheyKnowTheirHeight (){
  var heightYesNoUserInput = promptFor("Do you know their height in inches? yes or no");
  var heightYesNo = yesNo(heightYesNoUserInput);

  if (heightYesNo === "yes"){
    comparingUserInputHeightToData ();
  }
  else {
    //enter in function that prompts for next question
  }
}

function comparingUserInputHeightToData (){
   var heightInput = promptFor("What is their height in inches? Whole numbers only please.");

   people.filter(function (el){
  if (el.height === heightInput){

    return true;
  }
  return myResults;
});}

function searchByAge(people){
 var inputAge = prompt("Please type the person's age.", chars).toLowerCase();
 var theResults = people.filter(function(el){
   var personAge = getAge(el.dob);
   if (personAge === inputAge){
     return true;
   }
 });
 console.log(theResults);
 return theResults;
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

// function dataBaseRun(){
//   app(people);
//   var myReslut = people.filter(function (el){[]}


// dataBaseRun();