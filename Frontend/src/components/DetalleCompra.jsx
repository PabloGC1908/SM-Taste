import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import '../assets/css/style.css';
import '../assets/css/style-detalle-compras.css';

// Ícono personalizado para el marcador
const customIcon = new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

const DetalleCompra = () => {
    // Estado para la información de la compra
    const [orderDetails, setOrderDetails] = useState({
        deliveryAddress: 'Universidad Nacional Mayor de San Marcos, Lima, Perú',
        paymentMethod: '',
        totalProductCost: 0,
        shippingCost: 3.00,
        totalCost: 0,
    });

    const [position, setPosition] = useState([-12.0586, -77.0840]); // UNMSM
    const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

    useEffect(() => {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const totalProductCost = carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
        const totalCost = totalProductCost + orderDetails.shippingCost;

        setOrderDetails(prevState => ({
            ...prevState,
            totalProductCost,
            totalCost,
        }));
    }, [orderDetails.shippingCost]);

    // Función para buscar coordenadas a partir de una dirección
    const fetchCoordinates = async (address) => {
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
            const data = await response.json();

            if (data.length > 0) {
                const { lat, lon } = data[0];
                setPosition([parseFloat(lat), parseFloat(lon)]);
            } else {
                alert("Dirección no encontrada. Intenta ser más específico.");
            }
        } catch (error) {
            console.error("Error obteniendo coordenadas:", error);
        }
    };

    // Manejar cambio de dirección y buscar coordenadas
    const handleAddressChange = (e) => {
        const newAddress = e.target.value;
        setOrderDetails({ ...orderDetails, deliveryAddress: newAddress });
    };

    // Confirmar dirección y buscar coordenadas
    const handleConfirmAddress = () => {
        fetchCoordinates(orderDetails.deliveryAddress);
    };

    // Manejar método de pago
    const handlePaymentMethodChange = (e) => {
        setOrderDetails({
            ...orderDetails,
            paymentMethod: e.target.value,
        });
    };

    // Confirmar pedido
    const handleConfirmOrder = () => {
        if (orderDetails.paymentMethod === 'contra_entrega') {
            setIsOrderConfirmed(true);
        } else if (orderDetails.paymentMethod === 'yape' || orderDetails.paymentMethod === 'plin') {
            window.location.href = '/confirmation';
        } else {
            alert("Selecciona un método de pago válido");
        }
        localStorage.clear();
    };

    return (
        <div className="detalle-compras-container">
            {isOrderConfirmed ? (
                <div className="felicidades-container">
                    <div className="felicidades-message">
                        <h2>¡Felicidades por tu compra!</h2>
                        <p>Tu pedido ha sido confirmado y pronto recibirás la entrega. ¡Gracias por elegirnos!</p>
                        <button onClick={() => window.location.href = '/home'}>Volver al inicio</button>
                    </div>
                </div>
            ) : (
                <>
                    {/* Sección de entrega */}
                    <div className="detalle-entrega">
                        <h2>Entrega</h2>
                        <MapContainer center={position} zoom={15} style={{ height: "300px", width: "100%" }}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={position} icon={customIcon}>
                                <Popup>{orderDetails.deliveryAddress}</Popup>
                            </Marker>
                        </MapContainer>
                        <textarea
                            placeholder="Escribe la dirección de entrega aquí..."
                            value={orderDetails.deliveryAddress}
                            onChange={handleAddressChange}
                        />
                        <button onClick={handleConfirmAddress}>Confirmar dirección</button>
                    </div>

                    {/* Sección de método de pago */}
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

                    {/* Resumen de la compra */}
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
                </>
            )}
        </div>
    );
};

export default DetalleCompra;
