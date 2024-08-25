const form = document.getElementById('registerForm');
const inputs = form.querySelectorAll('input[type="text"], input[type="password"]');
const submitButton = form.querySelector('input[type="submit"]');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const passwordError = document.getElementById('error');

function checkFormValidity(){
    let allFilled = true;
    let passwordsMatch = password.value === confirmPassword.value;

    inputs.forEach(input => {
        if (!input.value.trim()){
            allFilled = false;
            input.classList.remove('valid');
        } else {
            input.classList.add('valid');
        }
    });

    if (!passwordsMatch){
        passwordError.style.display = 'block';
        confirmPassword.classList.remove('valid');
    } else {
        passwordError.style.display = 'none';
         if(confirmPassword.value.trim()){
            confirmPassword.classList.add('valid');
         }
    }

    submitButton.disabled = ! (allFilled && passwordsMatch);
    submitButton.style.opacity = allFilled && passwordsMatch ? 1 : 0.5;
}

inputs.forEach(input => {
    input.addEventListener('input', checkFormValidity);
});

// Handling form submission

form.addEventListener('submit', function(event){
    event.preventDefault();

    if(!submitButton.disabled){
        alert('Registration successful!');
    }
});