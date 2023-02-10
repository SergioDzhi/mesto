
const popupButtonOpen = document.querySelector(".profile__edit-button");

const popupContainer = document.querySelector(".popup");
const popupButtonClose = document.querySelector(".popup__close");

const formElement = document.querySelector(".form");
const nameInput = document.querySelector(".form__info_type_name");
const jobInput = document.querySelector(".form__info_type_job");

const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");




function openPopup() {
  popupContainer.classList.add("popup_opened");
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function closePopup() {
  popupContainer.classList.remove("popup_opened");
}

function handleFormSubmit (evt) {
    evt.preventDefault();

    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;

    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);
popupButtonOpen.addEventListener("click", openPopup);
popupButtonClose.addEventListener("click", closePopup);













