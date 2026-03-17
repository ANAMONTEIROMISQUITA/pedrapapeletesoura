const buttons = document.querySelectorAll('.choices button');
const playerChoiceText = document.getElementById('player-choice');
const computerChoiceText = document.getElementById('computer-choice');
const winnerText = document.getElementById('winner');

const choices = ['pedra', 'papel', 'tesoura'];

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.dataset.choice;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        playerChoiceText.textContent = `Você escolheu: ${playerChoice}`;
        computerChoiceText.textContent = `Computador escolheu: ${computerChoice}`;

        winnerText.textContent = getWinner(playerChoice, computerChoice);
    });
});