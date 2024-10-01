import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import '../../App.css'; // Asegúrate de importar los estilos si están en un archivo separado


const Layout = ({ darkMode, setDarkMode, children }) => {
  return (
    <div className={darkMode ? 'dark-mode layout' : 'light-mode layout'}>
      <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode((prev) => !prev)} />
      <main role="main" className={`main-content ${darkMode ? 'dark-mode' : ''}`}>
        {children}
      </main>
    </div>
  );
};

Layout.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
