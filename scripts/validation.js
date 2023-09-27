const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: ".modal__button_disabled",
  inputErrorClass: ".modal__error",
  errorClass: ".modal__input_type_error",
};

enableValidation(config);

// Find error message and adding it to the spanEl and changing styles
function showInputError(formEl, inputEl, errorMessage) {
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.add("modal__input_type_error");
  errorMessageEl.textContent = errorMessage;
}
//removes error classes from input and removes error message
function hideInputError(formEl, inputEl) {
  inputEl.classList.remove("modal__input_type_error");
  inputEl.classList.remove("modal__input_type_error");
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  errorMessageEl.textContent = "";
}
//checks if inputs are true, and passes them to according function
function checkInputValidity(formEl, inputEl) {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, inputEl.validationMessage);
  } else {
    hideInputError(formEl, inputEl);
  }
}

// Toggle the Submit button to disable
function toggleButtonState(inputEls, submitButton, options) {
  let foundInvalid = false;
  inputEls.forEach((input) => {
    if (!inputEl.validity.valid) {
      foundInvalid = true;
    }
  });

  if (foundInvalid) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
  } else {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
  }
}

//sets evt listeners and listens for inputs to send to the according function.
function setEventListeners(formEl, options) {
  const { inputSelector } = options;
  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  const submitButton = formEl.querySelector(".modal__button");
  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      checkInputValidity(formEl, inputEl, options);
      toggleButtonState(inputEl, submitButton, options);
    });
  });
}
//prevents evt default on submit event, and calls setEventListeners function
function enableValidation(options) {
  const formEls = [...document.querySelectorAll(options.formSelector)];
  formEls.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(formEl, options);
  });
}

const errorMessages = {
  "profile-title-input": "Please fill out this field.",
  "profile-description-input": "Please fill out this field.",
};
