export function compareNumbers(userGuess, randomNum){
    if (userGuess === randomNum) {
        return 0;
    } else if (userGuess < randomNum) {
        return -1;
    } else if (userGuess > randomNum) {
        return 1;
    }}