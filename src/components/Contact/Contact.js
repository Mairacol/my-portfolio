import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Importa EmailJS
import Notification from './Notification';

function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [notification, setNotification] = useState({ message: '', type: '', visible: false });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

    // Crea un nuevo objeto con los nombres de los campos que coinciden con tu plantilla de EmailJS
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Crea un nuevo objeto con los nombres de los campos que coinciden con tu plantilla de EmailJS
        const emailParams = {
          from_name: formData.name,  // Nombre del remitente del mensaje
          to_name: "Maira Colman",   // Tu nombre
          email: formData.email,     // Correo del remitente
          message: formData.message  // Mensaje del formulario
        };
        
        // Envía el correo a ti mismo utilizando EmailJS
        emailjs.send('service_fqdt0xo', 'template_e4wtu6f', emailParams, '6QCVQnfudy6PsXVgs')
          .then((response) => {
            console.log('Mensaje enviado exitosamente!', response.status, response.text);
            setNotification({ message: 'Mensaje enviado exitosamente!', type: 'success', visible: true });
          })
          .catch((error) => {
            console.error('Error al enviar el mensaje', error);
            setNotification({ message: 'Error al enviar el mensaje. Inténtalo de nuevo.', type: 'error', visible: true });
          });
      
        // Envío de correo de confirmación al usuario
       // Envío de correo de confirmación al usuario
const confirmationParams = {
    from_name: "Maira Colman",                // Tu nombre para que le llegue al usuario
    to_name: formData.name,                   // Nombre del usuario que envía el mensaje
    to_email: formData.email,                 // Correo del usuario que envía el mensaje (destinatario)
    confirmation_message: "Gracias por contactarte conmigo. Te responderé pronto."
  };
  
  // Envía el correo de confirmación al usuario
  emailjs.send('service_fqdt0xo', 'template_iec0kqs', {
    from_name: confirmationParams.from_name,
    to_name: confirmationParams.to_name,
    to_email: confirmationParams.to_email,     // Asegúrate de que este es el correo del usuario
    message: confirmationParams.confirmation_message
  }, '6QCVQnfudy6PsXVgs')  
          .then((response) => {
            console.log('Confirmación enviada exitosamente al usuario!', response.status, response.text);
          })
          .catch((error) => {
            console.error('Error al enviar la confirmación al usuario', error);
          });
        
        // Restablecer el formulario
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      };
      const closeNotification = () => {
        setNotification({ ...notification, visible: false });
      };
  return (
    <section
      id="contact"
      className={`contact ${darkMode ? 'dark-mode' : ''}`}
      
    >
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit} className="contact-form">
  <input
    type="text"
    name="name"
    placeholder="Tu nombre"
    value={formData.name}
    onChange={handleChange}
    required
    className="input"
  />
  <input
    type="email"
    name="email"
    placeholder="Tu email"
    value={formData.email}
    onChange={handleChange}
    required
    className="input"
  />
  <textarea
    name="message"
    placeholder="Tu mensaje"
    value={formData.message}
    onChange={handleChange}
    required
    className="input"
  />
  <button type="submit" className="submit-button">
    Enviar ✉️
  </button>
</form>

      {notification.visible && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={closeNotification}
        />
      )}
    </section>
  );
}

export default Contact;
