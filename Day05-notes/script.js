// forEach

const students = ["John", "Jane", "Tom"];

//method 1 - regular loops
console.log("================ 1 =========");
for (let i = 0; i < students.length; i++) {
  console.log("******************");
  console.log(`welcome ${students[i]}`);
  console.log("******************");
}

//method 2 - passing a function
console.log("============= 2 ==========");
function myPrinter(students) {
  console.log("******************");
  console.log(`welcome ${students}`);
  console.log("******************");
}

students.forEach(myPrinter);

//method 3 - annonumous function
console.log("============= 3 ==========");
students.forEach(function (students) {
  console.log("******************");
  console.log(`welcome ${students}`);
  console.log("******************");
});
