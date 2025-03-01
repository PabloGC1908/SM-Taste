import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/style.css';
import '../assets/css/style-carro.css';

const Carrito = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const shippingCost = 3.00;

    useEffect(() => {
        recuperarItems()
    }, []);

    async function recuperarItems() {
        const carritoItems = JSON.parse(localStorage.getItem('carrito')) || [];
        try {
            const response = await fetch('http://localhost:8080/api/carrito', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(carritoItems)
            });
    
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
    
            const responseData = await response.json();
            console.log("Respuesta de la API:", responseData);
    
            if (!Array.isArray(responseData)) {
                throw new Error("La respuesta de la API no es un array");
            }
    
            setCartItems(responseData);
            calcularTotal(responseData);
            localStorage.setItem('carrito', JSON.stringify(responseData));
        } catch (error) {
            console.error("Error al recuperar el carrito:", error);
            setCartItems([]); // Evita que cartItems sea undefined
        }
    }

    const calcularTotal = (items) => {
        const total = items.reduce((acc, item) => acc + item.precio * (item.cantidad || 1), 0);
        setTotalPrice(total);
    };

    const actualizarCantidad = (id, cantidad) => {
        const newCartItems = cartItems.map(item =>
            item.id === id ? { ...item, cantidad } : item
        );
        setCartItems([...newCartItems]); // Genera un nuevo array para actualizar el estado
        calcularTotal(newCartItems);
        const formattedCart = newCartItems.map(item => ({
            id: item.id,
            nombre: item.nombre,
            descripcion: item.descripcion,
            precio: parseFloat(item.precio), // Asegurar que es número
            cantidad: parseInt(item.cantidad) || 1, // Asegurar cantidad válida
            urlImagen: item.urlImagen
        }));
        
        localStorage.setItem('carrito', JSON.stringify(formattedCart));
    };

    const eliminarItem = (id) => {
        const newCartItems = cartItems.filter(item => item.id !== id);
        setCartItems([...newCartItems]); // Genera un nuevo array para actualizar el estado
        calcularTotal(newCartItems);
        const formattedCart = newCartItems.map(item => ({
            id: item.id,
            nombre: item.nombre,
            descripcion: item.descripcion,
            precio: parseFloat(item.precio), 
            cantidad: parseInt(item.cantidad) || 1, 
            urlImagen: item.urlImagen
        }));
        
        localStorage.setItem('carrito', JSON.stringify(formattedCart));
        
    };

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
                                <img src={item.urlImagen} alt={item.nombre} />
                                <div className="item-info">
                                    <h3>{item.nombre}</h3>
                                    <p>{item.descripcion}</p>
                                    <span style={{ color: 'green', fontWeight: 'bold', fontSize: '1.2em' }}>
                                        S/. {item.precio.toFixed(2)}
                                    </span>
                                </div>
                                <div className="item-controls">
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.cantidad || 1}
                                        onChange={(e) => actualizarCantidad(item.id, parseInt(e.target.value))}
                                    />
                                    <button onClick={() => eliminarItem(item.id)}>Eliminar</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="cart-summary">
                    <h3>Resumen</h3>
                    <div className="summary-item">
                        <span>Costo De Los Productos:</span>
                        <span>S/. {totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="summary-item">
                        <span>Costo De Envío:</span>
                        <span>S/. {shippingCost.toFixed(2)}</span>
                    </div>
                    <div className="summary-total summary-item">
                        <span>TOTAL:</span>
                        <span>S/. {(totalPrice + shippingCost).toFixed(2)}</span>
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
