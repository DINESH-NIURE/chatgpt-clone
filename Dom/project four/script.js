let randomNumber = parseInt(Math.random() * 100) + 1;

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const startOver = document.querySelectorAll(".resultParas");

const p = document.createElement("p");

let previousGuesses = [];

let numGuesses = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

const validateGuess = (guess) => {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1!");
  } else if (guess > 100) {
    alert("Please enter a number less than 100!");
  } else {
    previousGuesses.push(guess);
    if (numGuesses === 5) {
      displayMessage(`Game Over! Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};

const checkGuess = (guess) => {
  if (guess === randomNumber) {
    displayMessage(
      `Congratulations! You guessed the number in ${numGuesses} attempts!`
    );
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Too Low! Try Again!");
  } else {
    displayMessage("Too High! Try Again!");
  }
};

const displayGuess = (guess) => {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} `;
  numGuesses++;
  remaining.innerHTML = `${5 - numGuesses}`;
};

const displayMessage = (message) => {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
};

const endGame = () => {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");
  let resetButton = document.createElement("button");
  resetButton.textContent = "Start New Game";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", newGame);
};

const newGame = () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  previousGuesses = [];
  numGuesses = 1;
  lowOrHi.innerHTML = "";
  guessSlot.innerHTML = "";
  remaining.innerHTML = `${5 - numGuesses}`;
  userInput.removeAttribute("disabled");
  submit.removeAttribute("disabled");
  document.body.removeChild(document.querySelector("button"));
};
