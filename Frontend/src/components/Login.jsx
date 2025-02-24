import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/css/style-login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log("Formulario enviado");
        console.log("Email:", email);
        console.log("Contraseña:", password);

        try {
            const response = await fetch("http://localhost:8080/api/usuarios/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: email, contrasena: password })
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Login exitoso:", result.user);
                alert("Inicio exitoso! Bienvenido, " + result.user);
                navigate("/panel-adm");
            } else {
                const errorText = await response.json();
                console.log("Error:", errorText);
                setErrorMessage(errorText.message || "Error durante el inicio de sesión");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            setErrorMessage("No se pudo conectar con el servidor.");
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Ingreso como Administrador</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">INGRESAR</button>
                </form>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
            </div>
        </div>
    );
};

export default Login;
