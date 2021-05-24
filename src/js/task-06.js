const inputEl = document.querySelector('#validation-input');
inputEl.style.border = '3px solid #bdbdbd';

inputEl.addEventListener('blur',() => {
    if(inputEl.value.length == inputEl.dataset.length) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
        const validStyle = document.querySelector('.valid')
        validStyle.style.borderColor = '#4caf50';
     }
     else {
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid')
        const invalidStyle = document.querySelector('.invalid')
        invalidStyle.style.borderColor = '#f44336';
     }
});
