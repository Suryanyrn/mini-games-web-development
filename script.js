const choiceImages = {
    stone: 'stone.jpg',
    paper: 'paper.jpg',
    scissor: 'scissor.jpg',
};

// Get user choice from URL
const urlParams = new URLSearchParams(window.location.search);
const userChoice = urlParams.get('choice');

// Display user's choice
document.getElementById('userChoice').src = choiceImages[userChoice];

// Generate random CPU choice
const cpuChoices = ['stone', 'paper', 'scissor'];
const cpuChoice = cpuChoices[Math.floor(Math.random() * cpuChoices.length)];
document.getElementById('cpuChoice').src = choiceImages[cpuChoice];

// Determine the result
let resultText = '';

if (userChoice === cpuChoice) {
    resultText = 'MATCH DRAW';
    showPopup('Thanks for Playing!')
} else if (
    (userChoice === 'stone' && cpuChoice === 'scissor') ||
    (userChoice === 'paper' && cpuChoice === 'stone') ||
    (userChoice === 'scissor' && cpuChoice === 'paper')
) {
    resultText = 'YOU WIN!';
    showPopup('Congratulations! YOU WIN!');
} else {
    resultText = 'YOU LOSE!';
    showPopup('Better luck next time!');
}

document.getElementById('result').textContent = `Result: ${resultText}`;

// Show the popup
function showPopup(message) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    popupMessage.textContent = message;
    popup.classList.remove('hidden');
}

// Close the popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
}