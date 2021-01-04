function addName() {
  //take the valuee from input
  const textElFood = document.getElementById("text-box");
  const textElCal = document.getElementById("text-cal");

  const textValueFood = textElFood.value;
  const textValueCal = textElCal.value;

  //store the input values in a ul and //create a listItem to each input value
  const FoodCalList = document.getElementById("names");
  const newLiItem = document.createElement("li");
  //display food and calories together
  newLiItem.textContent = `${textValueFood} - ${textValueCal}`;
  //add a class and id to each item of list to use to get the elements by sorted by id
  newLiItem.className = "listItem"; //maybe should use classList
  newLiItem.setAttribute = ("id", `${textValueCal}`);

  //add sort function here please see my try in the end)

  //apend each item list (newLiItem) to the list (FoodCalList)
  FoodCalList.appendChild(newLiItem);
  // keep the placeholders clean after each addition
  textElFood.value = "";
  textElCal.value = "";
}


//trying to sort by id - but I couldn't get done with node/collection
var numbers = [];
var arrayItem = newLiItem.getElementById(`${textValueCal}`);
numbers.push = arrayItem;
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);
