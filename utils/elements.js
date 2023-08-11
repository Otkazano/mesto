const btnPopupProfileOpen = document.querySelector('.profile__btn-edit');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const popupProfile = document.querySelector('.popup-profile');
const formPopupProfile = document.querySelector('.popup-profile__form');
const popupProfileFormName = formPopupProfile.querySelector('.popup__input_el_name-profile');
const popupProfileFormAbout = formPopupProfile.querySelector('.popup__input_el_about-profile');

const btnPopupGalleryOpen = document.querySelector('.profile__btn-add');

const galleryElement = document.querySelector('.gallery');

const popupGallery = document.querySelector('.popup-newimage');
const formPopupGallery = document.querySelector('.popup-newimage__form');
const popupGalleryFormName = formPopupGallery.querySelector('.popup__input_el_name-newimage');
const popupGalleryFormLink = formPopupGallery.querySelector('.popup__input_el_link-newimage');

const imagePopup = document.querySelector('.popup-image');

const buttonCloseEditProfile = document.querySelector('.popup-profile__btn-close');
const buttonCloseNewImage = document.querySelector('.popup-newimage__btn-close');
const buttonCloseImage = document.querySelector('.popup-image__btn-close');

const imagePopupAbout = imagePopup.querySelector('.popup-image__about');
const imagePopupImage = imagePopup.querySelector('.popup-image__img');