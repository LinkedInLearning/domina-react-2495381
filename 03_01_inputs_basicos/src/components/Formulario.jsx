
import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  
  const [mostrarValores, setMostrarValores] = useState(false);

  const nombreUpdate = event => {
    setNombre(event.target.value);
  }

  const emailUpdate = event => {
    setEmail(event.target.value);
  }

  const direccionUpdate = event => {
    setDireccion(event.target.value);
  }

  const enviarDatos = event => {
    event.preventDefault();
    setMostrarValores(true);
  }

  return (
    <div>
      <div className='row my-5 justify-content-md-center'>
        <div className='col-md-5'>
          <form >
            <div className="form-group">
              <label for="nombreCasilla">Nombre</label>
              <input type="text" value={nombre} onChange={nombreUpdate} className="form-control" id="nombreCasilla" />
            </div>
            <div className="form-group">
              <label for="emailCasilla">Email</label>
              <input value={email} onChange={emailUpdate} type="email" className="form-control" id="emailCasilla" />
            </div>
            <div className="form-group">
              <label for="emailCasilla">Dirección</label>
              <input value={direccion} onChange={direccionUpdate} type="email" className="form-control" id="emailCasilla" />
            </div>
            <button type="submit" onClick={enviarDatos} className="btn btn-primary">Enviar</button>
          </form>

        </div>
      </div>

      <div className='row my-5 justify-content-md-center'>
        {mostrarValores &&
          <div className="alert alert-secondary col-md-4" role="alert">
            <h4>Tus datos son:</h4>
            <p><strong>Nombre:</strong> {nombre}</p>
            <p><strong>Correo:</strong> {email}</p>
            <p><strong>Dirección:</strong> {direccion}</p>
          </div>
        }
      </div>

    </div>
  );
}


export default Formulario;