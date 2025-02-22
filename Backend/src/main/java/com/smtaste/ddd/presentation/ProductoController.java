package com.smtaste.ddd.presentation;

import com.smtaste.ddd.domain.producto.Producto;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
public class ProductoController {


    @GetMapping
    public List<?> getProductos() {
        return null;
    }

    @PostMapping
    public void addProducto(Producto producto) {

    }

    @PutMapping("/{id}")
    public void updateProducto(@PathVariable int id, Producto producto) {

    }

    @DeleteMapping("/{id}")
    public void deleteProducto(@PathVariable int id) {

    }
}
