document.addEventListener('DOMContentLoaded', () => {
    // Variables para manejar las tarjetas de médicos
    const doctorCards = document.querySelectorAll('.doctor-card');
    const menuToggle = document.getElementById("menu-toggle");
    const menuIcon = document.getElementById("menu-icon");

    // Función para manejar la selección de tarjetas
    doctorCards.forEach(card => {
        card.addEventListener('click', () => {
            // Deseleccionar otras tarjetas
            doctorCards.forEach(c => c.classList.remove('selected'));

            // Seleccionar la tarjeta actual
            card.classList.add('selected');

            // Actualizar los inputs con los datos del médico
            const doctorName = card.querySelector('h5') ? card.querySelector('h5').innerText : '';
            const doctorSpecialty = card.querySelector('p') ? card.querySelector('p').innerText : '';

            // Llamar a la función para autocompletar los inputs
            fillDoctorInfo(doctorName, doctorSpecialty);
        });
    });

    // Verifica si los elementos de menú existen antes de asignarles eventos
    if (menuToggle && menuIcon) {
        menuToggle.addEventListener("click", () => {
            const isOpen = menuIcon.classList.contains("fa-bars");
            menuIcon.classList.toggle("fa-bars", !isOpen);
            menuIcon.classList.toggle("fa-times", isOpen);
        });
    } else {
        console.error('No se encontraron los elementos del menú');
    }

    // Mostrar la fecha actual en el elemento con ID 'date'
    const dateElement = document.getElementById("date");
    if (dateElement) {
        dateElement.innerText = new Date().toISOString().split('T')[0];
    } else {
        console.error('Elemento de fecha no encontrado');
    }
});

// Función para autocompletar los inputs con la información de la tarjeta seleccionada
function fillDoctorInfo(name, specialty) {
    const doctorNameInput = document.getElementById('doctorName');
    const doctorSpecialtyInput = document.getElementById('doctorSpecialty');

    if (doctorNameInput) doctorNameInput.value = name;
    if (doctorSpecialtyInput) doctorSpecialtyInput.value = specialty;
}

// Cambiar el color de fondo de una tarjeta (puedes llamar esta función si es necesario)
function changeCardColor(card) {
    card.style.backgroundColor = "#F9AA75";
}
