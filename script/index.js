
const popupButtonOpen = document.querySelector(".profile__edit-button");

const popupContainer = document.querySelector(".popup");
const popupButtonClose = document.querySelector(".popup_close");

const formElement = document.querySelector(".form");
const nameInput = document.querySelector(".form__info_type_name");
const jobInput = document.querySelector(".form__info_type_job");

const profileTitle = document.querySelector(".profile-info__title");
const profileSubtitle = document.querySelector(".profile-info__subtitle");

popupButtonOpen.addEventListener("click", openPopup);
popupButtonClose.addEventListener("click", closePopup);

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

    console.log(nameInput.value);
    console.log(jobInput.value);

    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;

    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);














