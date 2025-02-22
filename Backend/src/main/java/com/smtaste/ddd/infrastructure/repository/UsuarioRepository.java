package com.smtaste.ddd.infrastructure.repository;

<<<<<<< HEAD
import java.util.Optional;

import com.smtaste.ddd.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    Optional<com.smtaste.ddd.model.Usuario> findByEmail(String email);
=======
import com.smtaste.ddd.domain.usuario.Usuario;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    Optional<Usuario> findByEmail(String email);
>>>>>>> develop

    @Query("SELECT u.nombre FROM Usuario u WHERE u.email = :email AND u.contrasena = :contrasena")
    Optional<String> findByLogin(@Param("email") String email, @Param("contraseña") String contrasena);
}
