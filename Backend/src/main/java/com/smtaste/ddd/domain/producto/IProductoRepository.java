package com.smtaste.ddd.domain.producto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IProductoRepository extends JpaRepository<Producto, Integer> {
    Optional<Producto> findById(Integer id); // Buscar un producto por ID
    List<Producto> findAll();  // Listar todos los productos
}
