const listEl = document.querySelectorAll('#categories .item');
console.log(`В списке ${listEl.length} категории.`);
const listCountEl = document.querySelectorAll('.item ul li') 

// const listTitleEl = document.querySelectorAll('h2')
// const listTitleText = listTitleEl.forEach(element => console.log(element.textContent));
const listTitleEl = document.querySelectorAll('.item h2') 
listTitleEl.forEach(element => {
    console.log(element.textContent);  
});

console.log(listCountEl)
listCountEl.forEach(element => console.log(`В списке ${element.length} категории.`))