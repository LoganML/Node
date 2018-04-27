var inquirer = require("inquirer");
var userHealth = 70;
var nurgleHealth = 15;

function checkRound(){
	console.log("");
	console.log("");
if (userHealth <= 0) {

    console.log("###############################################");
    console.log("");
    console.log("GAME OVER");
    console.log("");
    console.log("###############################################");

    // Exit the game
    process.exit();
  }

   if (zombieHealth <= 0) {

    console.log("###############################################");
    console.log("");
    console.log("WINNER");
    console.log("");
    console.log("###############################################");

    // Exit the game
    process.exit();
  }

  // After performing the "check", the next round is initiated.
  playRound();

}

function playRound() {
	inquirer.prompt({
		type: "list"
		name: "userGuess"
		message: "To Stay alive to purge the nurgle scum, guess a number between [1-5]!"
		choices: ["1", "2", "3", "4", "5"]
	}
	]).then(function(guess) {
		if (userHealth > 0 || nurgleHealth > 0)
	}
}