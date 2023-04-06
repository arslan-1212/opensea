import React from 'react'
import Meet_opensea from '../Meet_opensea/Meet_opensea'
import Resources_header from '../Resources_header/Resources_header'
import R_blockchain from '../R_blockchain/R_blockchain'
import R_bottom_links from '../R_bottom_links/R_bottom_links'
import R_insities from '../R_insites/R_insities'
import R_nft_card from '../R_nft_card/R_nft_card'
import R_watch from '../R_watch/R_watch'
import R_web3 from '../R_web3/R_web3'
import Frist_open from '../Frist_open/Frist_open'


function Resource_full_page() {
  return (
    <div className='ps_fixed1'>
        <Resources_header/>
      <Meet_opensea/>
     

      <R_nft_card/> 
      <R_web3/>
      <R_blockchain/>
      <R_watch/>
      <R_insities/>
      <R_bottom_links/> 
      
    </div>
  )
}

export default Resource_full_page
