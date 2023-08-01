'use strict';
import Card from "./Card.js";
import { initialCards, CONFIG } from "./constants.js";
import FormValidator from './validate.js';

export function openPopup(popup) {
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

function setEventListenersToOverlay() {
  const overlayList = Array.from(document.querySelectorAll('.popup'));
  overlayList.forEach((element) => {
    element.addEventListener('click', closePopupByOverlayClick);
  });
};

setEventListenersToOverlay();

buttonCloseEditProfile.addEventListener('click', () => closePopup(popupProfile));
buttonCloseNewImage.addEventListener('click', () => closePopup(popupGallery));
buttonCloseImage.addEventListener('click', () => closePopup(imagePopup));

function cleanErrors(list, popup) {
  list.forEach((element) => {
    FormValidator.hideError(popup, element, CONFIG);
  });
};

function openPopupProfile() {
  popupProfileFormName.value = profileName.textContent;
  popupProfileFormAbout.value = profileAbout.textContent;
  const inputList = Array.from(popupProfile.querySelectorAll(CONFIG.inputSelector));
  FormValidator.toggleButtonState(inputList, btnPopupProfileSave, CONFIG);
  cleanErrors(inputList, popupProfile);
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
  FormValidator.toggleButtonState(inputList, btnPopupGallerySave, CONFIG);
  cleanErrors(inputList, popupGallery);
  openPopup(popupGallery);
};
btnPopupGalleryOpen.addEventListener('click', openPopupGallery);


function createCard({ name, link}, config ) {
  const galleryItem = new Card({ name, link }, config.templateSelector );
  galleryElement.prepend(galleryItem.createCard());

  return galleryItem;
}

function addNewCard(e) {
  e.preventDefault();
  const name = popupGalleryFormName.value;
  const link = popupGalleryFormLink.value;
  createCard ({ name , link }, CONFIG);
  closePopup(popupGallery);
};
formPopupGallery.addEventListener('submit', addNewCard);


initialCards.forEach(item => {
  createCard (item, CONFIG);
});