// export const initialCards = [
//   {
//     name: "Yosemite Valley",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
//   },
//   {
//     name: "Lake Louise",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
//   },
//   {
//     name: "Bald Mountains",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
//   },
//   {
//     name: "Latemar",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
//   },
//   {
//     name: "Vanoise National Park",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
//   },
//   {
//     name: "Lago di Braies",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
//   },
// ];

/*--------------------------------------------------------------*/
/*                          Elements                            */
/*--------------------------------------------------------------*/

export const profileEditModal = document.querySelector("#profile-edit-modal");
export const cardListSelector = ".cards__list";
export const cardListEl = document.querySelector(cardListSelector);
export const profileAddModal = document.querySelector("#profile-add-modal");
export const profileEditFormElement =
  profileEditModal.querySelector(".modal__form");
export const profileAddFormElement =
  profileAddModal.querySelector(".modal__form");
// export const deleteCardButton =

// Buttons and other DOM Nodes
export const profileEditButton = document.querySelector("#profile-edit-button");
export const profileEditCloseButton =
  profileEditModal.querySelector(".modal__close");
export const profileAddButton = document.querySelector("#profile-add-button");
export const profileAddCloseButton = document.querySelector(
  "#profile-modal-add-close-button"
);
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const profileTitleInput = document.querySelector("#profile-title-input");
export const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
export const profileEditSubmitButton = profileEditFormElement.querySelector(
  "#editModalSubmitButton"
);
profileEditFormElement.querySelector("#add-create-button");

export const profilePictureSubmitModalButton = document.querySelector(
  ".modal__button_profile"
);

// Form Data
export const cardTitleInput = document.querySelector(
  "#profile-add-title-input"
);
export const cardUrlInput = document.querySelector("#profile-add-link-input");

// Preview Modal Data
export const previewImageModal = document.querySelector("#preview-image-modal");
export const previewImageCloseModal = document.querySelector(
  "#preview-modal-close-button"
);

export const modalImage = document.querySelector("#preview-image-card");
export const modalText = document.querySelector("#preview-image-title");

// Form Validation classes

export const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: ".modal__error",
  errorClass: ".modal__input_type_error",
};

export const profileModalForm = profileEditModal.querySelector(".modal__form");

export const profileImageEditPopup = document.querySelector(
  "#edit-profile-image-modal"
);
export const profileImageEditButton = document.querySelector(
  "#profile-image-edit-button"
);
