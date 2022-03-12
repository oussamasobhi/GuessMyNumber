'use strict';
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.highscore').textContent = highscore;
  /* console.log(guess,typeof guess); */
  if (!guess) {
    document.querySelector('.message').textContent = 'Not a number';
  } else if (secretnumber === guess) {
    document.querySelector('.message').textContent = 'correct Number!';
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.highscore').textContent = highscore =
      highscore < score ? score : highscore;
  } else if (guess !== secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess < secretnumber ? 'too low' : 'too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lose the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
