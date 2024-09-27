import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ darkMode, setDarkMode, children }) => {
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode((prev) => !prev)} />
      <main role="main">
        {children}
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
};

Layout.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
