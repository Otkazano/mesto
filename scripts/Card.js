import { openPopup } from './index.js';

class Card {
  constructor({ name, link }, templateSelector, funcOpenPopup) {
    this._name = name;
    this._link = link;
    this._template = templateSelector;
    this._openImagePopup = funcOpenPopup;
  }

  _getTemplate() {
    const templateElement = document
      .querySelector(this._template)
      .content.cloneNode(true);

    return templateElement;
  }

  _setData() {
    const galleryItem = this._newCard.querySelector('.gallery__item');
    galleryItem.querySelector('.gallery__location').textContent = this._name;
    galleryItem.querySelector('.gallery__photo').src = this._link;
    galleryItem.querySelector(
      '.gallery__photo'
    ).alt = `Достопримечательность из ${this._name}`;
  }

  _handleClickDelete(btnDeleteCard) {
    const galleryItem = btnDeleteCard.closest('.gallery__item');
    galleryItem.remove();
  }

  _handleClickLike(e) {
    e.target.classList.toggle('gallery__like_active');
  }

  _handleOpenImage() {
    imagePopupAbout.textContent = this._name;
    imagePopupImage.src = this._link;
    imagePopupImage.alt = `Достопримечательность из: ${this._name}`;
    openPopup(imagePopup);
  }

  _setListeners() {
    const btnDeleteCard = this._newCard.querySelector('.gallery__delete');
    btnDeleteCard.addEventListener('click', () => this._handleClickDelete(btnDeleteCard));

    this._newCard.querySelector('.gallery__btn-like').addEventListener('click', (e) => this._handleClickLike(e));

    this._newCard.querySelector('.gallery__photo').addEventListener('click', () => this._handleOpenImage());
  }

  createCard() {
    this._newCard = this._getTemplate();
    this._setData();
    this._setListeners();

    return this._newCard;
  }
}

export default Card;