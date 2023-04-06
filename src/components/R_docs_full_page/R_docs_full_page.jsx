import React from 'react'
import R_docs from '../R_docs/R_docs'
import R_docs_build from '../R_docs_build/R_docs_build'
import R_docs_footer from '../R_docs_footer/R_docs_footer'
import R_docs_img from '../R_docs_img/R_docs_img'
import R_docs_nft from '../R_docs_nft/R_docs_nft'
import R_docs_open from '../R_docs_open/R_docs_open'
import R_docs_power from '../R_docs_power/R_docs_power'
import R_docs_run from '../R_docs_run/R_docs_run'

function R_docs_full_page() {
  return (
    <div className='ps_fixed1'>
    <R_docs/>
    <R_docs_open/>
    <R_docs_run/>
    <R_docs_power/>
    <R_docs_nft/>
    <R_docs_build/>
    <R_docs_img/>
    <R_docs_footer/>
      
    </div>
  )
}

export default R_docs_full_page
