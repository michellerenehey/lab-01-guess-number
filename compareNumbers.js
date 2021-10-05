export function compareNumbers(userInput, randomNum){
    if (userInput === randomNum) {
        return 0;
    } else if (userInput < randomNum) {
        return -1;
    } else if (userInput > randomNum) {
        return 1;
    }}