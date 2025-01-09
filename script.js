document.getElementById("password").addEventListener("input", function () {
    const password = this.value;
    const strengthIndicator = document.getElementById("strength");
    const strength = checkPasswordStrength(password);

    strengthIndicator.textContent = strength.message;
    strengthIndicator.style.color = strength.color;
});

document.getElementById("togglePassword").addEventListener("change", function () {
    const passwordField = document.getElementById("password");
    passwordField.type = this.checked ? "text" : "password";

});

function checkPasswordStrength(password) {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;

    switch (score) {
        case 4:
            return { message: "Strong", color: "green" };
        case 3:
            return { message: "Medium", color: "orange" };
        case 2:
            return { message: "Weak", color: "red" };
        default:
            return { message: "Very Weak", color: "darkred" };
    }
}