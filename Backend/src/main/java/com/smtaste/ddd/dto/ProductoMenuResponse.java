package com.smtaste.ddd.dto;
public record ProductoMenuResponse (
        Integer id,
        String nombre,
        String urlImagen,
        String descripcion,
        Integer cantidad,
        Float precio
) {
}