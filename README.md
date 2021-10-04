# Alchemy Bootstrap Template

## Making a plan

### HTML ELEMENTS
* Header: static
* User Input: static
* Button: static
* Number of guesses: dynamic (changes based on numGuesses)
* User message: dynamic (changes based on userGuesses)

### STATE
**userGuess**: will hold the value of the user input field 
**randomNum**: generate a random number between 1 -20 at the start of every game
**numGuesses**: increments 0 to 4 each time a user clicks the button
**userMessage** 
    * "you're correct!": userGuess === randomNum
    * "you're out of guesses": numGuesses > 4 (or numGuesses === 0)
    * "guess too high": userGuess > randomNum
    * "guess too low": userGuess < randomNum 
    * "invalid* --> stretch goal if userGuess > 20 or NaN

### JS
* Need to initialize the DOM elements listed above as dynamic
* Need to set the state, as listed above in state
* What events to listen for? 
    * Button click! On click, do the following: 
        * increment a guess;
        * get value of the user guess from the input (.value); dont' forget to convert to a number
        * compare userGuess to random Num: 
             - If (userGuess === randomNum) 
                  - Display you won!
             - Else if (numGuesses === 4) will this be diff if we count down? 
                  - Display you’re out of guesses 
             - Else if (userGuess > randomNum) 
                  - Display guess too high
             - Else if (userGuess < randomNum)
                  - Display guess too low


(bolded steps are mandatory, unbolded are for more advanced projects)

1) **Make a drawing of your app. Simple "wireframes"**
2) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
3) **For each HTML element ask: Why do I need this?**
4) Ask which of out HTML elements are hard coded, and which are dynamically generated?
5) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
6) Is there some state we need to initialize?
7) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
8) **Think about how to validate each of your steps**
9) Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
10) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
11) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**


## To Run Cypress Tests
* `npm install`
* `npm test`
* Cypress will open -- you should then click "run <#> integration spec(s)"
    ![](cypress.png)
* Make sure all tests pass