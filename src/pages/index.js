'use strict';
import './index.css';
import Card from "../components/Card.js";
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import { initialCards, CONFIG } from "../utils/constants.js";
import { btnPopupProfileOpen, popupProfile, popupProfileFormName, popupProfileFormAbout, btnPopupGalleryOpen, popupGallery } from "../utils/elements.js";


function openPopupImage(name, link) {
  popupWithImage.open({ name, link });
};

function createCard(element, templateSelector, func) {
  const card = new Card(element, templateSelector, func);
  return card.createCard();
};

function addNewCard(formData) {
  const cardElement = createCard({ name: formData['nameNewImage'], link: formData['linkNewImage'] }, CONFIG.templateSelector, openPopupImage);
  cardsList.setItem(cardElement);
};

function editProfile(formData) {
  userInfo.setUserInfo(formData);
}

function openPopupProfile() {
  const { name, about } = userInfo.getUserInfo();
  popupProfileFormName.value = name;
  popupProfileFormAbout.value = about;
  popupProfileValidated.resetFormErrors();
  popupProfileValidated.toggleButtonState();
  popupWithProfile.open();
};
btnPopupProfileOpen.addEventListener('click', openPopupProfile);

function openPopupGallery() {
  popupGalleryValidated.resetFormErrors();
  popupGalleryValidated.toggleButtonState();
  popupWithNewImage.open();
};
btnPopupGalleryOpen.addEventListener('click', openPopupGallery);


const popupWithImage = new PopupWithImage(CONFIG.popupImageSelector);
popupWithImage.setEventListeners();

const popupWithNewImage = new PopupWithForm({ selector: CONFIG.popupNewImageSelector, submitFunction: addNewCard });
popupWithNewImage.setEventListeners();

const popupWithProfile = new PopupWithForm({ selector: CONFIG.popupProfileSelector, submitFunction: editProfile });
popupWithProfile.setEventListeners();

const userInfo = new UserInfo(CONFIG);

const cardsList = new Section({
  items: initialCards,
  renderer: element => {
    const cardElement = createCard(element, CONFIG.templateSelector, openPopupImage);
    cardsList.setItem(cardElement);
  }
}, CONFIG.gallerySelector);
cardsList.renderItems();

const popupProfileValidated = new FormValidator(CONFIG, popupProfile);
popupProfileValidated.enableValidation();

const popupGalleryValidated = new FormValidator(CONFIG, popupGallery);
popupGalleryValidated.enableValidation();