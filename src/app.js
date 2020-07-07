// import functions and grab DOM elements
import {translateToAYes} from './translate-to-a-yes/translate-to-a-yes.js';

const startQuizButton = document.getElementById('start-quiz-button');
const displayResults = document.getElementById('score-goes-here');
const resultsElement = document.getElementById('results');
// initialize state



// set event listeners to update state and DOM

startQuizButton.onclick = () => {
  let numberCorrect = 0;

  alert('We are about to start the quiz!');
  const userName = prompt('tell me your name: ');
  const quizStartConfirm = confirm(`Well, ${userName}, would you like to start the quiz?`);
  console.log(quizStartConfirm);

  if (quizStartConfirm) {
    const userAnswer1 = prompt(`Okay ${userName}, first question: Is our lord and savior RJ college educated? (yes/no)`);
      if (userAnswer1 === 'y') {
        numberCorrect++;
      }
    
    const userAnswer2 = prompt(`Here is the second question, ${userName}: Was RJ driven to extinction by really bad singing? (yes/no)`);
    if (userAnswer2 === 'y') {
      numberCorrect++;
    }

    const userAnswer3 = prompt(`Get ready ${userName}, here is the third question: Can RJ turn water into Wine? (yes/no)`);
    if (userAnswer3 === 'n') {
      numberCorrect++;
    }

    console.log(numberCorrect);
    let percentCorrect = Number(numberCorrect/3).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0});
    // Attributing code example: https://stackoverflow.com/questions/45163256/how-to-format-numbers-as-percentage-values-in-javascript

    const quizEndConfirm = alert(`Alright, ${userName} we are done. Your results will be displayed below!`);

    if (numberCorrect === 3) {
      resultsElement.classList.add('excellent');
    } else if (numberCorrect === 2) {
      resultsElement.classList.add('adequate');
    } else if (numberCorrect === 1) {
      resultsElement.classList.add('poor');
    } else if (numberCorrect === 0) {
      resultsElement.classList.add('fail');
    }

    let resultsString = `Hey ${userName}, your score is ${percentCorrect}`;
    
    displayResults.textContent = resultsString;

  } else {
    return;
  }
}