import React, { useEffect, useState } from 'react';

const CursorShadow = ({ isDarkMode }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      const gradientSize = 600; // Tamaño del gradiente

      // Define el color del gradiente según el modo
      const gradientColor = isDarkMode
        ? 'rgba(141, 242, 36, 0.05)' // Verde suave en modo oscuro
        : 'rgba(141, 242, 36, 0.1)';   // Verde suave más transparente en modo claro

      setStyle({
        background: `radial-gradient(${gradientSize}px at ${e.clientX}px ${e.clientY}px, ${gradientColor}, transparent 80%)`,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 30,
        transition: 'background 0.3s ease', // Transición suave
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDarkMode]); // Agrega isDarkMode como dependencia

  return <div style={style}></div>;
};

export default CursorShadow;
