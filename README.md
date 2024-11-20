# **Proyecto de Telemedicina - Gestión de Citas Médicas**

Este proyecto es una aplicación web de telemedicina diseñada para facilitar la reserva de citas médicas virtuales entre pacientes y médicos, optimizando el proceso de asignación y notificación. Está orientada a cubrir necesidades de pacientes que requieren servicios médicos de manera rápida y organizada, con tres tipos de usuarios principales:

## **Usuarios y Funcionalidades**

### 1. **Administrador**
El administrador tiene control completo sobre la gestión de citas y la base de datos de médicos. Sus funcionalidades clave incluyen:
- **Autenticación:** Accede con un usuario y contraseña especial.
- **Gestión de médicos:** Puede crear, modificar y actualizar los datos de los médicos (nombre, especialidad, disponibilidad).
- **Revisión de citas:** Ve una lista de todas las citas solicitadas, priorizando aquellas marcadas como emergencias.
- **Asignación de médicos:** Selecciona un médico disponible y lo asigna a una cita específica.
- **Confirmación:** Una vez asignada la cita, da el visto bueno para que el sistema notifique automáticamente a los involucrados.
- **Notificaciones:** El sistema envía correos electrónicos al médico y al paciente con los detalles de la cita.

### 2. **Médicos**
Los médicos no interactúan directamente con la plataforma, pero reciben notificaciones con la información necesaria:
- **Notificaciones automáticas:** Correo detallando:
  - Nombre del paciente.
  - Fecha y hora de la cita.
  - Motivo de la consulta.

### 3. **Pacientes**
Los pacientes son los usuarios finales del sistema, con funcionalidades que les permiten gestionar sus citas de forma eficiente:
- **Registro y login:** Crean una cuenta y acceden al sistema.
- **Reservar citas:** Pueden solicitar citas médicas virtuales, seleccionando:
  - Tipo de consulta: General o especialista.
  - Rama de especialidad (si aplica).
  - Urgencia o no urgencia.
- **Datos automatizados:** Al estar logueados, el formulario se autocompleta con los datos del registro
- **Confirmación de citas:** Reciben detalles de su cita por correo, incluyendo fecha, hora y motivo de consulta.

---

## **Estructura del Proyecto**

El proyecto se divide en las siguientes partes principales:

1. **Base de datos de médicos:** Incluye información básica como nombre, especialidad y disponibilidad. Es gestionada exclusivamente por el administrador.
2. **Interfaz para pacientes:** Registro, login y sistema de reserva de citas.
3. **Interfaz de administrador:** Panel para la gestión de médicos, revisión y asignación de citas.
4. **Sistema de notificaciones:** Automatiza la comunicación con médicos y pacientes a través de correo electrónico.

---

## **MVP Ultra Compacto**
El producto mínimo viable incluye:
1. Registro y login de pacientes.
2. Sistema de reserva de citas para pacientes.
3. Base de datos básica de médicos (gestionada manualmente al principio).
4. Panel de administrador para la asignación de citas y confirmación.
5. Notificaciones automáticas para médicos y pacientes.

---

## **Tecnologías Propuestas**
- **Frontend:** Angular con Node.js.
- **Backend:** Java con Spring Boot e Hibernate.
- **Base de datos:** MySQL/PostgreSQL.
- **Notificaciones:** Integración con servicios de correo.

---
![Diagrama de Arquitectura](https://raw.githubusercontent.com/No-Country-simulation/C22-05-webapp/QA-Testing/Images/ESQUEMA3.jpg)


¡Gracias por contribuir a este proyecto! Si tienes sugerencias o mejoras, no dudes en hacer un pull request.
