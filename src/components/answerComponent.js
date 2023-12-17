/**
 * Answer Component
 * @description Creates a li element for each answer
 * @param {string}  key - Key of each answer in answers object in questions.
 * @param {string}  answerText - The value of each answer in answers object in questions.
 * @param {function} onSelect - Triggered when user selects an answer.
 * @function clickHandler - Calls onClick and disableClick functions.
 * @function disableClick - Disables clicking again when user choose an answer.
 * @returns {HTMLLIElement} - The li element as an option
 */
let clickHandlerFunctions = new Map();

export const createAnswerComponent = (key, answerText, onSelect) => {
  const element = document.createElement('li');
  element.id = key;
  element.innerHTML = String.raw`
    <label for="${key}">
      <input type="radio" name="answerItem" value=${key} id="${key}" />
    ${answerText}
    </label>
  `;
  const clickHandlerFunction = clickHandler(onSelect);
  element.addEventListener('click', clickHandlerFunction);
  clickHandlerFunctions.set(element, clickHandlerFunction);
  return element;
};

const clickHandler = function (onSelect) {
  return (e) => {
    e.stopPropagation();
    e.preventDefault();
    onSelect();
    disableClick();
  };
};

const disableClick = () => {
  const answerList = document.querySelectorAll('li');
  answerList.forEach((element) => {
    const clickHandlerFunction = clickHandlerFunctions.get(element);
    if (clickHandlerFunction) {
      element.removeEventListener('click', clickHandlerFunction);
      element.style.cssText += 'opacity: 0.5';
    }
  });
};
