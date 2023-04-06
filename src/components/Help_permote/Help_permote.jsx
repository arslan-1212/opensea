import React from 'react'
import "./Help_permote.css"

function Help_permote() {
  return (
    <div className='help_permote_main'>
        <div className="container">
        <h2 className='promote_mainn_heading'> Promoted articles</h2>
        <div className="row">
            <div className="col-md-4">
                <div className="promoote">
                    <span className='prommote_headig'>How do I create an OpenSea account?</span>
                </div>
            </div>
            <div className="col-md-4">
                <div className="promoote">
                    <span className='prommote_headig'>
                  What crypto wallets can I use with OpenSea?

                  
                </span>
                </div>
            </div>
            <div className="col-md-4">
                <div className="promoote">
                    <span className='prommote_headig'>How does a Primary Drop work?</span>
                </div>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-6">
                <div className="promoote">
                    <span className='prommote_headig'>How do I sell an NFT?</span>
                </div>
            </div>
         
            <div className="col-md-6">
                <div className="promoote">
                    <span className='prommote_headig'>How do I create an NFT?</span>
                </div>
            </div>
        </div>
        </div>

      
    </div>
  )
}

export default Help_permote
