import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// import React, { useRef, useState } from "react";
import "swiper/css";
import {Navigation} from "swiper";
import "swiper/css/navigation";

function Resrources_nft() {
  return (
    <div>
       <div className="row mt-5">
          <div className="col-lg-12">
            <div className='text-start mb-4'>
               <h4>NFT 101</h4>
               <d className="d-flex justify-content-between">
                  <p className="text-muted">Get comfortable with the basics.</p>
                  <button className="btn btn-lg  btn-learn">Learn more</button>
               </d>
               </div>
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
        <SwiperSlide className='silde befr'>
        {/* <div className='main_box'>
                     <div className='fst_pic_uper'>
                        <span className='frsts_pan'>
                        <img src="./images/9dcc.avif" alt="" className='frst_pic'/>
                        </span>
                    </div>

                     <div className='lower d-flex'>

                        <div className='lower_pic_uper'>
                           <span className='scnds_spn'>
                              <img src="./images/dcc.avif" alt="" className='second_pic bg-white' />
                           </span>
                        </div>

                        <div className='heading_uper'>
                            <div className='undr_heading'>
                                <div className='heading'>9dcc ITERATION-02 Proof of</div>
                            </div>
                        </div>
            
                     </div>

                </div> */}
        </SwiperSlide>
        <SwiperSlide className='silde befr'>
        {/* <div className='main_box'>
                     <div className='fst_pic_uper'>
                        <span className='frsts_pan'>
                        <img src="./images/krap.avif" alt="" className='frst_pic'/>
                        </span>
                    </div>

                     <div className='lower d-flex'>

                        <div className='lower_pic_uper'>
                           <span className='scnds_spn'>
                              <img src="./images/krpin.avif" alt="" className='second_pic' />
                           </span>
                        </div>

                        <div className='heading_uper'>
                            <div className='undr_heading'>
                                <div className='heading'>Krapopolis Krap Chickens</div>
                            </div>
                        </div>
            
                     </div>

                </div> */}
                
        </SwiperSlide>
        <SwiperSlide className='silde befr'>
        {/* <div className='main_box'>
                     <div className='fst_pic_uper'>
                        <span className='frsts_pan'>
                        <img src="./images/metro.avif" alt="" className='frst_pic'/>
                        </span>
                    </div>

                     <div className='lower d-flex'>

                        <div className='lower_pic_uper'>
                           <span className='scnds_spn'>
                              <img src="./images/metin.avif" alt="" className='second_pic' />
                           </span>
                        </div>

                        <div className='heading_uper'>
                            <div className='undr_heading'>
                                <div className='heading'>Metroverse Genesis</div>
                            </div>
                        </div>
            
                     </div>

                </div> */}
        </SwiperSlide>
        <SwiperSlide className='silde befr'>
        {/* <div className='main_box'>
                     <div className='fst_pic_uper'>
                        <span className='frsts_pan'>
                        <img src="./images/neo.avif" alt="" className='frst_pic'/>
                        </span>
                    </div>

                     <div className='lower d-flex'>

                        <div className='lower_pic_uper'>
                           <span className='scnds_spn'>
                              <img src="./images/ntin.avif" alt="" className='second_pic' />
                           </span>
                        </div>

                        <div className='heading_uper'>
                            <div className='undr_heading'>
                                <div className='heading'>Neo Tokyo Citizens</div>
                            </div>
                        </div>
            
                     </div>

                </div> */}
        </SwiperSlide>
        <SwiperSlide className='silde befr'>
        {/* <div className='main_box'>
                     <div className='fst_pic_uper'>
                        <span className='frsts_pan'>
                        <img src="./images/super.avif" alt="" className='frst_pic'/>
                        </span>
                    </div>

                     <div className='lower d-flex'>

                        <div className='lower_pic_uper'>
                           <span className='scnds_spn'>
                              <img src="./images/spin.avif" alt="" className='second_pic' />
                           </span>
                        </div>

                        <div className='heading_uper'>
                            <div className='undr_heading'>
                                <div className='heading'>Supercute World</div>
                            </div>
                        </div>
            
                     </div>

                </div> */}
        </SwiperSlide>
        <SwiperSlide className='silde befr'>
        {/* <div className='main_box'>
                     <div className='fst_pic_uper'>
                        <span className='frsts_pan'>
                        <img src="./images/coolcat.avif" alt="" className='frst_pic'/>
                        </span>
                    </div>

                     <div className='lower d-flex'>

                        <div className='lower_pic_uper'>
                           <span className='scnds_spn'>
                              <img src="./images/coolin.avif" alt="" className='second_pic' />
                           </span>
                        </div>

                        <div className='heading_uper'>
                            <div className='undr_heading'>
                                <div className='heading'>Cool Cats Football Club</div>
                            </div>
                        </div>
            
                     </div>

                </div> */}
        </SwiperSlide>
        
      </Swiper>
          </div>
        </div>
    </div>
  )
}

export default Resrources_nft
