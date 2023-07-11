
export const renderPetCard = (pageName, petsList, startIndex, cardsCount) => {
  let cardsContainer = '';
  let petPath = false;
  if (pageName === 'index') {
    cardsContainer = document.querySelector('.friends__container-carusel-wp');
  };
  if (pageName === 'pet') {
    cardsContainer = document.querySelector('.pet__swiper-slide');
    petPath = true;
  }

  cardsContainer.textContent = '';
  for (let i = startIndex; i < cardsCount; i++) {
    cardsContainer.append(featCardTemplate(petsList[i], i, petPath));
  }
};

const featCardTemplate = (el, index, pathCorrection) => {
  const card = document.querySelector('#pet-card-temlate').content.cloneNode(true);
  card.querySelector('.friends__container-card').dataset.id = index;
  card.querySelector('img').src = pathCorrection ? `${'../../' + el.img}` : el.img;
  card.querySelector('img').alt = el.type;
  card.querySelector('.friends__container-card-name').textContent = el.name;
  return card;
}