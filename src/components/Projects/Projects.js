import React from 'react';
import projectImage from '../../assets/Screenshot_3.png'; 
import projectImage2 from '../../assets/Screenshot_5.png';
import projectImage3 from '../../assets/Screenshot_7.png';
import projectImage4 from '../../assets/Screenshot_8.png';

function Projects({ darkMode }) {
  const projects = [
    {
      name: 'Salvando Huellitas',
      description: 'Aplicación full-stack para adopción de mascotas. 🐶',
      imageUrl: projectImage,
      repoUrl: 'https://github.com/beta-cancri/SalvandoHuellitas-Front-end',
      liveUrl: 'https://salvandohuellitas-front-end-production-5e5d.up.railway.app/',
    },
    {
      name: 'GAME STASH',
      description: 'Aplicación de compra/venta de cartas y juegos de mesa',
      imageUrl: projectImage4,
      repoUrl: 'Código privado',
      liveUrl: 'https://game-stash.mx/',
    },
    {
        name: 'Lista de tareas',
        description: 'Aplicación de lista de tareas.📋',
        imageUrl: projectImage2, 
        repoUrl: 'https://github.com/Mairacol/proyectofinal', 
        liveUrl: 'https://notas.up.railway.app/', 
      },
      {
        name: 'Dogs',
        description: 'Aplicación de perros.🐶',
        imageUrl: projectImage3, 
        repoUrl: 'https://github.com/Mairacol/pi-dogsv/', 
        liveUrl: 'https://www.youtube.com/watch?v=olCryaVue7Q', 
      },
  ];

  
  return (
    <section id="projects" className={`projects-section ${darkMode ? 'dark-mode' : ''}`}>
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className={`project-card ${darkMode ? 'dark-mode' : ''}`}>
            <img src={project.imageUrl} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">🔗 Ver Código</a>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">🌐 Ver en Vivo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
