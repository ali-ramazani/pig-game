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

let maximumWinningScore = 0;

const maxWinningScoreBtn = document.querySelector('.maxWinningScoreTaken');
maxWinningScoreBtn.addEventListener('click', function () {
  const maxScore = document.querySelector('#maxWinningScore').value;
  const player1Name = document.querySelector('#player1-name').value;
  const player2Name = document.querySelector('#player2-name').value;
  document.querySelector('#name--0').textContent = player1Name;
  document.querySelector('#name--1').textContent = player2Name;

  maximumWinningScore = maxScore;
  document.querySelector('.home-screen').classList.add('novisibility');
});

let score,
  totalScores,
  currentScore,
  activePlayer,
  playing = true;
const initialize = function () {
  document.querySelector('.home-screen').classList.remove('novisibility');
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore = 0;
  totalScores = [0, 0];
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  currScore0El.textContent = 0;
  currScore1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

initialize();

btnRoll.addEventListener('click', function () {
  if (playing) {
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
  }
});

btnHold.addEventListener('click', function () {
  let index = activePlayer;
  totalScores[index] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = Number(
    totalScores[index]
  );

  if (totalScores[activePlayer] >= maximumWinningScore) {
    playing = false;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document.querySelector('.dice').classList.add('hidden');
    document.querySelector('.btn--roll').classList.add('hidden');
    document.querySelector('.btn--hold').classList.add('hidden');
    document.querySelector('.overlay').classList.remove('novisibility');
    document.querySelector('.overlay').textContent = `Player ${
      activePlayer + 1
    } won`;
  } else {
    // change player
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

const value = document.querySelector('#value');
const input = document.querySelector('#maxWinningScore');
value.textContent = input.value;
input.addEventListener('input', event => {
  value.textContent = event.target.value;
});

btnNew.addEventListener('click', initialize);
