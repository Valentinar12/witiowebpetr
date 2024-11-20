document.addEventListener("DOMContentLoaded", function () {
    const loginSection = document.getElementById("login-section");
    const registerSection = document.getElementById("register-section");

    const showRegisterLink = document.getElementById("show-register");
    const showLoginLink = document.getElementById("show-login");

    // Mostrar el formulario de registro y ocultar el de inicio de sesión
    showRegisterLink.addEventListener("click", function (event) {
        event.preventDefault();
        loginSection.style.display = "none";
        registerSection.style.display = "block";
    });

    // Mostrar el formulario de inicio de sesión y ocultar el de registro
    showLoginLink.addEventListener("click", function (event) {
        event.preventDefault();
        loginSection.style.display = "block";
        registerSection.style.display = "none";
    });
});
