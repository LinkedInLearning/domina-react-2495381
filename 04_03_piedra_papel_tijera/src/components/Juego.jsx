import React, { useState } from 'react';

function Juego() {
    const [jugadorSeleccion, setJugadorSeleccion] = useState('');
    const [computadorSeleccion, setComputadorSeleccion] = useState('');
    const [puntajeComputador, setPuntajeComputador] = useState(0);
    const [puntajeJugador, setPuntajeJugador] = useState(0);

    const [resultado, setResultado] = useState('');

    const [mostrarResultado, setMostrarResultado] = useState(false);

    const opciones = ['piedra', 'papel', 'tijeras'];


    const eleccionUsuario = (e) => {
        setMostrarResultado(false);
        setJugadorSeleccion(e.target.value);
        eleccionComputador();
    }

    const jugar = () => {


        if (computadorSeleccion === jugadorSeleccion) {
            setResultado("Empate");
        } else if (computadorSeleccion === 'piedra' && jugadorSeleccion === 'tijeras') {
            setResultado("Gana el computador");
            setPuntajeComputador(puntajeComputador + 1);
        } else if (computadorSeleccion === 'tijeras' && jugadorSeleccion === 'papel') {
            setResultado("Gana el computador");
            setPuntajeComputador(puntajeComputador + 1);
        } else if (computadorSeleccion === 'papel' && jugadorSeleccion === 'piedra') {
            setResultado("Gana el computador");
            setPuntajeComputador(puntajeComputador + 1);
        } else {
            setResultado("Tú Ganas");
            setPuntajeJugador(puntajeJugador + 1);
        }

        setMostrarResultado(true);
    }

    const eleccionComputador = () => {
        const numeroRandom = Math.floor(Math.random() * 3);
        setComputadorSeleccion(opciones[numeroRandom]);
    }

    const convierteEmoji = (opcion) => {
        switch (opcion) {
            case 'piedra':
                return '🪨';
            case 'papel':
                return '📄';
            case 'tijeras':
                return '✂️';
            default:
                return '';
        }
    }

    return (
        <div>
            <h2>Juego: Piedra, papel o tijera</h2>
            <h3>Puntaje:</h3>
            <p>Computador: {puntajeComputador}</p>
            <p>Humano: {puntajeJugador}</p>
            <div>
                {opciones.map((item) => (

                    <button value={item} onClick={eleccionUsuario} className='btn btn-dark mr-3 text-capitalize' key={item}>{item}</button>

                ))}

            </div>
            <br />
            <button onClick={jugar} disabled={mostrarResultado} className="btn btn-danger">Jugar</button>
            <br />
            <br />



            {mostrarResultado &&
                <div>
                    <div className="row display-4 border-top">
                        <div className="col col-md-6 ">
                            🖥️ Computadora {convierteEmoji(computadorSeleccion)}
                        </div>
                        <div className="col col-md-6 text-right">
                            {convierteEmoji(jugadorSeleccion)}  Humano 🙎‍♀️
                        </div>

                    </div>

                    <div className="row mt-5">
                        <div className="col col-md-12 text-center border-top">
                            <h4>Resultado:</h4>
                            <h4 className='text-danger'>{resultado}</h4>
                        </div>
                    </div>
                </div>
            }


        </div>
    );
}

export default Juego;


