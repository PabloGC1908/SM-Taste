package com.smtaste.ddd.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.smtaste.ddd.domain.producto.Restaurante;
import com.smtaste.ddd.domain.usuario.ProductoPedido;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "producto")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;
    private String url_foto;
    private String descripcion;
    private String categoria;
    private Float precio;
    private Integer cantidad;
    @OneToMany(mappedBy = "producto")
    @JsonIgnore
    private List<ProductoPedido> productos;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_restaurante")
    @JsonIgnore
    private Restaurante restaurante;

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public void setPrecio(Float precio) {
        this.precio = precio;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public void setUrl_foto(String url_foto) {
        this.url_foto = url_foto;
    }

}

