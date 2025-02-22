package com.smtaste.ddd.domain.producto;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Table
@Entity
@Getter
@Setter
@NoArgsConstructor
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