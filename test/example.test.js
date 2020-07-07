// IMPORT MODULES under test here:
// import example from '../example.js';
import {translateToAYes} from '../src/translate-to-a-yes/translate-to-a-yes.js';

const test = QUnit.test;

test('it should take in a string, and check that the first character begins with y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const testString1 = "Yay";

    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = translateToAYes(testString1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should take in a string, and check that the first character begins with y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const testString2 = "Yes";

    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = translateToAYes(testString2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should take in a string, and check that the first character begins with y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const testString3 = "yeah";

    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = translateToAYes(testString3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should take in a string, and check that the first character begins with y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const testString4 = "    yessir";

    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = translateToAYes(testString4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should take in a string, and check that the first character begins with y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const testString5 = "   yAssAuummms";

    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = translateToAYes(testString5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should take in a string, and check that the first character begins with y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const testString6 = "    definitelyNO";

    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = translateToAYes(testString6);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



