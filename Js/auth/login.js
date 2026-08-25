// ==========================================
// GET HTML ELEMENTS
// ==========================================

const loginForm = document.getElementById("loginForm");

const emailInput =
    document.getElementById("email");

const passwordInput =
    document.getElementById("password");

const togglePasswordButton =
    document.getElementById("togglePassword");

const loginButton =
    document.getElementById("loginButton");

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
    removeInputError(passwordInput);
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
// SHOW / HIDE PASSWORD
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


// ==========================================
// LOGIN FORM
// ==========================================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    clearMessage();

    clearValidation();


    // ======================================
    // GET VALUES
    // ======================================

    const email =
        emailInput.value.trim();

    const password =
        passwordInput.value;


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


    if (password === "") {

        showInputError(passwordInput);

        showMessage(
            "Password is required.",
            "danger"
        );

        passwordInput.focus();

        return;
    }


    if (password.length < 6) {

        showInputError(passwordInput);

        showMessage(
            "Password must be at least 6 characters.",
            "danger"
        );

        passwordInput.focus();

        return;
    }


    // ======================================
    // SUCCESSFUL FRONTEND VALIDATION
    // ======================================

    loginButton.disabled = true;

    loginButton.textContent =
        "Logging in...";


    // Temporary simulation
    // API will be connected later.

    setTimeout(function () {

        showMessage(
            "Login successful! API integration will be added later.",
            "success"
        );

        loginButton.disabled = false;

        loginButton.textContent =
            "Login";

    }, 1500);

});