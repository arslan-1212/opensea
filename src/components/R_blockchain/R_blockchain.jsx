import React from 'react'
import web3 from "../Assets/web3.png"
import { Swiper, SwiperSlide } from "swiper/react";
// import React, { useRef, useState } from "react";
import "swiper/css";
import {Navigation} from "swiper";
import "swiper/css/navigation";
import R_main_card from '../R_main_card/R_main_card';
import web3_1 from "../Assets/web3_1.jpg"

import gas_fee from "../Assets/gas_fee.png"
import R_main_card3 from "../Assets/R_main_card3.png"

function R_blockchain() {
  return (
    <div className='pb-5'>
          <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
          <div className='  text-start'>
            <h4 className='text-start r_main_headeer_card'>Blockchain basics</h4>
          <span className='nft_title_sub'>
          Understand the technology behind cryptocurrency and NFTs.</span></div>
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
    
        <R_main_card card_img={web3_1} sub_title='What is blockchain?'/>

 
        </SwiperSlide>
        <SwiperSlide className='silde befr text-start' >
    
        <R_main_card card_img={gas_fee} sub_title='What are blockchain gas fees?'/>

 
        </SwiperSlide>
        <SwiperSlide className='silde befr text-start' >
    
        <R_main_card card_img={web3} sub_title='What is Ethereum?'/>

 
        </SwiperSlide>
        <SwiperSlide className='silde befr text-start' >
    
        <R_main_card card_img={R_main_card3} sub_title='What is Solana?'/>

 
        </SwiperSlide>
      
       
   
     
      
     
       
      
        
      </Swiper>
            
          </div>
        </div>

        </div>
      
    </div>
  )
}

export default R_blockchain
