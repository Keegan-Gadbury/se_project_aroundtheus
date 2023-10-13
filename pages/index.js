import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/*--------------------------------------------------------------*/
/*                          Elements                            */
/*--------------------------------------------------------------*/

// Wrappers
const profileEditModal = document.querySelector("#profile-edit-modal");
const cardListEl = document.querySelector(".cards__list");
const profileAddModal = document.querySelector("#profile-add-modal");
const profileEditFormElement = profileEditModal.querySelector(".modal__form");
const profileAddFormElement = profileAddModal.querySelector(".modal__form");

// Buttons and other DOM Nodes
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditCloseButton = profileEditModal.querySelector(".modal__close");
const profileAddButton = document.querySelector("#profile-add-button");
const profileAddCloseButton = document.querySelector(
  "#profile-modal-add-close-button"
);
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditSubmitButton = profileEditFormElement.querySelector(
  "#editModalSubmitButton"
);
profileEditFormElement.querySelector("#add-create-button");

// Form Data
const cardTitleInput = document.querySelector("#profile-add-title-input");
const cardUrlInput = document.querySelector("#profile-add-link-input");

// Preview Modal Data
const previewImageModal = document.querySelector("#preview-image-modal");
const previewImageCloseModal = document.querySelector(
  "#preview-modal-close-button"
);

const modalImage = document.querySelector("#preview-image-card");
const modalText = document.querySelector("#preview-image-title");
/*-------------------------------------------------------------*/
/*                            Functions                        */
/*-------------------------------------------------------------*/
function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openModal = document.querySelector(".modal_opened");
    closePopup(openModal);
  }
}

function openPopup(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeByEscape);
}

/*-------------------------------------------------------------*/
/*                         Event Handlers                      */
/*-------------------------------------------------------------*/
function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  const data = Object.fromEntries(formData);

  const cardElement = createCard({
    name: data.title,
    link: data.description,
  });

  profileAddFormElement.reset();
  addFormValidator.disableSubmitButton();

  cardListEl.prepend(cardElement);

  closePopup(profileAddModal);
}

function handleImagePreview(name, link) {
  modalImage.src = link;
  modalImage.alt = name;
  modalText.textContent = name;
  openPopup(previewImageModal);
}

/*-------------------------------------------------------------*/
/*                         Event Listeners                     */
/*-------------------------------------------------------------*/

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditModal);
});

profileEditFormElement.addEventListener("submit", handleProfileEditSubmit);

profileAddButton.addEventListener("click", () => {
  openPopup(profileAddModal);
});

profileAddFormElement.addEventListener("submit", handleAddCardFormSubmit);

const closeButtons = document.querySelectorAll(".modal__close");

closeButtons.forEach((button) => {
  const popup = button.closest(".modal");
  button.addEventListener("click", () => closePopup(popup));
});

[profileEditModal, profileAddModal, previewImageModal].forEach((modal) => {
  modal.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("modal")) {
      closePopup(modal);
    }
  });
});

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: ".modal__error",
  errorClass: ".modal__input_type_error",
};

const profileFormValidator = new FormValidator(config, profileEditFormElement);
profileFormValidator.enableValidation();

const addFormValidator = new FormValidator(config, profileAddFormElement);
addFormValidator.enableValidation();

initialCards.forEach((formData) => {
  const cardElement = createCard(formData);
  cardListEl.append(cardElement);
});

function createCard(formData) {
  const card = new Card(formData, "#card-template", handleImagePreview);
  return card.getView();
}
