export default class Card {
  constructor({ data, funcOpenPopup, funcDeleteCard, funcLikeCard }, templateSelector, userId) {
    this._name = data.name;
    this._link = data.link;
    this._idOwner = data.owner._id;
    this._idCard = data._id;
    this._likes = data.likes;
    this._template = templateSelector;
    this._openImagePopup = funcOpenPopup;
    this._handleClickDelete = funcDeleteCard;
    this._handleClickLike = funcLikeCard;
    this._userId = userId;
    this._newCard = this._getTemplate();
    this._galleryItem = this._newCard.querySelector('.gallery__item');
    this._galleryPhoto = this._newCard.querySelector('.gallery__photo');
    this._btnDeleteCard = this._newCard.querySelector('.gallery__delete');
    this._btnLikeCard = this._newCard.querySelector('.gallery__btn-like');
    this._quantityLikes = this._newCard.querySelector('.gallery__likes-quantity');
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
    if (this._userId !== this._idOwner) {
      this._btnDeleteCard.remove('gallery__delete');
    };
  }

  removeCard() {
    this._galleryItem.remove();
    this._galleryItem = null;
  }

  _checkLike() {
    return this._likes.some(like => {
      return like._id === this._userId;
    });
  }

  setLikes(arr) {
    this._quantityLikes.textContent = arr.length;
    this._likes = arr;
    if (this._checkLike()) {
      this._btnLikeCard.classList.add('gallery__likes-icon_active');
    } else {
      this._btnLikeCard.classList.remove('gallery__likes-icon_active');
    }
  }

  _setListeners() {
    this._btnDeleteCard.addEventListener('click', () => this._handleClickDelete(this._idCard, this));
    this._btnLikeCard.addEventListener('click', () => this._handleClickLike(this._idCard, this._checkLike(), this));
    this._galleryPhoto.addEventListener('click', () => this._openImagePopup(this._name, this._link));
  }

  createCard() {
    this._setData();
    this.setLikes(this._likes);
    this._setListeners();

    return this._newCard;
  }
}