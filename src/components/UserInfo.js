export default class UserInfo {
  constructor(config) {
    this._nameElement = this._getElement(config.profileNameSelector);
    this._aboutElement = this._getElement(config.profileAboutSelector);
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

  setUserInfo({ nameProfile, aboutProfile }) {
    this._nameElement.textContent = nameProfile;
    this._aboutElement.textContent = aboutProfile;
  }
}