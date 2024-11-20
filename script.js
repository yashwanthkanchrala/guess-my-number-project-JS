'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct-number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 23;
document.querySelector('.score').textContent = 19;

document.querySelector('.guess').value = 15;
console.log(document.querySelector('.guess').value);
*/

//handling click events
/*
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'no number entered';
  }
});
*/

//implementing the game logic and css

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    //document.querySelector('.message').textContent = 'no number entered';
    displayMessage('no number entered');
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'correct-number';
    displayMessage('correct - number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.height = '16rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent = guess > secretNumber ? 'Too-High' : 'Too-Low';
      displayMessage(guess > secretNumber ? 'Too - High' : 'Too - Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You Lost The Game';
      displayMessage('You Lost The Game');
      document.querySelector('.score').textContent = 0;
    }
  }
});
/*
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too-High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too-Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  //document.querySelector('.message').textContent = 'Start Guessing . . .';
  displayMessage('Start Guessing . . .');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.height = '10rem';
});
