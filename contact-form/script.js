const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

// Show input Error Message
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//Show success outline
const showSuccess = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success'; 
}

//Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

const checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    return (input.value.trim() === '') ?  
    showError(input, `${getFieldName(input)} is required`) :
    showSuccess(input);
  })
}

const checkLength = (input, min, max) => {
  return (input.value.length < min) ? 
  showError(input, `${getFieldName(input)} must be at lease ${min} characters`) : 
  (input.value.length > max) ? 
  showError(input, `${getFieldName(input)} must not be greater than ${max} characters`) :
  showSuccess(input);
};

const checkPasswordsMatch = (input1, input2) => {
 return (input1.value !== input2.value) ? 
 showError(input2, 'Password must match') :
 showSuccess(input);
}
//Capitalised field
const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// event listener
form.addEventListener('submit', (e) => {
  e.preventDefault()

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
})


