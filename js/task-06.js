const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('focusout', (event) => {
    if (event.target.value.length === Number(inputEl.getAttribute('data-length'))) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
});