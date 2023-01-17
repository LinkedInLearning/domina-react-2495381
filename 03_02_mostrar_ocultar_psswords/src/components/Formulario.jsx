
import React, { useState } from 'react';

const Formulario = () => {
  const [email, setEmail] = useState('');
  const [mostrarPassword, setMostrarPassword] = useState(false);


  const passwordVisibleUpdate = event => {
    event.preventDefault();
    setMostrarPassword(!mostrarPassword);
  }

  const emailUpdate = event => {
    setEmail(event.target.value);
  }

  const enviarDatos = event => {
    event.preventDefault();
    // procesar los datos
  }

  return (
    <div>
      <div className='row my-5 justify-content-md-center'>
        <div className='col-md-5'>
          <form >
            <div className="form-group">
              <input value={email} onChange={emailUpdate} placeholder="Usuario" type="email" className="form-control" id="emailCasilla" />
            </div>
            <div class="form-row">
              <div class="col-md-7">
                <input type={mostrarPassword ? 'text' : 'password'} class="form-control" placeholder="Password" />
              </div>
              <div class="col-md-5">
                <button type="submit" onClick={passwordVisibleUpdate} className={`btn btn-primary ${mostrarPassword ? 'btn-danger' : 'btn-primary'}`}>
                  {mostrarPassword ? 'Ocultar' : 'Mostrar'}    Password
                </button>
              </div>
            </div>
            <button className={`col-md-12 btn mt-5 btn-primary`} type="submit" onClick={enviarDatos} >Enviar</button>
          </form>

        </div>
      </div>



    </div>
  );
}


export default Formulario;