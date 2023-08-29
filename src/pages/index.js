'use strict';
import './index.css';
import Card from "../components/Card.js";
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithAgree from '../components/PopupWithAgree.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import { CONFIG } from "../utils/constants.js";
import { btnPopupProfileOpen, popupProfile, popupProfileFormName, popupProfileFormAbout, btnPopupGalleryOpen, popupGallery, popupNewAvatar, btnPopupNewAvatar} from "../utils/elements.js";


function openPopupImage(name, link) {
  popupWithImage.open({ name, link });
};

function deleteCardHandel(id, card) {
  popupWithAgree.setSubmitAction(() => openPopupAgree(id, card));
  popupWithAgree.open();
}

function openPopupAgree(id, card) {
  api.deleteCard(id)
  .then(() => {
    card.removeCard();
    popupNewAvatar.close();
  })
  .catch((err) => {
    console.log(err);
  });
}

function likeCardHandle(id, isLiked, card) {
  if (isLiked) {
    api.dislikeCard(id)
    .then(() => {
      card.setLikes();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      card.setLikes()
    })
  } else {
    api.likeCard(id)
    .then(() => {
      card.setLikes();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      card.setLikes()
    })
  }
}

function createCard(data, id) {
  const card = new Card({
    data: data,
    funcOpenPopup: openPopupImage,
    funcDeleteCard: deleteCardHandel,
    funcLikeCard: likeCardHandle,
  }, CONFIG.templateSelector, id);
  return card.createCard();
};

function addNewCard(formData) {
  popupWithNewImage.renderSaving(true);

  api.createCard(formData)
  .then((data) => {
    cardsList.setItem(createCard(data, data.owner._id));
    popupWithNewImage.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    popupWithNewImage.renderSaving(false);
  })
};

function editProfile(formData) {
  popupWithProfile.renderSaving(true); 

  api.saveUserChanges(formData)
  .then((data) => {
    userInfo.setUserInfo(data);
    popupWithProfile.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    popupWithNewAvatar.renderSaving(false);
  })
};

function handlePopupNewAvatar(formData) {
  popupWithNewAvatar.renderSaving(true);

  api.changeUserAvatar(formData)
  .then((data) => {
    userInfo.setUserInfo(data);
    popupWithNewAvatar.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    popupWithNewAvatar.renderSaving(false);
  })
};

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

function openPopupNewAvatar () {
  popupNewAvatarValidate.resetFormErrors();
  popupNewAvatarValidate.toggleButtonState();
  popupWithNewAvatar.open();
}
btnPopupNewAvatar.addEventListener('click', openPopupNewAvatar);


const popupWithAgree = new PopupWithAgree(CONFIG.popupAgreeSelector);
popupWithAgree.setEventListeners();

const popupWithImage = new PopupWithImage(CONFIG.popupImageSelector);
popupWithImage.setEventListeners();

const popupWithNewImage = new PopupWithForm({ selector: CONFIG.popupNewImageSelector, submitFunction: addNewCard });
popupWithNewImage.setEventListeners();

const popupWithProfile = new PopupWithForm({ selector: CONFIG.popupProfileSelector, submitFunction: editProfile });
popupWithProfile.setEventListeners();

const popupWithNewAvatar = new PopupWithForm({ selector: CONFIG.popupNewAvatarSelector, submitFunction: handlePopupNewAvatar}) ;
popupWithNewAvatar.setEventListeners();

const userInfo = new UserInfo(CONFIG);

const cardsList = new Section({
  renderer: (data, id) => {
    cardsList.setItem(createCard(data, id));
  }
}, CONFIG.gallerySelector);


const popupProfileValidated = new FormValidator(CONFIG, popupProfile);
popupProfileValidated.enableValidation();

const popupGalleryValidated = new FormValidator(CONFIG, popupGallery);
popupGalleryValidated.enableValidation();

const popupNewAvatarValidate = new FormValidator(CONFIG, popupNewAvatar);
popupNewAvatarValidate.enableValidation();

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-74',
  headers: {
    authorization: '0413359d-1a9b-4aff-83cb-a2166bb3e79d',
    'Content-Type': 'application/json',
  }
});

Promise.all([
  api.getUserData(),
  api.getAllCards()
])
.then((values) => {
  console.log(values[0]);
  console.log(values[1]);

  userInfo.setUserInfo(values[0]);
  cardsList.renderItems(values[1], values[0]._id);
})
.catch((err) => {
  console.log(err);
});