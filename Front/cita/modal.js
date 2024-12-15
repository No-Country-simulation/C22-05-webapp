document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close');
    const agendarConsultaBtn = document.getElementById('agendar-consulta'); // Selecciona el <li>
  
    // Función para recopilar datos del formulario
    function obtenerDatosFormulario() {
      const nombre = document.getElementById('nombre').value;
      const dni = document.getElementById('dni').value;
      const telefono = document.getElementById('telefono').value;
      const email = document.getElementById('email').value;
      const dia = document.getElementById('dia').value;
      const hora = document.getElementById('hota').value;
      const especialidad = document.getElementById('especialidad').value;
      const motivo = document.getElementById('motivo').value;
      // Capturar tipo de urgencia y tipo de médico
      const urgenciaSeleccionada = document.querySelector('.tipo-urgencia .selected') ? 
      document.querySelector('.tipo-urgencia .selected').textContent : 'No seleccionada';
      const medicoSeleccionado = document.querySelector('.tipo-medico .selected') ? 
      document.querySelector('.tipo-medico .selected').textContent : 'No seleccionado';

      return `
        <p><strong>Nombre:</strong> ${nombre || 'No proporcionado'}</p>
        <p><strong>DNI:</strong> ${dni || 'No proporcionado'}</p>
        <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
        <p><strong>Email:</strong> ${email || 'No proporcionado'}</p>
        <p><strong>Día:</strong> ${dia || 'No seleccionado'}</p>
        <p><strong>Hora:</strong> ${hora || 'No seleccionada'}</p>
        <p><strong>Tipo de urgencia:</strong> ${urgenciaSeleccionada}</p>
        <p><strong>Tipo de médico:</strong> ${medicoSeleccionado}</p>
        <p><strong>Especialidad:</strong> ${especialidad || 'No seleccionada'}</p>
        <p><strong>Motivo:</strong> ${motivo || 'No especificado'}</p>
      `;
    }
  
   // Evento para mostrar el modal al hacer clic
   agendarConsultaBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado
    modalBody.innerHTML = obtenerDatosFormulario();
    modal.style.display = 'block';
  });

  // Evento para cerrar el modal
  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  // Cerrar modal al hacer clic fuera de él
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});  