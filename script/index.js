const initialCards = [
  
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];




// Создание разметки HTML Element

const createCard = (name, link) => {
  const placeElements = document.querySelector(".elements")
  const articleElement = document.createElement("article")
  articleElement.classList.add('element')
  placeElements.appendChild(articleElement)

  const btnTrash = document.createElement("button-trash")
  btnTrash.classList.add("element__button-trash")
  btnTrash.setAttribute("type", "button")
  articleElement.appendChild(btnTrash)
  
  const imageElement = document.createElement("img")
  imageElement.classList.add('element__image')
  imageElement.setAttribute("src", link)
  imageElement.setAttribute("alt", name)
  articleElement.appendChild(imageElement)
  
  const elementContent = document.createElement("div")
  elementContent.classList.add("element__content")
  articleElement.appendChild(elementContent)
  
  const titleElement = document.createElement("h2")
  titleElement.classList.add("element__title")
  titleElement.textContent = name
  elementContent.appendChild(titleElement)
  
  const btnLike = document.createElement("button")
  btnLike.classList.add("element__button-like")
  btnLike.setAttribute("type", "button")
  elementContent.appendChild(btnLike)
}
  



initialCards.forEach((card) => {
  createCard(card.name, card.link)
})











const popupButtonOpen = document.querySelector(".profile__edit-button");

const popupContainer = document.querySelector(".popup_type_profile");
const popupButtonClose = document.querySelector(".popup__close_profile");

const formElement = document.querySelector(".form__edit");
const nameInput = document.querySelector(".form__info_type_name");
const jobInput = document.querySelector(".form__info_type_job");

const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");






const popupButtonСardAdd = document.querySelector('.profile__add-button');
const popupСardAdd = document.querySelector('.popup_type_cards');
const popupСardClose = document.querySelector('.popup__close_card');

const cardElement = document.querySelector(".form__add");
const placeInput = document.querySelector('.form__input_type_place');
const imagelinkInput = document.querySelector('.popup__input_type_src');

const inputType = document.querySelector(".form__input_type_place")



const imageZoom = document.querySelector('.popup_type_zoom-image')






//Открытие Попап профиля

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
// Слушатели

formElement.addEventListener('submit', handleFormSubmit);
popupButtonOpen.addEventListener("click", openPopup);
popupButtonClose.addEventListener("click", closePopup);









// Добавление карточки

function openPopupCard() {

  popupСardAdd.classList.add("popup__card_opened");

  
}
function closePopupCard() {
  popupСardAdd.classList.remove("popup__card_opened");
}

function handleFormCard (evt) {
  evt.preventDefault();

  // let nameCard = evt.target.form__input_type_place.value;
  // let linkCard = evt.target.form__input_type_src.value;

  
  // initialCards.push({name: nameCard, link: linkCard})

  closePopupCard();
}



cardElement.addEventListener('submit', handleFormCard);
popupButtonСardAdd.addEventListener("click", openPopupCard);
popupСardClose.addEventListener("click", closePopupCard);



// function handleFormAddCard (event) {
//   event.preventDefault();
//   const  linkCard = event.textContent
//   const  nameCard = event.textContent
//   profileTitle.textContent = nameInput.value;
//   profileSubtitle.textContent = linkInput.value;

//   initialCards.unshift({name: nameCard, link: linkCard})


//   closePopupCreateCard();
// }

// createCardBtn.addEventListener('click', handleFormAddCard);

// popupButtonPlaceOpen.addEventListener("click", openPopupCreateCard);
// popupButtonPlaceClose.addEventListener("click", closePopupCreateCard);













