// 1. Student object with properties : name and studentID
// 2. Create an array of those student objects
// 3. Write a program that fetches a random student from an array of student objects

var students = {
  name: "John",
  id: "Jo12",
};

const student1 = {
  name: "Gerry",
  id: 123,
};
const student2 = {
  name: "Terry",
  id: 152,
};
const student3 = {
  name: "Mary",
  id: 144,
};
const student4 = {
  name: "Larry",
  id: 154,
};

const studentsArray = [student1, student2, student3, student4];
var random = studentsArray[Math.floor(Math.random() * studentsArray.length)];
console.log(random);
