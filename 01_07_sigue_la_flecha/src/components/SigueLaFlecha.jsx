import React, { useState, useEffect } from 'react';
import './SigueLaFlecha.css';

function SigueLaFlecha() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const paso = 10

  useEffect(() => {
    function handleKeyDown(event) {
      switch (event.key) {
        case 'ArrowUp':
          setY(prevY => prevY - paso);
          break;
        case 'ArrowDown':
          setY(prevY => prevY + paso);
          break;
        case 'ArrowLeft':
          setX(prevX => prevX - paso);
          break;
        case 'ArrowRight':
          setX(prevX => prevX + paso);
          break;
        default:
          break;
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };

  }, []);

  return (
       <div 
        className="objeto"
        style={{
          top: `${y}px`,
          left: `${x}px`,
          position: 'relative',
        }}
      ></div>
     
  );
}

export default SigueLaFlecha;
