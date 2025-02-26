import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import Carrito from "./components/Carrito";
import DetalleCompra from "./components/DetalleCompra";
import PanelAdmin from "./components/PanelAdmin";
import ConfirmationPage from "./components/ConfirmationPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Carrito />} />
        <Route path="/detalle-compra" element={<DetalleCompra />} />
        <Route path="/panel-adm" element={<PanelAdmin />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
