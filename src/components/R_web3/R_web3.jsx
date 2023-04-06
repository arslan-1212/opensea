import React from 'react'
import web3 from "../Assets/web3.png"
import { Swiper, SwiperSlide } from "swiper/react";
// import React, { useRef, useState } from "react";
import "swiper/css";
import {Navigation} from "swiper";
import "swiper/css/navigation";
import R_main_card from '../R_main_card/R_main_card';
import web3_1 from "../Assets/web3_1.jpg"

import R_main_card2 from "../Assets/R_main_card2.png"
import R_main_card3 from "../Assets/R_main_card3.png"

function R_web3() {
  return (
    <div className='pb-5'>
         <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
          <div className='  text-start'><h4 className='text-start r_main_headeer_card'>Intro to web3</h4>
          <span className='nft_title_sub'>
          Learn more about web3 concepts.</span></div>
          <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          loop={true}
          navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='silde befr text-start ' >
    
        <R_main_card card_img={web3} sub_title='What is web3?'/>

 
        </SwiperSlide>
        <SwiperSlide className='silde befr text-start' >
    
        <R_main_card card_img={web3_1} sub_title='What is cryptocurrency?'/>

 
        </SwiperSlide>
        <SwiperSlide className='silde befr text-start' >
    
        <R_main_card card_img={R_main_card2} sub_title='What is a crypto wallet?'/>

 
        </SwiperSlide>
        <SwiperSlide className='silde befr text-start' >
    
        <R_main_card card_img={R_main_card3} sub_title='What is a DAO?'/>

 
        </SwiperSlide>
      
       
   
     
      
     
       
      
        
      </Swiper>
            
          </div>
        </div>

        </div>
      
    </div>
  )
}

export default R_web3
