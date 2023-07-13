function showError (formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup___error-message_active');
};

function hideError (formElement, inputElement) {
  const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup___error-message_active');
  errorElement.textContent = ' ';
};

function checkInputValidity (formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement);
  }
};

function setEventListeners (formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = document.querySelector('.popup__btn-save');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.remove('popup__btn-save');
    buttonElement.classList.add('popup__btn-inactive');
  } else {
    buttonElement.classList.add('popup__btn-save');
    buttonElement.classList.remove('popup__btn-inactive');
  }
}

function enableValidation(listSelectors) {
  const formList = Array.from(document.querySelectorAll(listSelectors.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, listSelectors);
  });
};

enableValidation(CONFIG); 