export default class UserInfo {
  constructor(userNameSelector, aboutSelector, profileImageElement) {
    this._name = document.querySelector(userNameSelector);
    this._about = document.querySelector(aboutSelector);
    this._profileImage = profileImageElement;
  }

  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      about: this._about.textContent.trim(),
    };
    return userInfo;
  }

  setUserInfo({ name, about }) {
    this._name.textContent = name;
    this._about.textContent = about;
  }

  setProfileImage(link) {
    this._profileImage.src = link;
  }
}
