const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
const arrayElements =[];
const listEl = document.querySelector('#ingredients');
for(let ingredient of ingredients) {
  const itemEl = document.createElement('li')
  itemEl.textContent=ingredient;
  arrayElements.push(itemEl);
}
listEl.append(...arrayElements);