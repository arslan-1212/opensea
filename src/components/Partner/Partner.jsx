import React from 'react'
import market from '../Assets/market.svg'
import "./Partner.css"
function Partner() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12 mt-5">
                <h1 className='text-start'>
               <b> Welcome to the world’s <br /> largest NFT marketplace.</b> 
                </h1>
<p className='text-start mt-5'>At OpenSea, we're excited about a brand new type of digital good often referred to as a non-fungible token, or NFT. NFTs have exciting new properties: they’re unique, provably scarce, liquid, and usable across multiple applications. <br />

</p>

<p className='text-start'>We’re proud to be the first and largest marketplace for user-owned digital goods, with everything you need to buy and sell them in one place.<a class="px-2 none" href="" rel="" target="">Learn more about us</a> </p>


            </div>
            <div className="col-md-6">

                <img src={market} alt="" className='parner_img' />
            </div>
        </div>
    </div>
  )
}
export default Partner