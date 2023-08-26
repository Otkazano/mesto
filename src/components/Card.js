export default class Card {
  constructor({ name, link }, templateSelector, funcOpenPopup) {
    this._name = name;
    this._link = link;
    this._template = templateSelector;
    this._openImagePopup = funcOpenPopup;
    this._newCard = this._getTemplate();
    this._galleryItem = this._newCard.querySelector('.gallery__item');
    this._galleryPhoto = this._newCard.querySelector('.gallery__photo');
    this._btnDeleteCard = this._newCard.querySelector('.gallery__delete');
    this._btnLikeCard = this._newCard.querySelector('.gallery__btn-like');
  }

  _getTemplate() {
    return document
      .querySelector(this._template)
      .content.cloneNode(true);
  }

  _setData() {
    this._galleryItem.querySelector('.gallery__location').textContent = this._name;
    this._galleryPhoto.src = this._link;
    this._galleryPhoto.alt = `Достопримечательность из ${this._name}`;
  }

  _handleClickDelete() {
    this._galleryItem.remove();
  }

  _handleClickLike(e) {
    e.target.classList.toggle('gallery__likes-icon_active');
  }


  _setListeners() {
    this._btnDeleteCard.addEventListener('click', () => this._handleClickDelete());
    this._btnLikeCard.addEventListener('click', (e) => this._handleClickLike(e));
    this._galleryPhoto.addEventListener('click', () => this._openImagePopup(this._name, this._link));
  }

  createCard() {
    this._setData();
    this._setListeners();

    return this._newCard;
  }
}