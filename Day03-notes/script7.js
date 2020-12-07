// * * * * *
// * * * *
// * * *
// * *
// *

// linha 0 = imprimir 5 vezes
// linha 1  = imprimir 4 vezes
// linha 2 = imprimir 3 vezes
// linha 3 = imprimir 2 vezes
// linha 4 = imprimir 1 vez
var me = 5;

for (var i = 0; i < me; i++) {
  var output = "";
  for (var j = me - i; j > 0; j--) {
    output = output + "* ";
  }
  console.log(output);
}

console.log("=====================");

// *
// * *
// * * *
// * * * *
// * * * * *

for (var i = 0; i < me; i++) {
  var output = "";
  for (var j = 0; j < i + 1; j++) {
    output = output + "* ";
  }
  console.log(output);
}

console.log("=====================");

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

for (var i = 0; i < me; i++) {
  output = "";
  for (var j = 0; j < me; j++) {
    output = output + "* ";
  }
  console.log(output);
}

console.log("=====================");

// * * * * *
// *       *
// *       *
// *       *
// * * * * *

for (var i = 0; i < me; i++) {
  output = "";
  if (i === 0 || i === me - 1) {
    for (var j = 0; j < me; j++) {
      output = output + "* ";
    }
  } else {
    for (var k = 0; k < me; k++) {
      if (k === 0 || k === me - 1) {
        output = output + "* ";
      } else {
        output = output + "  ";
      }
    }
  }
  console.log(output);
}

console.log("=====================");

//         *
//       * *
//     * * *
//   * * * *
// * * * * *
var count = 1;
for (var i = 0; i < me; i++) {
  output = "";
  for (var j = 0; j < me; j++) {
    if (j < me - count) {
      output += "  ";
    } else {
      output += "* ";
    }
  }
  console.log(output);
  count++;
}
