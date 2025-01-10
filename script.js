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

document.getElementById("password").addEventListener("input", function () {
    const password = this.value;
    const strengthIndicator = document.getElementById("strength");
    const strengthBar = document.getElementById("strengthBar");
    const strength = this.checkPasswordStrength(password);

    strengthIndicator.textContent = strength.message;
    strengthIndicator.style.color = strength.color;
    strengthBar.value = strength.score; // Tambahkan nilai pada progress bar
});


function checkPasswordStrength(password) {
    let score = 0;
    const suggestions = [];

    if (password.length >= 8) score++;
    else suggestions.push ("Increase length to at least 8 Characters");
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
    else suggestions.push ("Use both uppercase and lowecase letters");
    if (/\d/.test(password)) score++;
    else suggestions.push ("Include at least one number");
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;
    else suggestions.push ("Include at least one special character");

    const suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.textContent = suggestions.length > 0 ? suggestions.join(" ") : "Your password is strong!";

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