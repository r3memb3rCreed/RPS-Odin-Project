// score counter
let playerScore = parseInt(0)

let computerScore = parseInt(0)



// body container
const mainBodyContainer = document.querySelector('body')


// Rock button is created here
const rockButton = document.createElement('button');
rockButton.classList.toggle('newRockButton');
rockButton.textContent = 'Rock'
mainBodyContainer.appendChild(rockButton);


// Paper button is created here
const paperButton = document.createElement('button');
paperButton.classList.toggle('newPaperButton');
paperButton.textContent = 'Paper'
mainBodyContainer.appendChild(paperButton);


// Scissors button is created here
const scissorsButton = document.createElement('button');
scissorsButton.classList.toggle('newScissorsButton');
scissorsButton.textContent = 'Scissors'
mainBodyContainer.appendChild(scissorsButton);

// a div is created here that will display our results 

const results = document.createElement('div');
results.classList.toggle('resultsContainer');
mainBodyContainer.appendChild(results);


// Player Score
const computerScoreDiv = document.querySelector('.computerScoreDiv');
// Computer Score
const playerScoreDiv = document.querySelector('.playerScoreDiv')









 






function getComputerChoice() {
    let selection = ["Rock","Paper","Scissors"];
    let choice = selection[Math.floor (Math.random() * selection.length)];
    return choice;
}


function playRound(playerSelection, computerSelection) {
    const outcomeText = document.createElement('p');

    if (playerSelection === computerSelection) {
        outcomeText.innerText = "Tie! Play again...";

    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        outcomeText.innerText = "You lose! Paper beats rock";
        computerScore++;

    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        outcomeText.innerText = "You Win! Rock beats scissors";
        playerScore++;
    
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        outcomeText.innerText = "You Lose! Scissors beats paper";
        computerScore++;
    
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        outcomeText.innerText = "You Win! Paper beats rock";
        playerScore++;
    
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        outcomeText.innerText = "You Win! Scissors beats paper";
        playerScore++;
    
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        outcomeText.innerText = "You Lose! Rock beats scissors";
        computerScore++;

    } 

    results.appendChild(outcomeText);

}

// a function is created here that will display who won on the page
function whoWon(playerScore, computerScore) {
    if (playerScore === 5) {
        const possibleWinnerOne = document.createElement('h2');
        possibleWinnerOne.classList.toggle('playerWon');
        possibleWinnerOne.innerText = "Congratulations player you won " + playerScore + " to " + computerScore, " this is your victory!"
        results.appendChild(possibleWinnerOne);
    }

    if (computerScore === 5) {
        const possibleWinnerTwo = document.createElement('h2');
        possibleWinnerTwo.classList.toggle('computerWon');
        possibleWinnerTwo.innerText = "Unfourtunately you have lost " + playerScore + " to " + computerScore,  " player...The computer has won this match..."
        results.appendChild(possibleWinnerTwo);
    }
}

function updateScores(playerScore, computerScore) {
    playerScoreDiv.innerText = 'Player Score: ' + playerScore;
    computerScoreDiv.innerText = "Computer's Score: " + computerScore;
}


// Event listener for Rock Button below...
let rockEventListener = document.querySelector('.newRockButton');
rockEventListener.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "Rock";
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, computerScore);
    whoWon(playerScore, computerScore);
});


// Event listener for paper button below...
let paperEventListener = document.querySelector('.newPaperButton');
paperEventListener.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "Paper";
    playRound(playerSelection, computerSelection);
    whoWon(playerScore, computerScore);

});


// Event listener for scissors button below...
let scissorsEventListener = document.querySelector('.newScissorsButton');
scissorsEventListener.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "Scissors";
    playRound(playerSelection, computerSelection);
    whoWon(playerScore, computerScore);

});