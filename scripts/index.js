'use strict'

// popup for editing the profile

const editProfileButtonElement = document.querySelector('.profile__btn-edit')
const closeProfileButtonElemnt = document.querySelector(
  '.popup-profile__btn-close'
)
const popupProfileElemnt = document.querySelector('.popup-profile')

const formProfileElement = document.querySelector('.popup-profile__form')

const nameProfileElement = document.querySelector('.profile__name')
const aboutProfileElement = document.querySelector('.profile__about')
const nameProfilePopupElement = document.querySelector(
  '.popup-profile__input_el_name'
)
const aboutProfilePopupElemnt = document.querySelector(
  '.popup-profile__input_el_about'
)

function openAndClosePopupEditProfile () {
  popupProfileElemnt.classList.toggle('popup_opened')
  nameProfilePopupElement.value = nameProfileElement.textContent
  aboutProfilePopupElemnt.value = aboutProfileElement.textContent
}

function editProfile (e) {
  e.preventDefault()
  nameProfileElement.textContent = document.querySelector(
    '.popup-profile__input_el_name'
  ).value
  aboutProfileElement.textContent = document.querySelector(
    '.popup-profile__input_el_about'
  ).value
  popupProfileElemnt.classList.toggle('popup_opened')
}

editProfileButtonElement.addEventListener('click', openAndClosePopupEditProfile)
closeProfileButtonElemnt.addEventListener('click', openAndClosePopupEditProfile)
formProfileElement.addEventListener('submit', editProfile)

// popup for creating a new image

const newImageButtonElement = document.querySelector('.profile__btn-add')
const closeNewImageButtonElemnt = document.querySelector(
  '.popup-newimage__btn-close'
)
const popupNewImageElemnt = document.querySelector('.popup-newimage')

const formNewImageElement = document.querySelector('.popup-newimage__form')
const newImageNamePopupElement = document.querySelector(
  '.popup-newimage__input_el_name'
)
const newImageLinkPopupElemnt = document.querySelector(
  '.popup-newimage__input_el_link'
)

function openAndClosePopupNewImage () {
  popupNewImageElemnt.classList.toggle('popup_opened')
  newImageNamePopupElement.value = ''
  newImageLinkPopupElemnt.value = ''
}

function createNewImage (e) {
  e.preventDefault()
  const galleryTemplate = document.querySelector('#template-gallery').content
  const galleryElement = document.querySelector('.gallery')

  const galleryItemElement = galleryTemplate
    .querySelector('.gallery__item')
    .cloneNode(true)

  galleryItemElement.querySelector('.gallery__location').textContent =
    newImageNamePopupElement.value
  galleryItemElement.querySelector('.gallery__photo').src =
    newImageLinkPopupElemnt.value
  galleryItemElement.querySelector(
    '.gallery__photo'
  ).alt = `Достопримечательность из: ${newImageNamePopupElement.value}`

  galleryElement.prepend(galleryItemElement);
  popupNewImageElemnt.classList.toggle('popup_opened');

  // Likes
  const likeButtonElement = galleryElement.querySelector('.gallery__btn-like')

  likeButtonElement.addEventListener('click', function (event) {
    event.target.classList.toggle('gallery__like_active');
  })

  // Delete cards

  const deleteButtonElement = document.querySelector('.gallery__delete')

  deleteButtonElement.addEventListener('click', function () {
    const galleryItem = deleteButtonElement.closest('.gallery__item')
    galleryItem.remove()
  })
}

newImageButtonElement.addEventListener('click', openAndClosePopupNewImage)
closeNewImageButtonElemnt.addEventListener('click', openAndClosePopupNewImage)
formNewImageElement.addEventListener('submit', createNewImage)

// loading start pack cards

initialCards.forEach(function loadPackCards ({name, link}) {
  const galleryTemplate = document.querySelector('#template-gallery').content
  const galleryElement = document.querySelector('.gallery')

  const galleryItemElement = galleryTemplate
    .querySelector('.gallery__item')
    .cloneNode(true)

  galleryItemElement.querySelector('.gallery__location').textContent =
    name
  galleryItemElement.querySelector('.gallery__photo').src =
    link
  galleryItemElement.querySelector(
    '.gallery__photo'
  ).alt = `Достопримечательность из: ${name}`

  galleryElement.prepend(galleryItemElement);

  // Likes
  const likeButtonElement = galleryElement.querySelector('.gallery__btn-like')

  likeButtonElement.addEventListener('click', function (event) {
    event.target.classList.toggle('gallery__like_active');
  })

  // Delete cards

  const deleteButtonElement = document.querySelector('.gallery__delete')

  deleteButtonElement.addEventListener('click', function () {
    const galleryItem = deleteButtonElement.closest('.gallery__item')
    galleryItem.remove()
  });
});
