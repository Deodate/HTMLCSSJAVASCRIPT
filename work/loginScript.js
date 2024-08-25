const form = document.getElementById('loginForm');
const errorElement = document.getElementById('error');
const submitButton = document.querySelector('input[type="submit"]');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Initially hide the submit button
submitButton.style.display = 'none';

// Function to check the fields and update the submit button's visibility
function checkFields() {
    const username = usernameInput.value.trim();  // Fixed: Use value instead of ariaValueMax
    const password = passwordInput.value.trim();

    // Update the border color based on whether the field is filled or not
    updateBorderColor(usernameInput, username);
    updateBorderColor(passwordInput, password);

    // Show or hide the submit button based on whether both fields are filled
    if (username && password) {
        submitButton.style.display = 'block';
    } else {
        submitButton.style.display = 'none';
    }
}

// Function to update the border color based on the input value
function updateBorderColor(inputElement, value) {
    if (value) {
        inputElement.classList.add('filled');
    } else {
        inputElement.classList.remove('filled');
    }
}

// Add event listeners for input fields outside of the checkFields function
usernameInput.addEventListener('input', checkFields);
passwordInput.addEventListener('input', checkFields);

// Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate the username and password
    if (username === 'jack' && password === 'jimmy') {
        errorElement.style.display = 'none';
        alert('Login successful!');
    } else {
        errorElement.style.display = 'block';
        errorElement.textContent = 'Invalid username or password. Please try again.';  // Fixed typo
    }
});
