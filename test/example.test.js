// IMPORT MODULES under test here:
import { compareNumbers } from '../compareNumbers.js';

const test = QUnit.test;

test('compare numbers function (5,5)', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess = 5; 
    const correctNumber = 5; 
    
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('compare numbers function (0,5)', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess = 0; 
    const correctNumber = 5; 
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
