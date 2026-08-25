// ==========================================
// GET HTML ELEMENTS
// ==========================================

const forgotPasswordForm =
    document.getElementById("forgotPasswordForm");

const emailInput =
    document.getElementById("email");

const forgotPasswordButton =
    document.getElementById("forgotPasswordButton");

const messageBox =
    document.getElementById("message");


// ==========================================
// HELPER FUNCTIONS
// ==========================================

// Show general message
function showMessage(message, type) {

    messageBox.innerHTML = `
        <div class="alert alert-${type}" role="alert">
            ${message}
        </div>
    `;
}


// Clear message
function clearMessage() {

    messageBox.innerHTML = "";
}


// Show input error
function showInputError(input) {

    input.classList.add("is-invalid");
}


// Remove input error
function removeInputError(input) {

    input.classList.remove("is-invalid");
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
// FORM SUBMIT
// ==========================================

forgotPasswordForm.addEventListener("submit", function (event) {

    // Prevent normal form submission
    event.preventDefault();

    // Clear previous message
    clearMessage();

    // Remove previous invalid state
    removeInputError(emailInput);


    // ======================================
    // GET EMAIL
    // ======================================

    const email =
        emailInput.value.trim();


    // ======================================
    // VALIDATION
    // ======================================

    if (email === "") {

        showInputError(emailInput);

        showMessage(
            "Email is required.",
            "danger"
        );

        emailInput.focus();

        return;
    }


    if (!isValidEmail(email)) {

        showInputError(emailInput);

        showMessage(
            "Please enter a valid email address.",
            "danger"
        );

        emailInput.focus();

        return;
    }


    // ======================================
    // VALIDATION SUCCESS
    // ======================================

    forgotPasswordButton.disabled = true;

    forgotPasswordButton.textContent =
        "Sending...";


    // ======================================
    // TEMPORARY SIMULATION
    // ======================================
    // API will be connected later.

    setTimeout(function () {

        showMessage(
            "If an account exists with this email, a password reset link has been sent.",
            "success"
        );

        forgotPasswordButton.disabled = false;

        forgotPasswordButton.textContent =
            "Send Reset Link";

    }, 1500);

});