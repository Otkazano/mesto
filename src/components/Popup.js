export default class Popup {
  constructor(selector) {
    this._selector = selector;
    this._popup = this._getPopup();
    this._buttonClosePopup = this._popup.querySelector('.popup__btn-close');
  }

  _getPopup() {
    return document.querySelector(this._selector);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (event) => {
    if (event.key === "Escape") {
      this.close();
    }
  }

  _handleCloseByOverlay = (event) => {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  _handleCloseByButton = () => {
    this.close();
  }

  setEventListeners() {
    this._buttonClosePopup.addEventListener('click', this._handleCloseByButton);
    this._popup.addEventListener('mousedown', this._handleCloseByOverlay)
  }
}