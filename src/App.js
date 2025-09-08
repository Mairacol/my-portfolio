import React, { useEffect, useState } from 'react';
import Layout from './components/Layout/Layout';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import CursorShadow from './components/CursorShadow/CursorShadow';
import ScrollToTopButton from '../src/components/Scroll/ScrollToTopButton.component';

import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  // ✅ Setear el atributo data-theme en <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <>
      <CursorShadow /> 
      <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
        <About id="about" isDarkMode={darkMode} />
        <Projects id="projects" darkMode={darkMode} />
        <Skills id="skills" darkMode={darkMode} />
        <Contact id="contact" darkMode={darkMode} />
      </Layout>
      <ScrollToTopButton />
    </>
  );
};

export default App;
