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

window.onload = function() {
  let symbols = ["♦", "♥", "♠", "♣"];
  let value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

  let randomIndex = Math.floor(Math.random() * symbols.length);
  let randomSymbol = symbols[randomIndex];

  document.getElementById("symbol1").innerHTML = randomSymbol;
  document.getElementById("symbol2").innerHTML = randomSymbol;
  document.getElementById("value").innerHTML =
    value[Math.floor(Math.random() * value.length)];

  if (randomSymbol === "♥") {
    document.getElementById("symbol1").classList.add("red-heart");
    document.getElementById("symbol2").classList.add("red-heart");
  }
};
