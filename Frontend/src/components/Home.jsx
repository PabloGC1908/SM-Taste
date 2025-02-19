import React from "react";
import "../assets/css/style.css";
import Slider from "./Slider";  

const Home = () => (
  <section className="home" id="home">
    <div className="swiper-container home-slider">
      {/* Reemplaza el swiper-wrapper con el componente Slider */}
      <Slider />
      <div className="swiper-pagination"></div>
    </div>
  </section>
);

export default Home;
