package com.smtaste.ddd.presentation;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/carrito")
public class CarritoController {

    public CarritoController() {
    }

    // TODO
    @GetMapping
    public List<?> obtenerCarrito() {
        return null;
    }

    @PostMapping
    public void agregarCarrito() {
    }

    @PutMapping("/{id}")
    public List<?> actualizarCarrito(@PathVariable int id) {
        return null;
    }

    @DeleteMapping
    public void eliminarCarrito() {

    }

}
