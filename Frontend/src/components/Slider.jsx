import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Importar los módulos necesarios
import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slidesData = [
  {
    span: 'La casa recomienda',
    h3: 'Tallarines a lo Alfredo',
    p: 'Deliciosos tallarines al dente, bañados en salsa fresca de tomate, acompañado de verduras cocidas y queso mozarella.',
    imgSrc: '/images/home-img-1.png',  // Asegúrate de que la ruta sea correcta
    imgAlt: 'Tallarines a lo Alfredo'
  },
  {
    span: 'Nuestro plato especial',
    h3: 'Pollo al horno',
    p: 'Elaborado con una sazón a base de finas hierbas y acompañado de vegetales deliciosos. Pide ahora tu plato especial.',
    imgSrc: '/images/home-img-2.png',
    imgAlt: 'Pollo al horno'
  },
  {
    span: 'Lo más pedido',
    h3: 'Pizza vegetariana',
    p: 'Una opción para vegetarianos, aquellos que pueden tener una dieta con necesidades especiales, o simplemente para aquellos que buscan una alternativa más saludable a la pizza normal.',
    imgSrc: '/images/home-img-3.png',
    imgAlt: 'Pizza vegetariana'
  }
];

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]} // Agrega los módulos aquí
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation={true} // Activa navegación
      pagination={{ clickable: true }} // Activa paginación
    >
      {slidesData.map((slideItem, index) => (
        <SwiperSlide key={index}>
          <div className="swiper-slide slide">
            <div className="content">
              <span>{slideItem.span}</span>
              <h3>{slideItem.h3}</h3>
              <p>{slideItem.p}</p>
              <a href="/menu" className="btn">Pedir ahora</a>
            </div>
            <div className="image">
              <img src={slideItem.imgSrc} alt={slideItem.imgAlt} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
