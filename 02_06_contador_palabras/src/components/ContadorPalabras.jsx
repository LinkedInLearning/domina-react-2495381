import React, { useState } from "react";

const ContadorPalabras = () => {
    const [texto, setTexto] = useState("");

    const actualizarTexto = (e) => {
        setTexto(e.target.value);
    };

    const conteoPalabras = texto.trim().split(" ").length;

    return (
        <div>
            <h1>Contador de palabras</h1>
            <textarea value={texto} onChange={actualizarTexto} rows={5} cols={30} />
            <p>Conteo de palabras: {conteoPalabras}</p>
        </div>
    );
};

export default ContadorPalabras;
