function power(x, y) {
  var mult = 1;

  for (var i = 0; i < y; i++) {
    mult = mult * x;
  }

  function print(mult) {
    stars();
    console.log(`result is ${mult}`);
    stars();
    function stars() {
      console.log("*****************");
    }
  }
  print(mult);
}

power(2, 3);
