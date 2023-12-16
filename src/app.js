/**
 * Initializes application. Resets current question index. Calls welcome page on loading.
 */
import '../public/style.scss';
import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;

  initWelcomePage();
};

window.addEventListener('load', loadApp);
