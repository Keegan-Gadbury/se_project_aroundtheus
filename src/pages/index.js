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

// User Info

const userInfo = new UserInfo("#profile-title", "#profile-description");

// Add Picture Popup

const addPicPopup = new PopupWithForm(
  "#profile-add-modal",
  handleAddFormSubmit
);
addPicPopup.setEventListeners();

// Edit Profile Popup

const editProfileModal = new PopupWithForm(
  "#profile-edit-modal",
  handleEditProfileFormSubmit
);
editProfileModal.setEventListeners();

// Preview Modal

const imagePreview = new PopupWithImage("#preview-image-modal");
imagePreview.setEventListeners();
const cardSection = new Section(
  { items: initialCards, renderer: renderCard },
  ".cards__list"
);
function renderCard(data) {
  const card = new Card(data, "#card-template", () => handleImageClick(data));
  const element = card.getView();
  cardSection.addItem(element);
}

// Edit Profile Form Validator

const editFormValidator = new FormValidator(
  config,
  document.getElementById("edit-form")
);
editFormValidator.enableValidation();

// Add Picture Validator

const addFormValidator = new FormValidator(
  config,
  document.getElementById("add-card-form")
);
addFormValidator.enableValidation();

// Card Section

cardSection.renderItems();

// Functions

function handleImageClick(data) {
  imagePreview.open(data);
}

function handleAddFormSubmit(data) {
  renderCard(data);
  addPicPopup.close();
}

function handleEditProfileFormSubmit(data) {
  userInfo.setUserInfo(data);
  editProfileModal.close();
}

// Event Listeners

profileEditButton.addEventListener("click", () => {
  const data = userInfo.getUserInfo();
  profileTitleInput.value = data.name;
  profileDescriptionInput.value = data.about;
  editProfileModal.open();
});

profileAddButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  addPicPopup.open();
});
