import React from 'react'
import "./R_nft_card.css"
import R_nft1 from "../Assets/R_nft1.png"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import card from "../Assets/card.png"
import { Swiper, SwiperSlide } from "swiper/react";
// import React, { useRef, useState } from "react";
import "swiper/css";
import {Navigation,Autoplay} from "swiper";
import "swiper/css/navigation";
import R_main_card from '../R_main_card/R_main_card';
import R_main_card1 from "../Assets/R_main_card1.png"

import R_main_card2 from "../Assets/R_main_card2.png"
import R_main_card3 from "../Assets/R_main_card3.png"
function R_nft_card() {
  return (
    <div className='pb-5'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
          <div className=' text-start'><h4 className='text-start r_main_headeer_card'>NFT 101</h4>
          <span className='nft_title_sub'>
          Get comfortable with the basics.</span></div>
          
            


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
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        loop={true}
        navigation={true}
        Autoplay={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='silde '>
        <R_main_card card_img={card} sub_title='What is minting?'/>

        </SwiperSlide>
        <SwiperSlide className='silde '>
        <R_main_card card_img={R_main_card1} sub_title='How to sell an NFT using OpenSea'/>

        </SwiperSlide>
        <SwiperSlide className='silde '>
        <R_main_card card_img={R_main_card2} sub_title='Who is OpenSea?'/>

        </SwiperSlide>
        <SwiperSlide className='silde '>
        <R_main_card card_img={R_main_card3} sub_title='What are art NFTs?'/>

        </SwiperSlide>
        <SwiperSlide className='silde '>
        <R_main_card card_img={R_main_card2} sub_title='Who is OpenSea?'/>

        </SwiperSlide>
        <SwiperSlide className='silde '>
        <R_main_card card_img={card} sub_title='What is minting?'/>

        </SwiperSlide>

      </Swiper>
          </div>
        </div>

        </div>
   

      </div>
    

    

      

  )
}

export default R_nft_card
