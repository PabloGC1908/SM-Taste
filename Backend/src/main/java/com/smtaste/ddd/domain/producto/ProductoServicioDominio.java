package com.smtaste.ddd.domain.producto;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductoServicioDominio {
    private final IProductoRepository productoRepository;

    public ProductoServicioDominio(IProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    public List<Producto> encontrarProductos() {
        return productoRepository.findAll();
    }
}