function showError(formElement, inputElement, errorMessage, config) {
  const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

function hideError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = ' ';
};

function checkInputValidity(formElement, inputElement, config) {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideError(formElement, inputElement, config);
  }
};

function setEventListeners(formElement, config) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = document.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, config);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {
    activeButtonSave(buttonElement, config);
  } else {
    inactiveButtonSave(buttonElement, config);
  }
}

function activeButtonSave(buttonElement, config) {
  buttonElement.classList.remove(config.activeButtonClass);
  buttonElement.classList.add(config.inactiveButtonClass);
};

function inactiveButtonSave(buttonElement, config) {
  buttonElement.classList.add(config.activeButtonClass);
  buttonElement.classList.remove(config.inactiveButtonClass);
}

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, config);
  });
};

enableValidation(CONFIG); 