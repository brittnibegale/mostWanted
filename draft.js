function searchByEyeColor() {
var searchByEyeColor;
var eyeColor;
var informationForSearch;
var userInput = informationForSearch;
userInput = prompt ("Would you like to search by eye color? Enter 'yes' or 'no.'").toLowerCase();
	if (userInput !== "yes" && userInput !== "no") {
		userInput = prompt ("Do you know the eye color of the person for whom you are seaching? Enter 'yes' or 'no'.").toLowerCase();
	}
	else if (userInput === "no"){
	}//new search criteria
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
}
searchByEyeColor();


function searchByWeight(people) {
var searchByWeight;
var weight;
var informationForSearch;
var userInput = informationForSearch

userInput = prompt ("In pounds, how much does the person for whom you are searching weigh?").toLowerCase();

// get the weight to search for/
// check userInput against the weight of each person
var foundPeople = [];
for (var i = 0; i < people.length; i++) {
	if (userInput === people[i].weight) {
		foundPeople.push(people[i]);
	}
}

var foundPeople = people.filter(function (el) {
	if(userInput === el.weight) {
		return true;
	}
});


function searchByWeight() {
var searchByWeight;
var weight;
var informationForSearch;
var userInput = informationForSearch

userInput = prompt ("In pounds, how much does the person for whom you are searching weigh?").toLowerCase();
	if (userInput === "175") {
		console.log("One result found");
		userInput = prompt ("Are you searching for ? Enter 'yes' or 'no'").toLowerCase();
		if (userInput === "yes") //to profile
		else if (userInput === "no") prompt ("Would you like to try searching by weight again? Enter 'yes' or 'no'");
			if (userInput === "yes") //loop
			else if (userInput === "no") //new search  criteria
	else if (userInput === "162") {
		console.log("One result found");
		userInput = prompt ("Are you searching for ? Enter 'yes' or 'no'").toLowerCase();
		if (userInput === "yes") //to profile
		else if (userInput === "no") prompt ("Would you like to try searching by weight again? Enter 'yes' or 'no'");
			if (userInput === "yes") //loop
			else if (userInput === "no") //new search  criteria
	else if (userInput === "250") {
		console.log("One result found");
		userInput = prompt ("Are you searching for ? Enter 'yes' or 'no'").toLowerCase();
		if (userInput === "yes") //to profile
		else if (userInput === "no") prompt ("Would you like to try searching by weight again? Enter 'yes' or 'no'");
			if (userInput === "yes") //loop
			else if (userInput === "no") //new search  criteria
	else if (userInput === "115") {
		console.log("One result found");
		userInput = prompt ("Are you searching for ? Enter 'yes' or 'no'").toLowerCase();
		if (userInput === "yes") //to profile
		else if (userInput === "no") prompt ("Would you like to try searching by weight again? Enter 'yes' or 'no'");
			if (userInput === "yes") //loop
			else if (userInput === "no") //new search  criteria
	else if (userInput === "207") {
		console.log("One result found");
		userInput = prompt ("Are you searching for ? Enter 'yes' or 'no'").toLowerCase();
		if (userInput === "yes") //to profile
		else if (userInput === "no") prompt ("Would you like to try searching by weight again? Enter 'yes' or 'no'");
			if (userInput === "yes") //loop
			else if (userInput === "no") //new search  criteria
	else if (userInput === "256") {
		console.log("One result found");
		userInput = prompt ("Are you searching for ? Enter 'yes' or 'no'").toLowerCase();
		if (userInput === "yes") //to profile
		else if (userInput === "no") prompt ("Would you like to try searching by weight again? Enter 'yes' or 'no'");
			if (userInput === "yes") //loop
			else if (userInput === "no") //new search  criteria
	else if (userInput === "170") {
		console.log("One result found");
		userInput = prompt ("Are you searching for ? Enter 'yes' or 'no'").toLowerCase();
		if (userInput === "yes") //to profile
		else if (userInput === "no") prompt ("Would you like to try searching by weight again? Enter 'yes' or 'no'");
			if (userInput === "yes") //loop
			else if (userInput === "no") //new search  criteria
	else if (userInput === "137") {
		console.log("One result found");
		userInput = prompt ("Are you searching for ? Enter 'yes' or 'no'").toLowerCase();
		if (userInput === "yes") //to profile
		else if (userInput === "no") prompt ("Would you like to try searching by weight again? Enter 'yes' or 'no'");
			if (userInput === "yes") //loop
			else if (userInput === "no") //new search  criteria
	else if (userInput === "199") {
		console.log("One result found");
		userInput = prompt ("Are you searching for ? Enter 'yes' or 'no'").toLowerCase();
		if (userInput === "yes") //to profile
		else if (userInput === "no") prompt ("Would you like to try searching by weight again? Enter 'yes' or 'no'");
			if (userInput === "yes") //loop				
			else if (userInput === "no") //new search  criteria
	else if (userInput === "205") {
		console.log("One result found");
		userInput = prompt ("Are you searching for Ralph Bob? Enter 'yes' or 'no'").toLowerCase();
		if (userInput === "yes") //to profile
		else if (userInput === "no") prompt ("Would you like to try searching by weight again? Enter 'yes' or 'no'");
			if (userInput === "yes") //loop
			else if (userInput === "no") //new search  criteria
	else if (userInput === "118") {
		console.log("One result found");
		userInput = prompt ("Are you searching for Jasmine Bob? Enter 'yes' or 'no'").toLowerCase();
		if (userInput === "yes") //to profile
		else if (userInput === "no") prompt ("Would you like to try searching by weight again? Enter 'yes' or 'no'");
			if (userInput === "yes") //loop
			else if (userInput === "no") //new search  criteria
	else if (userInput === "179") {
		console.log("One result found");
		userInput = prompt ("Are you searching for Ralph Bob? Enter 'yes' or 'no'").toLowerCase();
		if (userInput === "yes") //to profile
		else if (userInput === "no") prompt ("Would you like to try searching by weight again? Enter 'yes' or 'no'");
			if (userInput === "yes") //loop
			else if (userInput === "no") //new search  criteria
	else if (userInput === "156") {
		console.log("One result found");
		userInput = prompt ("Are you searching for Jasmine Bob? Enter 'yes' or 'no'").toLowerCase();
		if (userInput === "yes") //to profile
		else if (userInput === "no") prompt ("Would you like to try searching by weight again? Enter 'yes' or 'no'");
			if (userInput === "yes") //loop
			else if (userInput === "no") //new search  criteria
	else if (userInput === "235") {
		console.log("One result found");
		userInput = prompt ("Are you searching for Annie Pafoy? Enter 'yes' or 'no'").toLowerCase();
		if (userInput === "yes") //to profile
		else if (userInput === "no") prompt ("Would you like to try searching by weight again? Enter 'yes' or 'no'");
			if (userInput === "yes") //loop
			else if (userInput === "no") //new search  criteria
	else if (userInput === "112") {
		console.log("One result found");
		userInput = prompt ("Are you searching for Dave Pafoy? Enter 'yes' or 'no'").toLowerCase();
		if (userInput === "yes") //to profile
		else if (userInput === "no") prompt ("Would you like to try searching by weight again? Enter 'yes' or 'no'");
			if (userInput === "yes") //loop
			else if (userInput === "no") //new search  criteria
	else if (userInput === "184") {
		console.log("One result found");
		userInput = prompt ("Are you searching for Amii Pafoy? Enter 'yes' or 'no'").toLowerCase();
		if (userInput === "yes") //to profile
		else if (userInput === "no") prompt ("Would you like to try searching by weight again? Enter 'yes' or 'no'");
			if (userInput === "yes") //loop
			else if (userInput === "no") //new search  criteria
	else if (userInput === "249") {
		console.log("One result found");
		userInput = prompt ("Are you searching for Regina Madden? Enter 'yes' or 'no'").toLowerCase();
		if (userInput === "yes") //to profile
		else if (userInput === "no") prompt ("Would you like to try searching by weight again? Enter 'yes' or 'no'");
			if (userInput === "yes") //loop
			else if (userInput === "no") //new search  criteria
	else if (userInput === "187") {
		console.log("One result found");
		userInput = prompt ("Are you searching for Hana Madden? Enter 'yes' or 'no'").toLowerCase();
		if (userInput === "yes") //to profile
		else if (userInput === "no") prompt ("Would you like to try searching by weight again? Enter 'yes' or 'no'");
			if (userInput === "yes") //loop
			else if (userInput === "no") //new search  criteria
	else if (userInput === "241") {
		console.log("One result found");
		userInput = prompt ("Are you searching for Eloise Madden? Enter 'yes' or 'no'").toLowerCase();
		if (userInput === "yes") //to profile
		else if (userInput === "no") prompt ("Would you like to try searching by weight again? Enter 'yes' or 'no'");
				if (userInput === "yes") //loop
				else if (userInput === "no") //new search  criteria
	else if (userInput === "110") {
		console.log("One result found");
		userInput = prompt ("Are you searching for Mattias Madden? Enter 'yes' or 'no'").toLowerCase();
		if (userInput === "yes") //to profile
		else if (userInput === "no") prompt ("Would you like to try searching by weight again? Enter 'yes' or 'no'");
			if (userInput === "yes") //loop
			else if (userInput === "no") //new search  criteria
	else if (userInput === "100") {
		console.log("Two results found");
		userInput = prompt ("Are you searching for Joey Madden? Enter 'yes' or 'no'").toLowerCase();
			if (userInput === "yes") //to profile
			else if (userInput === "no") prompt ("Are you searching for Ellen Madden? Enter 'yes' or 'no'").toLowerCase();
				if (userInput === "yes") //to profile
				else if (userInput === "no") prompt ("Would you like to try searching by weight again? Enter 'yes' or 'no'");
					if (userInput === "yes") //loop
					else if (userInput === "no") //new search  criteria
				
	else {
		console.log("No results found";)
		userInput = prompt ("Would you like to try searching by weight again? Enter 'yes' or 'no'");
		if (userInput === "yes") //loop
		else if (userInput === "no") //new search criteria
		else (userInput !== "yes" && userInput !== "no") //loop
	}
searchByWeight();
		
		