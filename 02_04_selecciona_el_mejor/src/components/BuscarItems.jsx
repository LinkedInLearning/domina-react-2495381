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
        if (orden !== "") {
            return a[orden].localeCompare(b[orden]);
        } else {
            return true;
        }
    });

    const ordenRanking = (orden) => {
        setOrden(orden);
    }
    return (
        <div className="mt-3 mb-5">

            <button onClick={() => ordenRanking("ranking_comidas")} className="btn btn-success mx-3">Ranking Comidas</button>
            <button onClick={() => ordenRanking("ranking_hoteles")} className="btn btn-primary mx-3">Ranking Hoteles</button>
            <button onClick={() => ordenRanking("ranking_precios")} className="btn btn-dark mx-3">Ranking Precios</button>


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