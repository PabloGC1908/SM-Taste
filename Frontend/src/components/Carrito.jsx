import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/style.css'; 
import '../assets/css/style-carro.css'; 

const Carrito = () => {
    // Estado para los elementos del carrito
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Producto 1", price: 20.00, quantity: 2, imageUrl: "https://via.placeholder.com/50" },
        { id: 2, name: "Producto 2", price: 15.00, quantity: 1, imageUrl: "https://via.placeholder.com/50" },
        { id: 3, name: "Producto 3", price: 50.00, quantity: 1, imageUrl: "https://via.placeholder.com/50" },
    ]);

    // Calcular el costo total
    const calculateTotal = () => {
        const totalProductCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        const shippingCost = 3.00; // Costo fijo de envío
        const totalCost = totalProductCost + shippingCost;
        return { totalProductCost, shippingCost, totalCost };
    };

    const { totalProductCost, shippingCost, totalCost } = calculateTotal();

    return (
        <div className="cart-container">
            <div className="cart-header">
                <h2>Carro de Compras</h2>
                <Link to="/">Volver</Link>
            </div>

            <div className="cart-content">
                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <p>El carrito está vacío</p>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.imageUrl} alt={item.name} />
                                <div className="item-info">
                                    <h3>{item.name}</h3>
                                    <p>S/. {item.price.toFixed(2)}</p>
                                    <span>Cantidad: {item.quantity}</span>
                                </div>
                                <div className="item-controls">
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) => {
                                            const newCartItems = cartItems.map(cartItem =>
                                                cartItem.id === item.id ? { ...cartItem, quantity: parseInt(e.target.value) } : cartItem
                                            );
                                            setCartItems(newCartItems);
                                        }}
                                    />
                                    <button onClick={() => {
                                        setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
                                    }}>Eliminar</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="cart-summary">
                    <h3>Resumen</h3>
                    <div className="summary-item">
                        <span>Costo De Los Productos:</span>
                        <span>S/. {totalProductCost.toFixed(2)}</span>
                    </div>
                    <div className="summary-item">
                        <span>Costo De Envío:</span>
                        <span>S/. {shippingCost.toFixed(2)}</span>
                    </div>
                    <div className="summary-total summary-item">
                        <span>TOTAL:</span>
                        <span>S/. {totalCost.toFixed(2)}</span>
                    </div>
                    <div className="summary-button">
                        <Link to="/detalle-compra" className="btn">Continuar</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carrito;