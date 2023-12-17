/**
 * Initializes welcome page. Places the components on welcome page and calls necessary methods.
 * @function startQuiz - Starts quiz initialize question page with first question.
 */
import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createWelcomeComponent } from '../components/welcomeComponent.js';
import { initQuestionPage } from './questionPage.js';

/**
 * initWelcomePage.
 * @description A page to show welcome page
 */
export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  const welcomeElement = createWelcomeComponent();
  userInterface.appendChild(welcomeElement);
  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};
const startQuiz = () => {
  initQuestionPage();
};
