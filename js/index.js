function rollDice() {
  var diceNo = Math.floor(Math.random() * 6) + 1;
  return diceNo;
}

var player1 = rollDice();
var player2 = rollDice();

document.getElementsByClassName("dice-p1")[0].src = "images/dice" + player1 + ".png";
document.getElementsByClassName("dice-p2")[0].src = "images/dice" + player2 + ".png";

if (player1 > player2) {
  document.getElementsByClassName("flag-p1")[0].style.display = "inline";
  document.querySelector("h1").textContent = "Player1 Wins!";

} else if (player2 > player1) {
  document.getElementsByClassName("flag-p2")[0].style.display = "inline";
  document.querySelector("h1").textContent = "Player2 Wins!";

} else {
  document.querySelector("h1").textContent = "It's a Tie!";
}
