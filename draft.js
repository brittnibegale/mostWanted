function searchByEyeColor(people) {
  var userInput =  prompt ("What is the eye color of the person for whom you are searching?").toLowerCase();
  var findPeople = [];
  for (var i = 0; i < people.length; i++) {
    if (userInput === people[i].eyeColor) {
      findPeople.push(people[i]);
    }
  }
  return findPeople;
}

function searchByWeight(people) {
  var userInput =  prompt ("In pounds, what is the weight of the person for whom you are searching?");
  var findPeople = [];
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

