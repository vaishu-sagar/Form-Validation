const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    if (!validateName()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validatePassword()) isValid = false;
    if (!validateConfirmPassword()) isValid = false;

    if (isValid) {
        alert("Form Submitted Successfully!");
        form.reset();
    }
});

function showError(input, message) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector(".error");
    error.innerText = message;
    formGroup.classList.add("error-border");
    formGroup.classList.remove("success");
}

function showSuccess(input) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector(".error");
    error.innerText = "";
    formGroup.classList.add("success");
    formGroup.classList.remove("error-border");
}

function validateName() {
    const nameValue = nameInput.value.trim();
    if (nameValue === "") {
        showError(nameInput, "Name is required");
        return false;
    }
    showSuccess(nameInput);
    return true;
}

function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (emailValue === "") {
        showError(emailInput, "Email is required");
        return false;
    } else if (!emailPattern.test(emailValue)) {
        showError(emailInput, "Invalid email format");
        return false;
    }

    showSuccess(emailInput);
    return true;
}

function validatePassword() {
    const passwordValue = passwordInput.value.trim();

    if (passwordValue === "") {
        showError(passwordInput, "Password is required");
        return false;
    } else if (passwordValue.length < 6) {
        showError(passwordInput, "Password must be at least 6 characters");
        return false;
    }

    showSuccess(passwordInput);
    return true;
}

function validateConfirmPassword() {
    const confirmValue = confirmPasswordInput.value.trim();

    if (confirmValue === "") {
        showError(confirmPasswordInput, "Confirm your password");
        return false;
    } else if (confirmValue !== passwordInput.value.trim()) {
        showError(confirmPasswordInput, "Passwords do not match");
        return false;
    }

    showSuccess(confirmPasswordInput);
    return true;
}

/* Real-time validation */
nameInput.addEventListener("keyup", validateName);
emailInput.addEventListener("keyup", validateEmail);
passwordInput.addEventListener("keyup", validatePassword);
confirmPasswordInput.addEventListener("keyup", validateConfirmPassword);
