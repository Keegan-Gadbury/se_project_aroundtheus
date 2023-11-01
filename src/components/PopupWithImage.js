import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._imageElement = document.querySelector(".modal__image-preview");
    this._imageCaption = document.querySelector(".card__description");
  }

  open(data) {
    this._imageElement.src = data.link;
    this._imageElement.alt = data.name;
    this._imageCaption.textContent = data.name;
    super.open();
  }
}
