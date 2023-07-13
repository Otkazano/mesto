const initialCards = [
  {
    name: 'Металлострой',
    link: './images/Saint-P.jpg'
  },
  {
    name: 'Озеро Байкал',
    link: './images/Baikal.jpg'
  },
  {
    name: 'Гамсутль',
    link: './images/Gamsutl.jpg'
  },
  {
    name: 'Санкт-Петербург',
    link: './images/Saint-P2.jpg'
  },
  {
    name: 'Москва',
    link: './images/Moscow.jpg'
  },
  {
    name: 'Архангельск',
    link: './images/Arkhangelsk.jpg'
  }
];

const btnPopupProfileOpen = document.querySelector('.profile__btn-edit');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const popupProfile = document.querySelector('.popup-profile');
const formPopupProfile = document.querySelector('.popup-profile__form');
const popupProfileFormName = formPopupProfile.querySelector('.popup__input_el_name-profile');
const popupProfileFormAbout = formPopupProfile.querySelector('.popup__input_el_about-profile');
const btnPopupProfileClose = document.querySelector('.popup-profile__btn-close');
const btnPopupProfileSave = document.querySelector('.popup-profile__btn-save');

const btnPopupGalleryOpen = document.querySelector('.profile__btn-add');

const galleryElement = document.querySelector('.gallery');
const templateElement = document.querySelector('#template-gallery');

const popupGallery = document.querySelector('.popup-newimage');
const formPopupGallery = document.querySelector('.popup-newimage__form');
const popupGalleryFormName = formPopupGallery.querySelector('.popup__input_el_name-newimage');
const popupGalleryFormLink = formPopupGallery.querySelector('.popup__input_el_link-newimage');
const btnPopupGalleryClose = document.querySelector('.popup-newimage__btn-close');
const btnPopupGallerySave = document.querySelector('.popup-newimage__btn-save');

const imagePopup = document.querySelector('.popup-image');

const popup = document.querySelector('.popup');

const buttonCloseEditProfile = document.querySelector('.popup-profile__btn-close');
const buttonCloseNewImage = document.querySelector('.popup-newimage__btn-close');
const buttonCloseImage = document.querySelector('.popup-image__btn-close');

const imagePopupAbout = imagePopup.querySelector('.popup-image__about');
const imagePopupImage = imagePopup.querySelector('.popup-image__img');

const CONFIG = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-save',
  inactiveButtonClass: '.popup__button_disabled',
  inputErrorClass: '.popup__input_type_error',
  errorClass: '.error-message_active'
};