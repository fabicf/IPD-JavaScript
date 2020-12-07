// accepts no parameters! parentheses are empty
// declares the sayHello function
function sayHello() {
  var message = "Hello!";
  return message;
  //console.log(message);
}

console.log(sayHello());

function isThisWorking(input) {
  console.log(
    "Printing: isThisWorking was called and " +
      input +
      " was passed in as an argument."
  );
  return "Returning: I am returning this string!";
}

isThisWorking(3);
// returns the sum of two numbers
function add(x, y) {
  return x + y;
}

// returns the value of a number divided by 2
function divideByTwo(num) {
  return num / 2;
}

var sum = add(8, 6); // call the "add" function and store the returned value in the "sum" variable
var average = divideByTwo(sum); // call the "divideByTwo" function and store the returned value in the "average" variable

console.log(average);
