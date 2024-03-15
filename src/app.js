/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

// PSEUDO CODIGO
// DONE - crear array de para simbolos de palos (4)
// DONE - crear array para determinar el número (0-12)
// DONE - generar numero aleatorio para palos
// DONE - generar numero aleatorio para nÚmero
// DONE - asociar al HTML para que aparezca en el navegador
// DONE - hacer que cuando aparezca el simbolo ♥ sea de color rojo
// DONE - estilizar
window.generateRandomCard = function() {
  let symbols = ["♦", "♥", "♠", "♣"];
  let value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

  let randomIndex = Math.floor(Math.random() * symbols.length);
  let randomSymbol = symbols[randomIndex];

  let symbol1 = document.getElementById("symbol1");
  let symbol2 = document.getElementById("symbol2");
  symbol1.innerHTML = randomSymbol;
  symbol2.innerHTML = randomSymbol;

  //El siguiente código está refactorizado en las lineas 23-26 para evitar que el código tenga que acceder al DOM repetidas veces por su ID
  //-> document.getElementById("symbol1").innerHTML = randomSymbol;
  //-> document.getElementById("symbol2").innerHTML = randomSymbol;
  document.getElementById("value").innerHTML =
    value[Math.floor(Math.random() * value.length)];

  if (randomSymbol === "♥" || randomSymbol === "♦") {
    document.getElementById("symbol1").classList.add("red-suit");
    document.getElementById("symbol2").classList.add("red-suit");
  } else {
    // Si el símbolo no es ♥ ni ♦, eliminar la clase "red-suit" si está presente
    symbol1.classList.remove("red-suit");
    symbol2.classList.remove("red-suit");
  }
};

// Con el siguiente código se puede automatizar el color, pudiendo evitar la clase CSS
//let color = ["♦", "♥"].includes(randomSymbol) ? "red" : "black";
//document.getElementById("symbol1").style.color = color;
//document.getElementById("symbol2").style.color = color;

window.onload = function() {
  document.getElementById("reloadButton").addEventListener("click", function() {
    generateRandomCard();
  });
};
