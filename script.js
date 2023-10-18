const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password');
const password2 = document.getElementById('password2');

//Error function
function showError(input,message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Success function
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//email function
function validEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(String(email).toLowerCase());
}

//validate field
function validator(inputArr) {
    inputArr.forEach(function(input) {
        //console.log(input.value);
        if(input.value.trim() === '') {
            showError(input, `${getName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

function getName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Events
form.addEventListener('submit', function(e) {
    e.preventDefault();

   validator([username, email, password1, password2]);
});