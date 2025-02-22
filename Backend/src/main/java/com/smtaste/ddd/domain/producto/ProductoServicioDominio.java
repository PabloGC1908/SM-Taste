package com.smtaste.ddd.domain.producto;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductoServicioDominio {
    private final IProductoRepository productoRepository;

    // Inyección de dependencia
    public ProductoServicioDominio(IProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    // Método corregido para listar productos
    public List<Producto> encontrarProducto() {
        return productoRepository.findAll(); // Se cambia listarProductos() por findAll()
    }
}