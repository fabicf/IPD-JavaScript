function addName() {
  //take the value from input
  const textEl = document.getElementById("text-box");
  const textValue = textEl.value;

  //store the input values in a ul
  const namesList = document.getElementById("names");
  //create a listItem to each input value
  const newLiItem = document.createElement("li");
  //newLiItem.textContent = textValue;
  const newCheckbox = document.createElement("input");
  newCheckbox.type = "checkbox";
  const newLabel = document.createElement("label");
  newLabel.textContent = textValue;
  //add a class to each item of list to use to get the elements by class name in randomName()
  newLiItem.className = "studentName";
  //apend each item list (newLiItem) to the list (namesList)
  namesList.appendChild(newLiItem);
  newLiItem.appendChild(newCheckbox);
  newLiItem.appendChild(newLabel);
  // keep the placeholder clean after each addition
  textEl.value = "";
}

function randomName() {
  //get the how many elements are in the studentName class - collection length
  const studentsNumber = document.getElementsByClassName("studentName").length;
  //math random with the total number os students
  const randomStudentName = [Math.floor(Math.random() * studentsNumber)];
  //get the div where random student will be displayed
  const randomStudent = document.getElementById("randomNames");
  //replace the blank html by the random student - I know I should createdElement by I wanted to keep the innerHTML as a example
  randomStudent.innerHTML = document.getElementsByClassName("studentName")[
    randomStudentName
  ].textContent;
}
