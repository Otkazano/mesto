export default class Popup {
  constructor(selector) {
    this._popup = document.getElementsByClassName(selector);
    this._buttonClosePopup = this._popup.querySelector(`.${selector__btn-close}`);
  }
  
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc);
  }

  _handleEscClose = (event) => {
    if (event.key === "Escape") {
      this.close();
    }
  }

  _handleCloseByOverlay  = (event) => {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  _handleCloseByButton  = () => {
      this.close();
  }

  setEventListeners() {
    this._popupCloseBtn.addEventListener('click', this._handleCloseByBtn);
    this._popup.addEventListener('click', this._handleCloseByOverlay)
  }
}