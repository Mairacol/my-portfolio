import React, { useState } from 'react';

function Header({ toggleDarkMode, darkMode }) {
  const [activeLink, setActiveLink] = useState('');

 
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);

    setMenuOpen(false);
  };

  return (
    <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
      <div className="header-content">
        <h1>Maira Colman</h1>
        <p>Full Stack Developer</p>
<a className="btn-cv" href={`${process.env.PUBLIC_URL}/MairaColmanCV.pdf`} download="MairaColmanCV.pdf">
  <i className="fa-solid fa-download" aria-hidden="true"></i>
  Descargar CV
</a>


        <button
          className={`hamburger ${menuOpen ? 'is-open' : ''}`}
          aria-label="Abrir menú"
          aria-controls="mobile-links"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={`mode-toggle-switch ${darkMode ? 'is-dark' : 'is-light'}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleDarkMode();
          }}
          role="button"
          tabIndex={0}
          aria-pressed={darkMode}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleDarkMode(); }}
        >
          <span className="mode-label">
            {darkMode ? 'NIGHT MODE' : 'DAY MODE'}
          </span>
          <span className="mode-thumb">
            <i className={darkMode ? 'fa-solid fa-moon' : 'fa-solid fa-sun'} />
          </span>
        </div>

        <div
          id="mobile-links"
          className={`header-links ${menuOpen ? 'is-open' : ''}`}
        >
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


      <div
        className={`backdrop ${menuOpen ? 'show' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      ></div>

      <footer className={`footer ${darkMode ? 'dark-mode' : ''}`}>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/maira-colman/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Mairacol" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <p className="footer-copy">&copy; Maira Colman | Full Stack Developer</p>
      </footer>
    </header>
  );
}

export default Header;
