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
    this._galleryPhoto.src = this._link;
    this._galleryPhoto.alt = `Достопримечательность из ${this._name}`;
  }

  _handleClickDelete(btnDeleteCard) {
    const galleryItem = btnDeleteCard.closest('.gallery__item');
    galleryItem.remove();
  }

  _handleClickLike(e) {
    e.target.classList.toggle('gallery__like_active');
  }


  _setListeners() {
    const btnDeleteCard = this._newCard.querySelector('.gallery__delete');
    btnDeleteCard.addEventListener('click', () => this._handleClickDelete(btnDeleteCard));

    this._newCard.querySelector('.gallery__btn-like').addEventListener('click', (e) => this._handleClickLike(e));

    this._galleryPhoto.addEventListener('click', () => this._openImagePopup(this._name, this._link));
  }

  createCard() {
    this._newCard = this._getTemplate();
    this._galleryPhoto = this._newCard.querySelector('.gallery__photo');
    this._setData();
    this._setListeners();

    return this._newCard;
  }
}

export default Card;