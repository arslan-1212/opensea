import React from 'react'
import Profile_collection_card from '../Profile_collection_card/Profile_collection_card'

function Drawer_card_of_cards() {
  return (
    <div className='container'>
      <div className="row ">
        <div className="col-lg-4 col-sm-12">
            <Profile_collection_card/>
        </div>
        <div className="col-lg-4 col-sm-12">
            <Profile_collection_card/>
        </div>
        <div className="col-lg-4 col-sm-12">
            <Profile_collection_card/>
        </div>
      </div>
    </div>
  )
}

export default Drawer_card_of_cards
