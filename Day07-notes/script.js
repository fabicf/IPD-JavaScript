function viewMore() {
  const pLess = document.getElementById("p-less-text");
  const pMore = document.getElementById("p-more-text");
  pLess.style.display = "none";
  pMore.style.display = "block";
}
function viewLess() {
  const pLess = document.getElementById("p-less-text");
  const pMore = document.getElementById("p-more-text");
  pLess.style.display = "block";
  pMore.style.display = "none";
}

const newSpan = document.createElement("span");
newSpan.textContent = textValue;
