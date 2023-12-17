import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
/**
 * @description Creates a full question element
 * @param {string} question - The text of the question.
 * @returns {HTMLDivElement} - The full question element
 */
export const createQuestionComponent = (question) => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
  `;
  return element;
};
