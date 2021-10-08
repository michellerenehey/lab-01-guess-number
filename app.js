//grab DOM elements from HTML
const userInput = document.getElementById('user-input');
const submitButton = document.getElementById('submit-button'); 
const timesGuessed = document.getElementById('times-guessed'); 
const userMessage = document.getElementById('user-message'); 
const resetButton = document.getElementById('reset-button'); 
const guessesRemaining = document.getElementById('guesses-remaining'); 

// set state 
let numGuesses = 4; 
let randomNum = (Math.floor(Math.random() * 20) + 1);
console.log(randomNum, 'first random number'); 


// import function
import { compareNumbers } from './compareNumbers.js';

// event listener
submitButton.addEventListener('click', () => {
    numGuesses --; 
    timesGuessed.textContent = numGuesses; 
    const userGuess = Number(userInput.value); 
    let result; 
    
    if (compareNumbers(userGuess, randomNum) === 0) {
        result = 'You win!!!'; 
        guessesRemaining.textContent = '';
        submitButton.style.display = 'none';
        resetButton.style.display = 'block';
    }

    if (numGuesses === 0) {
        result = "You're out of guesses :( :( :("; 
        guessesRemaining.textContent = '';
        submitButton.style.display = 'none';
        resetButton.style.display = 'block';         
    }

    if (compareNumbers(userGuess, randomNum) === 1) {
        result = 'You guessed too high!';         
    }

    if (compareNumbers(userGuess, randomNum) === -1) {
        result = 'You guessed too low!';
    }
    
    userMessage.textContent = result;
});

  
resetButton.addEventListener('click', () => {
    numGuesses = 4; 
    randomNum = (Math.floor(Math.random() * 20) + 1);
    console.log(randomNum, 'new random number');
    userInput.value = ''; 
    userMessage.textContent = ''; 
    guessesRemaining.textContent = `You have ${numGuesses} guesses remaining.`;
    submitButton.style.display = 'block'; 
    resetButton.style.display = 'none'; 
});