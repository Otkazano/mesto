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
const popupProfileFormName = document.querySelector('.popup__input_el_name-profile');
const popupProfileFormAbout = document.querySelector('.popup__input_el_about-profile');

const formPoupProfile = document.querySelector('.popup-profile__form');
const btnPopupProfileClose = document.querySelector('.popup-profile__btn-close');

const btnPopupGalleryOpen = document.querySelector('.profile__btn-add');

const galleryElement = document.querySelector('.gallery');
const templateElement = document.querySelector('#template-gallery');

const popupGallery = document.querySelector('.popup-newimage');
const popupGalleryFormName = document.querySelector('.popup__input_el_name-newimage');
const popupGalleryFormLink = document.querySelector('.popup__input_el_link-newimage');

const formPopupGallery = document.querySelector('.popup-newimage__form');
const btnPopupGalleryClose = document.querySelector('.popup-newimage__btn-close');

const imagePopup = document.querySelector('.popup-image');

const popup = document.querySelector('.popup');

const buttonCloseEditProfile = document.querySelector('.popup-profile__btn-close');
const buttonCloseNewImage = document.querySelector('.popup-newimage__btn-close');
const buttonCloseIamge = document.querySelector('.popup-image__btn-close');
