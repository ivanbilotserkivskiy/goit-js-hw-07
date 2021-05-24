let countValue = 0;
const countButtonsEl = document.querySelectorAll('button');
const countEl = document.querySelector('#value');
function increment() {
    countValue+=1;
    countEl.textContent=countValue;
};
function decrement() {
    countValue -=1;
    countEl.textContent=countValue;
};
countButtonsEl[0].addEventListener('click', decrement);
countButtonsEl[1].addEventListener('click', increment);
