package com.smtaste.ddd.PruebasUnitarias.Producto;

import com.smtaste.ddd.domain.producto.Producto;
import com.smtaste.ddd.domain.producto.IProductoRepository;
import com.smtaste.ddd.domain.producto.ProductoServicioDominio;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.Mockito;
import java.util.Arrays;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ProductoServicioDominioTest {
    private IProductoRepository productoRepository;
    private ProductoServicioDominio productoServicio;

    @BeforeEach
    void setUp() {
        productoRepository = mock(IProductoRepository.class);
        productoServicio = new ProductoServicioDominio(productoRepository);
    }

    @Test
    void encontrarProductos_DeberiaRetornarListaProductos() {
        Producto p1 = new Producto();
        p1.setId(1);
        p1.setNombreProducto("Hamburguesa");

        Producto p2 = new Producto();
        p2.setId(2);
        p2.setNombreProducto("Pizza");

        when(productoRepository.findAll()).thenReturn(Arrays.asList(p1, p2));

        List<Producto> productos = productoServicio.encontrarProductos();

        assertEquals(2, productos.size());
        assertEquals("Hamburguesa", productos.get(0).getNombreProducto());
        assertEquals("Pizza", productos.get(1).getNombreProducto());
    }
}
