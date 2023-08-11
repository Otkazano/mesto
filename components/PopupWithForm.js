import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor (selector, submitFunction) {
    super(selector);
    this._submitFunction = submitFunction;
    this._form = this._popup.querySelector('.popup__form');
    this._inputsList = this._form.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    this._values = {};
    this._inputsList.forEach(item => {
      this._values[item.id] = item.value;
    });

    return this._values
  }

  setInputValue(userData) {
    this._inputsList.forEach(item => {
      item.value = userData[item.id];
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submitFunction);
  }
}