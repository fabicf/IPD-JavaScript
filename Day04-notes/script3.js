//let-var-const
function print() {
  var name = "John";
  var age = 18;
  let height = "5ft";
  console.log(height);

  if (age == 18) {
    var occupation = "student";
    let gender = "male";
    console.log("inside if " + name);
    console.log("inside if " + occupation);
    console.log("inside if " + gender);
    console.log(height);
  }

  console.log("inside function " + occupation);
  console.log("inside function " + gender); // does not print --> let just print inside block scope
}

print();

//var - global scope or function scope
//let - block scope
