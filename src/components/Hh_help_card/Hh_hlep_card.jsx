  import React from 'react'
  import "./Hh_help_card.css"
  function Hh_hlep_card({card_title,hh_cardp}) {
    return (
      <div>
        <div className="hh_card_help">
        <img src={hh_cardp} className='hh_card_pic' alt="" />
        <span className='hh_card_heading'>
                   {card_title}
                  </span>
        </div>
        
      </div>
    )
  }
  
  export default Hh_hlep_card
  