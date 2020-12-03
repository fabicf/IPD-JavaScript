console.log("Just trying console log");

//logical operators

//AND &&
var foo = 5;
var bar = 10;

if (foo > 2 && bar > 15) {
  console.log("AND conditition is true");
} else {
  console.log("AND condition id false");
}

// OR - ||
if (foo > 2 || bar > 15) {
  console.log("OR conditition is true");
} else {
  console.log("OR condition id false");
}

// NOT - !

var num = 6;
if (!(num == 6)) {
  console.log("I am in true section");
} else {
  console.log("I am in false section");
}

//examples
!num == 6;

num1 = 5;

num2 = 2;

isNum = true;

//example 3

var number = 15;

if (0 === number % 5 && 0 === number % 3) {
  console.log("true");
} else {
  console.log("false");
}

console.log("===================");
var full = null; // false
foo = 0; // false
foo = undefined; // false
foo = ""; //false
foo = -5; //false
if (foo) {
  console.log("true");
} else {
  console.log("false");
}
