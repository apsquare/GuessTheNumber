'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //No input provided
  if (!guess) {
    displayMessage('⛔️No number⛔️');

    //Correct guess
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //Whatever score is left will be your final score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //Guess is not equal to the secret number
  } else if (guess !== secretNumber) {
    if (score > 0) {
      if (guess > secretNumber) {
        displayMessage('Try a smaller value!!');
        score--;
        document.querySelector('.score').textContent = score;
      } else if (guess < secretNumber) {
        displayMessage('Try a larger number!!');
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else if (score < 0) {
      displayMessage('💥Game Over');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
