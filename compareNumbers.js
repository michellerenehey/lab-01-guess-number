export function compareNumbers(userInput, randomNum){
    if (userInput === randomNum) {
        return 'You win!!!';
    } else if (userInput < randomNum) {
        return 'You guessed too low!';
    } else if (userInput > randomNum) {
        return 'You guessed too high!';
    }}