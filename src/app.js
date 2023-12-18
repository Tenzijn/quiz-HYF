import '../public/style.scss';
import '../public/questionPage.scss';
import '../public/fireworks.scss';
import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
/**
 * Starts the app.
 * @description A function that starts the entire app by loading welcomePage
 */
const loadApp = () => {
  quizData.currentQuestionIndex = 0;

  initWelcomePage();
};

window.addEventListener('load', loadApp);
