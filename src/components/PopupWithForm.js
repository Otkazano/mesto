import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ selector, submitFunction }) {
    super(selector);
    this._submitFunction = submitFunction;
    this._form = this._popup.querySelector('.popup__form');
    this._inputsList = this._form.querySelectorAll('.popup__input');
    this._btnSave = this._popup.querySelector('.popup__btn-save');
    this._btnSaveText = this._btnSave.textContent;
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _getInputValues() {
    this._values = {};
    this._inputsList.forEach(input => {
      this._values[input.id] = input.value;
    });

    return this._values;
  }

  _handleSubmit(e) {
    e.preventDefault();
    this._submitFunction(this._getInputValues());
    this.close();
  }

  renderSaving(status){
    if(status){
      this._btnSave.textContent = 'Сохранение...';
    } else {
      this._btnSave.textContent = this._btnSaveText;
    }
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handleSubmit);
  }
}