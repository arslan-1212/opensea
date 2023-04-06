import React from 'react'
import a_build from "../Assets/a_build.svg"
import b_build from "../Assets/b_build.svg"
import m_build from "../Assets/m_build.svg"


function R_docs_build() {
  return (
    <>
    <div>
        <h3 className='Heading_color_all text-center'><b> Build on the largest marketplace for <br /> digital items</b> </h3>
    </div>
    
    <div className='container'>
        <div className="row my-5">
            <div className="col-4 col-md-4">
                
            <img src={a_build} alt="" /> 

            <div className='mt-4'>
            <h6 className='Heading_color_all'> <b>80M+</b> </h6>
                <p className='Heading_color_all'> <b>Digital Goods</b> </p>
            </div>
                
                </div>
            
            <div className="col-4 col-md-4">
                
            <img src={b_build} alt="" /> 
         <div className='mt-4'>
         <h6 className='Heading_color_all'> <b>2M+</b> </h6>
                <p className='Heading_color_all'> <b>Collections</b> </p>
         </div>
            </div>
            <div className="col-4 col-md-4"> 

            <img src={m_build} alt="" /> 
            <div className='mt-4'>
            <h6 className='Heading_color_all'> <b>$10B+</b> </h6>
                <p className='Heading_color_all'> <b>Market Volume</b> </p>
</div>
            
                </div>
        </div>


 
   
    </div>
    </>
  )
}

export default R_docs_build