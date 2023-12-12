import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { QUESTION_NUMBER_TRACKER_ID } from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionComponent = (question) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
<div id="${QUESTION_NUMBER_TRACKER_ID}">question number</div>
  `;

  return element;
};
