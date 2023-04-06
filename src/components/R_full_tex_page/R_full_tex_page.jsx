import React from 'react'
// import Taxes_sea from "../Taxes_sea/Taxes_sea"
import Taxes_Sea from "../Taxes_Sea/Taxes_Sea"
import Taxes_what from "../Taxes_what/Taxes_what"
import Taxex_Frequently from "../Taxex_Frequently/Taxex_Frequently"

function R_full_tex_page() {
  return (
    <div className='ps_fixed1'>
       <Taxes_Sea/>
       <Taxes_what/>
       <Taxex_Frequently/>
      
    </div>
  )
}

export default R_full_tex_page

