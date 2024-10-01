import React from 'react';

function Projects({ darkMode }) {
  const projects = [
    {
      name: 'Proyecto de Henry Bootcamp',
      description: 'Aplicación full-stack para adopción de mascotas. 🐶',
      imageUrl: 'url-de-imagen',
      repoUrl: 'https://github.com/tu-repo',
      liveUrl: 'https://url-de-app',
    },
    {
      name: 'Otro Proyecto',
      description: 'Breve descripción de tu proyecto. 🚀',
      imageUrl: 'url-de-imagen',
      repoUrl: 'https://github.com/tu-repo',
      liveUrl: 'https://url-de-app',
    }
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
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">🔗 Ver Código</a>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">🌐 Ver en Vivo</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
