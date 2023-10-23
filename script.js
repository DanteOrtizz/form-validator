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
function validEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if(emailRegex.test(email.value.trim())) {
        showSuccess(input);
   } else {
        showError(input, 'Email is not valid.');
   }
}

function passwordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match.');
    }
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

//Check lenght
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getName(input)} must be at least ${min} characters.`);
    } else if(input.value.length > max) {
        showError(input, `${getName(input)} must be less than ${max} characters.`);
    } else {
        showSuccess(input);
    }
}

function getName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Events
form.addEventListener('submit', function(e) {
    e.preventDefault();

   validator([username, email, password1, password2]);
   checkLength(username, 3, 15);
   checkLength(password1, 6, 25);
   validEmail(email);
   passwordMatch(password1, password2);
});