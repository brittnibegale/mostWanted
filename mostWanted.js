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



function searchByTrait(people){
  var seachByTraitUserInput = promptFor("Which trait would you like to search by? eye color or gender or weight or height or occupation or age", chars).toLowerCase();
  var traitInformation = [];// ask if this should be an array or just an open variable
  switch(seachByTraitUserInput){
    case 'eye color':
      if (searchByEyeColor === true){
      traitInformation = searchByEyeColor(people);
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
      traitInformation = searchByWeight(people);
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
      traitInformation = searchByHeight(people);
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
     traitInformation = searchByOccupation(people);
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
     traitInformation = searchByAge(people);
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
    case 'gender':
      if (searchByGender === true){
        traitInformation = searchByGender(people);
      } 
        else {
          var notAGender = promptFor ("That was not a gender that matched a person in our database. Would you like ot re-try entering the person's gender? yes or no", yesNo).toLowerCase();
          if (notAGender === 'yes'){
            searchByGender(people);
          }
            else {
              searchByTrait(people);
            }
        }
    default:
    var nextTraitSearch = prompt("Would you like to keep searching traits? yes or no", yesNo).toLowerCase();
      if (nextTraitSearch === "yes"){
        searchByTrait(traitInformation);
      }
      else{
        mainMenu(traitInformation, people);
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
	for (var i = 0; i < people.length; i++){
		if (userInput === people[i].height){
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

function matchAge(dob){
   var personsAge = getAge();
   if (personsAge == searchByAge()){
     return true;
   }
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
    // TODO: get person's family
    break;
    case "descendants":
    listOfDescendants(people);
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
    // TODO: get person's family
    break;
    case "descendants":
    listOfDescendants(people);
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



 


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 