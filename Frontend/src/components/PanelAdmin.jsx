import React, { useState, useEffect } from 'react';
import '../assets/css/style.css';
import '../assets/css/style-panel.css';

const PanelAdmin = () => {
    const [platos, setPlatos] = useState([]);
    const [selectedPlato, setSelectedPlato] = useState(null);
    const [nuevoPlato, setNuevoPlato] = useState({
        nombre: '',
        precio: '',
        cantidad: '',
        descripcion: '',
        imagen: null,
    });

    useEffect(() => {
        fetchProductos();
    }, []);

    const fetchProductos = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/productos');
            const data = await response.json();
            setPlatos(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handlePlatoSelect = (e) => {
        const platoId = e.target.value;
        const plato = platos.find(p => p.id === parseInt(platoId));
        setSelectedPlato(plato);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoPlato({ ...nuevoPlato, [name]: value });
    };

    const handleImagenChange = (e) => {
        const file = e.target.files[0];
        setNuevoPlato({ ...nuevoPlato, imagen: file });
    };

    const handlePlatoUpdate = async () => {
        if (!selectedPlato) return;
        const response = await fetch(`http://localhost:8080/api/productos/${selectedPlato.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(selectedPlato),
        });
        if (response.ok) {
            alert('Producto actualizado correctamente');
            fetchProductos();
        } else {
            alert('Error al actualizar producto');
        }
    };

    const handlePlatoDelete = async () => {
        if (!selectedPlato) return;
        const response = await fetch(`http://localhost:8080/api/productos/${selectedPlato.id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            alert('Producto eliminado correctamente');
            fetchProductos();
            setSelectedPlato(null);
        } else {
            alert('Error al eliminar producto');
        }
    };

    const handleNuevoPlatoSubmit = async () => {
        if (!nuevoPlato.nombre || !nuevoPlato.precio) return;
        const response = await fetch('http://localhost:8080/api/productos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevoPlato),
        });
        if (response.ok) {
            alert('Producto añadido correctamente');
            fetchProductos();
            setNuevoPlato({ nombre: '', precio: '', cantidad: '', descripcion: '', imagen: null });
        } else {
            alert('Error al añadir producto');
        }
    };

    return (
        <div className="admin-container">
            <h2>Menú del día</h2>
            <div className="form-container">
                <div className="form-box">
                    <h3>Modificar Plato</h3>
                    <select onChange={handlePlatoSelect} value={selectedPlato ? selectedPlato.id : ''}>
                        <option value="">Seleccionar Plato</option>
                        {platos.map(plato => (
                            <option key={plato.id} value={plato.id}>{plato.nombre}</option>
                        ))}
                    </select>
                    {selectedPlato && (
                        <>
                            <input type="text" placeholder="Nombre" value={selectedPlato.nombre} 
                                onChange={(e) => setSelectedPlato({ ...selectedPlato, nombre: e.target.value })} />
                            <input type="number" placeholder="Precio" value={selectedPlato.precio} 
                                onChange={(e) => setSelectedPlato({ ...selectedPlato, precio: e.target.value })} />
                            <input type="number" placeholder="Cantidad" value={selectedPlato.cantidad} 
                                onChange={(e) => setSelectedPlato({ ...selectedPlato, cantidad: e.target.value })} />
                            <textarea placeholder="Descripción" value={selectedPlato.descripcion} 
                                onChange={(e) => setSelectedPlato({ ...selectedPlato, descripcion: e.target.value })} />
                            <button onClick={handlePlatoUpdate}>Actualizar</button>
                            <button onClick={handlePlatoDelete} style={{ backgroundColor: '#dc3545' }}>Eliminar</button>
                        </>
                    )}
                </div>
                <div className="form-box">
                    <h3>Añadir Plato Nuevo</h3>
                    <input type="text" placeholder="Nombre" name="nombre" value={nuevoPlato.nombre} onChange={handleInputChange} />
                    <input type="number" placeholder="Precio" name="precio" value={nuevoPlato.precio} onChange={handleInputChange} />
                    <input type="number" placeholder="Cantidad" name="cantidad" value={nuevoPlato.cantidad} onChange={handleInputChange} />
                    <textarea placeholder="Descripción" name="descripcion" value={nuevoPlato.descripcion} onChange={handleInputChange} />
                    <button onClick={handleNuevoPlatoSubmit}>Añadir</button>
                </div>
            </div>
        </div>
    );
};

export default PanelAdmin;
