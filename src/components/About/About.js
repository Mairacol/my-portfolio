import React from 'react';
import myImage from '../../assets/maira.jpeg'; // Asegúrate de que la ruta sea correcta
import './about.css';

function About({ isDarkMode }) {
    console.log("Modo oscuro:", isDarkMode); // Verifica el estado del modo oscuro
    return (
        <section id="about" className={`about ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="about-content">
                <div className="about-text">
                    <h2>Sobre mí</h2>
                    <p>
                        Soy Maira Colman, profesora de educación física convertida en desarrolladora front-end. 
                        Me apasiona crear aplicaciones web que hagan la vida más fácil a los usuarios. 
                        Con un enfoque en el diseño minimalista y funcional, siempre busco mejorar mis habilidades y aprender nuevas tecnologías.
                    </p>
                </div>
                <img src={myImage} alt="Sobre mí" className="about-image" />
            </div>
        </section>
    );
}

export default About;
