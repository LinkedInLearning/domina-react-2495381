import React, { useState, useEffect } from "react";

const BuscarItems = () => {
    const [paises, setPaises] = useState([]);
    const [orden, setOrden] = useState("");
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

    const paisesFiltrados = paises.sort((a, b) => {
        if (orden === "asc") {
            return a.idioma.localeCompare(b.idioma);
        } else if (orden === "desc") {
            return b.idioma.localeCompare(a.idioma);
        } else {
            return true;
        }
    });

    const ordenAlfabetico = (orden) => {
        setOrden(orden);

    }
    return (
        <div className="mt-3 mb-5">

            <button onClick={() => ordenAlfabetico("asc")} className="btn btn-success mx-3">ASC</button>
            <button onClick={() => ordenAlfabetico("desc")} className="btn btn-danger mx-3">DESC</button>

            <div className="row">
                {paisesFiltrados.map((pais) => (
                    <div key={pais.nombre_pais} className="col-md-4" >


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

        </div>
    );
};

export default BuscarItems;