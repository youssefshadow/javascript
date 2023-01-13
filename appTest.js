
let text = document.querySelector('.truc');
let container = document.querySelector('.container');
let msg = document.querySelector('.msg');
let affichage = document.querySelector('.affichage');
let numbers = [];

// Adding event listener to the button
document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
  let number = Math.floor(Math.random() * 10100000);
  text.innerText = number;
  if (number % 5 === 0) {
    text.style.color = "green";
    container.style.boxShadow = "0px 5px 15px green";
    msg.innerText = "Modulo 5";
  } else if (number % 3 === 0) {
    text.style.color = "blue";
    container.style.boxShadow = "0px 5px 15px blue";
    msg.innerText = "Modulo 3";
  } else {
    text.style.color = "red";
    container.style.boxShadow = "0px 5px 15px red";
    msg.innerText = "";
  }
  numbers.push(number);
  numbers.sort((a, b) => a - b);
  affichage.innerText = numbers;
  affichage.innerHTML = numbers.join('<br>');
}






