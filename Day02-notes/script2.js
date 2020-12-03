// ternary operator ?:

// if else

var age = 21;
var hasLicense = true;

if (age >= 20) {
  if (hasLicense) {
    console.log("you can drive");
  } else {
    console.log("you cannot drive");
  }
} else {
  console.log("you cannot drive");
}

//ternary operator:

//age > 20 ? console.log("can vote") : console.log("cannot vote");
//condition? true block of code : false block of code

age >= 20
  ? hasLicense
    ? console.log("you can drive")
    : console.log("you cannot drive")
  : console.log("cannot drive");
