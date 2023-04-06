import React from 'react'
import "./Card_veiw.css"

import { HiOutlineStar } from 'react-icons/hi';
function Card_veiw(props) {
  return (
    <div>
            <div className="container-fluid pt-3">
<div className="row d-flex align-items-center">

  
    <div className="col-4 text-start veiw_head_text-card d-flex align-items-center ">
        <p className='pe-3'>{props.first_no}</p>
<span className="vew1-photo" ><img src={props.frist_photo} alt="" />

</span>
<p className='lil justify-content-start ps-3'> {props.text_1}</p>
<div className=" ">
   
</div>
    </div>


<div className="col-2 veiw_head_text-card text-start ">
  <p>{props.text_2}</p>
</div>
<div className="col-2 veiw_head_text-card fw-bold  text-start">{props.text_3}</div>
<div className="col-2 veiw_head_text-card  text-start">{props.text_4}</div>
<div className="col-1 veiw_head_text-card  text-start ps-4">{props.text_5}

</div>
<div className="col-1"><span><HiOutlineStar className='fs-4 ms-4 fw-bold'/></span></div>
      </div>
      
      </div>
    </div>
  )
}

export default Card_veiw
