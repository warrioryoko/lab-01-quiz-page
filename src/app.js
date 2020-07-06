// import functions and grab DOM elements
import {translateToAYes} from './translate-to-a-yes/translate-to-a-yes.js';

const startQuizButton = document.getElementById('start-quiz-button');

// initialize state

// set event listeners to update state and DOM

startQuizButton.onclick = () => {
  alert('We are about to start the quiz!');
  const quizConfirm = confirm('Would you like to start the quiz?');
}