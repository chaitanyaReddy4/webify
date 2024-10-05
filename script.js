// Form validation function
function validateForm() {
    const rollEmail = document.getElementById('roll-email').value.trim();
    const password = document.getElementById('password').value.trim();

    const rollEmailError = document.getElementById('roll-email-error');
    const passwordError = document.getElementById('password-error');

    // Clear any previous error messages
    rollEmailError.textContent = '';
    passwordError.textContent = '';

    // Regex patterns
    const rollPattern = /^[A-Za-z]{2}\d{4}$/; // Example: AA1234
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let isValid = true;

    // Validate Roll Number or Email
    if (!(rollPattern.test(rollEmail) || emailPattern.test(rollEmail))) {
        rollEmailError.textContent = 'Please enter a valid roll number (e.g., AA1234) or email.';
        isValid = false;
    }

    // Validate Password
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    return isValid;
}

// Toggle password visibility
function togglePassword() {
    const passwordField = document.getElementById('password');
    const toggleBtn = document.querySelector('.toggle-password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleBtn.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        toggleBtn.textContent = 'Show';
    }
}
