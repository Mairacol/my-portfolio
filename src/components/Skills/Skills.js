import React from 'react';
import '../../App.css'


const skills = [
    { name: 'React', icon: 'fab fa-react' },
    { name: 'JavaScript (ES6+)', icon: 'fab fa-js' },
    { name: 'HTML5 & CSS3', icon: 'fab fa-html5' },
    { name: 'Redux', icon: 'fab fa-reddit-alien' },
    { name: 'Git & GitHub', icon: 'fab fa-github' },
    { name: 'Figma', icon: 'fab fa-figma' },
  ];
  
  const Skills = ({ darkMode }) => {
    return (
      <div 
        id="skills" 
        className={`skills-section ${darkMode ? 'dark-mode' : 'light-mode'}`}
      >
        <h2 className="skills-title">Habilidades</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">
              <i className={`${skill.icon} skill-icon`} aria-hidden="true"></i> 
              <span className="skill-name">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Skills;

