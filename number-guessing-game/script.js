document.addEventListener('DOMContentLoaded', () => {
    const minNum = 1;
    const maxNum = 100;
    let winningNum = getRandomNum(minNum, maxNum);
    let score = 0;

    const minNumDisplay = document.getElementById('min-num');
    const maxNumDisplay = document.getElementById('max-num');
    const guessInput = document.getElementById('guessInput');
    const guessBtn = document.getElementById('guessBtn');
    const message = document.getElementById('message');
    const scoreDisplay = document.getElementById('score');
    const resetBtn = document.getElementById('resetBtn');

    minNumDisplay.textContent = minNum;
    maxNumDisplay.textContent = maxNum;

    guessBtn.addEventListener('click', () => {
        const guess = parseInt(guessInput.value);
        if (isNaN(guess) || guess < minNum || guess > maxNum) {
            setMessage(`Please enter a number between ${minNum} and ${maxNum}`, 'red');
        } else {
            checkGuess(guess);
        }
        guessInput.value = '';
    });

    resetBtn.addEventListener('click', () => {
        winningNum = getRandomNum(minNum, maxNum);
        score = 0;
        scoreDisplay.textContent = score;
        guessInput.disabled = false;
        guessBtn.disabled = false;
        setMessage('New game started! Guess the number.', 'black');
    });

    function checkGuess(guess) {
        if (guess === winningNum) {
            setMessage(`Congratulations! You guessed the correct number: ${winningNum}`, 'green');
            score++;
            scoreDisplay.textContent = score;
            guessInput.disabled = true;
            guessBtn.disabled = true;
        } else if (guess > winningNum) {
            setMessage('Too high! Try again.', 'blue');
        } else {
            setMessage('Too low! Try again.', 'blue');
        }
    }

    function setMessage(msg, color) {
        message.style.color = color;
        message.textContent = msg;
    }

    function getRandomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
