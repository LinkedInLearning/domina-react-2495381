import React, { useState } from 'react';
import './juegoDados.css';

function JuegoDados() {
  const [numeroDado, setNumeroDado] = useState(1);
  
  const tirarDado = () => {
    setNumeroDado(Math.floor(Math.random() * 6) + 1);
  }

  return (
    <div className="juego">
      <div className="numero">{numeroDado}</div>
      <button className="btn btn-success" onClick={tirarDado}>Tirar el dado</button>
    </div>
  );
}

export default JuegoDados;
