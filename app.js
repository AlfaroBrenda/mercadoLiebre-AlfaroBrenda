const express = require('express');
const app = express();

const path = require('path');

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/home.html'))
})

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
})

function validateForm() {
    var username = document.getElementById('user').value;
    var password = document.getElementById('pass').value;

    // Se puede agregar condiciones de validación aquí
    if (username.length < 2) {
        displayError('El nombre de usuario debe tener al menos 2 caracteres.');
        return false; // Evita que el formulario se envíe si hay errores
    }

    // Si no hay errores, se puede enviar el formulario
    document.getElementById('loginForm').submit();
}

function displayError(message) {
    document.getElementById('errorMessage').innerText = message;
}

