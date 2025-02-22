package com.smtaste.ddd.service;

import com.smtaste.ddd.domain.producto.Producto;

import java.util.List;

public interface IProductoService {
    List<?> encontrarProducto();
    void agregarProducto(Producto producto);
    void actualizarProducto(Producto producto);
    void eliminarProducto(int id);
}
