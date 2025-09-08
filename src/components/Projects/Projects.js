import React from "react";
import projectImage from "../../assets/Screenshot_3.png";
import projectImage2 from "../../assets/Screenshot_5.png";
import projectImage3 from "../../assets/Screenshot_7.png";
import projectImage4 from "../../assets/Screenshot_8.png";
import projectImage5 from "../../assets/Screenshot_10.png";
import projectImage6 from "../../assets/Screenshot_1.png";
import projectImage12 from "../../assets/Screenshot_12.png";

function Projects({ darkMode }) {
  const projects = [
    {
      name: "Impulso Merval",
      description:
        "Aplicación full-stack de asesoría financiera. Resúmenes, ideas y membresía con automatizaciones.",
      imageUrl: projectImage12,
      repoUrl: "",                 // privado
      liveUrl: "https://impulsomerval.com/",
      stat: "Prueba 7 días • +50 miembros",
      tags: ["React", "Node", "Tailwind", "MercadoPago"],
    },
    {
      name: "Salvando Huellitas",
      description:
        "App para adopción de mascotas: fichas, filtros y flujo de adopción con donaciones.",
      imageUrl: projectImage,
      repoUrl: "https://github.com/beta-cancri/SalvandoHuellitas-Front-end",
      liveUrl:
        "https://salvandohuellitas-front-end-production-5e5d.up.railway.app/",
      stat: "ONG • producción",
      tags: ["Next.js", "Postgres", "Prisma", "Cloudinary"],
    },
    {
      name: "GAME STASH",
      description:
        "Compra/venta de cartas y juegos de mesa. Perfiles, colecciones y catálogo.",
      imageUrl: projectImage4,
      repoUrl: "",                 // privado
      liveUrl: "https://game-stash.mx/",
      stat: "Side project",
      tags: ["React", "Express", "MongoDB"],
    },
    {
      name: "Lista de tareas",
      description: "Aplicación simple de notas y pendientes. 📋",
      imageUrl: projectImage2,
      repoUrl: "https://github.com/Mairacol/proyectofinal",
      liveUrl: "https://notas.up.railway.app/",
      stat: "",
      tags: ["React", "CSS"],
    },
    {
      name: "My E-commerce",
      description: "Simulación de tienda con catálogo y carrito.",
      imageUrl: projectImage6,
      repoUrl: "https://github.com/Mairacol/e-commerce",
      liveUrl: "https://mairacol.github.io/e-commerce/home",
      stat: "",
      tags: ["JS", "HTML", "CSS"],
    },
    {
      name: "Dogs",
      description: "Buscador y favoritos de razas. 🐶",
      imageUrl: projectImage3,
      repoUrl: "https://github.com/Mairacol/pi-dogsv/",
      liveUrl: "https://www.youtube.com/watch?v=olCryaVue7Q",
      stat: "",
      tags: ["React", "Redux", "Node", "Postgres"],
    },
    {
      name: "Movies Search",
      description:
        "Descubrí pelis, tendencias y recomendaciones. Guardá favoritos.",
      imageUrl: projectImage5,
      repoUrl: "https://github.com/Mairacol/Movies-Play",
      liveUrl: "https://mairacol.github.io/Movies-Play/",
      stat: "",
      tags: ["React", "TMDB API"],
    },
  ];

  const isHttp = (v) => typeof v === "string" && /^https?:\/\//i.test(v);

  return (
    <section id="projects" className={`projects-section ${darkMode ? "dark-mode" : ""}`}>
      <h2>Proyectos</h2>

      {/* LISTA VERTICAL como Brittany */}
      <div className="projects-list">
        {projects.map((p, i) => (
          <article key={i} className={`project-card ${darkMode ? "dark-mode" : ""}`}>
            {/* Thumbnail */}
            <div className="project-thumb">
              <img src={p.imageUrl} alt={p.name} />
            </div>

            {/* Contenido */}
            <div className="project-content">
              <div className="project-title-row">
                <h3 className="project-title">{p.name}</h3>
                <div className="project-actions">
                  {isHttp(p.repoUrl) && (
                    <a
                      href={p.repoUrl}
                      className="project-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Repositorio"
                      title="Repositorio"
                    >
                      <i className="fab fa-github" />
                    </a>
                  )}
                  {isHttp(p.liveUrl) && (
                    <a
                      href={p.liveUrl}
                      className="project-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Demo"
                      title="Demo"
                    >
                      <i className="fas fa-arrow-up-right-from-square" />
                    </a>
                  )}
                </div>
              </div>

              {p.stat && <div className="project-stat">{p.stat}</div>}

              <p className="project-desc">{p.description}</p>

              {p.tags?.length > 0 && (
                <ul className="project-tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
