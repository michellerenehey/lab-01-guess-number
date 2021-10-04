//grab DOM elements from HTML
const userInput = document.getElementById('user-input');
const submitButton = document.getElementById('submit-button'); 
const timesGuessed = document.getElementById('times-guessed'); 
const userMessage = document.getElementById('user-message'); 

// set state 
let numGuesses = 0; 
const randomNum = (Math.floor(Math.random() * 20)+1);


// event listener
submitButton.addEventListener('click', () => {
  numGuesses ++; 
  timesGuessed.textContent = numGuesses; 
  const userGuess = Number(userInput.value); 
  let result; 
  if (userGuess === randomNum){
    result = "You win"
  } else if (numGuesses === 4) {
    result = "You're out of guesses"; 
    submitButton.style.display = "none";
  } else if (userGuess > randomNum) {
    result = "You guessed too high"
  } else {
    result = "You guessed too low"
  }; 
  userMessage.textContent = result;
  });