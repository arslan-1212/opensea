import React from 'react'
import "./Blocard.css"
import start_img from "../Accets/Hscaled.jpeg"

function Blocard() {
    return (
        <div className='container-fluid'>
            <div className="row rad shadow py-3 px-2">
                <div className="col-md-6 pht_solo ps-0">
                    <img src={start_img} className="blog_sldr_frimg" alt="#" />
                </div>

                <div className="col-md-6 bg-white d-flex align-items-center pe-0 box_two_wr">
                    <div className="card_body text-start">
                        <div className='buton_cover'>
                            <button className='btn btn-sm btn-primary d-flex align-items-center pro_bt_updo me-3'> <span className='fnt_sz'>Product</span></button>
                            <button className='btn btn-sm btn-primary pro_bt_updo d-flex align-items-center'><span className='fnt_sz'>Trust & Safety</span></button>
                        </div>
                        <h4 className="card_title_nw m-0 my-2">Our Efforts to Curb Fraud and <br /> Plagiarism - and What's Next</h4>
                        <p className=" typo m-0">June 8, 2022</p>
                        <p className="typo_tow mb-2 ">I want to share my perspective on OpenSea's efforts to protect <br /> against plagiarism, IP infringement, and fraud. We at OpenSea <br /> feel a huge responsibility to ensu... </p>
                        <button className='btn btn-sm btn-primary'>View Post</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blocard
