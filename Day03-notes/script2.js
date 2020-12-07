// functions
var foo = 4;

function popcorn(popcornString) {
  console.log("$$$$$$$$$$$$$$$$$$");
  console.log(popcornString);
  console.log("$$$$$$$$$$$$$$$$$$");
}

//call function
popcorn("The program just started");

if (foo > 2) {
  popcorn("true");
} else {
  popcorn("false");
}

popcorn("The program just started");

console.log("=================");
//add if else
function power(x, y) {
  var mult = 1;

  for (var i = 0; i < y; i++) {
    mult = mult * x;
  }
  return mult;
}
function main() {
  var result = power(2, 3);
  console.log(`result is ${result}`);
}

main();
