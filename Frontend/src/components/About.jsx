import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

const About = () => (
  <section className="about" id="about">
    <h1 className="sub-heading">Acerca de nosotros</h1>
    <h1 className="heading">¿Por qué escogernos?</h1>
    <div className="row">
      <div className="image">
        <img src="/images/about-img.png" alt="Sobre nosotros" />
      </div>
      <div className="content">
        <h1 className="heading">La mejor comida del campus universitario</h1>
        <p>Los mejores platillos a tu mesa, elaborados a tu gusto, con una fina seleccion de ingredientes frescos de la mejor calidad.</p>
        <p>SM Taste siempre en tu mesa.</p>
        <div className="icons-container">
          <div className="icons">
            <i className="fas fa-dollar-sign"></i>
            <span>Fácil de pagar</span>
          </div>
          <div className="icons">
            <i className="fas fa-headset"></i>
            <span>Atención al cliente eficiente</span>
          </div>
        </div>
        <Link to="/about-us" className="btn">Leer más</Link>
      </div>
    </div>
  </section>
);

export default About;
