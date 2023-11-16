export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeButton = this._popupElement.querySelector(".modal__close");
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeOnRemoteClick = this._closeOnRemoteClick.bind(this);
  }

  open() {
    this._popupElement.classList.add("modal__opened");
    document.addEventListener("keydown", this._handleEscClose);
    this._popupElement.addEventListener("mousedown", this._closeOnRemoteClick);
  }

  close() {
    this._popupElement.classList.remove("modal__opened");
    document.removeEventListener("keydown", this._handleEscClose);
    this._popupElement.removeEventListener(
      "mousedown",
      this._closeOnRemoteClick
    );
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _closeOnRemoteClick(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
      this.close();
    });
  }
}
