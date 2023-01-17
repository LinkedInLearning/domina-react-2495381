import React, { useState, useEffect } from 'react';
import './Carrito.css';

function Carrito() {
    const [productos, setProductos] = useState([]);
    const [shoppingCart, setShoppingCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetch('JSON/productos.json')
            .then(response => response.json())
            .then(data => setProductos(data.productos))
    }, []);

    const agregarAlCarrito = (producto) => {
        setShoppingCart([...shoppingCart, producto]);
        setTotal(total + producto.precio);
    }

    const removerDelCarrito = (producto) => {
        setShoppingCart(shoppingCart.filter(p => p.id !== producto.id));
        setTotal(total - producto.precio);
    }

    return (
        <div>
            <h2>Tienda online</h2> 

            <div className='row'>

                <div className='productos col-md-8'>
                    <div className='row'>
                        {productos.map(product => (
                            <div className='col-md-4 mt-3' key={product.id}>
                                <div className="card" >
                                    <div className="card-header">
                                        <h4>{product.nombre}</h4>
                                    </div>

                                    <div className="card-body">
                                        <p className="card-text"><strong>Precio:</strong>${product.precio}</p>
                                        <p >
                                            <button className='btn btn-secondary btn-sm' onClick={() => agregarAlCarrito(product)}>Agregar al carrito</button>
                                        </p>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {shoppingCart.length > 0 &&
                    <div className='col-md-4 '>
                        <ul className="list-group">
                            <li className='list-group-item active'>Carrito de Compras</li>
                            {shoppingCart.map(producto => (
                                <li className="list-group-item" key={producto.id}>

                                    <div className="row justify-content-between">
                                        <div className="col-7">
                                            {producto.nombre} - ${producto.precio}
                                        </div>
                                        <div className="col-5">
                                            <button className='btn btn-danger btn-sm' onClick={() => removerDelCarrito(producto)}>Eliminar</button>
                                        </div>
                                    </div>

                                </li>
                            ))}
                            <li className='list-group-item list-group-item-dark'>Total: ${total}</li>
                        </ul>

                        <button className='btn btn-success col-md-12'>Pagar</button>
                    </div>
                }
                {shoppingCart.length == 0 &&
                    <div className='col-md-4'>
                        <ul className="list-group">
                            <li className='list-group-item active'>Carrito de compras</li>
                            <li className="list-group-item"> Carrito vacío </li>
                        </ul>
                    </div>
                }

            </div>
        </div>
    );
}

export default Carrito;
