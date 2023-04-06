import React from 'react'
import bechi from '../Assets/bechi.png'
import qq from '../Assets/qq.svg'







function Gril_partner() {
  return (
    <div className="container">
    <div className="row">
        <div className="col-lg-6 col-md-12 mt-5">
           
        <img src={qq} width="30" className='d-flex justify-content-start' alt="" />


<h4 className='text-start mt-5'> <b>OpenSea is one of the most exciting, important <br /> companies in the world right now because it's <br /> the portal to the new digital economy. If you're <br /> interested in shaping a new business model for <br /> creators, this is the team to join. </b> <br />
</h4> <br />
 <h5 className='text-start'> <b>Katie Haun</b> </h5>
 <p className='text-start'>CEO and Founder, Haun Ventures</p>


        </div>
        <div className="col-md-6">

            <img src={bechi} alt="" className='parner_img' />
        </div>
    </div>
</div>
  )
}

export default Gril_partner
