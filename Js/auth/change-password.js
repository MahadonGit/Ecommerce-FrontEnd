// ==========================================
// GET HTML ELEMENTS
// ==========================================

const changePasswordForm =
    document.getElementById("changePasswordForm");

const currentPasswordInput =
    document.getElementById("currentPassword");

const newPasswordInput =
    document.getElementById("newPassword");

const confirmNewPasswordInput =
    document.getElementById("confirmNewPassword");

const toggleCurrentPasswordButton =
    document.getElementById("toggleCurrentPassword");

const toggleNewPasswordButton =
    document.getElementById("toggleNewPassword");

const toggleConfirmNewPasswordButton =
    document.getElementById("toggleConfirmNewPassword");

const changePasswordButton =
    document.getElementById("changePasswordButton");

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

    removeInputError(currentPasswordInput);
    removeInputError(newPasswordInput);
    removeInputError(confirmNewPasswordInput);
}


// ==========================================
// TOGGLE PASSWORD VISIBILITY
// ==========================================

function togglePassword(input, button) {

    if (input.type === "password") {

        input.type = "text";
        button.textContent = "Hide";

    } else {

        input.type = "password";
        button.textContent = "Show";
    }
}


toggleCurrentPasswordButton.addEventListener(
    "click",
    function () {

        togglePassword(
            currentPasswordInput,
            toggleCurrentPasswordButton
        );

    }
);


toggleNewPasswordButton.addEventListener(
    "click",
    function () {

        togglePassword(
            newPasswordInput,
            toggleNewPasswordButton
        );

    }
);


toggleConfirmNewPasswordButton.addEventListener(
    "click",
    function () {

        togglePassword(
            confirmNewPasswordInput,
            toggleConfirmNewPasswordButton
        );

    }
);


// ==========================================
// CHANGE PASSWORD FORM
// ==========================================

changePasswordForm.addEventListener(
    "submit",
    function (event) {

        // Prevent normal browser form submission
        event.preventDefault();

        clearMessage();

        clearValidation();


        // ======================================
        // GET VALUES
        // ======================================

        const currentPassword =
            currentPasswordInput.value;

        const newPassword =
            newPasswordInput.value;

        const confirmNewPassword =
            confirmNewPasswordInput.value;


        // ======================================
        // VALIDATION
        // ======================================

        if (currentPassword === "") {

            showInputError(currentPasswordInput);

            showMessage(
                "Current password is required.",
                "danger"
            );

            currentPasswordInput.focus();

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
                "New password must be at least 6 characters.",
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
                "New passwords do not match.",
                "danger"
            );

            confirmNewPasswordInput.focus();

            return;
        }


        // ======================================
        // PREVENT SAME PASSWORD
        // ======================================

        if (currentPassword === newPassword) {

            showInputError(newPasswordInput);

            showMessage(
                "New password must be different from your current password.",
                "danger"
            );

            newPasswordInput.focus();

            return;
        }


        // ======================================
        // VALIDATION SUCCESS
        // ======================================

        changePasswordButton.disabled = true;

        changePasswordButton.textContent =
            "Changing Password...";


        // ======================================
        // TEMPORARY SIMULATION
        // ======================================
        // API will be connected later.

        setTimeout(function () {

            showMessage(
                "Password changed successfully.",
                "success"
            );

            changePasswordButton.disabled = false;

            changePasswordButton.textContent =
                "Change Password";

            // Clear password fields
            currentPasswordInput.value = "";
            newPasswordInput.value = "";
            confirmNewPasswordInput.value = "";

        }, 1500);

    }
);