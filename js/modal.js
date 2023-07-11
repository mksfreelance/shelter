import { featModalText } from "./feat-modal-text.js";

const modalBlackout = document.querySelector('.blackout');
const modalContainer = document.querySelector('.modal');


const initModal = (petsList, petPagePathImg) => {
  const cards = document.querySelectorAll('.friends__container-card');
  const modalCloseBtn = document.querySelector('.modal__close-button');
  console.log();
  cards.forEach(card => {
    card.addEventListener('click', (event) => openModal(event, petsList, petPagePathImg))
  })
  modalCloseBtn.addEventListener('click', closeModalBtn)
};

function openModal(event, petsList, petPagePathImg) {
  const id = event.currentTarget.dataset.id;
  modalBlackout.classList.toggle('blackout--show');
  modalContainer.classList.toggle('modal-close-js');
  featModalText(petsList, id, petPagePathImg)
}

function closeModalBtn() {
  modalBlackout.classList.toggle('blackout--show');
  modalContainer.classList.toggle('modal-close-js');
}

export { initModal, openModal };
