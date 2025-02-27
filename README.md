# Sistema de Integración de Cafeterías con Mayor Demanda de la UNMSM  

## 📌 Curso: Taller de Construcción de Software Web  

## 👨‍💻 Autores  
- **Fredy Anthony Huerta Firma**  
- **Leonardo David Baca Carretero**  
- **Triveño Ruffner Daniel**  
- **Joseph Rodolfo Flores Hilario**  
- **Jhon Bryan Gonzalez Villalobos**  
- **Pablo Francisco Guerra Camana**  
- **Leonardo Franco Ormeño Vasquez**  
- **Germán Callupe Huamán**

## 🎯 Propósito del Proyecto  
Este sistema tiene como objetivo integrar y mejorar la gestión de pedidos en las cafeterías con mayor demanda de la **Universidad Nacional Mayor de San Marcos (UNMSM)**.  
Se busca optimizar la experiencia del usuario, reducir tiempos de espera y facilitar el acceso a productos mediante una plataforma eficiente y escalable.  

## 🏗️ Vista General de la Arquitectura  
A continuación, se presenta la arquitectura general del sistema:  

![Vista General de la Arquitectura](Arquitectura-G4.png)  
  
## Principales servicios REST y funcionalidades
El proyecto sigue el formato estándar OpenAPI y utiliza Swagger como herramienta de documentación.

- Módulo: Gestión de Restaurantes
  - Operaciones disponibles:
    - GET /restaurants/{id} - Obtiene la información de un restaurante por ID
    - POST /restaurants - Crea un nuevo restaurante
    - PUT /restaurants/{id} - Actualiza la información de un restaurante
    - DELETE /restaurants/{id} - Elimina un restaurante

Ejemplo de implementación de un controlador REST en Spring Boot:
- Modelos
  - Restaurant
    
  - Menu
    
  - User
    
## Prácticas de Desarrollo
El proyecto sigue buenas prácticas de desarrollo para garantizar calidad y mantenibilidad:
- Construcción Automática: Uso de Maven para la gestión de dependencias y construcción.
- Análisis Estático: Integración de herramientas como SonarQube para identificar problemas en el código.
- Pruebas Unitarias: Implementación de pruebas con JUnit.
Ejemplo de prueba unitaria con JUnit:

- Pruebas de APIs: Validación de endpoints con Postman o herramientas como RestAssured.
  Ejemplo de prueba de API con RestAssured:
## Pipeline de CI/CD en Jenkins
El proyecto implementa un pipeline de CI/CD con las siguientes etapas:
- Construcción Automática: Compilación del código con Maven.
- Análisis Estático: Evaluación del código con SonarQube.
- Pruebas Unitarias: Ejecución de pruebas con JUnit.
- Pruebas de APIs: Verificación de endpoints REST con herramientas automatizadas.
Ejemplo de archivo Jenkinsfile:
