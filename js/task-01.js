const quantityItemsEl = document.querySelectorAll('.item') 
console.log(`В списке ${quantityItemsEl.length} категории.`)

quantityItemsEl.forEach(el => {
console.log(`Категория: ${el.querySelector('h2').textContent} 
Количество элементов: ${el.querySelectorAll('ul li').length}`);
});