// ==========================================
// GET HTML ELEMENTS
// ==========================================

const confirmEmailForm =
    document.getElementById("confirmEmailForm");

const emailInput =
    document.getElementById("email");

const tokenInput =
    document.getElementById("token");

const confirmButton =
    document.getElementById("confirmButton");

const resendButton =
    document.getElementById("resendButton");

const messageBox =
    document.getElementById("message");


// ==========================================
// HELPER FUNCTIONS
// ==========================================

function showMessage(message, type) {

    messageBox.innerHTML = `
        <div class="alert alert-${type}" role="alert">
            ${message}
        </div>
    `;
}


function clearMessage() {

    messageBox.innerHTML = "";
}


function showInputError(input) {

    input.classList.add("is-invalid");
}


function removeInputError(input) {

    input.classList.remove("is-invalid");
}


function clearValidation() {

    removeInputError(emailInput);
    removeInputError(tokenInput);
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
// CONFIRM EMAIL
// ==========================================

confirmEmailForm.addEventListener("submit", function (event) {

    // Stop normal browser form submission
    event.preventDefault();

    clearMessage();

    clearValidation();


    // ======================================
    // GET VALUES
    // ======================================

    const email =
        emailInput.value.trim();

    const token =
        tokenInput.value.trim();


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


    if (token === "") {

        showInputError(tokenInput);

        showMessage(
            "Confirmation token is required.",
            "danger"
        );

        tokenInput.focus();

        return;
    }


    // ======================================
    // VALIDATION SUCCESS
    // ======================================

    confirmButton.disabled = true;

    confirmButton.textContent =
        "Confirming...";


    // ======================================
    // TEMPORARY SIMULATION
    // ======================================
    // API will be connected later.

    setTimeout(function () {

        showMessage(
            "Email confirmed successfully! You can now login.",
            "success"
        );

        confirmButton.disabled = false;

        confirmButton.textContent =
            "Confirm Email";

    }, 1500);

});


// ==========================================
// RESEND CONFIRMATION
// ==========================================

resendButton.addEventListener("click", function () {

    clearMessage();

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
            "Enter your email address first.",
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
    // LOADING STATE
    // ======================================

    resendButton.disabled = true;

    resendButton.textContent =
        "Sending...";


    // ======================================
    // TEMPORARY SIMULATION
    // ======================================
    // API will be connected later.

    setTimeout(function () {

        showMessage(
            "A new confirmation email has been sent.",
            "success"
        );

        resendButton.disabled = false;

        resendButton.textContent =
            "Resend Confirmation";

    }, 1500);

});