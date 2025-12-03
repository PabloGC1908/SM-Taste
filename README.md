# Sistema de Integración de Cafeterías con Mayor Demanda de la UNMSM  

## 📌 Curso: GESTION DE MANTENIMIENTO DE SOFTWARE

## 👨‍💻 Autores  
- **Huerta Firma Fredy Anthony**  
- **Romero Llamoca Carlos Antonio**  
- **Flores Hilario Joseph Rodolfo**  
- **Cancio Bedon Alex**  

## 🎯 Propósito del Proyecto  
Este sistema tiene como objetivo integrar y mejorar la gestión de pedidos en las cafeterías con mayor demanda de la **Universidad Nacional Mayor de San Marcos (UNMSM)**.  
Se busca optimizar la experiencia del usuario, reducir tiempos de espera y facilitar el acceso a productos mediante una plataforma eficiente y escalable.  

## 🏗️ Vista General de la Arquitectura  
A continuación, se presenta la arquitectura general del sistema:  

![Vista General de la Arquitectura](Arquitectura-G4.png)  
  
## Principales servicios REST y funcionalidades

- Módulo: Gestión de Productos
  - Operaciones disponibles:
    
    ![image](https://github.com/user-attachments/assets/7003de77-5074-443f-9a47-9a2ba8f26d3f)
    
    ![image](https://github.com/user-attachments/assets/2a5c49b2-96ea-4814-ab20-ba542b439865)

  - Entidad Clave:
    - Producto
    
      ![image](https://github.com/user-attachments/assets/a90a9704-3490-4e15-86b5-783a5b81e726)

- Módulo: Gestión de Usuarios
  - Operaciones disponibles:
 
    ![image](https://github.com/user-attachments/assets/7b414d68-c59c-4ea8-af77-c9cf472283f4)

  - Entidad Clave:
    - Usuario

    ![image](https://github.com/user-attachments/assets/c3469118-1291-44a0-9e26-37d33baa5c91)

## Prácticas de Desarrollo
El proyecto sigue buenas prácticas de desarrollo para garantizar calidad y mantenibilidad:
- Construcción Automática: Uso de Maven para la gestión de dependencias y construcción.

   ![image](https://github.com/user-attachments/assets/2388b539-400d-4ed6-a49b-f667d46576e3)

- Análisis Estático: Integración de herramientas como SonarQube para identificar problemas en el código.

  ![image](https://github.com/user-attachments/assets/c4fc0cef-c995-4d59-8074-4081d3a190a9)
  ![image](https://github.com/user-attachments/assets/fe58924f-eef6-469d-825a-a12d6bac2b9d)

- Pruebas Unitarias: Implementación de pruebas con JUnit.

  ![image](https://github.com/user-attachments/assets/f4f4b5a2-1ede-42b8-9f0f-e1343cdfb0a4)

Ejemplo de prueba unitaria con JUnit:

![image](https://github.com/user-attachments/assets/b2a6fc8c-0f7d-4a8b-8ba6-0e6e6c04e28f)

![image](https://github.com/user-attachments/assets/c3d95f31-695f-48ad-8c97-bf83692d2754)

- Pruebas de APIs: Validación de endpoints con Postman

Pruebas APIs Postman

![image](https://github.com/user-attachments/assets/ed661f56-8db8-400a-845e-1eef53e6a151)

 - Gestion de Productos

![image](https://github.com/user-attachments/assets/cc19d315-a9fb-4544-bc39-e885d2ba081d)

  - Gestion de Usuarios

![image](https://github.com/user-attachments/assets/c7127664-9315-4d99-9a30-8c16e3c29d5b)

## Pipeline de CI/CD en Jenkins
El proyecto implementa un pipeline de CI/CD con las siguientes etapas:
- Construcción Automática: Compilación del código con Maven.

- Análisis Estático: Evaluación del código con SonarQube.
  
- Pruebas Unitarias: Ejecución de pruebas con JUnit.

- Pruebas de APIs: Verificación de endpoints REST.

## CONFIGURACIÓN DEL PIPELINE EN JENKINS
El siguiente es un Jenkinsfile que define el pipeline del proyecto. Este archivo automatiza varias etapas del proceso de integración continua, que incluyen la construcción del proyecto, la ejecución de pruebas.


    pipeline {
    agent any
    
    tools {
        jdk 'JAVA'
        maven 'maven'
        nodejs 'NodeJS'
    }
    
    environment {
        SCANNER_HOME = tool 'sonar-scanner'
    }
    
    stages {
        stage("Checkout Código") {
            steps {
                git branch: 'master', 
                    changelog: false,
                    poll: false, 
                    url: 'https://github.com/PabloGC1908/SM-Taste.git'
            }
        }
        
        stage("Build y Pruebas Unitarias") {
            steps {
                dir('Backend') {  
                    bat "mvn clean test"  
                }
            }
        }
        
        stage("Prueba API") {
            steps {
                script {
                    bat "npm install -g newman"  
                    bat "newman run Backend/src/test/PruebasAPI/PruebasAPI.json"
                }
            }
        }

        stage("SonarQube Analysis ") {
            steps {
                bat "$SCANNER_HOME/bin/sonar-scanner -Dsonar.url=http://localhost:9000/ \
                -Dsonar.login=sqp_9f881e85ad6202f6aac7ca9523bb1312bc603cfe \
                -Dsonar.projectKey=Proyecto_TallerWeb1 \
                -Dsonar.projectName=Proyecto_TallerWeb1 \
                -Dsonar.sources=. \
                -Dsonar.java.binaries=. "
                }
            }
        
    } // End of stages
} // End of pipeline

1. Definición del Pipeline

![image](https://github.com/user-attachments/assets/4753e850-cf63-4021-a222-3b7c9d764677)

- Define un pipeline declarativo.
- Usa agent any, lo que significa que puede ejecutarse en cualquier nodo de Jenkins disponible.

2. Configuración de Herramientas

![image](https://github.com/user-attachments/assets/6bd6785a-0512-4f75-a4d7-af3de74516fb)

- Declara herramientas que Jenkins usará:
    - jdk 'JAVA': Configura el JDK (Java Development Kit).
    - maven 'maven': Usa Maven para la compilación y pruebas.
    - nodejs 'NodeJS': Usa Node.js, necesario para ejecutar scripts en JavaScript.

3. Definición de Variables de Entorno

![image](https://github.com/user-attachments/assets/bc9bcd61-78cc-4a96-8589-bc1a818cc22b)

Configura SCANNER_HOME como la ruta donde está instalado SonarQube Scanner.

4. Definición de Etapas (stages)

El código define diferentes stages (etapas) para gestionar el ciclo de vida del software.
4.1.  Checkout del Código Fuente

![image](https://github.com/user-attachments/assets/fb359aa7-3d87-4448-9ac1-fe518489ab4a)

- Descarga el código desde GitHub (rama master).
- No mantiene historial de cambios (changelog: false).
- No activa construcción automática si hay cambios (poll: false).

4.2. Compilación y Pruebas Unitarias

![image](https://github.com/user-attachments/assets/0ee34e7d-0b29-48f4-b886-31f1000a10cb)

- Entra a la carpeta Backend.
- Ejecuta:
    - mvn clean test: Limpia archivos temporales y ejecuta pruebas unitarias con Maven
 
4.3. Pruebas de API 

![image](https://github.com/user-attachments/assets/278a3ee4-f328-4fbf-991d-f19fc2e989ae)

- Instala Newman (npm install -g newman), una herramienta para ejecutar pruebas de Postman.
- Ejecuta pruebas de API con el archivo JSON de pruebas.

4.4. Análisis de Código con SonarQube

![image](https://github.com/user-attachments/assets/b5e556c7-6287-4e79-ba05-70f31c2cdbaf)

- Usa SonarQube para analizar la calidad del código.
- Se conecta al servidor en http://localhost:9000/.
- Utiliza un token de autenticación (sonar.login).
- Especifica el nombre (Proyecto_TallerWeb) y los archivos a analizar.

En resumen este pipeline en Jenkins automatiza los siguientes pasos:

- Descarga el código desde GitHub.
- Compila y ejecuta pruebas unitarias con Maven.
- Ejecuta pruebas de API usando Newman.
- Analiza el código con SonarQube.
    
![image](https://github.com/user-attachments/assets/2d410f9f-0cc9-4ddb-92a6-64dd64c9ae89)


