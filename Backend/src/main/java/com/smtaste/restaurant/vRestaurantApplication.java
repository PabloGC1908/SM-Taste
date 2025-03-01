package com.smtaste.restaurant;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@OpenAPIDefinition(
		info = @Info(
				title = "API de Restaurante",
				version = "1.0",
				description = "Documentación OpenAPI para la API de Restaurante"
		)
)
@SpringBootApplication
public class vRestaurantApplication {

	public static void main(String[] args) {
		SpringApplication.run(vRestaurantApplication.class, args);
	}

}
