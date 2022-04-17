'use strict';
// selectare si stocare de elemente
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const winnerText = document.querySelector('.winner-text');

let scores, currentScore, activePlayer, playing;
//totalul scor pentru ambele echipe


const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // setam scorul 1 si scorul 2 la 0 pentru inceput.
  score0El.textContent = 0;
  score1El.textContent = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}
init();

// butoane
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');



// schimbare player 
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  // schimbare dinamica de la 0 la 1 si invers.
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// setare buton roll
btnRoll.addEventListener('click', function () {

  if (playing) {
    diceEl.classList.remove('hidden');
    
    // construim un generator de nr random de la 1-6
    const dice = Math.trunc(Math.random() * 6) + 1;
    // afisam dice-ul prin scoaterea clasei de hidden
    diceEl.classList.remove('hidden');
    // afisarea imaginii in functie de numarul random
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;

      //accesare dinamica la continutul elementului.
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else {
      switchPlayer();
    }
  }
});

// setare buton hold
btnHold.addEventListener('click', function () {
  if (playing) {
    //alocare dinamica de scor si afisare dinamica de scor
    scores[activePlayer] += currentScore;
    //afisare dinamica la scorul total.
    document.getElementById(`score--${activePlayer}`).
      textContent = scores[activePlayer];

      //conditia de castig
    if (scores[activePlayer] >= 10) {
      winnerText.textContent = ` Player ${activePlayer + 1} Won!!!😈`;
      winnerText.style.display = 'block';
      winnerText.style.fontFamily = 'Nunito, sans-serif';
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
    else {
      switchPlayer();
    }
  }

});

//setare buton new
btnNew.addEventListener('click', ()=>{
   init();
   winnerText.style.display = 'none';
});