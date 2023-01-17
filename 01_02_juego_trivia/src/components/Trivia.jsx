import React, { useState } from 'react';

const Trivia = () => {
  const [puntaje, setPuntaje] = useState(0);
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);
  const [preguntasIndex, setPreguntasIndex] = useState(0);
  
  const preguntas = [
    {
      pregunta: '¿Cuál es la capital de Canadá?',
      opciones: ['Ottawa', 'Toronto', 'Montreal', 'Vancouver'],
      respuesta: 'Ottawa'
    },
    {
      pregunta: '¿Cuál es el mamífero más grande de la Tierra?',
      opciones:  ['Elefante', 'Jirafa','Cocodrilo', 'Ballena'],
      respuesta: 'Ballena'
    },
    {
      pregunta: '¿Cuál es el río más largo del mundo?',
      opciones: ['Danubio', 'Nilo', 'Amarillo', 'Amazonas'],
      respuesta: 'Nilo'
    },
  ];

  const preguntaActual = preguntas[preguntasIndex];

  const responder = (respuesta) => {
    setMostrarRespuesta(true);
    actualizaPuntaje(respuesta);
  }

  const actualizaPuntaje = (respuesta) => {
    if (respuesta === preguntaActual.respuesta) {
      setPuntaje(puntaje + 1);
    }
  }

  const siguientePregunta = () => {
   
    setMostrarRespuesta(false);

    if (preguntasIndex < preguntas.length - 1) {
      setPreguntasIndex(preguntasIndex + 1);
    } else {
      setPreguntasIndex(0);
    }

     
  }

  return (
    <div>



      <h1>Trivia</h1>
      <p>Puntos: <strong>{puntaje}</strong></p>

      <div className="col-sm-8">
        <div className="card">
          <div className="card-header">

            {preguntaActual.pregunta}

          </div>
          <div className="card-body">
            <div className='cardText'>
              <p>
                <strong>Opciones:</strong>
              </p>

              {preguntaActual.opciones.map((opcion) => (
                <p>
                  <button onClick={() => responder(opcion)} className="btn btn btn-link" >
                    {opcion}
                  </button>
                </p>

              ))}

            </div>


            {mostrarRespuesta && <div>
              <hr />
              <p>
                La respuesta es: <strong>{preguntaActual.respuesta}</strong>
              </p>  
            </div>}

            <hr />
            <button onClick={() => siguientePregunta()} className="btn btn-dark" >
              Siguiente pregunta
            </button>

          </div>
        </div>
      </div>








    </div>
  );

};

export default Trivia;
