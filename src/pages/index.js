import "../pages/index.css";

// Importing classes
import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  profileEditModal,
  cardListEl,
  profileAddModal,
  profileEditFormElement,
  profileAddFormElement,
  profileEditButton,
  profileAddButton,
  profileAddCloseButton,
  profileTitle,
  profileDescription,
  profileTitleInput,
  profileDescriptionInput,
  profileEditSubmitButton,
  cardTitleInput,
  cardUrlInput,
  previewImageModal,
  previewImageCloseModal,
  modalImage,
  modalText,
  config,
} from "../utils/constants.js";

// Form  Validators

const addImageModal = new PopupWithForm(
  "#profile-add-modal",
  handleAddFormSubmit
);

const addPicPopup = new PopupWithForm(
  "#profile-add-modal",
  profileEditSubmitButton
);
addPicPopup.setEventListeners();

const editProfileModal = new PopupWithForm(
  "#profile-edit-modal",
  handleEditProfileFormSubmit
);
editProfileModal.setEventListeners();
profileEditButton.addEventListener("click", editProfileModal.open);

const editFormValidator = new FormValidator(
  config,
  document.getElementById("edit-form")
);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(
  config,
  document.getElementById("add-card-form")
);
editFormValidator.enableValidation();

// User Info

const userInfo = new UserInfo(".profile__title", ".profile__description");

// Functions

function handleImageClick(card) {
  const data = {
    link: card.src,
    name: card.alt,
  };
  imagePreview.open(data);
}

function handleAddFormSubmit(data) {
  userInfo.setUserInfo(data);
  editProfileModal.close();
}

function handleEditProfileFormSubmit(data) {
  userInfo.setUserInfo(data);
  editProfileModal.close();
}

// Event Listeners

profileEditButton.addEventListener("click", () => {
  const data = userInfo.getUserInfo();
  profileTitle.value = data.name;
  profileDescription.value = data.about;
  editFormValidator.resetValidation();
  editProfileModal.open();
});

profileAddButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  addImageModal.open();
});

// Preview Modal

const imagePreview = new PopupWithImage("#preview-image-modal");
imagePreview.setEventListeners();

// Section

function renderCard(data) {
  const card = new Card(data, "#card-template", handleImageClick);
  const element = card.getView();
  cardSection.addItem(element);
}

const cardSection = new Section(
  { items: initialCards, renderer: renderCard },
  ".cards__list"
);

cardSection.renderItems();
