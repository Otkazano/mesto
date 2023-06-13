'use strict';

const editButtonElement = document.querySelector('.profile__btn-edit');
const closeButtonElemnt = document.querySelector('.popup__btn-close');
const saveButtonElemnt = document.querySelector('.popup__btn-save');
const popupElemnt = document.querySelector('.popup');

let nameProfileElement = document.querySelector('.profile__name');
let aboutProfileElement = document.querySelector('.profile__about');

function openPopup() {
  popupElemnt.classList.toggle('popup__opened');
}

function editProfile() {
  nameProfileElement.textContent = document.querySelector('.popup__area-name').value;
  aboutProfileElement.textContent = document.querySelector('.popup__area-about').value;
  popupElemnt.classList.toggle('popup__opened');
}

editButtonElement.addEventListener('click', openPopup);
closeButtonElemnt.addEventListener('click', openPopup);
saveButtonElemnt.addEventListener('click', editProfile);