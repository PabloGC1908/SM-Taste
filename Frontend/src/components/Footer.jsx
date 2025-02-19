import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

const Footer = () => (
  <section className="footer">
    <div className="box-container">
      <div className="box">
        <h3>Nosotros</h3>
        <Link to="/about">Nosotros</Link>
        <Link to="/about">¿Quiénes somos?</Link>
        <Link to="/about">Misión y Visión</Link>
        <Link to="/contact">Contáctanos</Link>
      </div>
      <div className="box">
        <h3>Síguenos</h3>
        <Link to="#">Términos y condiciones</Link>
        <Link to="#">Avisos Legales</Link>
        <Link to="#">Política de Privacidad</Link>
      </div>
    </div>
  </section>
);

export default Footer;
