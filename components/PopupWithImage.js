import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._popupImageImg = this._popup.querySelector('.popup-image__img');
    this._popupImageAbout = this._popup.querySelector('.popup-image__about');
  }

  open = (element) => {
    this._popupImageAbout.textContent = element.Popupname;
    this._popupImageImg.src = element.link;
    this._popupImageImg.alt = `Достопримечательность из: ${element.name}`;
    super.open();
  }
}