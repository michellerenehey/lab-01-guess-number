//grab DOM elements from HTML
const userInput = document.getElementById('user-input');
const submitButton = document.getElementById('submit-button'); 
const timesGuessed = document.getElementById('times-guessed'); 
const userMessage = document.getElementById('user-message'); 
const resetButton = document.getElementById('reset-button'); 
const guessesRemaining = document.getElementById('guesses-remaining'); 
const rightCount = document.getElementById('correct-guess');
const wrongCount = document.getElementById('incorrect-guess');
const startOverButton = document.getElementById('new-game');

// set state 
let numGuesses = 4; 
let randomNum = (Math.floor(Math.random() * 20) + 1);
console.log(randomNum, 'first random number'); 
let correct = 0;
let incorrect = 0;


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
        correct++;
        rightCount.textContent = correct;
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
        incorrect++;     
        wrongCount.textContent = incorrect;   
    }

    if (compareNumbers(userGuess, randomNum) === -1) {
        result = 'You guessed too low!';
        incorrect++;
        wrongCount.textContent = incorrect;   
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

startOverButton.addEventListener('click', ()=>{
    numGuesses = 4;
    incorrect = 0;
    correct = 0;
    rightCount.textContent = '0';
    wrongCount.textContent= '0';
    userInput.value = ''; 
    userMessage.textContent = '';
    guessesRemaining.textContent = `You have ${numGuesses} guesses remaining.`;
    submitButton.style.display = 'block'; 
    resetButton.style.display = 'none'; 
});