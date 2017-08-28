"use strict"
/*
Build all of your functions for displaying and gathering information below 
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  if (userEntry !== "yes" && userEntry !== "no"){
    userEntry = prompt ("Do you know the name of the person you are looking for? Please enter 'yes' or 'no'.").toLowerCase();
  }//why do we have two of these statements "do you know the name....?"?
  switch(searchType){
    case 'yes':
    searchByName(people);//TODO: search by name
    break;
    case 'no':
    doTheyKnowOccupationObject();
    break;
    default:
    app(people); // restart app
    break;
  }
}

<<<<<<< HEAD
// function searchByEyeColor() {
// var searchByEyeColor;
// var eyeColor;

// var informationForSearch;
// var userInput = informationForSearch;
// userInput = prompt ("Would you like to search by eye color? Enter 'yes' or 'no.'").toLowerCase();
// 	if (userInput !== "yes" && userInput !== "no") {
// 		userInput = prompt ("Do you know the eye color of the person for whom you are seaching? Enter 'yes' or 'no'.").toLowerCase();
// 	}
// 	else if (userInput === "no"){
// 	}//new search criteria
// 	else if (userInput === "yes") {
// 		var eyeColor = prompt ("Are the person's eyes black, blue, brown, green, or hazel?").toLowerCase(); 
// 		while (eyeColor === "Brown") {
// 		console.log("Searching for people with brown eyes");
// 		} //next prompt or name choices
// 		if (eyeColor === "Black") {
// 		console.log("Searching for people with black eyes");
// 		} //next prompt or name choies
// 		else if (eyeColor === "Blue") {
// 		console.log("Searching for people with blue eyes");
// 		} //next prompt or name choices
// 		else if (eyeColor === "Green") {
// 		console.log("Searching for people with green eyes");
// 		} //next prompt or name choices
// 		else if (eyeColor === "Hazel") {
// 		console.log("Searching for people with hazel eyes");
// 		} //next prompt or name choices
// }
// searchByEyeColor();




// function doYouKnowAge(dob){ 
//   var ageSearch = dob.split("/");
//   var yearBorn = "";
//   var age = ageSearch[2];
//   var usersCall = searchInfo;
//   usersCall = prompt("Do you want to search by age? Please enter 'Yes' or 'No'.").toLowerCase();
//     if (usersCall !== "Yes" !== "No"){
//       userCall = prompt("Have you any idea of how old the person is? Pleae enter 'Yes' or 'No'.").toLowerCase();
//     }
//     else if (usersCall == "Yes"){
//       var birthYear = prompt("Can you give an idea of when the person was born?").toLowerCase();
//       while (birthYear <== "1940"){
//       console.log("Returning people born before 1940");
//       }
//       if (birthYear <== "1950"){
//       console.log("Returning people born between 1940 and 1950");
//       }
//       else if (birthYear <== "1960"){
//       console.log("Returning people born between 1950 and 1960");
//       }
//       else if (birthYear <== "1970"){
//       console.log("Returning people born between 1960 and 1970");
//       }
//       else if (birthYear <== "1980"){
//       console.log("Returning people born between 1970 and 1980");
//       }
//       else if (birthYear <=="1990"){
//       console.log("Returning people born between 1980 and 1990");
//       }
//     else if (usersCall == "No"){
//     }

//     }// fix braket error here
//     return age;
// }
// //why dont we just use filter on this?
// doYouKnowAge();// we should try and figure out a differnt way to call this other than a global call for each
=======


























function searchByEyeColor(people) {
	var userInput =  prompt ("What is the eye color of the person for whom you are searching?");

	var findPeople = [];
	for (var i = 0; i < people.length; i++) {
		if (userInput === people[i].eyeColor) {
			findPeople.push(people[i]);
		}
	}
	return findPeople;
}

searchByEyeColor();
}


function searchByWeight(people) {
	var userInput =  prompt ("In pounds, what is the weight of the person for whom you are searching?");

	var findPeople = [];
	for (var i = 0; i < people.length; i++) {
		if (userInput === people[i].weight) {
			findPeople.push(people[i]);
		}
	}
	return findPeople;
}

searchByHeight ();
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

searchByHeight();


function doYouKnowAge(dob){
  var ageSearch = dob.split("/");
  var yearBorn = "";
  var age = ageSearch[2];
  var usersCall = searchInfo;
  usersCall = prompt("Do you want to search by age? Please enter 'Yes' or 'No'.").toLowerCase();
    if (usersCall !== "Yes" !== "No"){
      userCall = prompt("Have you any idea of how old the person is? Pleae enter 'Yes' or 'No'.").toLowerCase();
    }
    else if (usersCall == "Yes"){
      var birthYear = prompt("Can you give an idea of when the person was born?").toLowerCase();
      while (birthYear <== "1940"){
      console.log("Returning people born before 1940");
      }
      if (birthYear <== "1950"){
      console.log("Returning people born between 1940 and 1950");
      }
      else if (birthYear <== "1960"){
      console.log("Returning people born between 1950 and 1960");
      }
      else if (birthYear <== "1970"){
      console.log("Returning people born between 1960 and 1970");
      }
      else if (birthYear <== "1980"){
      console.log("Returning people born between 1970 and 1980");
      }
      else if (birthYear <=="1990"){
      console.log("Returning people born between 1980 and 1990");
      }
    else if (usersCall == "No"){
    }

    }
    return age;
}
doYouKnowAge();
>>>>>>> 3206e72bb3a34713a155ca9855fec9e4cac797a7




function doTheyKnowOccupationObject (){
	var occupationYesNoUserInput = promptFor("Do you know their occupation? yes or no", chars);
	var occupationYesNo = yesNo(occupationYesNoUserInput);

  if (occupationYesNo === "yes"){
    comparingUserInputOccupationToData();
  }

  else{
    // enter in function that prompts for next question
  }
	
}

function comparingUserInputOccupationToData (){
  var occupationInput = promptFor("What is their occupation?", chars).toLowerCase();
// do I need to send it to promptFor?
    people.filter(function (el){
  if (el.occupation === occupationInput){
    return true;// where is this returning to?
  }

//  how do I do an else statement that will re-prompt or alert !people or is it only at the end of building the "person" that we alert not a person
});
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
  if (el.height === occupationInput){
    return true;
  }
});



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

// function searchByName(people){
//   var firstName = promptFor("What is the person's first name?", chars);
//   var lastName = promptFor("What is the person's last name?", chars);
	
// 	people.filter(function (el)){
// 	if (el.firstName === firstName && el.lastName === lastName){
// 		return true; //where is this returning to?
// 	}
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

function dataBaseRun(){
  app(people);
  var myReslut = people.filter(function (el){[]}

}
dataBaseRun();