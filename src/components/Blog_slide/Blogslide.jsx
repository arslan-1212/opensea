// import React from 'react'
import "./Blogslide.css"
import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import Blocard from "./Blocard";

function Blogslide() {
  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-lg-12">
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          loop={true}
          navigation={true}
        modules={[Pagination , Navigation]}
        className="mySwiper silde sld_remk"
      >
        <SwiperSlide className=''>
            <Blocard/>
        </SwiperSlide>
        <SwiperSlide className='silde'>
        <Blocard/>
        </SwiperSlide>
        <SwiperSlide className='silde'>
        <Blocard/>
        </SwiperSlide>
        <SwiperSlide className='silde'>
        <Blocard/>
        </SwiperSlide>
        <SwiperSlide className='silde'>
        <Blocard/>
        </SwiperSlide>
        
      </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Blogslide