const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const listEl = document.querySelector('#ingredients');
for(let ingredient of ingredients) {
  let itemEl = document.createElement('li')
  itemEl.textContent=ingredient;
  listEl.appendChild(itemEl);
}