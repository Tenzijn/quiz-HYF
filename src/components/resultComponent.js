/**
 * Creates a div element for showing the total score.
 * @function restartQuiz - Restarts the quiz, resets score.
 * @returns {HTMLDivElement} - The div element that keeps total score.
 */

import { RETRY_BUTTON_ID } from '../constants';
import { quizData } from '../data.js';
import { initQuestionPage } from '../pages/questionPage.js';

export const createResultComponent = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
	  <h1>Thank you </h1>
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
  initQuestionPage();
};
