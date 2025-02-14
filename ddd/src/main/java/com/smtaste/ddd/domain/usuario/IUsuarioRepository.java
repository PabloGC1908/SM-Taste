package com.smtaste.ddd.domain.usuario;

public interface IUsuarioRepository {
    boolean crearUsuario(Usuario usuario);
    Usuario buscarUsuarioPorId(int id);
    Usuario actualizarUsuario(Usuario usuario);
    boolean eliminarUsuario(int id);
}
