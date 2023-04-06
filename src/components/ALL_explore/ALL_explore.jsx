import React from 'react'
import Canvas_accordian from '../Canvas_accordian/Canvas_accordian';
import Domain_explore from '../Domain_explore/Domain_explore';
import Explore_all_nft from "../Explore_all_nft/Explore_all_nft";
import Responsive_all_nft_explore from '../Responsive_all_nft_explore/Responsive_all_nft_explore';
import Sort_canvas from '../Sort_canvas/Sort_canvas';
function ALL_explore() {

  return (
    <div className='container-fluid'>
      <Explore_all_nft/>
      <div className='d-flex justify-content-evenly'>
      <Responsive_all_nft_explore/>
      <Sort_canvas/>
      </div>

      
      <Domain_explore/>
    </div>
  )
}

export default ALL_explore
