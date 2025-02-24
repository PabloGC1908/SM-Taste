import React, { useEffect, useState } from "react";
import "../assets/css/style.css";

const Menu = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/productos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        return response.json();
      })
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const agregarAlCarrito = (producto) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({ ...producto, cantidad: 1 });
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${producto.nombre} agregado al carrito`);
};

  return (
    <section className="menu" id="menu">
      <h3 className="sub-heading">Nuestro menú</h3>
      <h1 className="heading">¡La especialidad de Hoy!</h1>

      <div className="box-container">
        {loading ? (
          <p>Cargando productos...</p>
        ) : error ? (
          <p style={{ color: "red" }}>Error: {error}</p>
        ) : productos.length > 0 ? (
          productos.map((producto) => (
            <div className="box" key={producto.id}>
              <div className="image">
                <img
                  src={`${producto.urlImagen}`} 
                  alt={producto.nombre}
                  className="product-image"
                  onError={(e) => (e.target.src = "/images/default.png")} // Imagen por defecto si falla
                />
              </div>

              <div className="content">
                <h3>{producto.nombre}</h3>
                <p>
                  <b>Descripción: </b> {producto.descripcion}
                </p>
                <p>
                  <b>Cantidad: </b> {producto.cantidad}
                </p>

                <button className="btn" onClick={() => agregarAlCarrito(producto)}>
                          <i className="fa-solid fa-cart-shopping"></i> 
                </button>

                <span className="price">S/. {producto.precio || "No disponible"}</span>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles</p>
        )}
      </div>
    </section>
  );
};

export default Menu;
