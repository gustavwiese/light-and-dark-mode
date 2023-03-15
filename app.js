"use strict";

window.addEventListener("load", initApp);

function initApp() {
  //event listener for select on HTML
  document.querySelector("#select-color-mode").addEventListener("change", modeSelected);
}

// modeSelected called when #select-color-mode changes value (the user select color mode)
function modeSelected() {
  console.log("New color mode selected");
  const selectedColorMode = this.value;
  console.log(selectedColorMode);
  changeMode(selectedColorMode);
}

function changeMode(mode) {
  resetColorMode();
  if (mode == "dark") {
    document.body.classList.add("dark-mode");
  } else if (mode === "pink") {
    document.body.classList.add("pink-mode");
  } else if (mode === "green") {
    document.body.classList.add("green-mode");
  } else if (mode === "blue") {
    document.body.classList.add("blue-mode");
  }
}

function resetColorMode() {
  document.body.className = "";
}
