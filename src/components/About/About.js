import React from 'react';
import myImage from '../../assets/maira.jpeg'; // Asegúrate de que la ruta sea correcta


function About({ isDarkMode }) {
    console.log("Modo oscuro:", isDarkMode); // Verifica el estado del modo oscuro
    return (
        <section id="about" className={`about ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="about-content">
                <div className="about-text">
                    <h2>Sobre mí</h2>
                    <p>
                    Soy Desarrolladora Full-Stack con experiencia en frontend (ReactJS), backend (Node.js, PostgreSQL) y despliegue en la nube con AWS.
                     Me apasiona convertir ideas en productos tecnológicos que realmente generen impacto.
Mi paso por la docencia me brindó fortalezas
 en liderazgo, comunicación y trabajo en equipo, 
 cualidades que me permiten integrarme rápido a entornos colaborativos y aportar desde el día uno.
                                        </p>
                </div>
                <img src={myImage} alt="Sobre mí" className="about-image" />
            </div>
        </section>
    );
}

export default About;
