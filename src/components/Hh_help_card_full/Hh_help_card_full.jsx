import React from 'react'
import Hh_hlep_card from '../Hh_help_card/Hh_hlep_card'
  import hh_cardp from "../Assets/hh_cardp.png"
  import hh_cardue from "../Assets/hh_cardue.png"
  import hh_cardu from "../Assets/hh_cardu.png"
  import hh_cardpp from "../Assets/hh_cardpp.png"
  import hh_cardppp from "../Assets/hh_cardppp.png"
  import hh_cardpppp from "../Assets/hh_cardpppp.png"
  import hh_cardppppp from "../Assets/hh_cardppppp.png"
  import hh_cardpppppp from "../Assets/hh_cardppppp.png"
  

function Hh_help_card_full() {
  return (
    <div className='mt-5'>
        <div className="container mt-3">
            <div className="row mt-3">
                <div className="col-md-4 mt-3 mt-md-0">

                    <Hh_hlep_card card_title='Getting Started' hh_cardp={hh_cardp}/>
                </div>
                <div className="col-md-4 mt-3 mt-md-0">

                    <Hh_hlep_card card_title='Buying' hh_cardp={hh_cardpp}/>
                </div>
                <div className="col-md-4 mt-3 mt-md-0">

                    <Hh_hlep_card card_title='Selling' hh_cardp={hh_cardppp}/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-4 mt-3 mt-md-0">

                    <Hh_hlep_card card_title='Creating' hh_cardp={hh_cardpppp}/>
                </div>
                <div className="col-md-4 mt-3 mt-md-0">

                    <Hh_hlep_card card_title='Policies' hh_cardp={hh_cardppppp}/>
                </div>
                <div className="col-md-4 mt-3 mt-md-0">

                    <Hh_hlep_card card_title='FAQ' hh_cardp={hh_cardpppppp}/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-4 mt-3 mt-md-0">

                    <Hh_hlep_card card_title='User Safety' hh_cardp={hh_cardue}/>
                </div>
                <div className="col-md-4 mt-3 mt-md-0">

                    <Hh_hlep_card card_title='Developers' hh_cardp={hh_cardu}/>
                </div>
                <div className="col-md-4 mt-3 mt-md-0">

                    <Hh_hlep_card card_title='Solana' hh_cardp={hh_cardu}/>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Hh_help_card_full

