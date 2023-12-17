/**
 * Enable/Disable Next Button Utility
 * @function enableBtn - Enables next button.
 * @function disableBtn - Disables next button.
 */
export const enableBtn = (btnId) => {
  const btn = document.getElementById(btnId);
  btn.disabled = false;
};

export const disableBtn = (btnId) => {
  const btn = document.getElementById(btnId);
  btn.disabled = true;
};
