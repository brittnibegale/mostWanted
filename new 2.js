
  function searchById(people) {
  var userInput =  promptFor("What is the ID number of the person for whom you are searching?");
  var findPeople = [];
  for (var i = 0; i < people.length; i++){
    if (userInput === people [i].id){
      myResults.push(people[i]);
    }
  }
  return myResults;
}