package com.smtaste.ddd.presentation;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {
    public UsuarioController() {
    }

    @GetMapping("/login")
    public boolean getUsernameByLogin(String login) {
        return false;
    }
}
