import React, { useState } from 'react';

function Header({ toggleDarkMode, darkMode }) {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
      <div className="header-content">
        <h1>Maira Colman</h1>
        <p>Front-End Developer</p>

        <div 
          className={`mode-toggle ${darkMode ? 'active' : ''}`} 
          onClick={(e) => {
            e.stopPropagation();
            toggleDarkMode();
          }}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if (e.key === 'Enter') toggleDarkMode(); }}
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

      <footer className={`footer ${darkMode ? 'dark-mode' : ''}`}>
  <div className="footer-links">
    <a href="https://www.linkedin.com/in/maira-colman/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin"></i>
    </a>
    <a href="https://github.com/Mairacol" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github"></i>
    </a>
  </div>
  <p className="footer-copy">&copy; Maira Colman | Desarrolladora Front-End</p>
</footer>

    </header>
  );
}

export default Header;
