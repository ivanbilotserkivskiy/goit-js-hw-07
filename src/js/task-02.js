const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
const listEl = document.querySelector('#ingredients');
for(let i = 0; i<ingredients.length; i++) {
    const ele = document.createElement('li'); 
    ele.textContent = ingredients[i];
    console.log(ele);
    listEl.appendChild(ele);
}
