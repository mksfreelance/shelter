import { START_INDEX_CARD, PET_PAGE_RENDERED_CARDS, PET_PAGE, PET_PAGE_PATH_IMG } from "../../js/const.js";
import { initModal } from "../../js/modal.js";
import { PETS_LIST } from "../../js/pets-list.js";
import { renderPetCard } from "../../js/render-pet-card.js";


window.addEventListener('DOMContentLoaded', () => {
  renderPetCard(PET_PAGE, PETS_LIST, START_INDEX_CARD, PET_PAGE_RENDERED_CARDS);
  initModal(PETS_LIST, PET_PAGE_PATH_IMG);
});