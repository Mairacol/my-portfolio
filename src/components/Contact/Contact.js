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
    <section
      id="contact"
      className={`contact ${darkMode ? 'dark-mode' : ''}`}
      style={{
        backgroundColor: darkMode ? '#222' : '#fff',
        color: darkMode ? '#fff' : '#000',
        padding: '20px', // Espaciado alrededor del contenedor
        textAlign: 'center', // Centra el texto y los elementos
      }}
    >
      <h2>Contacto</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Centrar los inputs y el botón
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
            width: '100%', // Ocupar el ancho completo
            marginBottom: '10px', // Espacio entre el input y el siguiente elemento
            padding: '10px', // Espacio interno
            border: `1px solid ${darkMode ? '#8DF224' : '#8DF224'}`, // Borde verde en modo oscuro, azul en modo claro
            borderRadius: '4px' // Bordes redondeados
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
            border: `1px solid ${darkMode ? '#8DF224' : '#8DF224'}`, // Borde verde en modo oscuro, azul en modo claro
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
            border: `1px solid ${darkMode ? '#8DF224' : '#8DF224'}`, // Borde verde en modo oscuro, azul en modo claro
            borderRadius: '4px',
            resize: 'vertical' // Permitir que el usuario cambie el tamaño verticalmente
          }}
        />
       <button
          type="submit"
          style={{
            backgroundColor: darkMode ? '#444' : '#222',
            color: '#fff',
            padding: '10px 20px', // Espacio interno
            border: 'none', // Sin borde
            borderRadius: '4px', // Bordes redondeados
            cursor: 'pointer', // Cambiar el cursor al pasar sobre el botón
            transition: 'background 0.3s ease, box-shadow 0.3s ease', // Transición suave para el fondo y la sombra
            width: '100%', // Ancho completo
            maxWidth: '200px', // Ancho máximo
            marginTop: '10px', // Espacio superior al botón
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
