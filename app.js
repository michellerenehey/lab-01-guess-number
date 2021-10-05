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

// event listener
submitButton.addEventListener('click', () => {
    numGuesses --; 
    timesGuessed.textContent = numGuesses; 
    const userGuess = Number(userInput.value); 
    let result; 
    if (userGuess === randomNum){
        result = 'You win!!!'; 
        // guessesRemaining.textContent = "";
        // submitButton.style.display = "none";
        // resetButton.style.display = "block"; 
    } else if (numGuesses === 0) {
        result = "You're out of guesses :( :( :("; 
        submitButton.style.display = 'none';
        resetButton.style.display = 'block'; 
    } else if (userGuess > randomNum) {
        result = 'You guessed too high!'; 
    } else {
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
    timesGuessed.textContent = 4;
    submitButton.style.display = 'block'; 
    resetButton.style.display = 'none'; 
});