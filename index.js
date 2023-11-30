var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomImage1 = "./images/dice" + randomNumber1 + ".png";
var randomImage2 = "./images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
// почему не работает ?
var Player1 = prompt("Hello! What is your name? ", "");
var Player2 = prompt("Hey! What is your opponent's name? ", "");
document.querySelectorAll("p")[0].innerHTML = Player1;
document.querySelectorAll("p")[2].innerHTML = Player2;
