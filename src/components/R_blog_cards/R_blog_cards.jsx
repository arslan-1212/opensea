import React from 'react'
import "./R_blog_cards.css"
import crd_tw_pic_1 from "../Accets/bott_1.png"
import crd_tw_pic_2 from "../Accets/bott_2.png"
import Blogslide from '../Blog_slide/Blogslide'
import crd_tw_pic_3 from "../Accets/bott_3.jpeg"
import crd_tw_pic_4 from "../Accets/bott_4.png"
import crd_tw_pic_5 from "../Accets/bott_5.png"
import crd_tw_pic_1_3 from "../Accets/bott_1_3.jpeg"
import { GrFormNext } from "react-icons/gr";

function R_blog_cards() {
    return (
        <div className='ps_fixed1'>
            <div className="container mb-4">

                <Blogslide />

                <h3 className='mt-3 mt-md-5'><b>Categories</b></h3>
                <div className="row justify-content-center ">
                    <div className="col-md-6  justify-content-around d-flex">
                        <button className='btn btn-sm pro_botn'>Product</button>
                        <button className='btn btn-sm pro_botn'>Company</button>
                        <button className='btn btn-sm pro_botn'>Community</button>
                        <button className='btn btn-sm pro_botn'>Creator</button>
                    </div>
                </div>

                <div className="row mt-5 ">
                    <div className="col-md-4 ">
                        <div className='upr_box_pic' >
                        <img src={crd_tw_pic_1} class="blog_img" alt="#" />
                        </div>
                        <div className='text-start shadow p-3 bottom_rads'>
                            <div className='bttn_rap d-flex justify-content-start '>
                                <button className='btn btn-sm btn-primary '>Creator</button>
                                <button className='btn btn-sm btn-primary ms-3'>Experience</button>
                            </div>
                            <div className='text_main_box'>
                                <h4 className='fw-bold mt-2 for_siz_edt'>Creator Using openSea Earned Over $ 1Billion from Creator fee i 2022</h4>
                                <p className='mb-1 datt_ed'>November 30,2022</p>
                                <p className='aSwe_fnt'>As we reflect an a wild 2022 and startin  particular stands out: this year, creators earned over $1 BILLON from creator fees using OpenSea.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4 mt-md-0">
                        <div className='upr_box_pic'>
                            <img src={crd_tw_pic_2} class="blog_img sasasasasasss" alt="..." />
                        </div>
                        <div className='text-start shadow p-3 bottom_rads'>
                            <div className='bttn_rap d-flex justify-content-start  '>
                                <button className='btn btn-sm btn-primary '>Product</button>
                                <button className='btn btn-sm btn-primary ms-3'>Marketplace</button>
                            </div>
                            <div className='text_main_box'>
                                <h4 className='fw-bold mt-2 for_siz_edt'>Creator Using openSea Earned Over $ 1Billion from Creator fee i 2022</h4>
                                <p className='mb-1 datt_ed'>November 30,2022</p>
                                <p className='aSwe_fnt'>As we reflect an a wild 2022 and startin particular stands out: this year, creators earned over $1 BILLON from creator fees using OpenSea.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4 mt-md-0">
                        <div className='upr_box_pic'>
                        <img src={crd_tw_pic_1_3} class="blog_img" alt="..." />
                        </div>
                        <div className='text-start shadow p-3 bottom_rads'>
                            <div className='bttn_rap d-flex justify-content-start '>
                                <button className='btn btn-sm btn-primary'>Product</button>
                                <button className='btn btn-sm btn-primary ms-3'>Trust and Safety</button>
                            </div>
                            <div className='text_main_box'>
                                <h4 className='fw-bold mt-2 for_siz_edt'>Creator Using openSea Earned Over $ 1Billion from Creator fee i 2022</h4>
                                <p className='mb-1 datt_ed'>November 30,2022</p>
                                <p className='aSwe_fnt'>As we reflect an a wild 2022 and startin particular stands out: this year, creators earned over $1 BILLON from creator fees using OpenSea.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5 ">
                    <div className="col-md-4 ">
                        <div className='upr_box_pic' >
                        <img src={crd_tw_pic_3} class="blog_img" alt="#" />
                        </div>
                        <div className='text-start shadow p-3 bottom_rads'>
                            <div className='bttn_rap d-flex justify-content-start '>
                                <button className='btn btn-sm btn-primary '>Creator</button>
                                <button className='btn btn-sm btn-primary ms-3'>Experience</button>
                            </div>
                            <div className='text_main_box'>
                                <h4 className='fw-bold mt-2 for_siz_edt'>Creator Using openSea Earned Over $ 1Billion from Creator fee i 2022</h4>
                                <p className='mb-1 datt_ed'>November 30,2022</p>
                                <p className='aSwe_fnt'>As we reflect an a wild 2022 and startin particular stands out: this year, creators  earned over $1 BILLON from creator fees using OpenSea.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4 mt-md-0">
                        <div className='upr_box_pic'>
                            <img src={crd_tw_pic_4} class="blog_img sasasasasasss" alt="..." />
                        </div>
                        <div className='text-start shadow p-3 bottom_rads'>
                            <div className='bttn_rap d-flex justify-content-start '>
                                <button className='btn btn-sm btn-primary '>Product</button>
                                <button className='btn btn-sm btn-primary ms-3'>Marketplace</button>
                            </div>
                            <div className='text_main_box'>
                                <h4 className='fw-bold mt-2 for_siz_edt'>Creator Using openSea Earned Over $ 1Billion from Creator fee i 2022</h4>
                                <p className='mb-1 datt_ed'>November 30,2022</p>
                                <p className='aSwe_fnt'>As we reflect an a wild 2022 and startin particular stands out: this year, creators earned over $1 BILLON from creator fees using OpenSea.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4 mt-md-0">
                        <div className='upr_box_pic'>
                        <img src={crd_tw_pic_5} class="blog_img" alt="..." />
                        </div>
                        <div className='text-start shadow p-3 bottom_rads'>
                            <div className='bttn_rap d-flex justify-content-start '>
                                <button className='btn btn-sm btn-primary'>Product</button>
                                <button className='btn btn-sm btn-primary ms-3'>Trust and Safety</button>
                            </div>
                            <div className='text_main_box'>
                                <h4 className='fw-bold mt-2 for_siz_edt'>Creator Using openSea Earned Over $ 1Billion from Creator fee i 2022</h4>
                                <p className='mb-1 datt_ed'>November 30,2022</p>
                                <p className='aSwe_fnt'>As we reflect an a wild 2022 and startin particular stands out: this year, creators earned over $1 BILLON from creator fees using OpenSea.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5 ">
                    <div className="col-md-4 ">
                        <div className='upr_box_pic' >
                        <img src={crd_tw_pic_1} class="blog_img" alt="#" />
                        </div>
                        <div className='text-start shadow p-3 bottom_rads'>
                            <div className='bttn_rap d-flex justify-content-start '>
                                <button className='btn btn-sm btn-primary '>Creator</button>
                                <button className='btn btn-sm btn-primary ms-3'>Experience</button>
                            </div>
                            <div className='text_main_box'>
                                <h4 className='fw-bold mt-2 for_siz_edt'>Creator Using openSea Earned Over $ 1Billion from Creator fee i 2022</h4>
                                <p className='mb-1 datt_ed'>November 30,2022</p>
                                <p className='aSwe_fnt'>As we reflect an a wild 2022 and startin particular stands out: this year, creators earned over $1 BILLON from creator fees using OpenSea.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4 mt-md-0">
                        <div className='upr_box_pic'>
                            <img src={crd_tw_pic_2} class="blog_img" alt="..." />
                        </div>
                        <div className='text-start shadow p-3 bottom_rads'>
                            <div className='bttn_rap d-flex justify-content-start '>
                                <button className='btn btn-sm btn-primary '>Product</button>
                                <button className='btn btn-sm btn-primary ms-3'>Marketplace</button>
                            </div>
                            <div className='text_main_box'>
                                <h4 className='fw-bold mt-2 for_siz_edt'>Creator Using openSea Earned Over $ 1Billion from Creator fee i 2022</h4>
                                <p className='mb-1 datt_ed'>November 30,2022</p>
                                <p className='aSwe_fnt'>As we reflect an a wild 2022 and startin particular stands out: this year, creators earned over $1 BILLON from creator fees using OpenSea.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4 mt-md-0">
                        <div className='upr_box_pic'>
                        <img src={crd_tw_pic_1_3} class="blog_img" alt="..." />
                        </div>
                        <div className='text-start shadow p-3 bottom_rads'>
                            <div className='bttn_rap d-flex justify-content-start '>
                                <button className='btn btn-sm btn-primary'>Product</button>
                                <button className='btn btn-sm btn-primary ms-3'>Trust and Safety</button>
                            </div>
                            <div className='text_main_box'>
                                <h4 className='fw-bold mt-2 for_siz_edt'>Creator Using openSea Earned Over $ 1Billion from Creator fee i 2022</h4>
                                <p className='mb-1 datt_ed'>November 30,2022</p>
                                <p className='aSwe_fnt'>As we reflect an a wild 2022 and startin  particular stands out: this year, creators earned over $1 BILLON from creator fees using OpenSea.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-center'>
                <button className='btn btn-md btn-white shadow mt-3 mt-md-5 nxt_bt'>Next<GrFormNext/></button>
                </div>
    
            </div>
        </div>
    )
}

export default R_blog_cards
