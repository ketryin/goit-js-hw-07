const counterValue = document.querySelector('#value');
const btnEl = document.querySelectorAll('button');

btnEl.forEach(btn => btn.addEventListener('click', (event) => {
    const dataAction =event.target.getAttribute('data-action');
    if (dataAction === 'decrement') {
        counterValue.textContent = Number(counterValue.textContent) - 1;
    } else if (dataAction === 'increment') {
        counterValue.textContent = Number(counterValue.textContent) + 1;
    } else {
        console.log('Invalid data action');
    }
}))