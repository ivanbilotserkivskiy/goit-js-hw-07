const fontInputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
fontInputEl.addEventListener('input', () => textEl.style.fontSize = `${fontInputEl.value}px`);
