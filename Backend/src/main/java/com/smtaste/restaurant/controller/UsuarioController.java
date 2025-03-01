package com.smtaste.restaurant.controller;

import com.smtaste.restaurant.security.auth.AuthRequest;
import com.smtaste.restaurant.service.UsuarioService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/usuarios")
@Tag(name = "Usuarios", description = "Endpoints para autenticación y gestión de usuarios")
public class UsuarioController {
    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @Operation(
            summary = "Iniciar sesión",
            description = "Recibe credenciales de usuario y devuelve el nombre de usuario si las credenciales son correctas.",
            requestBody = @RequestBody(
                    description = "Credenciales del usuario para autenticación",
                    required = true,
                    content = @Content(
                            schema = @Schema(implementation = AuthRequest.class)
                    )
            ),
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Inicio de sesión exitoso, devuelve el nombre de usuario",
                            content = @Content(schema = @Schema(example = "{\"user\": \"nombre_de_usuario\"}"))
                    ),
                    @ApiResponse(
                            responseCode = "400",
                            description = "Credenciales incorrectas o usuario no encontrado",
                            content = @Content(schema = @Schema(example = "{\"message\": \"Usuario no encontrado\"}"))
                    )
            }
    )
    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> getUsernameByLogin(@RequestBody AuthRequest authRequest) {
        String usuarioNombre = usuarioService.getUsuario(authRequest);
        Map<String, String> response = new HashMap<>();

        if (usuarioNombre == null) {
            response.put("message", "Usuario no encontrado");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        response.put("user", usuarioNombre);
        return ResponseEntity.ok(response);
    }
}
