'use strict';

function openPopup(e) {
  e.classList.add('popup_opened');
}

function closePopup() {
  const opened = document.querySelector('.popup_opened');
  opened.classList.remove('popup_opened');
}

buttonCloseEditProfile.addEventListener('click', closePopup);
buttonCloseNewImage.addEventListener('click', closePopup);
buttonCloseIamge.addEventListener('click', closePopup);

// Открытие Попапа Редактирования Профиля

function openPopupProfile() {
  openPopup(popupProfile);
  popupProfileFormName.value = profileName.textContent;
  popupProfileFormAbout.value = profileAbout.textContent;
}
btnPopupProfileOpen.addEventListener('click', openPopupProfile);

// Отправка Формы Редактирования Профиля

function editProfile(e) {
  e.preventDefault();
  profileName.textContent = popupProfileFormName.value;
  profileAbout.textContent = popupProfileFormAbout.value;
  closePopup();
}
formPoupProfile.addEventListener('submit', editProfile);

// Открытие Попапа Новых Карточек

function openPopupGallery() {
  openPopup(popupGallery);
  popupGalleryFormName.value = '';
  popupGalleryFormLink.value = '';
}
btnPopupGalleryOpen.addEventListener('click', openPopupGallery);

// Создание Карточек

function createCard({ name, link }) {
  const clone = templateElement.content.cloneNode(true);
  const galleryItem = clone.querySelector('.gallery__item');
  galleryItem.querySelector('.gallery__location').textContent = name;
  galleryItem.querySelector('.gallery__photo').src = link;
  galleryItem.querySelector(
    '.gallery__photo'
  ).alt = `Достопримечательность из ${name}`;

  const btnDeleteCard = galleryItem.querySelector('.gallery__delete');
  btnDeleteCard.addEventListener('click', function () {
    const galleryItem = btnDeleteCard.closest('.gallery__item');
    galleryItem.remove();
  });

  const btnLikeCard = galleryItem.querySelector('.gallery__btn-like');
  btnLikeCard.addEventListener('click', function (event) {
    event.target.classList.toggle('gallery__like_active');
  });

  const openImagePopupElement = galleryItem.querySelector('.gallery__photo');

  openImagePopupElement.addEventListener('click', function () {
    imagePopup.classList.toggle('popup_opened');
    imagePopup.querySelector('.popup-image__about').textContent = name;
    imagePopup.querySelector('.popup-image__img').src = link;
    imagePopup.querySelector(
      '.popup-image__img'
    ).alt = `Достопримечательность из: ${name}`;
  });

  return galleryItem;
}

// Добавление Карточек

function addNewCard(e) {
  e.preventDefault();
  const name = popupGalleryFormName.value;
  const link = popupGalleryFormLink.value;
  const galleryItem = createCard({
    name,
    link
  });
  galleryElement.prepend(galleryItem);
  closePopup();
}
formPopupGallery.addEventListener('submit', addNewCard);

// Рендер Начальных Карточек
initialCards.forEach(item => {
  const galleryItem = createCard(item);
  galleryElement.prepend(galleryItem);
});
