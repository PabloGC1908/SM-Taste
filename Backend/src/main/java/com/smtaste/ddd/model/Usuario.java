package com.smtaste.ddd.model;

import com.smtaste.ddd.domain.usuario.Pedido;
import com.smtaste.ddd.domain.usuario.Rol;
import com.smtaste.ddd.domain.usuario.Tarjeta;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;
    private String apellido;
    @Enumerated(EnumType.ORDINAL)
    private Rol rol;
    private String email;
    private String contrasena;
    @OneToMany(mappedBy = "usuario")
    private List<Pedido> pedidos;
    @OneToMany(mappedBy = "usuario")
    private List<Tarjeta> tarjetas;


    public String getNombre() {
        return nombre;
    }

    public String getContrasena() {
        return contrasena;
    }
}
