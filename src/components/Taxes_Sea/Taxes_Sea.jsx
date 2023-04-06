import React from 'react'
import Button from '@mui/material/Button';
import logoo from '../Assets/logoo.webp'
import "./Taxes_sea.css"


function Taxes_Sea() {
  return (
    <div className='piko text-center '>
        
        {/* background-image: url(./Assets/background_img.png); */}
        {/* background-image: url(../Asse) */}
        <img src={logoo} alt=" oppo" className=' my-5 both' />

<h1 className='mb-5'> <b>NFT taxes, simplified.</b> </h1>

<p>We've partnered with CoinTracker, a leading crypto tax offering, <br /> to help you navigate your NFT taxes.</p>

<br />
<p className='mb-5'>Get started below to get free tax reports for up to 50 transactions <br /> in your first year and 10% off for everything else.</p>

<Button variant="contained" className="p-3 bb">Get started</Button>


    </div>
  )
}

export default Taxes_Sea