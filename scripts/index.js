'use strict'

// Попап редакции профиля

const editProfileButtonElement = document.querySelector('.profile__btn-edit')
const popupProfileElemnt = document.querySelector('.popup-profile')
const formProfileElement = document.querySelector('.popup-profile__form')

const nameProfileElement = document.querySelector('.profile__name')
const aboutProfileElement = document.querySelector('.profile__about')
const nameProfilePopupElement = document.querySelector(
  '.popup__input_el_name-profile'
)
const aboutProfilePopupElemnt = document.querySelector(
  '.popup__input_el_about-profile'
)

function openEditProfile () {
  popupProfileElemnt.classList.toggle('popup_opened')
  nameProfilePopupElement.value = nameProfileElement.textContent
  aboutProfilePopupElemnt.value = aboutProfileElement.textContent
}

function editProfile (e) {
  e.preventDefault()
  nameProfileElement.textContent = document.querySelector(
    '.popup__input_el_name-profile'
  ).value
  aboutProfileElement.textContent = document.querySelector(
    '.popup__input_el_about-profile'
  ).value
  popupProfileElemnt.classList.toggle('popup_opened')
}

editProfileButtonElement.addEventListener('click', openEditProfile)
formProfileElement.addEventListener('submit', editProfile)

// Добавление фото

const newImageButtonElement = document.querySelector('.profile__btn-add')
const popupNewImageElemnt = document.querySelector('.popup-newimage')

const formNewImageElement = document.querySelector('.popup-newimage__form')
const newImageNamePopupElement = document.querySelector(
  '.popup__input_el_name-newimage'
)
const newImageLinkPopupElemnt = document.querySelector(
  '.popup__input_el_link-newimage'
)

function openPopupNewImage () {
  popupNewImageElemnt.classList.toggle('popup_opened')
  newImageNamePopupElement.value = ''
  newImageLinkPopupElemnt.value = ''
}

newImageButtonElement.addEventListener('click', openPopupNewImage)

function createNewCard (e) {
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

  galleryElement.prepend(galleryItemElement)
  popupNewImageElemnt.classList.toggle('popup_opened')

  // Лайк
  const likeButtonElement = galleryElement.querySelector('.gallery__btn-like')
  likeButtonElement.addEventListener('click', function (event) {
    event.target.classList.toggle('gallery__like_active')
  })

  // Удалить карточки
  const deleteButtonElement = document.querySelector('.gallery__delete')
  deleteButtonElement.addEventListener('click', function () {
    const galleryItem = deleteButtonElement.closest('.gallery__item')
    galleryItem.remove()
  })

  // Открыть изображение
  const imagePopup = document.querySelector('.popup-image')
  const openImagePopupElement = galleryItemElement.querySelector(
    '.gallery__photo'
  )

  openImagePopupElement.addEventListener('click', function () {
    imagePopup.classList.toggle('popup_opened')
    document.querySelector(
      '.popup-image__about'
    ).textContent = galleryItemElement.querySelector(
      '.gallery__location'
    ).textContent
    document.querySelector(
      '.popup-image__img'
    ).src = galleryItemElement.querySelector('.gallery__photo').src
    document.querySelector(
      '.popup-image__img'
    ).alt = `Достопримечательность из: ${name}`
  })

  const closeImage = document.querySelector('.popup-image__btn-close')
  closeImage.addEventListener('click', function () {
    imagePopup.classList.remove('popup_opened')
  })
}

formNewImageElement.addEventListener('submit', createNewCard)

// Загрузка первых карточек на страницу

initialCards.forEach(function loadPackCards ({ name, link }) {
  const galleryTemplate = document.querySelector('#template-gallery').content
  const galleryElement = document.querySelector('.gallery')
  const galleryItemElement = galleryTemplate
    .querySelector('.gallery__item')
    .cloneNode(true)

  galleryItemElement.querySelector('.gallery__location').textContent = name
  galleryItemElement.querySelector('.gallery__photo').src = link
  galleryItemElement.querySelector(
    '.gallery__photo'
  ).alt = `Достопримечательность из: ${name}`

  galleryElement.prepend(galleryItemElement)

  // Лайк
  const likeButtonElement = galleryElement.querySelector('.gallery__btn-like')
  likeButtonElement.addEventListener('click', function (event) {
    event.target.classList.toggle('gallery__like_active')
  })

  // Удалить карточки
  const deleteButtonElement = document.querySelector('.gallery__delete')
  deleteButtonElement.addEventListener('click', function () {
    const galleryItem = deleteButtonElement.closest('.gallery__item')
    galleryItem.remove()
  })

  // Открыть изображение
  const imagePopup = document.querySelector('.popup-image')
  const openImagePopupElement = galleryItemElement.querySelector(
    '.gallery__photo'
  )

  openImagePopupElement.addEventListener('click', function () {
    imagePopup.classList.toggle('popup_opened')
    document.querySelector(
      '.popup-image__about'
    ).textContent = galleryItemElement.querySelector(
      '.gallery__location'
    ).textContent
    document.querySelector(
      '.popup-image__img'
    ).src = galleryItemElement.querySelector('.gallery__photo').src
    document.querySelector(
      '.popup-image__img'
    ).alt = `Достопримечательность из: ${name}`
  })

  const buttonCloseEditProfile = document.querySelector(
    '.popup-profile__btn-close'
  )
  const buttonCloseNewImage = document.querySelector(
    '.popup-newimage__btn-close'
  )
  const buttonCloseIamge = document.querySelector('.popup-image__btn-close')

  function closePopup () {
    imagePopup.classList.remove('popup_opened')
    popupNewImageElemnt.classList.remove('popup_opened')
    popupProfileElemnt.classList.remove('popup_opened')
  }

  buttonCloseEditProfile.addEventListener('click', closePopup)
  buttonCloseNewImage.addEventListener('click', closePopup)
  buttonCloseIamge.addEventListener('click', closePopup)
})
