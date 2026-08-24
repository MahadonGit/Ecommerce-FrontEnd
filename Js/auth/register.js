// ==========================================
// GET HTML ELEMENTS
// ==========================================

const registerForm = document.getElementById("registerForm");

const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const togglePasswordButton =
    document.getElementById("togglePassword");

const toggleConfirmPasswordButton =
    document.getElementById("toggleConfirmPassword");

const registerButton =
    document.getElementById("registerButton");

const messageBox =
    document.getElementById("message");


// ==========================================
// HELPER FUNCTIONS
// ==========================================

// Show a general message
function showMessage(message, type) {

    messageBox.innerHTML = `
        <div class="alert alert-${type}" role="alert">
            ${message}
        </div>
    `;
}


// Clear general message
function clearMessage() {
    messageBox.innerHTML = "";
}


// Mark an input as invalid
function showInputError(input) {
    input.classList.add("is-invalid");
}


// Remove invalid state
function removeInputError(input) {
    input.classList.remove("is-invalid");
}


// Reset all validation states
function clearValidation() {

    removeInputError(firstNameInput);
    removeInputError(lastNameInput);
    removeInputError(emailInput);
    removeInputError(passwordInput);
    removeInputError(confirmPasswordInput);
}


// ==========================================
// EMAIL VALIDATION
// ==========================================

function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}


// ==========================================
// PASSWORD SHOW / HIDE
// ==========================================

togglePasswordButton.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        togglePasswordButton.textContent = "Hide";

    } else {

        passwordInput.type = "password";
        togglePasswordButton.textContent = "Show";
    }
});


toggleConfirmPasswordButton.addEventListener("click", function () {

    if (confirmPasswordInput.type === "password") {

        confirmPasswordInput.type = "text";
        toggleConfirmPasswordButton.textContent = "Hide";

    } else {

        confirmPasswordInput.type = "password";
        toggleConfirmPasswordButton.textContent = "Show";
    }
});


// ==========================================
// FORM SUBMIT
// ==========================================

registerForm.addEventListener("submit", function (event) {

    // Stop normal browser form submission
    event.preventDefault();

    // Clear previous messages
    clearMessage();

    // Clear previous validation
    clearValidation();


    // ======================================
    // GET USER INPUT
    // ======================================

    const firstName =
        firstNameInput.value.trim();

    const lastName =
        lastNameInput.value.trim();

    const email =
        emailInput.value.trim();

    const password =
        passwordInput.value;

    const confirmPassword =
        confirmPasswordInput.value;


    // ======================================
    // VALIDATION
    // ======================================

    // First Name
    if (firstName === "") {

        showInputError(firstNameInput);
        firstNameInput.focus();

        return;
    }


    // Last Name
    if (lastName === "") {

        showInputError(lastNameInput);
        lastNameInput.focus();

        return;
    }


    // Email empty
    if (email === "") {

        showInputError(emailInput);
        emailInput.focus();

        return;
    }


    // Email format
    if (!isValidEmail(email)) {

        showInputError(emailInput);
        emailInput.focus();

        return;
    }


    // Password empty
    if (password === "") {

        showInputError(passwordInput);
        passwordInput.focus();

        return;
    }


    // Password length
    if (password.length < 6) {

        showInputError(passwordInput);
        passwordInput.focus();

        return;
    }


    // Confirm password empty
    if (confirmPassword === "") {

        showInputError(confirmPasswordInput);
        confirmPasswordInput.focus();

        return;
    }


    // Password match
    if (password !== confirmPassword) {

        showInputError(confirmPasswordInput);

        showMessage(
            "Passwords do not match.",
            "danger"
        );

        confirmPasswordInput.focus();

        return;
    }


    // ======================================
    // FORM IS VALID
    // ======================================

    registerButton.disabled = true;

    registerButton.textContent = "Creating Account...";


    // ======================================
    // TEMPORARY SIMULATION
    // ======================================
    // No API connection yet.
    // We are simulating a successful request.

    setTimeout(function () {

        showMessage(
            "Registration successful! Please confirm your email.",
            "success"
        );

        registerButton.disabled = false;

        registerButton.textContent =
            "Create Account";

    }, 1500);

});