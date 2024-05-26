document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById('formregister');
    const mensajeError = document.getElementById('error-message');

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault(); // Evita el envío del formulario para poder validarlo con Javascript

        let nombre = document.getElementById('firstname').value;
        let apellido = document.getElementById('lastname').value;
        let email = document.getElementById('email').value;
        let birthdate = document.getElementById('birthdate').value;
        let country = document.getElementById('country').value;
        let cursos = document.querySelectorAll('input[name="Curso-Front-End"], input[name="Curso-Back-End"], input[name="Curso-Full-Stack"]');
        let consulta = document.querySelector('textarea[name="comentario"]').value;
        let terminos = document.getElementById('terms').checked;

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

        let cursoSeleccionado = false;
        cursos.forEach(curso => {
            if (curso.checked) {
                cursoSeleccionado = true;
            }
        });
        if (!cursoSeleccionado) {
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
