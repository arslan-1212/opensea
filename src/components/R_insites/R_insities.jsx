import React from 'react'
import wl4 from "../Assets/wl4.png"
import wl5 from "../Assets/wl5.png"
import wl6 from "../Assets/wl6.png"
import wl7 from "../Assets/wl7.png"
import R_main_play from '../R_main_play/R_main_play'
import { Swiper, SwiperSlide } from "swiper/react";
// import React, { useRef, useState } from "react";
import "swiper/css";
import {Navigation} from "swiper";
import "swiper/css/navigation";

function R_insities() {
  return (
    <div className='pb-4'>
          <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
          <div className=' text-start'><h4 className='text-start r_main_headeer_card'>NFT community insights</h4>
          <span className='nft_title_sub'>
          Hear from the NFT community on a variety of topics.</span></div>
          <Swiper
        slidesPerView={3}
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
    
    <R_main_play card_play={wl4} playb='How have NFTs changed your life?'/>

 
        </SwiperSlide>
        <SwiperSlide className='silde befr text-start' >
        <R_main_play card_play={wl5} playb='What is the future of NFTs?'/>
       

 
        </SwiperSlide>
        <SwiperSlide className='silde befr text-start' >
    
        <R_main_play card_play={wl6} playb='How would you describe the NFT community?'/>
 
        </SwiperSlide>
        <SwiperSlide className='silde befr text-start' >
    
        <R_main_play card_play={wl7} playb='What is OpenSea to you?'/>

 
        </SwiperSlide>
      
       
   
     
      
     
       
      
        
      </Swiper>
            
          </div>
        </div>

        </div>
      
    </div>
  )
}

export default R_insities
