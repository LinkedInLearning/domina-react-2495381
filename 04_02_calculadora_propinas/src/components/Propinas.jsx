import React, { useState } from 'react';

function Propinas() {
    const [cuentaMonto, setCuentaMonto] = useState(0);
    const [propinaPorcentaje, setPropinaPorcentaje] = useState(0);
    const [propinaMonto, setPropinaMonto] = useState(0);
    const [cuentaTotal, setCuentaTotal] = useState(0);

    const calcularTotal = () => {

        const propina = ((cuentaMonto * propinaPorcentaje) / 100)

        setPropinaMonto(propina);
        setCuentaTotal(Number(cuentaMonto) + Number(propina));

    }

    return (
        <div>

            <div className="row">

                <div className="col-md-4" >


                    <div className="card mt-5" >
                        <div className="card-header">
                            <h3>Calculadora de Propinas</h3>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                Monto de la cuenta:
                                <input type="number" value={cuentaMonto} onChange={(e) => setCuentaMonto(e.target.value)} /></li>
                            <li className="list-group-item">
                                Porcentaje de Propina:
                                <input type="number" value={propinaPorcentaje} onChange={(e) => setPropinaPorcentaje(e.target.value)} /></li>
                            { cuentaTotal > 0 && 
                            (
                                <li className="list-group-item">
                                <p> Propina: ${propinaMonto}</p>
                                <p className='text-danger'> <strong>Total a pagar: ${cuentaTotal}</strong></p>  
                                </li>

                            )
                            
                            }
                             <li className="list-group-item">
                                    <button type="button" onClick={calcularTotal}>
                                        Calcular Total
                                    </button>
                                </li>
                        </ul>
                    </div>


                </div>

            </div>



            <form>
                <label>

                </label>
                <br />
                <label>

                </label>
                <br />
                <div>


                </div>
            </form>
        </div>

    );
}

export default Propinas;
