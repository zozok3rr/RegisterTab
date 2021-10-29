const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('passwords2');

function showError(input, message) {
    const formControl = input.parentElement
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// Show Success 
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

//check email 
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Even Listener
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // if(username.value === '') {
    //     showError(username, 'Username is Required');
    // } else {
    //     showSuccess(username);
    // }

    // if(email.value === '') {
    //     showError(email, 'Email is required');
    // } else if(!validateEmail(email.value)){
    //     showError(email, 'Email is not valid');
    // } else {
    //     showSuccess(email);
    // }
    // Line from :30 until :42 are not needed. They are messy and oveerall just super NOOB.
});