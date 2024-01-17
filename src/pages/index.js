import "../pages/index.css";

// Importing classes
import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import {
  // initialCards,
  profileEditModal,
  cardListEl,
  cardListSelector,
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
  profileImageEditButton,
  profileImageEditPopup,
  profilePictureSubmitModalButton,
  deleteCardButton,
  config,
} from "../utils/constants.js";

// User Info

const userInfo = new UserInfo("#profile-title", "#profile-description");

// Modals

const addPicPopup = new PopupWithForm(
  "#profile-add-modal",
  handleAddFormSubmit
);
addPicPopup.setEventListeners();

const editProfileModal = new PopupWithForm(
  "#profile-edit-modal",
  handleEditProfileFormSubmit
);
editProfileModal.setEventListeners();

const profilePictureEditPopup = new PopupWithForm(
  "#edit-profile-image-modal",
  handleProfilePictureEditSubmit
);

profilePictureEditPopup.setEventListeners();

const deleteCardModal = new PopupWithForm(
  "#delete-image-modal",
  handleDeleteImageSubmit
);

const imagePreview = new PopupWithImage("#preview-image-modal");
imagePreview.setEventListeners();

// Validators

const editFormValidator = new FormValidator(
  config,
  document.getElementById("edit-form")
);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(
  config,
  document.getElementById("add-card-form")
);
addFormValidator.enableValidation();

// Functions

function handleImageClick(data) {
  imagePreview.open(data);
}

function handleAddFormSubmit(data) {
  renderCard(data);
  api.addCard(data);
  addPicPopup.close();
}

function handleEditProfileFormSubmit(data) {
  userInfo.setUserInfo(data);
  editProfileModal.close();
}

function handleProfilePictureEditSubmit(data) {
  userInfo.editProfileImage(data);
  profilePictureEditPopup.close();
}

function handleDeleteImageSubmit(data) {}

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

profileImageEditButton.addEventListener("click", () => {
  profilePictureEditPopup.open();
});

// deleteCardButton.addEventListener("click", () => {
//   deleteCardModal.open();
// });

// profilePictureSubmitModalButton.addEventListener("click", () => {
//   console.log(profilePictureSubmitModalButton);
//   profilePictureEditPopup.close();
// });

let cardSection;

function renderCard(data) {
  const card = new Card(data, "#card-template", () => handleImageClick(data));
  const element = card.getView();
  cardSection.addItem(element);
}

// API Setup

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "7739976c-9dc6-43c2-bc75-8784e64b22c6",
    "Content-Type": "application/json",
  },
});

api
  .getInitialCards()
  .then((cards) => {
    cardSection = new Section(
      {
        items: cards,
        renderer: renderCard,
      },
      cardListSelector
    );
    cardSection.renderItems();
  })
  .catch((err) => {
    console.error(err);
  });

api
  .getUserInfo()
  .then((user) => {
    userInfo.setUserInfo(user);
    userInfo.setProfileImage(user.avatar);
  })
  .catch((err) => {
    console.error(err);
  });
