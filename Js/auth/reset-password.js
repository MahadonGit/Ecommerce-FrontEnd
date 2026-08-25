// ==========================================
// GET HTML ELEMENTS
// ==========================================

const resetPasswordForm =
    document.getElementById("resetPasswordForm");

const emailInput =
    document.getElementById("email");

const tokenInput =
    document.getElementById("token");

const newPasswordInput =
    document.getElementById("newPassword");

const confirmNewPasswordInput =
    document.getElementById("confirmNewPassword");

const toggleNewPasswordButton =
    document.getElementById("toggleNewPassword");

const toggleConfirmNewPasswordButton =
    document.getElementById("toggleConfirmNewPassword");

const resetPasswordButton =
    document.getElementById("resetPasswordButton");

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
    removeInputError(newPasswordInput);
    removeInputError(confirmNewPasswordInput);
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
// SHOW / HIDE NEW PASSWORD
// ==========================================

toggleNewPasswordButton.addEventListener("click", function () {

    if (newPasswordInput.type === "password") {

        newPasswordInput.type = "text";

        toggleNewPasswordButton.textContent = "Hide";

    } else {

        newPasswordInput.type = "password";

        toggleNewPasswordButton.textContent = "Show";
    }

});


// ==========================================
// SHOW / HIDE CONFIRM PASSWORD
// ==========================================

toggleConfirmNewPasswordButton.addEventListener(
    "click",
    function () {

        if (confirmNewPasswordInput.type === "password") {

            confirmNewPasswordInput.type = "text";

            toggleConfirmNewPasswordButton.textContent =
                "Hide";

        } else {

            confirmNewPasswordInput.type = "password";

            toggleConfirmNewPasswordButton.textContent =
                "Show";
        }

    }
);


// ==========================================
// READ URL PARAMETERS
// ==========================================

const urlParams =
    new URLSearchParams(window.location.search);

const emailFromUrl =
    urlParams.get("email");

const tokenFromUrl =
    urlParams.get("token");


// ==========================================
// FILL EMAIL/TOKEN FROM URL
// ==========================================

if (emailFromUrl) {

    emailInput.value =
        emailFromUrl;
}


if (tokenFromUrl) {

    tokenInput.value =
        tokenFromUrl;
}


// ==========================================
// RESET PASSWORD FORM
// ==========================================

resetPasswordForm.addEventListener(
    "submit",
    function (event) {

        // Stop normal form submission
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

        const newPassword =
            newPasswordInput.value;

        const confirmNewPassword =
            confirmNewPasswordInput.value;


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
                "Reset token is required.",
                "danger"
            );

            tokenInput.focus();

            return;
        }


        if (newPassword === "") {

            showInputError(newPasswordInput);

            showMessage(
                "New password is required.",
                "danger"
            );

            newPasswordInput.focus();

            return;
        }


        if (newPassword.length < 6) {

            showInputError(newPasswordInput);

            showMessage(
                "Password must be at least 6 characters.",
                "danger"
            );

            newPasswordInput.focus();

            return;
        }


        if (confirmNewPassword === "") {

            showInputError(confirmNewPasswordInput);

            showMessage(
                "Please confirm your new password.",
                "danger"
            );

            confirmNewPasswordInput.focus();

            return;
        }


        if (newPassword !== confirmNewPassword) {

            showInputError(confirmNewPasswordInput);

            showMessage(
                "Passwords do not match.",
                "danger"
            );

            confirmNewPasswordInput.focus();

            return;
        }


        // ======================================
        // VALIDATION SUCCESS
        // ======================================

        resetPasswordButton.disabled = true;

        resetPasswordButton.textContent =
            "Resetting Password...";


        // ======================================
        // TEMPORARY SIMULATION
        // ======================================
        // API will be connected later.

        setTimeout(function () {

            showMessage(
                "Password reset successfully! You can now login.",
                "success"
            );

            resetPasswordButton.disabled = false;

            resetPasswordButton.textContent =
                "Reset Password";

        }, 1500);

    }
);