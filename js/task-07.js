const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', (events) => {
    textEl.style.fontSize  = events.target.value + 'px';
});