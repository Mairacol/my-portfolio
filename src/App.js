import React, { useEffect, useState } from 'react';
import Layout from './components/Layout/Layout';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import CursorShadow from './components/CursorShadow/CursorShadow';
import './App.css';


const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Efecto para agregar o quitar la clase dark-mode al body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <>
      <CursorShadow /> 
    <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
      <About id="about" isDarkMode={darkMode} /> {/* Pasar darkMode al componente About */}
      <Projects id="projects" darkMode={darkMode} /> {/* Si Projects usa darkMode, pásalo */}
      <Skills id="skills" darkMode={darkMode} /> {/* Si Skills usa darkMode, pásalo */}
      <Contact id="contact" darkMode={darkMode} /> {/* Si Contact usa darkMode, pásalo */}
    </Layout>
    </>
  );
};

export default App;
