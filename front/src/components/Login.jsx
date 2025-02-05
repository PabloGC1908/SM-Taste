import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/css/style-login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (email === "admin@example.com" && password === "admin123") {
        navigate("/dashboard"); // Redirige a un dashboard después de iniciar sesión
      } else {
        setErrorMessage("Correo o contraseña incorrectos.");
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