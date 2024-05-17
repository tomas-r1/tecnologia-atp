document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById('formregister');
    const mensajeError = document.getElementById('mensajeError');

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault(); // Evita el envío del formulario para poder validarlo con Javascript

        let nombre = document.getElementById('firstname').value;
        let apellido = document.getElementById('lastname').value;
        let email = document.getElementById('email').value;
        let birthdate = document.getElementById('birthdate').value;
        let country = document.getElementById('country').value;
        let course = document.getElementById('course').checked;
        let consulta = document.getElementById('consulta').value;
        let terminos = document.getElementById('terminos').checked;

        // Validación de los campos
        if (nombre.trim() === '') {
            mensajeError.innerText = 'Completá tu nombre, por favor.';
            return;
        }

        if (apellido.trim() === '') {
            mensajeError.innerText = 'Completá tu apellido, por favor.';
            return;
        }

        if (email.trim() === '') {
            mensajeError.innerText = 'Completá tu email, por favor.';
            return;
        }

        if (!validarEmail(email)) {
            mensajeError.innerText = 'El formato del email no es válido.';
            return;
        }

        if (country === '') {
            mensajeError.innerText = 'Debes seleccionar tu país.';
            return;
        }

        if (course === '') {
            mensajeError.innerText = 'Elegí un curso, por favor.';
            return;
        }

        if (consulta.trim() === '') {
            mensajeError.innerText = 'Enviá tu consulta, por favor.';
            return;
        }

        if (!terminos) {
            mensajeError.innerText = 'Debes aceptar los términos y condiciones.';
            return;
        }

        mensajeError.innerText = '';
        formulario.submit();
    });

    function validarEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});