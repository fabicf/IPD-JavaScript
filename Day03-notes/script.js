console.log("test");

var name = "something";

//length = 9;
// indexes go from 0 to 8

for (var i = 0; i < name.length; i++) {
  console.log(name[i]);
}
console.log("=================");
var mySt = "abc de";
var rev = "";
for (var i = mySt.length - 1; i >= 0; i--) {
  rev += mySt[i];
}
console.log(rev);
