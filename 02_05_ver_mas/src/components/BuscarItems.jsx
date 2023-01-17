import React, { useState, useEffect } from "react";

const BuscarItems = () => {
    const [paises, setPaises] = useState([]);
    const [mostrarTodo, setMostrarTodo] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const response = await fetch("JSON/paises.json");
                const data = await response.json();
                setPaises(data);
            } catch (err) {
                setError(err);
            }
        };
        cargarDatos();
    }, []);

    if (error) {
        return <p>Error de carga: {error.message}</p>;
    }

    const paisesFiltrados = mostrarTodo ? paises : paises.slice(0, 3);

    // const paisesFiltrados = mostrarTodo ? paises : paises.slice(0, paises.length / 2);

    return (
        <div className="mt-3 mb-5">


            {mostrarTodo && <button onClick={() => setMostrarTodo(false)} className="btn btn-danger mt-5">Ver menos entradas</button>}

            <div className="row mb-5">
                {paisesFiltrados.map((pais) => (
                    <div key={pais.nombre_pais} className="col-md-3" >


                        <div className="card mt-5" >
                            <div className="card-header">
                                <h2>{pais.nombre_pais}</h2>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><b>Atracciones principales:</b> {pais.atracciones}</li>
                                <li className="list-group-item"><b>Idioma:</b>  {pais.idioma}</li>
                                <li className="list-group-item"><b>Comidas populares:</b> {pais.comidas}</li>
                            </ul>
                        </div>


                    </div>
                ))}
            </div>

            {mostrarTodo ? null : <button onClick={() => setMostrarTodo(true)} className="btn btn-success  mt-5">Ver lista completa</button>}


        </div>
    );
};

export default BuscarItems;