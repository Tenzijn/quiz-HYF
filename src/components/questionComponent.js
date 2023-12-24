import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
/**
 * Question Component
 * @description Creates a full question element
 * @param {string} question - The text of the question.
 * @returns {HTMLDivElement} - The full question element
 */

export const createQuestionComponent = (question) => {
  const element = document.createElement('div');
  element.classList.add('card');
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}" class='next-btn'>
      Next question
    </button>
  `;
  return element;
};
