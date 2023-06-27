function getComputerChoice() {
    let selection = ["Rock","Paper","Scissors"];
    let choice = selection[Math.floor (Math.random() * selection.length)];
    return choice;
}

let playerScore = parseInt(0)

let computerScore = parseInt(0)

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        console.log("Tie! Play again...");

    } else if (playerSelection.toLowerCase() === "Rock".toLowerCase() && computerSelection === "Paper") {
        console.log("You lose! Paper beats rock");
        computerScore++;

    } else if (playerSelection.toLowerCase() === "Rock".toLowerCase() && computerSelection === "Scissors") {
        console.log("You Win! Rock beats scissors");
        playerScore++;
    
    } else if (playerSelection.toLowerCase() === "Paper".toLowerCase() && computerSelection === "Scissors") {
        console.log("You Lose! Scissors beats paper");
        computerScore++;
    
    } else if (playerSelection.toLowerCase() === "Paper".toLowerCase() && computerSelection === "Rock") {
        console.log("You Win! Paper beats rock");
        playerScore++;
    
    } else if (playerSelection.toLowerCase() === "Scissors".toLowerCase() && computerSelection === "Paper") {
        console.log("You Win! Scissors beats paper");
        playerScore++;
    
    } else if (playerSelection.toLowerCase() === "Scissors".toLowerCase() && computerSelection === "Rock") {
        console.log("You Lose! Rock beats scissors");
        computerScore++;
    
    } 

}




function game() {
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors...?")
        const computerSelection = getComputerChoice();
        
        playRound(playerSelection, computerSelection);

        console.log("Player's score = " + playerScore); 
        console.log("Opponent's score = " + computerScore)
        
    }
    
    if (playerScore > computerScore) {
        console.log("Congratulations Player! You now reign champion of this match!");
    } else if (playerScore == computerScore) {
        console.log("It seems you and the computer are evenly matched...Dare to take your chances on a new match?")
    } else {
        console.log("You lose player...The Computer reigns as the champion of this match...")
    }
}

game();

