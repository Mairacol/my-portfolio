import React, { useState } from 'react';

const Notification = ({ message, type }) => {
    const [isVisible, setIsVisible] = useState(true);
  
    const handleClose = () => {
      setIsVisible(false);
    };
  const styles = {
    notification: {
        position: 'fixed',
        top: '30px',
        right: '30px',
        backgroundColor: '#000000', // Fondo negro
        color: '#FFFFFF',
        padding: '10px 20px',
        borderRadius: '8px',
        border: '2px solid #39FF14', // Bordes en verde neón
        boxShadow: '0 0 20px #39FF14', // Sombra neón
        zIndex: 1000,
        fontFamily: 'Roboto, sans-serif',
        fontSize: '14px',
        letterSpacing: '0.5px',
        transition: 'opacity 0.3s ease',
        opacity: isVisible ? '0.95' : '0',
      },
      closeButton: {
        marginLeft: '15px',
        background: 'none',
        border: 'none',
        color: '#FFFFFF',
        fontSize: '16px',
        cursor: 'pointer',
        outline: 'none',
      },
  };

  if (!isVisible) return null;
  return (
    <div style={styles.notification}>
      {message}
      <button style={styles.closeButton} onClick={handleClose}>×</button>
    </div>
  );
};

export default Notification;
