package com.smtaste.ddd.domain.producto;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Restaurante {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombre;
    private String descripcion;
    private String ubicacion;
    private String imagen;
    private String qr_pago;
    @OneToMany(mappedBy = "restaurante")
    private List<Producto> productos;
}
