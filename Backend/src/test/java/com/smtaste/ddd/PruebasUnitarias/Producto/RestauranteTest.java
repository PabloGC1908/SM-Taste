package com.smtaste.ddd.PruebasUnitarias.Producto;


import com.smtaste.ddd.domain.producto.Restaurante;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class RestauranteTest {

    @Test
    void crearRestaurante_DeberiaInicializarValores() {
        Restaurante restaurante = new Restaurante(1, "El Buen Sabor", "Comida Casera", "Av. Central 123");

        assertEquals(1, restaurante.getId());
        assertEquals("El Buen Sabor", restaurante.getNombre());
        assertEquals("Comida Casera", restaurante.getDescripcion());
        assertEquals("Av. Central 123", restaurante.getUbicacion());
    }
}
