/**
 * Set Local Storage Utility
 * @description Checks local storage. if there is no 'answeredQuestions' item as an array, creates an empty array, if there is, pushes selected option to the array with an index of current question index.
 * @param {number} currentQuestionIndex - Index number of current question in quiz data.
 * @param {string} selectedAnswer - Selected option from keys of answers object in quiz data
 * @param {function} checkAnswer - Callback function.
 */
export const setLocalStorage = (
  currentQuestionIndex,
  selectedAnswer,
  checkAnswer
) => {
  let answeredQuestions =
    JSON.parse(localStorage.getItem('answeredQuestions')) || [];
  if (answeredQuestions) {
    answeredQuestions[currentQuestionIndex] = selectedAnswer;
    localStorage.setItem(
      'answeredQuestions',
      JSON.stringify(answeredQuestions)
    );
  } else {
    answeredQuestions[currentQuestionIndex] = selectedAnswer;
    localStorage.setItem(
      'answeredQuestions',
      JSON.stringify(answeredQuestions)
    );
  }
  checkAnswer(currentQuestionIndex);
};
