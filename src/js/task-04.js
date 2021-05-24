let countValue = 0;
const ButtonsEl = document.querySelectorAll('button');
const valueEl = document.querySelector('#value');
function increment() {
    countValue+=1;
    valueEl.textContent=countValue;
};
function decrement() {
    countValue -=1;
    valueEl.textContent=countValue;
};
ButtonsEl[0].addEventListener('click', decrement);
ButtonsEl[1].addEventListener('click', increment);
