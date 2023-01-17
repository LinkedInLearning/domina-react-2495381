import React, { useCallback, useState } from "react";
import "./Sopa.css";

function Sopa() {

  const [seleccion, setSeleccion] = useState("--");


  const contenedorPrincipalClick = (e) => {
    console.log("Tocaste el plato");
    setSeleccion(e.target.dataset.name);
  };

  const itemInternoClick = (e) => {
    e.stopPropagation();
    console.log("Seleccionaste: " + e.target.dataset.name);
    setSeleccion(e.target.dataset.name);
  };


  return (
    <div>

      {seleccion}

      <div onClick={contenedorPrincipalClick} className='contenedor' data-name="sopa">

        <div className='items item1' onClick={itemInternoClick} data-name="item1">
        </div>

        <div className='items item2' onClick={itemInternoClick} data-name="item2">
        </div>
        <div className='items item3' onClick={itemInternoClick} data-name="item3">
        </div>
        <div className='items item4' onClick={itemInternoClick} data-name="mosca">
        </div>
        <div className='items item5' onClick={itemInternoClick} data-name="item5">
        </div>
      </div>

    </div>
  );
}

export default Sopa;
