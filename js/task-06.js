const validationInput = document.querySelector('#validation-input');
const requiredLength = validationInput.getAttribute('data-length');

validationInput.addEventListener('blur', () => {

  const inputValue = validationInput.value;

  if (inputValue.length === parseInt(requiredLength)) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  }
  
  else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});