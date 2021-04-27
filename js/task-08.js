const inputEl = document.querySelector('input');
const divBox = document.querySelector('#boxes');

const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]'); 

renderBtn.addEventListener('click', renderOnClick);
destroyBtn.addEventListener('click', () => {
    destroyBoxes();
    inputEl.value = '';
});

function renderOnClick() {
    destroyBoxes();
    createBoxes(inputEl.valueAsNumber);
}

function createBoxes(amount) {
    const divArr = [];
    let size = 20;

    for (let index = 0; index < amount; index++) {
        const divEl = document.createElement('div');
        divEl.classList.add('box')
        size = size + 10;
        divEl.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
        divEl.style.width = `${size}px`;
        divEl.style.height = `${size}px`;
        divArr.push(divEl);
    }

    divBox.append(...divArr);
}

function destroyBoxes() {
    divBox.innerHTML = '';
}

