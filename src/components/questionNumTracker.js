import { QUESTION_NUMBER_TRACKER_ID } from '../constants';
/**
 * @description Creates a div element for tracking the current question number.
 * @param {number}  currentQuestionNumber - The id of question.
 * @param {number}  totalQuestions - The length of questions array.
 * @returns {HTMLDivElement} - The div element that keeps track of the current question
 */
export const questionNumberTracker = (
  currentQuestionNumber,
  totalQuestions
) => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <div id="${QUESTION_NUMBER_TRACKER_ID}">Question ${currentQuestionNumber} of ${totalQuestions}</div>
  `;
  return element;
};
