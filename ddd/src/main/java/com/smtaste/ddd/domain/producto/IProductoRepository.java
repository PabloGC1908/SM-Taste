package com.smtaste.ddd.domain.producto;

public interface IProductoRepository {
    String obtenerProducto(int id);
    String listarProductos();
    String detalles();
}
