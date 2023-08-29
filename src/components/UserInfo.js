export default class UserInfo {
  constructor(config) {
    this._nameElement = this._getElement(config.profileNameSelector);
    this._aboutElement = this._getElement(config.profileAboutSelector);
    this._avatarElement = this._getElement(config.profileAvatarSelector);
  }

  _getElement(selector) {
    return document.querySelector(selector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent
    };
  }

  setUserInfo({ name, about, avatar }) {
    this._nameElement.textContent = name;
    this._aboutElement.textContent = about;
    this._avatarElement = avatar;
  }
}