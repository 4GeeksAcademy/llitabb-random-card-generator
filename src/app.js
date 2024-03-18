/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.generateRandomCard = function() {
  let symbols = ["♦", "♥", "♠", "♣"];
  let value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

  let randomIndex = Math.floor(Math.random() * symbols.length);
  let randomSymbol = symbols[randomIndex];

  let symbol1 = document.getElementById("symbol1");
  let symbol2 = document.getElementById("symbol2");
  symbol1.innerHTML = randomSymbol;
  symbol2.innerHTML = randomSymbol;

  document.getElementById("value").innerHTML =
    value[Math.floor(Math.random() * value.length)];

  if (randomSymbol === "♥" || randomSymbol === "♦") {
    document.getElementById("symbol1").classList.add("red-suit");
    document.getElementById("symbol2").classList.add("red-suit");
  } else {
    symbol1.classList.remove("red-suit");
    symbol2.classList.remove("red-suit");
  }
};

window.onload = function() {
  document.getElementById("reloadButton").addEventListener("click", function() {
    generateRandomCard();
  });
};

// Add inputs for card resizing

document.addEventListener("DOMContentLoaded", function() {
  document
    .getElementById("changeSizeButton")
    .addEventListener("click", function() {
      changeSize();
    });
});

function changeSize() {
  let heightValue = document.getElementById("height").value;
  let widthValue = document.getElementById("width").value;

  let valuesCard = document.querySelectorAll(".card");

  valuesCard.forEach(function(card) {
    card.style.height = heightValue + "px";
    card.style.width = widthValue + "px";
  });
}
