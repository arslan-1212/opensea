import React from 'react'
import "./Nextdrop.css"


function Nextdrop(props) {
  return (
    <div>
      <div className="container my-5">
        <div className="row brdr border">
          <div className="col-lg-3 p-0">
            <div className='drp_im_bx'>
              <img src={props.photo} alt="drop" className='blue_dh' />
            </div>
          </div>
          <div className="col-lg-9 d-flex align-items-center">
            <div className='text-start'>
              <p className='mb-0 mt-1'>{props.peraone}</p>
              <h4 className='fw-bold'>{props.first_pera}</h4>
              <p className='text-muted'>{props.second_pera}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nextdrop
