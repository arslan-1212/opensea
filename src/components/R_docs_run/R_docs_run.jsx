import React from 'react'
import a_run from "../Assets/a_run.png"
import b_run from "../Assets/b_run.png"
import c_run from "../Assets/c_run.png"
import Button from '@mui/material/Button';


function R_docs_run() {
  return (
 <>
    <div>
        <h3 className='Heading_color_all text-center'><b>Run your own crowd sale</b></h3>
        <p className='prha px-5 text-center'>Sell the items in your game to an initial user base of early adopters. <br/> Even sell off items in your own token.</p>
    </div>
    
    <div className='container'>
        <div className="row mt-3">
            <div className="col-12 col-md-4 text-center">
                
                <img src={a_run} alt="" />
                <h6 className='Heading_color_all my-2'> <b>Sell packs of items</b> </h6>
                <p className='prha'>Instead of individual items, you can finally<br /> sell packs of items to give more to your <br /> users.</p>
                
                </div>
            <div className="col-12 col-md-4 text-center"> 

            <img src={b_run} alt="" />
                <h6 className='Heading_color_all my-2'> <b>Gift items to users</b> </h6>
                <p className='prha'>Reward your users with items to grow <br /> your app's user base. <br /> </p>
                

            
                </div>
            <div className="col-12 col-md-4 text-center">
                
                <img src={c_run} alt="" />
                <h6 className='Heading_color_all my-2'> <b>Create lootboxes</b> </h6>
                <p className='prha'>Create lootboxes to gamify your app and<br />  build engagement. <br /> </p>
                
            </div>
        </div>

        <button type="button" class="btn btn-primary btn-lg btn_txt d-block m-auto">Create your own crowd sale</button>

    <div className='hr_line'>
        <hr />
    </div>
   
    </div>
    </>
  )
}

export default R_docs_run