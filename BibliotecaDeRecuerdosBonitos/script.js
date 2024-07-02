document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username && password) {
                localStorage.setItem(username, password);
                alert('Registro exitoso');
                window.location.href = 'login.html';
            } else {
                alert('Por favor, completa todos los campos');
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (localStorage.getItem(username) === password) {
                alert('Inicio de sesión exitoso');
                window.location.href = 'gallery.html';
            } else {
                alert('Usuario o contraseña incorrectos');
            }
        });
    }
});
