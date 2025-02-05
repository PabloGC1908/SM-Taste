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
        // Simulando la carga de platos
        const platosData = [
            { id: 1, nombre: 'Plato 1', precio: 20, cantidad: 5, descripcion: 'Deliciosa comida 1', imagen: 'https://via.placeholder.com/150' },
            { id: 2, nombre: 'Plato 2', precio: 15, cantidad: 3, descripcion: 'Deliciosa comida 2', imagen: 'https://via.placeholder.com/150' },
        ];
        setPlatos(platosData);
    }, []);

    const handlePlatoSelect = (e) => {
        const platoId = e.target.value;
        const plato = platos.find(p => p.id === parseInt(platoId));
        setSelectedPlato(plato);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoPlato({
            ...nuevoPlato,
            [name]: value,
        });
    };

    const handleNuevoPlatoSubmit = () => {
        // Agregar nuevo plato (simulado)
        setPlatos([...platos, { ...nuevoPlato, id: platos.length + 1, imagen: URL.createObjectURL(nuevoPlato.imagen) }]);
        setNuevoPlato({ nombre: '', precio: '', cantidad: '', descripcion: '', imagen: null });
    };

    const handlePlatoUpdate = () => {
        // Actualizar plato seleccionado
        setPlatos(platos.map(plato => (plato.id === selectedPlato.id ? selectedPlato : plato)));
    };

    const handlePlatoDelete = () => {
        // Eliminar plato seleccionado
        setPlatos(platos.filter(plato => plato.id !== selectedPlato.id));
        setSelectedPlato(null);
    };

    const handleImagenChange = (e) => {
        const file = e.target.files[0];
        setNuevoPlato({
            ...nuevoPlato,
            imagen: file,
        });
    };

    return (
        <div className="admin-container">
            <h2>Menú del día</h2>
            <div className="form-container">
                {/* Modificar Plato */}
                <div className="form-box">
                    <h3>Modificar Plato</h3>
                    <select id="select-plato" onChange={handlePlatoSelect} value={selectedPlato ? selectedPlato.id : ''}>
                        <option value="">Seleccionar Plato</option>
                        {platos.map(plato => (
                            <option key={plato.id} value={plato.id}>{plato.nombre}</option>
                        ))}
                    </select>
                    {selectedPlato && (
                        <>
                            <img id="img-plato" src={selectedPlato.imagen} alt="Imagen del Plato" />
                            <input type="file" id="imagen-plato-file" onChange={handleImagenChange} />
                            <input
                                type="text"
                                id="nombre-plato"
                                placeholder="Nombre del Plato"
                                value={selectedPlato.nombre}
                                onChange={(e) => setSelectedPlato({ ...selectedPlato, nombre: e.target.value })}
                            />
                            <input
                                type="number"
                                id="precio-plato"
                                placeholder="Precio: S/.00"
                                value={selectedPlato.precio}
                                onChange={(e) => setSelectedPlato({ ...selectedPlato, precio: e.target.value })}
                            />
                            <input
                                type="number"
                                id="cantidad-plato"
                                placeholder="Cantidad: 00"
                                value={selectedPlato.cantidad}
                                onChange={(e) => setSelectedPlato({ ...selectedPlato, cantidad: e.target.value })}
                            />
                            <textarea
                                id="descripcion-plato"
                                placeholder="Descripción"
                                value={selectedPlato.descripcion}
                                onChange={(e) => setSelectedPlato({ ...selectedPlato, descripcion: e.target.value })}
                            />
                            <button onClick={handlePlatoUpdate} id="actualizar-plato">Actualizar</button>
                            <button onClick={handlePlatoDelete} id="eliminar-plato" style={{ backgroundColor: '#dc3545' }}>Eliminar</button>
                        </>
                    )}
                </div>

                {/* Añadir Plato Nuevo */}
                <div className="form-box">
                    <h3>Añadir Plato Nuevo</h3>
                    <img id="img-nuevo" src="images/dish-2.png" alt="Plato Nuevo" />
                    <input type="file" id="imagen-nuevo-file" onChange={(e) => setNuevoPlato({ ...nuevoPlato, imagen: e.target.files[0] })} />
                    <input
                        type="text"
                        id="nombre-nuevo"
                        placeholder="Nombre del Plato"
                        name="nombre"
                        value={nuevoPlato.nombre}
                        onChange={handleInputChange}
                    />
                    <input
                        type="number"
                        id="precio-nuevo"
                        placeholder="Precio: S/.00"
                        name="precio"
                        value={nuevoPlato.precio}
                        onChange={handleInputChange}
                    />
                    <input
                        type="number"
                        id="cantidad-nuevo"
                        placeholder="Cantidad: 00"
                        name="cantidad"
                        value={nuevoPlato.cantidad}
                        onChange={handleInputChange}
                    />
                    <textarea
                        id="descripcion-nuevo"
                        placeholder="Agrega una Descripción"
                        name="descripcion"
                        value={nuevoPlato.descripcion}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleNuevoPlatoSubmit} id="añadir-plato">Añadir</button>
                    <button
                        onClick={() => setNuevoPlato({ nombre: '', precio: '', cantidad: '', descripcion: '', imagen: null })}
                        id="limpiar-formulario"
                        style={{ backgroundColor: '#dc3545' }}
                    >
                        Limpiar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PanelAdmin;
