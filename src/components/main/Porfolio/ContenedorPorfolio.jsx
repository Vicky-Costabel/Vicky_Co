import React from 'react'
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ContenedorPorfolio = ({ porfolio }) => {
  return (
    <div className="con-slid-por">
      <Swiper
        navigation={true}
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          dynamicBullets: true,
          clickable: true, 
        }}
        modules={[Pagination, Navigation]}
        className="slider"
      >
        {porfolio.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='cont-card'>
              <div className='card'>
                <figure className='cont-card-img'>
                  <img src={item.imagen} alt={item.nombre} className={item.clase} />
                </figure>
                <div className='cont-card-txt'>
                  <h3 className='card-tit'>{item.nombre}</h3>                
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ContenedorPorfolio