import React from 'react'
import "./R_bottom_links.css"
import R_links from "../Assets/R_links.svg"
import Links_arrow from "../Assets/Links_arrow.svg"
import Links_p from "../Assets/Links_p.svg"
import Links_bs from "../Assets/Links_bs.svg"
import { Link } from 'react-router-dom'
function R_bottom_links() {
  return (
    <div className='main_top_bottom_links'>
        <div className="container bottom_links_upper_main">
           
            <div className="bottom_links_wrapper">
            <Link to='/resource_main_help' className='text-decoration-none'>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="d-flex justify-content-between">
                        <div className='d-flex'>
                            <img src={R_links} className='img_border' alt="" />
                            <div className="text-start ms-4">
                                <h4 className='r_links_heading'>Get help with a specific issue</h4>
                                <h6 className='r_links_subtitle'>Check out our Help Center</h6>
                            
                            </div>

                        </div>
                        <div>
                           <img src={Links_arrow} alt="" />
                        </div>
                        </div>
                      
                    </div>
                </div>
                </Link>

                <div className="row justify-content-center mt-3 px-2 px-md-0">
                    <div className="col-md-8 links_border_top">
                        <div className="d-flex justify-content-between">
                        <div className='d-flex'>
                            <img src={Links_p} className='img_border' alt="" />
                            <div className="text-start ms-4">
                                <h4 className='r_links_heading'>Catch up on OpenSea news</h4>
                                <h6 className='r_links_subtitle'>Visit our Blog</h6>
                            
                            </div>

                        </div>
                        <div>
                           <img src={Links_arrow} alt="" />
                        </div>
                        </div>
                      
                    </div>
                </div>
                <div className="row justify-content-center mt-3 px-2 px-md-0">
                    <div className="col-md-8 links_border_top">
                        <div className="d-flex justify-content-between">
                        <div className='d-flex'>
                            <img src={Links_bs} className='img_border' alt="" />
                            <div className="text-start ms-4">
                                <h4 className='r_links_heading'>Start exploring</h4>
                                <h6 className='r_links_subtitle'>Check out featured projects</h6>
                            
                            </div>

                        </div>
                        <div>
                           <img src={Links_arrow} alt="" />
                        </div>
                        </div>
                      
                    </div>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default R_bottom_links
