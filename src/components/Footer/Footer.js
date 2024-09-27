import React from 'react';

function Footer({ darkMode }) {
  return (
    <footer className={`footer ${darkMode ? 'dark-mode' : ''}`}>
      <p>&copy; 2024 Maira Colman 🌿 | Desarrolladora Front-End</p>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/tu-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/tu-github" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <p>💬 <a href="/contact">Contáctame</a></p>
    </footer>
  );
}

export default Footer;
