import React from 'react'
import Help_permote from '../Help_permote/Help_permote'
import Hh_help_card_full from '../Hh_help_card_full/Hh_help_card_full'
import R_links_help from '../R_links_help/R_links_help'

function R_bottom_links_full_page() {
  return (
    <div className='ps_fixed1'>
        <R_links_help/> 
       
   
    
       <Hh_help_card_full/>
       <Help_permote/>
    </div>
  )
}

export default R_bottom_links_full_page
