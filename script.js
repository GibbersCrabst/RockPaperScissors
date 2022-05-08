let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
let player;
let computer;

function playerChoice() {
    PlayerInput = prompt('Please enter Rock, Paper or Scissors');
    roundCount++;
    playerInputFixed = PlayerInput.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    if(playerInputFixed !== 'rock' && playerInputFixed !== 'paper' && playerInputFixed !== 'scissors') {
        roundCount--;
        alert('You did not enter Rock, Paper, or Scissors.')
    } else {
        console.log(playerInputFixed);
        return playerInputFixed;
    }
}

function computerChoice() {
    const choices = ["rock", "paper", "scissors"];
    console.log(choices[Math.floor(Math.random() * choices.length)]);
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(player = playerChoice(), computer = computerChoice()) {
    let roundResult;
    switch(true) {
        case player === 'rock' && computer === 'scissors':
            roundResult = 'win';
            break;
        case player === 'rock' && computer === 'paper':
            roundResult = 'lose';
            break;
        case player === 'paper' && computer === 'rock':
            roundResult = 'win';
            break;
        case player === 'paper' && computer === 'scissors':
            roundResult = 'lose';
            break;
        case player === 'scissors' && computer === 'paper':
            roundResult = 'win';
            break;
        case player === 'scissors' && computer === 'rock':
            roundResult = 'lose';
            break;
        case player === computer:
            roundResult = 'tie';
    }
    if(roundResult === 'win') {
        playerScore++;
        alert(`You win round ${roundCount}!\nYou chose: ${player}.\nThe computer chose: ${computer}.\nScore: Player: ${playerScore} | Computer: ${computerScore}`);
    } else if(roundResult === 'lose') {
        computerScore++;
        alert(`You lose round ${roundCount}!\nYou chose: ${player}.\nThe computer chose: ${computer}.\nScore: Player: ${playerScore} | Computer: ${computerScore}`);
    } else if(roundResult === 'tie') {
        alert(`Round ${roundCount} is a tie!\nYou chose: ${player}.\nThe computer chose: ${computer}.\nScore: Player: ${playerScore} | Computer: ${computerScore}`);
    }
    console.log(roundResult);
    return roundResult;
}

function playGame() {
    while(playerScore < 5 && computerScore < 5) {
        playRound();
    }
    if(playerScore === 5) {
        alert(`Congratulations, you win! Player: ${playerScore} Computer: ${computerScore}.`);
    } else if(computerScore === 5) {
        alert(`Sorry, you lose! Player: ${playerScore} Computer: ${computerScore}.`);
    }
}

playGame();