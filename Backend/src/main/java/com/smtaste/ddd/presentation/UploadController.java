package com.smtaste.ddd.presentation;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api/upload")
public class UploadController {

    @PostMapping
    public ResponseEntity<String> uploadImage(@RequestBody MultipartFile file) {
        String fileUrl = saveFileAndGetUrl(file);

        return ResponseEntity.ok(fileUrl);
    }

    private String saveFileAndGetUrl(MultipartFile file) {
        String fileName = file.getOriginalFilename();
        Path path = Paths.get("uploads").resolve(fileName);

        try {
            // Crear la carpeta si no existe
            Files.createDirectories(path.getParent());
            Files.copy(file.getInputStream(), path);
        } catch (IOException e) {
            return "Error al guardar el archivo";
        }
        return "http://localhost:8080/uploads/" + fileName;
    }
}
