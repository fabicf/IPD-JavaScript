function getData() {
  const myInput = document.getElementById("ship-number").value;
  $.ajax(`https://swapi.dev/api/starships/${myInput}/`)
    .done(reqListener)
    .fail(failingFunction);
}

function failingFunction() {
  //const ctn = $("#ctn")[0];
  const ctn = document.getElementById("ctn");
  ctn.textContent = "Heyy be failed";
  ctn.style.color = "red";
}

function reqListener(starWarsData) {
  const ctn = $("#ctn")[0];
  //const ctn = document.getElementById("ctn");
  ctn.textContent = starWarsData.name;
  ctn.style.color = "black";
}
