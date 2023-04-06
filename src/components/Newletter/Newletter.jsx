import React from 'react'
import side from '../Assets/side.png'


function Newletter() {
  return (
    <div className="container">
    <div className="row  mt-5">
        <div className="col-lg-6 col-md-12 mt-5">
            <h1 className='text-start'>
           <b> OpenSea's Newsletter <br /> will be back soon!</b> 
            </h1>
<p className='text-start mt-5 line'>The team is hard at work relaunching the newsletter. in the <br /> meantime follow us follow us on <a class=" none" href="" rel="" target="">Twitter</a>, <a class=" none" href="" rel="" target="">Instagram</a>, and <a class=" none" href="" rel="" target="">YouTube</a> <br />
to keep up with latest announcements.
</p>



        </div>
        <div className="col-md-6">

            <img src={side} alt="" className='parner_img' />
        </div>
    </div>
</div>

    )
}

export default Newletter