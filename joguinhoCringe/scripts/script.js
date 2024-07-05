const mario = document.getElementById('mario');
const pipe = document.getElementById('pipe');
const gameOverScreen = document.getElementById('game-over');
const scoreDisplay = document.getElementById('scoreDisplay');
const finalScores = document.getElementById('finalScores');
const startGameScreen = document.getElementById('start-game');

let gameLoop = undefined;
let score = 0;
let highScore = 0;

document.addEventListener('keydown', (ev) => {
	if (ev.key === ' ') {
		ev.preventDefault();
		mario.classList.add('jumping');
		setTimeout(() => {
			mario.classList.remove('jumping');
		}, 710);
	}
});

function checkScore() {
	if (score > highScore) {
		highScore = score;
	}
}

function gameLogic() {
	const pipePos = pipe.offsetLeft;
	const marioPos = +window.getComputedStyle(mario).bottom.slice(0, -2);
	if (pipePos <= 120 && pipePos > 0 && marioPos <= 105) {
		pipe.style.animation = 'none';
		pipe.style.left = `${pipePos}px`;
		mario.style.animation = 'none';
		mario.style.bottom = `${marioPos}px`;
		mario.src = './assets/game-over.png';
		mario.style.width = '80px';
		mario.style.rotate = `z ${Math.floor(Math.random() * 360 + 1)}deg`;
		checkScore();
		finalScores.childNodes[1].textContent = score;
		finalScores.childNodes[3].textContent = highScore;
		score = 0;
		gameOverScreen.showModal();
		clearInterval(gameLoop);
	}

	if (pipePos < 0) {
		score++;
		scoreDisplay.textContent = score;
	}
}

function restartGame() {
	pipe.style.left = '';
	mario.style.animation = '';
	mario.style.bottom = '';
	mario.src = './assets/mario.gif';
	mario.style.width = '150px';
	mario.style.rotate = '';
	gameOverScreen.close();
	setTimeout(() => {
		pipe.style.animation = 'pipeMoving 1.5s infinite linear forwards';
		gameLoop = setInterval(gameLogic, 10);
	}, 1500);
}

function startGame() {
	startGameScreen.close();
	setTimeout(() => {
		pipe.style.animation = 'pipeMoving 1.5s infinite linear forwards';
		gameLoop = setInterval(gameLogic, 10);
	}, 1500);
}

document.addEventListener('DOMContentLoaded', () => {
	gameOverScreen.close();
	startGameScreen.showModal();
});
