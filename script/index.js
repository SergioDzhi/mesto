const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const profileTitle = profile.querySelector('.profile__title');

const addButton = document.querySelector('.profile__add-button');
const closeAddButton = document.querySelector('.popup__close-button_type_add');
const popupAdd = document.querySelector('.popup_type_add');
const formAdd = document.querySelector('.form_type_add');
const inputTitle = formAdd.querySelector('.form__input_type_title');
const inputLink = formAdd.querySelector('.form__input_type_link');
const saveAddButton = formAdd.querySelector('.form__edit-button_type_save');


const profileSubtitle = profile.querySelector('.profile__subtitle');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-button');
const formElement = document.querySelector('.form');
const nameInput = formElement.querySelector('.form__input_type_name');
const jobInput = formElement.querySelector('.form__input_type_about');
const submitButton = formElement.querySelector('.form__edit-button');

const  initialCards = [
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

const popupImage = document.querySelector('.popup__images');
const closeButtonImage = popupImage.querySelector('.popup__close-button-image');
const image = popupImage.querySelector('.popup__image');
const imageName = popupImage.querySelector('.popup__image-name');
const elements = document.querySelector('.elements');
const template = document.getElementById('template__elements');
let getCard = (item) => {
  let cardElement = template.content.cloneNode(true);
  let cardTitle = cardElement.querySelector('.elements__title');
  cardTitle.textContent = item.name;
  let cardImage = cardElement.querySelector('.elements__image');
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardElement.querySelector('.elements__like').addEventListener('click', function(event) {
    event.target.classList.toggle('elements__like_active');
   });
  cardElement.querySelector('.elements__trash').addEventListener('click', function(event) {
  event.target.closest('.elements__items').remove();
  })
  
  cardImage.addEventListener('click', function() {
    image.src = item.link;
    image.alt = item.name;
    imageName.textContent = item.name;
    handleImageButtonClick(popupImage);

  });

  elements.prepend(cardElement);
  return cardElement;
};


let renderCard = (item, elements) => {
  elements.prepend(getCard(item));
}
formAdd.addEventListener('submit', (event) => {
  event.preventDefault();
  let inputsNameLink = {
    name: inputTitle.value,
    link: inputLink.value
  };
  renderCard(inputsNameLink, elements);
  handleCloseAddButtonClick();
})
initialCards.forEach(function (inputsNameLink) {
  renderCard(inputsNameLink, elements);
})


function handleImageCloseButtonClick () {
  popupImage.classList.remove('popup_opened');
}

function handleImageButtonClick () {
  popupImage.classList.add('popup_opened');
}
function handleEditButtonClick () {
    popup.classList.add('popup_opened');
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
}
function handleCloseButtonClick () {
  popup.classList.remove('popup_opened');
}

function handleAddButtonClick () {
  popupAdd.classList.add('popup_opened');
}

function handleCloseAddButtonClick () {
  popupAdd.classList.remove('popup_opened');
}

function handleFormSubmit (event) {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  handleCloseButtonClick();
}





editButton.addEventListener('click', handleEditButtonClick);
closeButton.addEventListener('click', handleCloseButtonClick);
formElement.addEventListener('submit', handleFormSubmit);
addButton.addEventListener('click', handleAddButtonClick);
closeAddButton.addEventListener('click',  handleCloseAddButtonClick);
closeButtonImage.addEventListener('click',  handleImageCloseButtonClick);