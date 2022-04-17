'use strict';
// ============================================================
//                 #1 FIRST GAME WITH RANDOM NUMBERS
// ============================================================

// generare de numar random fara zecimale si intre 0-20.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// scor cu decrease pentru fiecare gresala.
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}
// functia se v-a apela doar cand eventul v-a incepe(cand se apasa pe buton)

document.querySelector('.check').addEventListener('click', function () {
  // stocam valoarea la apasarea butonului in variabila guess.
  // convertim string-ul in numar.
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // cazul 1, daca nu exista numar in guess.
  if (!guess) {
    displayMessage('No number!');
  }
  // cazul2, daca numarul introdus in guess este exact numarul secret.
  else if (guess === secretNumber) {
    //implementare hight score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    displayMessage('Correct  Number!');
    document.querySelector('.number').textContent = secretNumber;
    // selectare si manipulare css !!!!
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }

  //when guesss is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    }


    else {
      displayMessage('You lose the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// implementare buton again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = "?";
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
