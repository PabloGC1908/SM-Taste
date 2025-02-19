import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

const AboutUs = () => (
    <>
      {/* Acerca de Nosotros starts */}
      <section className="about" id="about">
        <h1 className="sub-heading"></h1>
        <h1 className="sub-heading"></h1>
        <h1 className="sub-heading"></h1>
        <h1 className="sub-heading"></h1>
        <h1 className="sub-heading"></h1>
        <h1 className="sub-heading"></h1>
        <h1 className="sub-heading"></h1>
        <div className="title-cards">
          <h1 className="heading">Acerca de Nosotros</h1>
        </div>
        <div className="container-card">
          <div className="row">
            <div className="image">
              <img src="/images/Acerca de Nosotros2.png" alt="Acerca de Nosotros" />
            </div>
            <div className="content">
              <h1 className="heading">¿Quiénes Somos?</h1>
              <p>
                SM Taste es una plataforma orientada a brindar platillos al gusto de nuestros clientes,
                poseemos como principales características la rápida atención y facilidad de métodos de pagos.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Acerca de Nosotros ends */}
  
      {/* Misión y Visión */}
      <section className="biton">
        <div className="card">
          <div className="contenido-card">
            <h3>Misión</h3>
            <p>
              Superar las expectativas de nuestros clientes de forma tal que nuestro nombre sea conocido como una experiencia memorable.
            </p>
            <a>Ser opción destacable y diferente.</a>
            <a>Mantener una excelente calidad en nuestros platos.</a>
          </div>
        </div>
        <div className="card">
          <div className="contenido-card">
            <h3>Visión</h3>
            <p>
              Ser reconocidos entre las mejores plataformas a nivel local y nacional por nuestra oferta gastronómica y atención.
            </p>
            <a>Ser opción destacable y diferente.</a>
            <a>Mantener una excelente calidad en nuestros platos.</a>
          </div>
        </div>
      </section>
    </>
  );
  
  export default AboutUs;