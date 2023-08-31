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

// Buttons and other DOM Nodes
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditCloseButton = profileEditModal.querySelector(".modal__close");
const profileAddButton = document.querySelector("#profile-add-button");
const profileAddCloseButton = document.querySelector(
  "#profile-modal-add-close-button"
);
const addCreateButton = document.querySelector("#add-create-button");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const cardTemplate = document.querySelector("#card-template").content;

// Form Data
const profileEditForm = profileEditModal.querySelector("#edit-form");
const cardTitleInput = document.querySelector("#profile-add-title-input");
const cardUrlInput = document.querySelector("#profile-add-link-input");
/*-------------------------------------------------------------*/
/*                            Functions                        */
/*-------------------------------------------------------------*/
function closePopup(modal) {
  modal.classList.remove("modal__opened");
}

function closeAddPopup() {
  profileAddModal.classList.remove("modal__opened");
}

function openPopup(modal) {
  modal.classList.add("modal__opened");
}

function getCardElement(cardData) {
  console.log(cardData.name);
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__subtitle");
  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.link;
  cardTitleEl.textContent = cardData.name;
  return cardElement;
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
  var formData = new FormData(evt.target);

  const data = Object.fromEntries(formData);
  const cardElement = getCardElement({
    name: data.title,
    link: data.description,
  });

  cardListEl.prepend(cardElement);
  closePopup(profileAddModal);
}

/*-------------------------------------------------------------*/
/*                         Event Listeners                     */
/*-------------------------------------------------------------*/

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditModal);
});

profileEditCloseButton.addEventListener("click", closePopup(profileEditModal));

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});

closePopup(profileEditCloseButton);

profileAddButton.addEventListener("click", openPopup(profileAddModal));

profileAddCloseButton.addEventListener("click", closePopup(profileEditModal));

document
  .getElementById("add-card-form")
  .addEventListener("submit", handleAddCardFormSubmit);
