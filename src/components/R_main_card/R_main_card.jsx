import React from 'react'

function R_main_card({card_img,sub_title}) {
  return (
    <div className='trans_forn_pro'>
           <div className="   nft_card_reso">
      <div className="card_img_nft">

        <img src={card_img} className='nft_card_img_pro' alt="" />

      </div>

    </div>
        <div className='text-start '>

        <b className='m-5 ms-0 text-start'>{sub_title}</b>
        </div>
      
    </div>
  )
}

export default R_main_card
