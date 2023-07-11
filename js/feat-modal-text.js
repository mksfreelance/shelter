export const featModalText = (petsList, id, petPagePathImg) => {
  document.querySelector('.modal__image').src = petPagePathImg
    ? `${petPagePathImg + petsList[id].img}`
    : petsList[id].img;
  document.querySelector('.modal__image').alt = petsList[id].name;
  document.querySelector('.modal__title').textContent = petsList[id].name;
  document.querySelector('.modal__subtitle').textContent = petsList[id].breed;
  document.querySelector('.modal__description').textContent = petsList[id].description;
  document.querySelector('.modal__age').textContent = petsList[id].age;
  document.querySelector('.modal__inoculations').textContent = petsList[id].inoculations;
  document.querySelector('.modal__diseases').textContent = petsList[id].diseases;
  document.querySelector('.modal__parasites').textContent = petsList[id].parasites;
}