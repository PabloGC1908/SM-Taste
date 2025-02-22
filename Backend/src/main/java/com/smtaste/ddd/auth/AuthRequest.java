package com.smtaste.ddd.auth;

public record AuthRequest(
        String email,
        String contrasena
) {
}
