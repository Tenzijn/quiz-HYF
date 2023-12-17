import { START_QUIZ_BUTTON_ID } from '../constants.js';
/**
 * Welcome Component
 * @description Creates a div element for showing the landing page components.
 * @returns {HTMLDivElement} - The div element that keeps timer.
 */
export const createWelcomeComponent = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1>Welcome</h1>
    <button id="${START_QUIZ_BUTTON_ID}">start quiz</button>
  `;
  return element;
};
