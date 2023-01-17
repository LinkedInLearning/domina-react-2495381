import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  
  const [mostrarErrores, setMostrarErrores] = useState(false);
  const [mostrarContenido, setMostrarContenido] = useState(false);

  const [nombreValido, setNombreValido] = useState(false);
  const [emailValido, setEmailValido] = useState(false);
  const [direccionValido, setDireccionValido] = useState(false);

  const nombreUpdate = event => {
    setNombre(event.target.value);
    setNombreValido(event.target.value.length > 3);
  }

  const emailUpdate = event => {
    setEmail(event.target.value);
    setEmailValido(/^\S+@\S+\.\S+$/.test(event.target.value));
  }

  const direccionUpdate = event => {
    setDireccion(event.target.value);
    setDireccionValido(event.target.value.length > 3);
  }

  const enviarDatos = event => {
    event.preventDefault();
    
    if (!nombreValido || !emailValido || !direccionValido) {
      setMostrarErrores(true);
    }else{
      setMostrarErrores(false);
      setMostrarContenido(true);
    }
  }

  return (
    <div>
      
      <div className='row my-5 justify-content-md-center'>

      {!mostrarContenido &&   
        <div className='col-md-5'>
          <form noValidate >
            <div className="form-group">
              <label >Nombre</label>
              <input type="text" value={nombre} onChange={nombreUpdate} className="form-control" id="nombreCasilla" />
              {(mostrarErrores && !nombreValido) && <small className='text-danger'>Nombre no válido</small>}
            </div>
            <div className="form-group">
              <label >Email</label>
              <input value={email} onChange={emailUpdate} type="email" className="form-control" id="emailCasilla" />
              {(mostrarErrores && !emailValido) && <small className='text-danger'>Email no válido</small>}
            </div>
            <div className="form-group">
              <label>Dirección</label>
              <input value={direccion} onChange={direccionUpdate} type="email" className="form-control" id="direccionCasilla" />
              {(mostrarErrores && !direccionValido) && <small className='text-danger'>Direción no válida</small>}
            </div>
            <button type="submit" disabled={!nombreValido || !emailValido || !direccionValido} onClick={enviarDatos} className="btn btn-primary">Enviar</button>
          </form>

        </div>
        }

      {mostrarContenido &&  
      
        <div className='col-md-5'> 
          <h2>Te damos la bienvenida {nombre}</h2>
        </div>}
      </div>



    </div>
  );
}


export default Formulario;