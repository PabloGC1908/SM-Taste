package com.smtaste.ddd.service;

import com.smtaste.ddd.domain.producto.Producto;
import com.smtaste.ddd.domain.producto.ProductoServicioDominio;

import java.util.List;

public interface IProductoService {
    List<?> encontrarProducto();
    void agregarProducto(Producto producto);
    void actualizarProducto(Producto producto);
    void eliminarProducto(int id);
}
