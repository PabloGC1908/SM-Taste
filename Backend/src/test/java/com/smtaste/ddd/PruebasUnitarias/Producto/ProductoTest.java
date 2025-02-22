package com.smtaste.ddd.PruebasUnitarias.Producto;


import com.smtaste.ddd.domain.producto.Producto;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class ProductoTest {

    @Test
    void crearProducto_DeberiaInicializarValores() {
        Producto producto = new Producto();
        producto.setId(1);
        producto.setNombreProducto("Pizza");
        producto.setDescripcionProducto("Pizza con queso y pepperoni");
        producto.setCategoria("Comida rápida");
        producto.setPrecio(12.99f);
        producto.setCantidad(10);

        assertEquals(1, producto.getId());
        assertEquals("Pizza", producto.getNombreProducto());
        assertEquals("Pizza con queso y pepperoni", producto.getDescripcionProducto());
        assertEquals("Comida rápida", producto.getCategoria());
        assertEquals(12.99f, producto.getPrecio());
        assertEquals(10, producto.getCantidad());
    }
}
