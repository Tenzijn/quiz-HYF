import { RETRY_BUTTON_ID } from '../constants';
import { quizData } from '../data.js';
import { initQuestionPage } from '../pages/questionPage.js';
import { giveComplement } from '../utils/giveComplement.js';
/**
 * Result Component
 * @description Creates a div element for showing the total score.
 * @function restartQuiz - Restarts the quiz, resets score.
 * @returns {HTMLDivElement} - The div element that keeps total score.
 */
export const createResultComponent = () => {
  const evaluation = giveComplement(quizData.totalScore);
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1>Your Score is: <span id="totalScore">${quizData.totalScore} / 10</span></h1>
    <div id="evaluation">
    <h2>${evaluation}</h2>
    </div>
    <button id="${RETRY_BUTTON_ID}">RETRY</button>
    `;
  element
    .querySelector(`#${RETRY_BUTTON_ID}`)
    .addEventListener('click', restartQuiz);
  return element;
};

const restartQuiz = () => {
  localStorage.setItem('answeredQuestions', JSON.stringify([]));
  quizData.currentQuestionIndex = 0;
  quizData.totalScore = 0;
  initQuestionPage();
};
