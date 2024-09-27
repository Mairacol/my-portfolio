import React from 'react';

function Header({ toggleDarkMode, darkMode }) {
  return (
    <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
      <h1>👩‍💻 Maira Colman</h1>
      <p>Front-End Developer</p>
      <div className="header-links">
        <a href="#about">Sobre Mí</a>
        <br></br>
        <a href="#projects">Proyectos</a>
        <br></br>
        <a href="#skills">Habilidades</a>
        <br></br>
        <a href="#contact">Contacto</a>
        <br></br>
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
    </header>
  );
}

export default Header;
