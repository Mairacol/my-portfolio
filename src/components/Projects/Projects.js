import React from 'react';
import projectImage from '../../assets/Screenshot_3.png'; // Ajusta la ruta según la estructura de tu proyecto

function Projects({ darkMode }) {
  const projects = [
    {
      name: 'Proyecto Salvando Huellitas',
      description: 'Aplicación full-stack para adopción de mascotas. 🐶',
      imageUrl: projectImage,
      repoUrl: 'https://github.com/beta-cancri/SalvandoHuellitas-Front-end',
      liveUrl: 'https://salvandohuellitas-front-end-production-5e5d.up.railway.app/',
    },
    {/*{
      name: 'Otro Proyecto',
      description: 'Breve descripción proyecto. 🚀',
      imageUrl: 'url-de-imagen',
      repoUrl: 'https://github.com/tu-repo',
      liveUrl: 'https://url-de-app',
    }*/}
  ];

  return (
    <section id="projects" className={`projects-section ${darkMode ? 'dark-mode' : ''}`}>
      <h2>Proyectos </h2>
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

