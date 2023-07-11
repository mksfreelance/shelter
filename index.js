import { MAIN_PAGE, MAIN_PAGE_RENDERED_CARDS, START_INDEX_CARD } from "./js/const.js";
import { initModal } from "./js/modal.js";
import { PETS_LIST } from "./js/pets-list.js";
import { renderPetCard } from "./js/render-pet-card.js";


window.addEventListener('DOMContentLoaded', () => {
  renderPetCard(MAIN_PAGE,PETS_LIST,START_INDEX_CARD, MAIN_PAGE_RENDERED_CARDS);
  initModal(PETS_LIST);
});