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

