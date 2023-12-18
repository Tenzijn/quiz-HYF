import { USER_INTERFACE_ID } from '../constants.js';
import { createResultComponent } from '../components/resultComponent.js';
/**
 * Result Page
 * @description Initializes result page. Places the components on result page and calls necessary methods.
 * @returns {HTMLElement}
 */
export const initResultPage = () => {
  const element = document.getElementById(USER_INTERFACE_ID);
  element.innerHTML = ``;
  const resultElement = createResultComponent();
  element.appendChild(resultElement);
  return element;
};
