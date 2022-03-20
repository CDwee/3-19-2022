// Started at 10:07 3-19-2022

// The for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i+ 1}: ${el}`);
};

// console.log([...menu.entries()]);

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const  openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Ended my first hour at 11:12 3-19-2022

// Started next hour at 2:30 3-19-2022

@import url("https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap");

body {
  font-family: "Press Start 2P", sans-serif;
  background-image: linear-gradient(to right, green 0%, yellowgreen 100%);
}

.Rock:hover {
  background-color: #ccc;
}

.Rock {
  position: absolute;
  font-family: "Press Start 2P", sans-serif;
  font-size: 17px;
  height: 3rem;
  width: 8rem;
  top: 75%;
  left: 40%;
  box-shadow: 0 1.75rem 3.5rem rgba(0, 0, 0, 0.1);
}

.Paper:hover {
  background-color: #ccc;
}

.Paper {
  position: absolute;
  font-family: "Press Start 2P", sans-serif;
  font-size: 17px;
  height: 3rem;
  width: 9rem;
  top: 75%;
  left: 48%;
  box-shadow: 0 1.75rem 3.5rem rgba(0, 0, 0, 0.1);
}

.Scissors:hover {
  background-color: #ccc;
}

.Scissors {
  position: absolute;
  font-family: "Press Start 2P", sans-serif;
  font-size: 17px;
  height: 3rem;
  width: 12rem;
  top: 81%;
  left: 43%;
  box-shadow: 0 1.75rem 3.5rem rgba(0, 0, 0, 0.1);
}

.RPS {
  position: absolute;
  left: 25%;
}

// Stoped at 3:20 3-19-2022

// Started next hours at 6:55 3-19-2022

const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]');
const computerScoreSpan = document.querySelector('[data-computer-score]');
const yourScoreSpan = document.querySelector('[data-your-score]');
const SELECTIONS = [
  {
    name: 'rock',
    emoji: '🗿',
    beats: 'scissors'
  },
  {
    name: 'paper',
    emoji: '📄',
    beats: 'rock'
  },
  {
    name: 'scissors',
    emoji: '✂️',
    beats: 'paper'
  }
];

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(selection => selection.name === selectionName);
    makeSelection(selection);
  })
});

function makeSelection(selection) {
  const computerSelection = randomSelection();
  const yourWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);

  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, yourWinner);

  if (yourWinner) incrementScore(yourScoreSpan);
  if (computerWinner) incrementScore(computerScoreSpan);
};

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
};

function addSelectionResult(selection, winner) {
  const div = document.createElement('div');
  div.innerText = selection.emoji;
  div.classList.add('result-selection');
  if (winner) div.classList.add('winner');
  finalColumn.after(div);
};

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
};

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
};

// Ended at 9:05 3-19-2022
