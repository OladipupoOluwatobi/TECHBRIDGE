let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let resultMessage = '';
    if (playerChoice === computerChoice) {
        resultMessage = `It's a tie! You both chose ${playerChoice}.`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultMessage = `You win! You chose ${playerChoice}, Computer chose ${computerChoice}.`;
        playerScore++;
    } else {
        resultMessage = `You lose! You chose ${playerChoice}, Computer chose ${computerChoice}.`;
        computerScore++;
    }
    document.getElementById('result').textContent = resultMessage;

    document.getElementById('score').textContent = `Player: ${playerScore} || Computer: ${computerScore}`;
}
