import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviando mensaje', formData);
    // Implementar el envío de email con un servicio
  };

  return (
    <section id="contact" className={`contact ${darkMode ? 'dark-mode' : ''}`} style={{ backgroundColor: darkMode ? '#222' : '#fff', color: darkMode ? '#fff' : '#000' }}>
      <h2>Contacto 📫</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ backgroundColor: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}
        />
        <button type="submit" style={{ backgroundColor: darkMode ? '#444' : '#007BFF', color: '#fff' }}>Enviar ✉️</button>
      </form>
    </section>
  );
}

export default Contact;
