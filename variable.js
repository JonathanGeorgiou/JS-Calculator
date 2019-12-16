"use_strict";
function greeting() {
  const button = document.getElementById("switch");
  button.innerText = button.innerText === "OFF" ? "ON" : "OFF";
  const newP = document.createElement("p");
  newP.innerText = new Date();
  document.getElementById("dates").appendChild(newP);
}

function reset() {
  const button2 = document.getElementById("switch");
  button2.innerText = "OFF";
  dates.innerHTML = "";
}

function plus() {
  var x = Number.parseFloat(document.getElementById("firstNumber").value);
  var y = Number.parseFloat(document.getElementById("secondNumber").value);
  result = x + y;
  const answer = document.getElementById("result");
  answer.innerText = result;
  const newP = document.createElement("p");
  newP.innerText = x + "+" + y + "=" + result;
  document.getElementById("history").appendChild(newP);
}
function minus() {
  var x = Number.parseFloat(document.getElementById("firstNumber").value);
  var y = Number.parseFloat(document.getElementById("secondNumber").value);
  result = x - y;
  const answer = document.getElementById("result");
  answer.innerText = result;
  const newP = document.createElement("p");
  newP.innerText = x + "-" + y + "=" + result;
  document.getElementById("history").appendChild(newP);
}

function divide() {
  var x = Number.parseFloat(document.getElementById("firstNumber").value);
  var y = Number.parseFloat(document.getElementById("secondNumber").value);
  result = x / y;
  const answer = document.getElementById("result");
  answer.innerText = result;
  const newP = document.createElement("p");
  newP.innerText = x + "/" + y + "=" + result;
  document.getElementById("history").appendChild(newP);
}

function multiply() {
  var x = Number.parseFloat(document.getElementById("firstNumber").value);
  var y = Number.parseFloat(document.getElementById("secondNumber").value);
  result = x * y;
  const answer = document.getElementById("result");
  answer.innerText = result;
  const newP = document.createElement("p");
  newP.innerText = x + "*" + y + "=" + result;
  document.getElementById("history").appendChild(newP);
}
