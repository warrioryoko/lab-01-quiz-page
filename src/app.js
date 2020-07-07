// import functions and grab DOM elements
import {translateToAYes} from './translate-to-a-yes/translate-to-a-yes.js';

const startQuizButton = document.getElementById('start-quiz-button');
const displayResults = document.getElementById('score-goes-here');
// initialize state



// set event listeners to update state and DOM

startQuizButton.onclick = () => {
  let numberCorrect = 0;

  alert('We are about to start the quiz!');
  const userName = prompt('tell me your name: ');
  const quizStartConfirm = confirm(`Well, ${userName}, would you like to start the quiz?`);
  console.log(quizStartConfirm);

  if (quizStartConfirm) {
    const userAnswer1 = prompt(`Okay ${userName}, first question (yes/no)`);
      if (userAnswer1 === 'y') {
        numberCorrect++;
      }
    
    const userAnswer2 = prompt(`Here is the second question, ${userName} (yes/no)`);
    if (userAnswer2 === 'y') {
      numberCorrect++;
    }

    const userAnswer3 = prompt(`Get ready ${userName}, here is the third question (yes/no)`);
    if (userAnswer3 === 'n') {
      numberCorrect++;
    }

    console.log(numberCorrect);

    const quizEndConfirm = alert(`Alright, ${userName} we are done. Your results will be displayed below!`);

    let resultsString = `Hey ${userName}, your score is ${numberCorrect} out of 3.`
    
    displayResults.textContent = resultsString;

  } else {
    return;
  }
}