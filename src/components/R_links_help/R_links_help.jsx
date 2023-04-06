import React from 'react'
import "./R_links_help.css"
import hh_logo from "../Assets/hh_logo.png"
import hh_main_bg from "../Assets/hh_main_bg.png"
import {BsSearch} from "react-icons/bs"

function R_links_help() {
    return (
        <div>
            <div className='links_help_header '>
                <div className='d-flex text-start logo_hh_reponsive'>
                    <img src={hh_logo} alt="" className=' responive_logo_hh_width' />
                </div>
                <div>
                    <button className='hh_header_button'>Submit a request</button>
                </div>

            </div>

            <div className="hh_home_bg">
                <div className="hh_home_search">
                    <div className="row justify-content-center search_hh_home">
                        <div className="col-md-6">
               <div className="hh_icons">
                <BsSearch className='hjh_input_icon' ></BsSearch>
                <input type="text" className='hh_input_home' placeholder='Search' name="" id="" />
               </div>
                               
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            )
}

            export default R_links_help
