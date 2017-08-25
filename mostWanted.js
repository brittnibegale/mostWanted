"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'"., yesNo).toLowerCase();
  if (userEntry !== "yes" && !== "no"){
    userEntry = prompt ("Do you know the name of the person you are looking for? Please enter 'yes' or 'no'.").toLowerCase();
  }
  switch(searchType){
    case 'yes':
    searchByName(people);//TODO: search by name
    break;
    case 'no':
    age();
    break;
    default:
    app(people); // restart app
    break;
  }
}


function searchByEyeColor() {
var searchByEyeColor;
var informationForSearch;
var userInput = informationForSearch;
userInput = prompt ("Would you like to search by eye color? Enter 'yes' or 'no.'").toLowerCase();
	if (userInput !== "yes" && userInput !== "no") {
		userInput = prompt ("Do you know the eye color of the person for whom you are seaching? Enter 'yes' or 'no'.").toLowerCase();
	}
	else if (userInput === "yes") {
		var eyeColor = prompt ("Are the person's eyes black, blue, brown, green, or hazel?").toLowerCase(); 
		while (eyeColor === "Brown") {
		console.log("Searching for people with brown eyes");
		} //next prompt or name choices
		if (eyeColor === "Black") {
		console.log("Searching for people with black eyes");
		} //next prompt or name choies
		else if (eyeColor === "Blue") {
		console.log("Searching for people with blue eyes");
		} //next prompt or name choices
		else if (eyeColor === "Green") {
		console.log("Searching for people with green eyes");
		} //next prompt or name choices
		else if (eyeColor === "Hazel") {
		console.log("Searching for people with hazel eyes");
		} //next prompt or name choices
	else if (userInput === "no") {
	} //next prompt or name choices
	}
}
searchByEyeColor();



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




function doTheyKnowOccupationObject (){

	var occupationUserInput = prompt("Do you know their occupation?").toLowerCase();
		yesNo(occupationUserInput);
	
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
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

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);
	
	people.filter(function (el)){
	if (el.firstName === firstName && el.lastName === lastName){
		return firstName && lastName;
	}
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

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
}
dataBaseRun();