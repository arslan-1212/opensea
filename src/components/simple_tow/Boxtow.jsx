import React from 'react'
import "./Boxtow.css"

function Boxtow(props) {
  return (
    <div>

        <div className="container-fluid mt-4">
          
               
                    <div className='art'>
                        <a href="" className='in_art'>
                            <div className='art_pic'>
                                <span className='arts_an'>
                                    <img src={props.simpleimg} alt="" className='artimg'/>
                                </span>
                            </div>

                            <div className='art_head'>
                                <div className='art_outr'>
                                    <span className='art_head_spa'>{props.simh2}</span>
                                </div>
                            </div>
                        </a>
                    </div>
              
     
        </div>

    </div>
  )
}

export default Boxtow
