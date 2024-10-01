import React from 'react';

function Header({ toggleDarkMode, darkMode }) {
  return (
    <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
      {/* Encabezado */}
      <div className="header-content">
        <h1>👩‍💻 Maira Colman</h1>
        <p>Front-End Developer</p>
        <div className="header-links">
          <a href="#about">Sobre Mí</a>
          <br />
          <a href="#projects">Proyectos</a>
          <br />
          <a href="#skills">Habilidades</a>
          <br />
          <a href="#contact">Contacto</a>
          <br />
        </div>
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
      </div>

      {/* Footer dentro del Header */}
      <footer className={`footer ${darkMode ? 'dark-mode' : ''}`}>
        <p>&copy; 2024 Maira Colman 🌿 | Desarrolladora Front-End</p>
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
