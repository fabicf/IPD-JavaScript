// pass function to function

var dollarPrinter = function () {
  console.log("$$$$$$$$$$$$$$$");
};

var starPrinter = function () {
  console.log("**************");
};

function powerInVarFunction(num1, num2, printer) {
  var result = 1;
  for (var i = 0; i < num2; i++) {
    result *= num1;
  }
  printer();
  return result;
}

console.log(powerInVarFunction(2, 3, starPrinter));
console.log(powerInVarFunction(5, 3, dollarPrint));
