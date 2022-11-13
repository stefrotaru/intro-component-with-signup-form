const inputField = document.querySelectorAll('input');
const formButton = document.getElementById('form-button');

formButton.addEventListener('click', function() {
    inputField.forEach( (index, input) => {
        if (inputField[input].value == '') {
            inputField[input].classList.add('input-box-invalid');
            inputField[input].nextElementSibling.classList.remove('hide');
        } else if (inputField[input].value != '') {
            inputField[input].classList.remove('input-box-invalid');
            inputField[input].nextElementSibling.classList.add('hide');
        };

        // E-mail field check 
        if (inputField[2].validity.patternMismatch) {
            inputField[2].classList.add('input-box-invalid');
            inputField[2].nextElementSibling.classList.remove('hide');            
        } else if (!inputField[2].validity.patternMismatch && inputField[2].value.length > 1) {
            inputField[2].classList.remove('input-box-invalid');
            inputField[2].nextElementSibling.classList.add('hide');            
        }
    })
});
