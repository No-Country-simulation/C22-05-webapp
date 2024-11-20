# **Proyecto de Telemedicina - Gesti�n de Citas M�dicas**

Este proyecto es una aplicaci�n web de telemedicina dise�ada para facilitar la reserva de citas m�dicas virtuales entre pacientes y m�dicos, optimizando el proceso de asignaci�n y notificaci�n. Est� orientada a cubrir necesidades de pacientes que requieren servicios m�dicos de manera r�pida y organizada, con tres tipos de usuarios principales:

## **Usuarios y Funcionalidades**

### 1. **Administrador**
El administrador tiene control completo sobre la gesti�n de citas y la base de datos de m�dicos. Sus funcionalidades clave incluyen:
- **Autenticaci�n:** Accede con un usuario y contrase�a especial.
- **Gesti�n de m�dicos:** Puede crear, modificar y actualizar los datos de los m�dicos (nombre, especialidad, disponibilidad).
- **Revisi�n de citas:** Ve una lista de todas las citas solicitadas, priorizando aquellas marcadas como emergencias.
- **Asignaci�n de m�dicos:** Selecciona un m�dico disponible y lo asigna a una cita espec�fica.
- **Confirmaci�n:** Una vez asignada la cita, da el visto bueno para que el sistema notifique autom�ticamente a los involucrados.
- **Notificaciones:** El sistema env�a correos electr�nicos al m�dico y al paciente con los detalles de la cita.

### 2. **M�dicos**
Los m�dicos no interact�an directamente con la plataforma, pero reciben notificaciones con la informaci�n necesaria:
- **Notificaciones autom�ticas:** Correo detallando:
  - Nombre del paciente.
  - Fecha y hora de la cita.
  - Motivo de la consulta.

### 3. **Pacientes**
Los pacientes son los usuarios finales del sistema, con funcionalidades que les permiten gestionar sus citas de forma eficiente:
- **Registro y login:** Crean una cuenta y acceden al sistema.
- **Reservar citas:** Pueden solicitar citas m�dicas virtuales, seleccionando:
  - Tipo de consulta: General o especialista.
  - Rama de especialidad (si aplica).
  - Urgencia o no urgencia.
- **Datos automatizados:** Al estar logueados, el formulario se autocompleta con los datos del registro
- **Confirmaci�n de citas:** Reciben detalles de su cita por correo, incluyendo fecha, hora y motivo de consulta.

---

## **Estructura del Proyecto**

El proyecto se divide en las siguientes partes principales:

1. **Base de datos de m�dicos:** Incluye informaci�n b�sica como nombre, especialidad y disponibilidad. Es gestionada exclusivamente por el administrador.
2. **Interfaz para pacientes:** Registro, login y sistema de reserva de citas.
3. **Interfaz de administrador:** Panel para la gesti�n de m�dicos, revisi�n y asignaci�n de citas.
4. **Sistema de notificaciones:** Automatiza la comunicaci�n con m�dicos y pacientes a trav�s de correo electr�nico.

---

## **MVP Ultra Compacto**
El producto m�nimo viable incluye:
1. Registro y login de pacientes.
2. Sistema de reserva de citas para pacientes.
3. Base de datos b�sica de m�dicos (gestionada manualmente al principio).
4. Panel de administrador para la asignaci�n de citas y confirmaci�n.
5. Notificaciones autom�ticas para m�dicos y pacientes.

---

## **Tecnolog�as Propuestas**
- **Frontend:** Angular con Node.js.
- **Backend:** Java con Spring Boot e Hibernate.
- **Base de datos:** MySQL/PostgreSQL.
- **Notificaciones:** Integraci�n con servicios de correo.

---
![Diagrama de Arquitectura](https://raw.githubusercontent.com/No-Country-simulation/C22-05-webapp/QA-Testing/Images/ESQUEMA3.jpg)


�Gracias por contribuir a este proyecto! Si tienes sugerencias o mejoras, no dudes en hacer un pull request.
