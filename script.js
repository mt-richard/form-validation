const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");
document.body.classList.toggle("show-popup");

hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (validateForm('login')) {
        window.location.href = 'home.html';
    }
});

document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    validateForm('signup');
});

function validateForm(formType) {
    const emailInput = document.getElementById(`${formType}-email`);
    const passwordInput = document.getElementById(`${formType}-password`);
   
    const emailVal = emailInput.value.trim();
    const isEmail = (emailVal) =>{
        var atSymbol = emailVal.indexOf('@');
        if(atSymbol < 1) return false;
        var dot = emailVal.lastIndexOf('.');
        if(dot <= atSymbol + 2) return false;
        if(dot === emailVal.length -1) return false;
        return true;
    }
    
        if (!isEmail(emailVal)) {
            setError(emailInput, 'Invalid email format');
        } else if (emailVal === '') {
            setError(emailInput, 'Email is required');
        } else if (passwordInput.value.trim() === '') {
            setError(passwordInput, 'Password is required');
        } else {
            setSuccess(emailInput, 'Success');
            setSuccess(passwordInput, 'Success');
            window.location.href = 'home.html';
        }
        
    
    if (formType === 'signup') {
        const usernameInput = document.getElementById('username');
        const cpasswordInput = document.getElementById('cpassword');
        const policyCheckbox = document.getElementById('policy');
       
        
        if (usernameInput.value.trim() === '') {
            setError(usernameInput, 'Username is required');
        } else {
            setSuccess(usernameInput, 'Success');
        }

        if (cpasswordInput.value.trim() === '') {
            setError(cpasswordInput, 'Confirm password is required');
        } 
        else if (cpasswordInput.value.trim() !== passwordInput.value.trim()) {
            setError(cpasswordInput, 'Password Not Matched!')
        }
        else {
            setSuccess(cpasswordInput, 'Success');
        }

        if (!policyCheckbox.checked) {
            setError(policyCheckbox, 'You must agree to the Terms & Conditions');
        } else {
            setSuccess(policyCheckbox);
        }
    }
}

function setError(input, errorMessage) {
    const formControl = input.parentElement;
    const errorIcon = formControl.querySelector('.fas.fa-exclamation-circle');
    const successIcon = formControl.querySelector('.fas.fa-check-circle');
    const errorMessageElement = formControl.querySelector('.error-message');

    formControl.classList.remove('success');
    formControl.classList.add('error');
    errorMessageElement.innerText = errorMessage;
    errorIcon.style.visibility = 'visible';
    successIcon.style.visibility = 'hidden';
}

function setSuccess(input) {
    const formControl = input.parentElement;
    const errorIcon = formControl.querySelector('.fas.fa-exclamation-circle');
    const successIcon = formControl.querySelector('.fas.fa-check-circle');
    const errorMessageElement = formControl.querySelector('.error-message');

    formControl.classList.remove('error');
    formControl.classList.add('success');
    errorMessageElement.innerText = 'Success';
    errorIcon.style.visibility = 'hidden';
    successIcon.style.visibility = 'visible';
}

document.querySelectorAll('.fas').forEach(icon => {
    icon.style.visibility = 'hidden';
});

