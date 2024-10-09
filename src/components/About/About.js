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
                    Hola, soy Maira Colman, una apasionada desarrolladora front-end con experiencia en JavaScript, ReactJS y CSS.
                    <br></br>
                    <br></br>
                     Mi sólido background en docencia y pedagogía me ha permitido desarrollar habilidades valiosas, como la creatividad, el trabajo en equipo y la organización en entornos dinámicos. 
                     <br></br>
                     <br></br>
                     Me especializo en la creación de interfaces responsivas y atractivas, utilizando metodologías ágiles y GIT. Estoy comprometida con el aprendizaje continuo y siempre busco oportunidades de capacitación para mejorar mis habilidades y contribuir efectivamente al desarrollo de aplicaciones web modernas.                    </p>
                </div>
                <img src={myImage} alt="Sobre mí" className="about-image" />
            </div>
        </section>
    );
}

export default About;
