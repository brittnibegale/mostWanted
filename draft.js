
function searchByEyeColor() {
var searchByEyeColor;
var informationForSearch
var userInput = informationForSearch;
userInput = prompt ("Would you like to search by eye color? Enter 'yes' or 'no.'").toLowerCase();
	if (userInput !== "yes" && userInput !== "no") {
		userInput = prompt ("Do you know the eye color of the person for whom you are seaching? Enter 'yes' or 'no'.").toLowerCase();
	}
	else if (userInput === "yes") {
		var eyeColor = prompt ("Are the person's eyes black, blue, brown, green, or hazel?").toLowerCase(); 
		while (eyeColor === "Brown") {
		console.log("Searching for people with brown eyes");
		}
		if (eyeColor === "Black") {
		console.log("Searching for people with black eyes");
		}
		else if (eyeColor === "Blue") {
		console.log("Searching for people with blue eyes");
		}
		else if (eyeColor === "Green") {
		console.log("Searching for people with green eyes");
		}
		else if (eyeColor === "Hazel") {
		console.log("Searching for people with hazel eyes");
		}
	else if (userInput === "no") {
	} //next prompt
	}
}
searchByEyeColor();
	

	
		