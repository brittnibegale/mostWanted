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