import React from 'react'
import R_main_play from '../R_main_play/R_main_play'
import R_nft1 from "../Assets/R_nft1.png"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import card from "../Assets/card.png"
import { Swiper, SwiperSlide } from "swiper/react";
// import React, { useRef, useState } from "react";
import "swiper/css";
import {Navigation} from "swiper";
import "swiper/css/navigation";

import wl from "../Assets/wl.jpg"
import wl1 from "../Assets/wl1.jpg"
import wl2 from "../Assets/wl2.jpg"
import wl3 from "../Assets/wl3.jpg"

function R_watch() {
  return (
    <div className='pb-5'>
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
          <div className=' text-start'><h4 className='text-start r_main_headeer_card'>Watch and learn</h4>
          <span className='nft_title_sub'>
          Learn about important NFT concepts.</span></div>
          

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
    
    <R_main_play card_play={wl} playb='What is an NFT?'/>


 
        </SwiperSlide>
        <SwiperSlide className='silde befr text-start' >
    
        <R_main_play card_play={wl3} playb='How to sell an NFT'/>


 
        </SwiperSlide>
        <SwiperSlide className='silde befr text-start' >
    
        <R_main_play card_play={wl2} playb='What is a crypto wallet?'/>


 
        </SwiperSlide>
        <SwiperSlide className='silde befr text-start' >
    
        <R_main_play card_play={wl1} playb='How to buy an NFT'/>

 
        </SwiperSlide>
      
       
   
     
      
     
       
      
        
      </Swiper>
            
            
          </div>
        </div>

        </div>
      
    </div>
  )
}

export default R_watch
