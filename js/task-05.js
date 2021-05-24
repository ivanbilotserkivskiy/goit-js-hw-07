const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');


inputEl.addEventListener('input',() => inputEl.value ==='' ? 
outputEl.textContent = 'незнакомец' : 
outputEl.textContent = inputEl.value);
