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
  const userGuess = Number(userInput.value); 
  if (userGuess === randomNum)
  
})