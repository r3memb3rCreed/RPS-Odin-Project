function getComputerChoice() {
    let selection = ["Rock","Paper","Scissors"];
    let choice = selection[Math.floor (Math.random() * selection.length)];
    return choice;
}


function playRound(playerSelection, computerSelection) {
    
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return ("Tie! Play again...");

    } else if (playerSelection.toLowerCase() === "Rock".toLowerCase() && computerSelection === "Paper") {
        return ("You lose! Paper beats rock");

    } else if (playerSelection.toLowerCase() === "Rock".toLowerCase() && computerSelection === "Scissors") {
        return ("You Win! Rock beats scissors");
    
    } else if (playerSelection.toLowerCase() === "Paper".toLowerCase() && computerSelection === "Scissors") {
        return ("You Lose! Scissors beats paper");
    
    } else if (playerSelection.toLowerCase() === "Paper".toLowerCase() && computerSelection === "Rock") {
        return ("You Win! Paper beats rock");
    
    } else if (playerSelection.toLowerCase() === "Scissors".toLowerCase() && computerSelection === "Paper") {
        return ("You Win! Scissors beats paper");
    
    } else if (playerSelection.toLowerCase() === "Scissors".toLowerCase() && computerSelection === "Rock") {
        return ("You Lose! Rock beats scissors");
    
    } 

}

const playerSelection = prompt("Rock, Paper or Scissors...?")

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));


/*function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        if (1 == 1){
            console.log("True")
        }
    }
}

game();
*/

