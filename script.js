'use strict';
// functions
function changeDice() {}
// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currScore0El = document.querySelector('#current--0');
const currScore1El = document.querySelector('#current--1');

let randomNumber = (score0El.textContent = 0);
score1El.textContent = 0;
diceEl.classList.add('hidden');

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
    currScore0El.textContent = currentScore;
  } else {
    // switch to another player
  }
});
