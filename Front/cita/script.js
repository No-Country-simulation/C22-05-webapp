// Sincronización entre los inputs de la columna 2 y los elementos de la columna 3

document.addEventListener("DOMContentLoaded", () => {
    // Elementos del formulario en la columna 2
    const dateInput = document.getElementById("dia");
    const timeInput = document.getElementById("hota");

    // Elementos del calendario y selector de hora dinámicos en la columna 3
    const calendar = document.getElementById("calendar");
    const timeGrid = document.getElementById("time-grid");
    const selectedDateOutput = document.getElementById("selected-date");
    const selectedTimeOutput = document.getElementById("selected-time");
    const currentMonthDisplay = document.getElementById("current-month");

    // Botones del calendario
    const prevMonthButton = document.getElementById("prev-month");
    const nextMonthButton = document.getElementById("next-month");

    // Botones de selección
    const generalistaButton = document.getElementById("generalista");
    const especialistaButton = document.getElementById("especialista");
    const urgenteButton = document.getElementById("urgente");
    const noUrgenteButton = document.getElementById("no-urgente");

    // Variables para el calendario
    let currentDate = new Date();

    // Meses en español
    const monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    // Generar dinámicamente el calendario
    function generateCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Actualizar encabezado del mes actual
        if (currentMonthDisplay) {
            currentMonthDisplay.textContent = `${monthNames[month]} ${year}`;
        }

        calendar.innerHTML = ""; // Limpiar calendario

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const dayElement = document.createElement("div");
            dayElement.className = "day";
            dayElement.textContent = day;
            dayElement.setAttribute("data-date", date.toISOString().split("T")[0]);
            calendar.appendChild(dayElement);
        }
    }

    // Generar dinámicamente la cuadrícula de horarios
    function generateTimeGrid() {
        const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, "0"));
        const minutes = ["00", "20", "40"];

        timeGrid.innerHTML = ""; // Limpiar cuadrícula de horarios

        hours.forEach((hour) => {
            minutes.forEach((minute) => {
                const time = `${hour}:${minute}`;
                const timeSlot = document.createElement("div");
                timeSlot.className = "time-slot";
                timeSlot.textContent = time;
                timeSlot.setAttribute("data-time", time);
                timeGrid.appendChild(timeSlot);
            });
        });
    }

    // Navegación del calendario
    prevMonthButton.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar();
    });

    nextMonthButton.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar();
    });

    // Función para actualizar el input de fecha según el calendario
    function updateDateInput(date) {
        if (dateInput) {
            dateInput.value = date;
            selectedDateOutput.textContent = `Fecha seleccionada: ${date}`;
        }
    }

    // Función para actualizar el input de hora según el selector dinámico
    function updateTimeInput(time) {
        if (timeInput) {
            timeInput.value = time;
            selectedTimeOutput.textContent = `Hora seleccionada: ${time}`;
        }
    }

    // Escuchar clics en el calendario
    calendar.addEventListener("click", (event) => {
        if (event.target.classList.contains("day")) {
            const selectedDate = event.target.getAttribute("data-date");
            updateDateInput(selectedDate);
        }
    });

    // Escuchar clics en la cuadrícula de tiempo
    timeGrid.addEventListener("click", (event) => {
        if (event.target.classList.contains("time-slot")) {
            const selectedTime = event.target.getAttribute("data-time");
            updateTimeInput(selectedTime);
        }
    });

    // Botones de selección de tipo
    function toggleSelection(button) {
        button.classList.toggle("selected");
    }

    generalistaButton.addEventListener("click", () => toggleSelection(generalistaButton));
    especialistaButton.addEventListener("click", () => toggleSelection(especialistaButton));
    urgenteButton.addEventListener("click", () => toggleSelection(urgenteButton));
    noUrgenteButton.addEventListener("click", () => toggleSelection(noUrgenteButton));

    // Autocompletado de campos
    const autocompleteData = {
        nombre: 'Lucía Rodriguez',
      dni: '12345678',
      email: 'lucirodriguez@example.com',
      telefono: '+54 123 456 7890'
    };

    document.getElementById("nombre").value = autocompleteData.nombre;
    document.getElementById("dni").value = autocompleteData.dni;
    document.getElementById("email").value = autocompleteData.email;
    document.getElementById("telefono").value = autocompleteData.telefono;

    document.getElementById("usuario-nombre").textContent = autocompleteData.nombre;


    // Inicializar el calendario y la cuadrícula de horarios
    generateCalendar();
    generateTimeGrid();
});
