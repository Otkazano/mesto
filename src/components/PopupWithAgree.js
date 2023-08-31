import Popup from "./Popup.js";

export default class PopupWithAgree extends Popup {
  constructor(selector) {
    super(selector);
    this._form = this._popup.querySelector('.popup__form');
    this._btnSave = this._popup.querySelector('.popup__btn-save');
  }

  setSubmitAction(submitAction) {
    this._handleSubmitCallback = submitAction;
  }

  renderSaving(status){
    if(status){
      this._btnSave.textContent = 'Сохранение...';
    } else {
      this._btnSave.textContent = this._btnSaveText;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handleSubmitCallback();
    });
  }
}