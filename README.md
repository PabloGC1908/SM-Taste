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
  
    ![image](https://github.com/user-attachments/assets/7fe7a4e5-4a31-4389-b56b-677afe2a99ba)
  
  - Producto
  
    ![image](https://github.com/user-attachments/assets/a90a9704-3490-4e15-86b5-783a5b81e726)

  - Usuario

    ![image](https://github.com/user-attachments/assets/c3469118-1291-44a0-9e26-37d33baa5c91)

## Prácticas de Desarrollo
El proyecto sigue buenas prácticas de desarrollo para garantizar calidad y mantenibilidad:
- Construcción Automática: Uso de Maven para la gestión de dependencias y construcción.
- Análisis Estático: Integración de herramientas como SonarQube para identificar problemas en el código.
- Pruebas Unitarias: Implementación de pruebas con JUnit.

  ![image](https://github.com/user-attachments/assets/f4f4b5a2-1ede-42b8-9f0f-e1343cdfb0a4)

Ejemplo de prueba unitaria con JUnit:

![image](https://github.com/user-attachments/assets/b2a6fc8c-0f7d-4a8b-8ba6-0e6e6c04e28f)

- Pruebas de APIs: Validación de endpoints con Postman o herramientas como RestAssured.
Pruebas APIs RestAssured

![image](https://github.com/user-attachments/assets/5860e9a4-3b62-4137-99cd-f52edad597c6)

Pruebas APIs Postman

![image](https://github.com/user-attachments/assets/4083f71c-425a-4ea6-8fd3-f4276710cc87)

  Ejemplo de prueba de API con RestAssured:
RestAssured

![image](https://github.com/user-attachments/assets/b2a6fc8c-0f7d-4a8b-8ba6-0e6e6c04e28f)

Postman

![image](https://github.com/user-attachments/assets/4ab186c2-e527-4545-a73c-ba514eb9564a)


## Pipeline de CI/CD en Jenkins
El proyecto implementa un pipeline de CI/CD con las siguientes etapas:
- Construcción Automática: Compilación del código con Maven.
- Análisis Estático: Evaluación del código con SonarQube.
- Pruebas Unitarias: Ejecución de pruebas con JUnit.
- Pruebas de APIs: Verificación de endpoints REST con herramientas automatizadas.
Ejemplo de archivo Jenkinsfile:
