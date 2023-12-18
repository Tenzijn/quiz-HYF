import { TIMER_COMPONENT_ID, TIMER_SECONDS } from '../constants';
import { quizData } from '../data';

/**
 * Timer Component
 * @description Creates a div element for showing the timer.
 * @param {function} onFinish - Triggered when the timer counter reaches zero.
 * @function setCounter - Sets timer when the question change.
 * @function appendTimer - Appends a timer to the div element.
 * @returns {HTMLDivElement} - The div element that keeps timer.
 */
export const createTimerComponent = (onFinish) => {
  const element = document.createElement('div');
  element.id = TIMER_COMPONENT_ID;
  element.className = 'timer-component';
  element.innerHTML = appendTimer(TIMER_SECONDS);
  setCounter(element, onFinish);
  return element;
};

const setCounter = (element, onFinish) => {
  let seconds = TIMER_SECONDS;

  // to clear the timer if the user clicks on the next question button
  if (quizData.timerId) {
    clearInterval(quizData.timerId);
  }

  quizData.timerId = setInterval(() => {
    if (seconds === 0) {
      clearInterval(quizData.timerId);
      onFinish();
      return;
    }
    element.innerHTML = appendTimer(--seconds);
  }, 1000);
};

const appendTimer = (seconds) => {
  // second turn in percentage
  // 100% = 20 seconds
  const percentage = (seconds / TIMER_SECONDS) * 100;

  return String.raw`
  <div class="statusbar orange">
	  <span style="width: ${percentage}%"></span>
  </div>
  `;
};
