import { START_QUIZ_BUTTON_ID } from '../constants.js';
/**
 * Welcome Component
 * @description Creates a div element for showing the landing page components.
 * @returns {HTMLDivElement} - The div element that keeps timer.
 */
export const createWelcomeComponent = () => {
  const element = document.createElement('div');
  element.classList.add('card');
  element.innerHTML = String.raw`
  <img src="./assets/logo.webp" alt="quiz" class='logo' />
  <h2>Welcome - (TEAM LEGO)</h2>
  <p>
  This is HackYourFuture's JavaScript quiz project. <br />
  You have 20 seconds to answer each question. <br />
  <br />
  Team: Nouran Mahmoud(Mentor) <br/> 
  Erhan (Student) and 
  Tenzin Kunchok (Student) <br />
  <br />
  </p>
  
    <button id="${START_QUIZ_BUTTON_ID}" class='start-btn'>Start Quiz</button>

  `;
  return element;
};
