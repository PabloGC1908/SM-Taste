package com.smtaste.ddd.service;

public interface IUsuarioService {
    boolean autenticarUsuario(String email, String password);
}
