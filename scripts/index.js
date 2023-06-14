'use strict';

const editButtonElement = document.querySelector('.profile__btn-edit');
const closeButtonElemnt = document.querySelector('.popup__btn-close');
const popupElemnt = document.querySelector('.popup');

let formElement = document.querySelector('.popup__form')

let nameProfileElement = document.querySelector('.profile__name');
let aboutProfileElement = document.querySelector('.profile__about');
let namePopupElement = document.querySelector('.popup__input_el_name');
let aboutPopupElemnt = document.querySelector('.popup__input_el_about');

function openPopup() {
  popupElemnt.classList.toggle('popup_opened');
  namePopupElement.value = nameProfileElement.textContent;
  aboutPopupElemnt.value = aboutProfileElement.textContent;
}

function editProfile(e) {
  e.preventDefault();
  nameProfileElement.textContent = document.querySelector('.popup__input_el_name').value;
  aboutProfileElement.textContent = document.querySelector('.popup__input_el_about').value;
  popupElemnt.classList.toggle('popup_opened');
}

editButtonElement.addEventListener('click', openPopup);
closeButtonElemnt.addEventListener('click', openPopup);
formElement.addEventListener('submit', editProfile);