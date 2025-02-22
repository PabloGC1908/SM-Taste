package com.smtaste.ddd.dto;

public record ProductoCarritoDto(
        Integer id,
        String nombre,
        String urlImagen,
        String descripcion,
        String nombreRestaurante,
        Float precio
) {
}