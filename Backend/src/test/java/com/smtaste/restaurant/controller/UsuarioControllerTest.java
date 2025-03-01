package com.smtaste.restaurant.controller;

import com.smtaste.restaurant.security.auth.AuthRequest;
import com.smtaste.restaurant.service.UsuarioService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class UsuarioControllerTest {

    @Mock
    private UsuarioService usuarioService;

    @InjectMocks
    private UsuarioController usuarioController;

    private static final String USUARIO_TEST = "usuarioTest";

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetUsernameByLoginUserNotFound() {
        // Configuración de AuthRequest de prueba
        AuthRequest authRequest = new AuthRequest(USUARIO_TEST, "passwordTest");

        // Mockeo del servicio para simular que no se encuentra el usuario
        when(usuarioService.getUsuario(any(AuthRequest.class))).thenReturn(null);

        // Realizar la solicitud y obtener la respuesta
        ResponseEntity<Map<String, String>> response = usuarioController.getUsernameByLogin(authRequest);

        // Verificar el código de estado y el mensaje
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("Usuario no encontrado", response.getBody().get("message"));
    }

    @Test
    void testGetUsernameByLoginUserFound() {
        // Configuración de AuthRequest de prueba
        AuthRequest authRequest = new AuthRequest(USUARIO_TEST, "passwordTest");

        // Mockeo del servicio para devolver el nombre de usuario
        when(usuarioService.getUsuario(any(AuthRequest.class))).thenReturn(USUARIO_TEST);

        // Realizar la solicitud y obtener la respuesta
        ResponseEntity<Map<String, String>> response = usuarioController.getUsernameByLogin(authRequest);

        // Verificar el código de estado y el nombre de usuario
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(USUARIO_TEST, response.getBody().get("user"));
    }
}