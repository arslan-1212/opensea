import React from 'react'
import "./Frist_card.css"
import { MdVerified  } from 'react-icons/md';
function Frist_card(props) {
  return (
    <div>
         <>
 
 <div class=" card  text-white  geeks w-100">
   <img src={props.img1} class="card-img immg" alt="..."/>
 <h5 className='oo ps-2 hBeyeI'> <b>{props.h1}</b> <span className='text-info'><MdVerified className='ico'/> </span> </h5>
 <h6 className='oa ps-2'>{props.h2}</h6>
 </div>
 
  </>

    </div>
  )
}

export default Frist_card