//your JS code here. If required.
// script.js
const element = document.getElementById("level");
let domLevel = 0;

while (element !== document.documentElement) {
  element = element.parentNode;
  domLevel++;
}

alert("The level of the element is: " + domLevel);

