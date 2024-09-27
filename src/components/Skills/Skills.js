import React from 'react';

const Skills = ({ darkMode }) => {
  return (
    <div 
      id="skills" 
      className={`skills-section ${darkMode ? 'dark-mode' : ''}`} 
      style={{ padding: '40px 20px' }}
    >
      <h2 style={{ marginTop: '30px', marginBottom: '20px', textAlign: 'center' }}>Habilidades</h2>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        <li className={darkMode ? 'dark-mode' : ''}>
          <i className="fab fa-react"></i> React 
        </li>
        <li className={darkMode ? 'dark-mode' : ''}>
          <i className="fab fa-js"></i> JavaScript (ES6+) 
        </li>
        <li className={darkMode ? 'dark-mode' : ''}>
          <i className="fab fa-html5"></i> HTML5 & CSS3 
        </li>
        <li className={darkMode ? 'dark-mode' : ''}>
          <i className="fab fa-reddit-alien"></i> Redux 
        </li>
        <li className={darkMode ? 'dark-mode' : ''}>
          <i className="fab fa-github"></i> Git & GitHub 
        </li>
        <li className={darkMode ? 'dark-mode' : ''}>
          <i className="fab fa-figma"></i> Figma 
        </li>
      </ul>
    </div>
  );
};

export default Skills;
