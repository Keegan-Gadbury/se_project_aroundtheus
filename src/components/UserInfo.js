export default class UserInfo {
  constructor(userNameSelector, aboutSelector) {
    this._name = document.querySelector(userNameSelector);
    this._about = document.querySelector(aboutSelector);
  }

  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      about: this._about.textContent.trim(),
    };
    return userInfo;
  }

  setUserInfo({ title, description }) {
    this._name.textContent = title;
    this._about.textContent = description;
  }
}
