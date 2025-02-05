import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/style.css';
import '../assets/css/style-detalle-compras.css'; 

const DetalleCompra = () => {
    // Estado para la información de la compra
    const [orderDetails, setOrderDetails] = useState({
        deliveryAddress: '',
        paymentMethod: '',
        totalProductCost: 0,
        shippingCost: 3.00,
        totalCost: 0,
    });

    useEffect(() => {
        // Obtener los detalles del carrito desde el localStorage
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const totalProductCost = carrito.reduce((total, item) => total + item.price * item.quantity, 0);
        const totalCost = totalProductCost + orderDetails.shippingCost;

        // Actualizar los detalles de la compra
        setOrderDetails({
            ...orderDetails,
            totalProductCost,
            totalCost,
        });
    }, [orderDetails.shippingCost]); // Recalcular cuando el costo de envío cambie

    const handlePaymentMethodChange = (e) => {
        setOrderDetails({
            ...orderDetails,
            paymentMethod: e.target.value,
        });
    };

    const handleConfirmOrder = () => {
        // Lógica para confirmar la compra y redirigir según el método de pago
        if (orderDetails.paymentMethod === 'contra_entrega') {
            window.location.href = 'compra_realizada.html'; // Redirigir si el método es "Contra entrega"
        } else if (orderDetails.paymentMethod === 'yape') {
            window.location.href = 'yapeoplin.html'; // Redirigir si el método es "Yape"
        } else {
            alert("Selecciona un método de pago válido");
        }
        localStorage.clear(); // Limpiar el carrito después de la compra
    };

    return (
        <div className="detalle-compras-container">
            <div className="detalle-entrega">
                <h2>Entrega</h2>
                <div id="map">
                    {/* Puedes agregar el mapa o la información de la entrega aquí */}
                </div>
                <textarea
                    placeholder="Escribe la dirección de entrega aquí..."
                    value={orderDetails.deliveryAddress}
                    onChange={(e) => setOrderDetails({ ...orderDetails, deliveryAddress: e.target.value })}
                />
            </div>

            <div className="detalle-pago">
                <h2>Método de Pago</h2>
                <form>
                    <label>
                        <input
                            type="radio"
                            name="metodo_pago"
                            value="yape"
                            checked={orderDetails.paymentMethod === 'yape'}
                            onChange={handlePaymentMethodChange}
                        />
                        Yape o Plin
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="metodo_pago"
                            value="contra_entrega"
                            checked={orderDetails.paymentMethod === 'contra_entrega'}
                            onChange={handlePaymentMethodChange}
                        />
                        Contra entrega
                    </label>
                </form>
            </div>

            <div className="detalle-resumen">
                <h2>Resumen</h2>
                <p>
                    <span>Costo de los productos:</span>
                    <span>S/. {orderDetails.totalProductCost.toFixed(2)}</span>
                </p>
                <p>
                    <span>Costo de Envío:</span>
                    <span>S/. {orderDetails.shippingCost.toFixed(2)}</span>
                </p>
                <p>
                    <strong>TOTAL:</strong>
                    <strong>S/. {orderDetails.totalCost.toFixed(2)}</strong>
                </p>
                <button onClick={handleConfirmOrder}>Realizar Pedido</button>
            </div>
        </div>
    );
};

export default DetalleCompra;
