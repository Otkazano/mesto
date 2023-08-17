import SaintP from '../images/Saint-P.jpg';
import Baikal from '../images/Baikal.jpg';
import Gamsutl from '../images/Gamsutl.jpg';
import SaintP2 from '../images/Saint-P2.jpg';
import Moscow from '../images/Moscow.jpg';
import Arkhangelsk from '../images/Arkhangelsk.jpg';

export const initialCards = [
  {
    name: 'Металлострой',
    link: SaintP,
  },
  {
    name: 'Озеро Байкал',
    link: Baikal,
  },
  {
    name: 'Гамсутль',
    link: Gamsutl,
  },
  {
    name: 'Санкт-Петербург',
    link: SaintP2,
  },
  {
    name: 'Москва',
    link: Moscow,
  },
  {
    name: 'Архангельск',
    link: Arkhangelsk,
  }
];

export const CONFIG = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-save',
  profileNameSelector: '.profile__name',
  profileAboutSelector: '.profile__about',
  popupImageSelector: '.popup-image',
  popupNewImageSelector: '.popup-newImage',
  popupProfileSelector: '.popup-profile',
  gallerySelector: '.gallery',
  inactiveButtonClass: 'popup__btn-inactive',
  activeButtonClass: 'popup__btn-save',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error-message_active',
  templateSelector: '#template-gallery',
};