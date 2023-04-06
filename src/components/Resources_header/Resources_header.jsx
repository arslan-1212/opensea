import React from "react";
import "./Resources.css";
import R_logo from "../Assets/R_logo.svg";
import R_button from "../Assets/R_button.svg";
import R_BG from "../Assets/R_BG.png"
import './Resources.css'

function Resources_header() {
    return (
        <div className="resourcs_main_bg">
            <div className="resources_header">
                <div className="main_container_header d-flex container">
                    <div className="logo_container d-flex align-items-center">
                        <img src={R_logo} className="Resources_logo" alt="" />
                        <span className="Link_text_open ms-1">OpenSea</span>
                        <span className="Link_text_open" style={{ color: "#2081e2" }}>
                            Learn
                        </span>
                    </div>
                    <div className=" d-flex justify-content-between align-items-center">
                        <div className="header_button_resources d-flex">
                            <div>OpenSea.io</div>
                            <img src={R_button} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="resources_journy">
                <div className="container">
                    <div className="row pt-md-5 pt-0 mt-md-5 mt-0  justify-content-center align-items-center">
                     
                            <div className="col-md-6">
<img src={R_BG} className='r_bg_responsive' alt="" />
                            </div>
                <div className="col-md-6 text-start">
                    <h1 className="resoures_main_heading">
                    Your NFT journey starts here.

                    </h1>
                    <div className="resources_main_minni_heading">
                        <span>Guides, practical tips, and support articles for first-time creators, experienced collectors, and everyone in between.</span>
                    </div>
                <div>
                    <button className="Resources_main_home_buttoon">
                    Start learning
                    </button>
                </div>
                
                    
                                    </div>
                            </div>
                            </div>
                            </div>
                            </div>
                                );
}

                                export default Resources_header;
