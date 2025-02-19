package com.smtaste.ddd.domain.producto;

import jakarta.persistence.*;

@Table
@Entity
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombreProducto;
    private String descripcionProducto;
    private String categoria;
    private float precio;
    private int cantidad;
}
