console.log("=========== pyramids ============");

var i;
var j;
for (i = 0; i <= 4; i++) {
  let myoutput = "";
  for (j = 0; j < i; j++) {
    myoutput = myoutput + j + "";
  }
  console.log(myoutput);
}

console.log("========= teach ex================");
var row;
var col;
var output;
for (row = 0; row <= 3; row++) {
  output = "";
  for (col = 0; col < row + 1; col++) {
    output = output + col; // wht we are printing
  }
  console.log(output);
}

console.log("=========== stars ==============");
for (row = 0; row <= 3; row++) {
  output = "*";
  for (col = 1; col < row + 1; col++) {
    output = output + "*";
  }
  console.log(output);
}

console.log("============ 0, 0=============");
var output1;
for (row = 0; row <= 3; row++) {
  output = row;
  for (col = 0; col < row + 1; col++) {
    output1 = output + "," + col;
  }
  console.log(output1);
}

console.log("================ my example =======");
var i;
var j;
for (i = 0; i <= 4; i++) {
  //let myoutput = i;
  for (j = 0; j < 4; j++) {
    console.log(i + "," + j);
  }
  //console.log(myoutput);
}
​​