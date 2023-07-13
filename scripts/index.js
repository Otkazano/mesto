'use strict';

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', () => closePopupByEsc(event, popup));
  popup.removeEventListener('click', () => closePopupByOverlayClick(event, popup));
};

function closePopupByEsc(event, popup) {
  if (event.key === "Escape") {
    closePopup(popup);
  };
};

function closePopupByOverlayClick(event, popup) {
  if (event.target === event.currentTarget) {
    closePopup(popup);
  };
};

buttonCloseEditProfile.addEventListener('click', () => closePopup(popupProfile));
buttonCloseNewImage.addEventListener('click', () => closePopup(popupGallery));
buttonCloseImage.addEventListener('click', () => closePopup(imagePopup));

function openPopupProfile() {
  popupProfileFormName.value = profileName.textContent;
  popupProfileFormAbout.value = profileAbout.textContent;
  const inputList = Array.from(popupProfile.querySelectorAll('.popup__input'));
  toggleButtonState(inputList, btnPopupProfileSave);
  hideError(popupProfile, popupProfileFormName);
  hideError(popupProfile, popupProfileFormAbout);
  openPopup(popupProfile);
  const popup = popupProfile;
  document.addEventListener('keydown', () => closePopupByEsc(event, popup));
  popup.addEventListener('click', () => closePopupByOverlayClick(event, popup));
};
btnPopupProfileOpen.addEventListener('click', openPopupProfile);


function editProfile(e) {
  e.preventDefault();
  profileName.textContent = popupProfileFormName.value;
  profileAbout.textContent = popupProfileFormAbout.value;
  closePopup(popupProfile);
};
formPopupProfile.addEventListener('submit', editProfile);


function openPopupGallery() {
  formPopupGallery.reset();
  const inputList = Array.from(popupGallery.querySelectorAll('.popup__input'));
  toggleButtonState(inputList, btnPopupGallerySave);
  hideError(popupGallery, popupGalleryFormName);
  hideError(popupGallery, popupGalleryFormLink);
  openPopup(popupGallery);
  const popup = popupGallery;
  document.addEventListener('keydown', () => closePopupByEsc(event, popup));
  popup.addEventListener('click', () => closePopupByOverlayClick(event, popup));
};
btnPopupGalleryOpen.addEventListener('click', openPopupGallery);


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
    imagePopupAbout.textContent = name;
    imagePopupImage.src = link;
    imagePopupImage.alt = `Достопримечательность из: ${name}`;
    openPopup(imagePopup);
    const popup = imagePopup;
    document.addEventListener('keydown', () => closePopupByEsc(event, popup));
    popup.addEventListener('click', () => closePopupByOverlayClick(event, popup));
  });

  return galleryItem;
}


function addNewCard(e) {
  e.preventDefault();
  const name = popupGalleryFormName.value;
  const link = popupGalleryFormLink.value;
  const galleryItem = createCard({
    name,
    link
  });
  galleryElement.prepend(galleryItem);
  closePopup(popupGallery);
};
formPopupGallery.addEventListener('submit', addNewCard);


initialCards.forEach(item => {
  const galleryItem = createCard(item);
  galleryElement.prepend(galleryItem);
});