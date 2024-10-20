const wheel = document.querySelector('.wheel');
const result = document.getElementById('result');
const spinBtn = document.getElementById('spin-btn');

let deg = 0;

spinBtn.addEventListener('click', () => {
// Generate random degree between 500 and 5000
const randomDeg = Math.floor(500 + Math.random() * 4500);
deg += randomDeg;

wheel.style.transform = `rotate(${deg}deg)`;

// Delay the result announcement until the spin ends
setTimeout(() => {
const sectors = ['lose', 'win', 'lose', 'win', 'lose', 'win'];
const chosenSector = sectors[Math.floor(((deg % 360) / 60))];

if (chosenSector === 'win') {
result.textContent = 'Congratulations, You Win!';
result.style.color = 'green';
} else {
result.textContent = 'Sorry, You Lose!';
result.style.color = 'red';
}
}, 3000); // 3 seconds to match the CSS transition duration
});