export default class UserInfo {
  constructor(userNameSelector, aboutSelector) {
    this._name = document.querySelector(userNameSelector);
    this._about = document.querySelector(aboutSelector);
  }

  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      about: this._about.textContent,
    };
    return userInfo;
  }

  setUserInfo({ userNameSelector, aboutSelector }) {
    this._name.textcontent = userNameSelector;
    this._about.textContent = aboutSelector;
  }
}
