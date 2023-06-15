//for 1st dice
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
if (randomNumber1 === 1) {
  document.querySelector(".player1>img").setAttribute("src", "./one.png");
} else if (randomNumber1 === 2) {
  document.querySelector(".player1>img").setAttribute("src", "./two.png");
} else if (randomNumber1 === 3) {
  document.querySelector(".player1>img").setAttribute("src", "./three.png");
} else if (randomNumber1 === 4) {
  document.querySelector(".player1>img").setAttribute("src", "./four.png");
} else if (randomNumber1 === 5) {
  document.querySelector(".player1>img").setAttribute("src", "./five.png");
} else if (randomNumber1 === 6) {
  document.querySelector(".player1>img").setAttribute("src", "./six.png");
}
//for second dice
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
if (randomNumber2 === 1) {
  document.querySelector(".player2>img").setAttribute("src", "./one.png");
} else if (randomNumber2 === 2) {
  document.querySelector(".player2>img").setAttribute("src", "./two.png");
} else if (randomNumber2 === 3) {
  document.querySelector(".player2>img").setAttribute("src", "./three.png");
} else if (randomNumber2 === 4) {
  document.querySelector(".player2>img").setAttribute("src", "./four.png");
} else if (randomNumber2 === 5) {
  document.querySelector(".player2>img").setAttribute("src", "./five.png");
} else if (randomNumber2 === 6) {
  document.querySelector(".player2>img").setAttribute("src", "./six.png");
}

//checking which number is bigger
if (randomNumber1 > randomNumber2) {
  document.querySelector("h2").innerHTML = "Player1 is the winner🥇";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h2").innerHTML = "Player2 is the winner🥇";
} else {
  document.querySelector("h2").innerHTML = "Draw";
}
