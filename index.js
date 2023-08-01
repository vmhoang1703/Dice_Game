// Random number for dice number 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1;

var randomDiceImageSource1 = "./images/" + randomDiceImage1 + ".png";

document.querySelector(".img1").setAttribute("src" , randomDiceImageSource1);

// Random number for dice number 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2;

var randomDiceImageSource2 = "./images/" + randomDiceImage2 + ".png";

document.querySelector(".img2").setAttribute("src" , randomDiceImageSource2);

// Determine the winner
if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Win!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Win!🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}

