//anonymus function
// function power(x, y) {
//   var mult = 1;
//   for (var i = 0; i < y; i++) {
//     mult = mult * x;
//   }
//   return mult;
// }

var powerInVarFunction = function (x, y) {
  var mult = 1;
  for (var i = 0; i < y; i++) {
    mult = mult * x;
  }
  return mult;
};

console.log(powerInVarFunction(2, 3));
