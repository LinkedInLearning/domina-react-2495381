import React, { useState, useEffect } from 'react';
import './Reloj.css';

function Reloj() {
  const [tiempo, setTiempo] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTiempo(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const segundosRotacion = {
    transform: `rotate(${tiempo.getSeconds() * 6}deg)`
  };
  const minutosRotacion = {
    transform: `rotate(${tiempo.getMinutes() * 6}deg)`
  };
  const horasRotacion = {
    transform: `rotate(${tiempo.getHours() * 30}deg)`
  };

  return (
    <div className="reloj">
      <div className="caratula">
        <div className="manecilla hora-manecilla" style={horasRotacion}></div>
        <div className="manecilla minuto-manecilla" style={minutosRotacion}></div>
        <div className="manecilla segundo-manecilla" style={segundosRotacion}></div>
      </div>
    </div>
  );
}

export default Reloj;

