/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// PSEUDO CODIGO
// DONE - crear array de para simbolos de palos (4)
// DONE - crear array para determinar el número (0-12)
// DONE - generar numero aleatorio para palos
// DONE - generar numero aleatorio para nÚmero
// asociar evento onload (ya creado)
// estilizar
window.onload = function() {
  let symbols = ["♦", "♥", "♠", "♣"];
  let value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

  let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  let randomValue = value[Math.floor(Math.random() * value.length)];
};
