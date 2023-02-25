
// Константы профиля

const profile = document.querySelector(".profile");
const editButton = profile.querySelector(".profile__edit-button");
const profileTitle = profile.querySelector(".profile__title");
const profileSubtitle = profile.querySelector(".profile__subtitle");
const popupProfile = document.querySelector(".popup_type_profile");
const closeButtonEdit = popupProfile.querySelector(".popup__close-button");
const formElement = document.querySelector(".form");
const nameInput = formElement.querySelector(".form__input_type_name");
const jobInput = formElement.querySelector(".form__input_type_about");
// Константы добавления фото

const addButton = document.querySelector(".profile__add-button");
const closeAddButton = document.querySelector(".popup__close-button_type_add");
const popupAdd = document.querySelector(".popup_type_add");
const formAdd = document.querySelector(".form_type_add");
const inputTitle = formAdd.querySelector(".form__input_type_title");
const inputLink = formAdd.querySelector(".form__input_type_link");
// Константы увеличения фото

const popupImagePicture = document.querySelector(".popup_type_images");
const closeButtonImage = popupImagePicture.querySelector(".popup__close-button-image");
const image = popupImagePicture.querySelector(".popup__image");
const imageName = popupImagePicture.querySelector(".popup__image-name");
const elementsContainer = document.querySelector(".elements");
const template = document.querySelector("#template__elements");



//Темплейты

const getCard = (item) => {
  const cardElement = template.content.cloneNode(true);
  const cardTitle = cardElement.querySelector(".elements__title");
  cardTitle.textContent = item.name;
  const cardImage = cardElement.querySelector(".elements__image");
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardElement
    .querySelector(".elements__like")
    .addEventListener("click", function (event) {
      event.target.classList.toggle("elements__like_active");
    });
  cardElement
    .querySelector(".elements__trash")
    .addEventListener("click", function (event) {
      event.target.closest(".elements__items").remove();
    });

   
  cardImage.addEventListener("click", function () {
    image.src = item.link;
    image.alt = item.name;
    imageName.textContent = item.name;
    openPopup(popupImagePicture);
  });
  return cardElement;
};

closeButtonImage.addEventListener("click", () => {
  closePopup(popupImagePicture);
});

const renderCard = (item, elementsContainer) => {
  elementsContainer.prepend(getCard(item));
};





formAdd.addEventListener("submit", (form) => {
  form.preventDefault();
  const newCardData = {
    name: inputTitle.value,
    link: inputLink.value,
  };
  form.target.reset();
  renderCard(newCardData, elementsContainer);
  closePopup(popupAdd);
});
initialCards.forEach(function (newCardData) {
  renderCard(newCardData, elementsContainer);
});


// Попап редактирования

editButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopup(popupProfile);
});

function handleProfileFormSubmit(profile) {
  profile.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupProfile);
}
closeButtonEdit.addEventListener("click", () => {
  closePopup(popupProfile);
});

formElement.addEventListener("submit", handleProfileFormSubmit);

// Попап добавления фото

addButton.addEventListener("click", () => {
  openPopup(popupAdd);
});
closeAddButton.addEventListener("click", () => {
  closePopup(popupAdd);
});


// Универсальные функции для Попап

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
function openPopup(popup) {
  popup.classList.add("popup_opened");
}