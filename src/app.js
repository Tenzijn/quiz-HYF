/**
 * Initializes application. Resets current question index. Calls welcome page on loading.
 */
import '../public/style.scss';
import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';

/**
 * start the app.
 * @description A function that starts the entire app by loading welcomePage
 */
const loadApp = () => {
  quizData.currentQuestionIndex = 0;

  initWelcomePage();
};

window.addEventListener('load', loadApp);
