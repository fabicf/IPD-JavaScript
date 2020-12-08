// 1. Student object with properties : name and studentID
// 2. Create an array of those student objects
// 3. Write a program that fetches a random student from an array of student objects

const student1 = {
  name: "John",
  studentID: "J4345489",
};
const student2 = {
  name: "Doe",
  studentID: "D4343513",
};
const student3 = {
  name: "Teo",
  studentID: "T13163164",
};
const student4 = {
  name: "Anna",
  studentID: "A34136434",
};
const student5 = {
  name: "Julia",
  studentID: "J5331644",
};

const myArray = [student1, student2, student3, student4, student5];
var random = myArray[Math.floor(Math.random() * myArray.length)];

console.log(random);
