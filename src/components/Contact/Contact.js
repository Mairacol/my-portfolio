import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Importa EmailJS

function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
            alert('Mensaje enviado exitosamente!'); // Notificación de éxito
          })
          .catch((error) => {
            console.error('Error al enviar el mensaje', error);
            alert('Error al enviar el mensaje. Inténtalo de nuevo.'); // Notificación de error
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
      
  return (
    <section
      id="contact"
      className={`contact ${darkMode ? 'dark-mode' : ''}`}
      style={{
        backgroundColor: darkMode ? '#222' : '#fff',
        color: darkMode ? '#fff' : '#000',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <h2>Contacto</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '400px',
          margin: '0 auto'
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            backgroundColor: darkMode ? '#333' : '#fff',
            color: darkMode ? '#fff' : '#000',
            width: '100%',
            marginBottom: '10px',
            padding: '10px',
            border: `1px solid ${darkMode ? '#8DF224' : '#8DF224'}`,
            borderRadius: '4px'
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            backgroundColor: darkMode ? '#333' : '#fff',
            color: darkMode ? '#fff' : '#000',
            width: '100%',
            marginBottom: '10px',
            padding: '10px',
            border: `1px solid ${darkMode ? '#8DF224' : '#8DF224'}`,
            borderRadius: '4px'
          }}
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          value={formData.message}
          onChange={handleChange}
          required
          style={{
            backgroundColor: darkMode ? '#333' : '#fff',
            color: darkMode ? '#fff' : '#000',
            width: '100%',
            marginBottom: '10px',
            padding: '10px',
            border: `1px solid ${darkMode ? '#8DF224' : '#8DF224'}`,
            borderRadius: '4px',
            resize: 'vertical'
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: darkMode ? '#444' : '#222',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background 0.3s ease, box-shadow 0.3s ease',
            width: '100%',
            maxWidth: '200px',
            marginTop: '10px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = `0 0 20px 5px rgba(141, 242, 36, 0.8)`; // Sombra LED verde
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none'; // Eliminar la sombra al salir
          }}
        >
          Enviar ✉️
        </button>
      </form>
    </section>
  );
}

export default Contact;
