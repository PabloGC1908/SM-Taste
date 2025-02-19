package com.smtaste.ddd.domain.producto;

import jakarta.persistence.*;

@Table
@Entity
public class Restaurante {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombre;
    private String descripcion;
    private String ubicacion;
}
