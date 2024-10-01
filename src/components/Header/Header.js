import React, { useState } from 'react';

function Header({ toggleDarkMode, darkMode }) {
  // Estado para el enlace activo
  const [activeLink, setActiveLink] = useState('');

  // Función para manejar el clic en los enlaces
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
      {/* Encabezado */}
      <div className="header-content">
        <h1>Maira Colman</h1>
        <p>Front-End Developer</p>

        {/* Botón de Modo Oscuro */}
        <div 
          className={`mode-toggle ${darkMode ? 'active' : ''}`} 
          onClick={(e) => {
            e.stopPropagation(); // Evita que el clic se propague
            toggleDarkMode();   // Alterna el modo
          }}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if (e.key === 'Enter') toggleDarkMode(); }} // Soporte de teclado
        >
          <span className="mode-toggle-text">
            {darkMode ? "🌙" : "☀️"}
          </span>
        </div>

        <div className="header-links">
          <a 
            href="#about" 
            className={activeLink === 'about' ? 'active' : ''} 
            onClick={() => handleLinkClick('about')}
          >
            Sobre Mí
          </a>
          <br />
          <a 
            href="#projects" 
            className={activeLink === 'projects' ? 'active' : ''} 
            onClick={() => handleLinkClick('projects')}
          >
            Proyectos
          </a>
          <br />
          <a 
            href="#skills" 
            className={activeLink === 'skills' ? 'active' : ''} 
            onClick={() => handleLinkClick('skills')}
          >
            Habilidades
          </a>
          <br />
          <a 
            href="#contact" 
            className={activeLink === 'contact' ? 'active' : ''} 
            onClick={() => handleLinkClick('contact')}
          >
            Contacto
          </a>
          <br />
        </div>
      </div>

      {/* Footer dentro del Header */}
      <footer className={`footer ${darkMode ? 'dark-mode' : ''}`}>
        <p>&copy; 2024 Maira Colman  | Desarrolladora Front-End</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/tu-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/tu-github" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <p>💬 <a href="/contact">Contáctame</a></p>
      </footer>
    </header>
  );
}

export default Header;
