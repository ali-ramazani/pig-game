'use strict';
// functions
function changeDice() {}
// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currScore0El = document.querySelector('#current--0');
const currScore1El = document.querySelector('#current--1');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const totalScores = [0, 0];
let activePlayer = 0;

let currentScore = 0;
btnRoll.addEventListener('click', function () {
  // Generate a random dice roll\
  const dice = Math.trunc(Math.random() * 6) + 1;
  // Display dice
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');
  // check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch to another player
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function () {
  let index = activePlayer;
  totalScores[index] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = Number(
    totalScores[index]
  );
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
});
