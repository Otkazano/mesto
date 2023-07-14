'use strict';

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
};

function closePopupByEsc(event) {
  if (event.key === "Escape") {
    closePopup(document.querySelector('.popup_opened'));
  };
};

function closePopupByOverlayClick(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.currentTarget);
  };
};

function setEventListenersToOverlay () {
  const overlayList = Array.from(document.querySelectorAll('.popup'));
  overlayList.forEach((element) => {
    element.addEventListener('click', closePopupByOverlayClick);
  });
};

setEventListenersToOverlay();

buttonCloseEditProfile.addEventListener('click', () => closePopup(popupProfile));
buttonCloseNewImage.addEventListener('click', () => closePopup(popupGallery));
buttonCloseImage.addEventListener('click', () => closePopup(imagePopup));

function cleanErrors (list, popup) {
  list.forEach((element) => {
    hideError(popup, element, CONFIG);
  });
};

function openPopupProfile() {
  popupProfileFormName.value = profileName.textContent;
  popupProfileFormAbout.value = profileAbout.textContent;
  const inputList = Array.from(popupProfile.querySelectorAll(CONFIG.inputSelector)); 
  toggleButtonState(inputList, btnPopupProfileSave, CONFIG);
  cleanErrors (inputList, popupProfile);
  openPopup(popupProfile);
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
  const inputList = Array.from(popupGallery.querySelectorAll(CONFIG.inputSelector)); 
  toggleButtonState(inputList, btnPopupGallerySave, CONFIG);
  cleanErrors (inputList, popupGallery);
  openPopup(popupGallery);
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