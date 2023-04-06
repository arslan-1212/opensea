import React from 'react'
import a_docs_img from "../Assets/a_docs_img.png"
import b_docs_img from "../Assets/b_docs_img.svg"
import c_docs_img from "../Assets/c_docs_img.png"
import d_docs_img from "../Assets/d_docs_img.svg"
import e_docs_img from "../Assets/e_docs_img.png"
import f_docs_img from "../Assets/f_docs_img.png"
import g_docs_img from "../Assets/g_docs_img.svg"
import h_docs_img from "../Assets/h_docs_img.png"

function R_docs_img() {
  return (
    <div className='container col_img'>
        <p className='text-center my-5 pt-5'>Trusted by top wallets & websites</p>
        <div className="row  "> 
        {/* <div className="col-2"></div> */}
<div className="col-12 col-md-6 d-md-flex justify-content-around  m-auto">
<img src={a_docs_img} width='100' alt=""className='pe-md-0 pe-3' />
<img src={b_docs_img} width='100' alt=""className='ps-md-0 ps-2'/>
<img src={c_docs_img} width='100' alt="" className='pe-md-0 pe-3'/>
<img src={d_docs_img} width='100' alt="" className='ps-md-0 ps-2'/>
</div>

<div className="row">

<div className="col-md-6 col-12 d-md-flex justify-content-around m-auto my-5">
<img src={e_docs_img} width='70' alt="" className='pe-md-0 pe-3' />
<img src={f_docs_img} width='100' alt="" className='ps-md-0 ps-2' />
<img src={g_docs_img} width='80' alt="" className='ps-md-0 ps-3'/>
<img src={h_docs_img} width='70' alt=""className='pt-md-0 pt-3' />
</div>

</div>



{/* <div className="col-2"></div> */}


        </div>

        
        
        
        </div>
  )
}

export default R_docs_img



// <a href="https://wallet.coinbase.com" target="_blank">
// 				<img src="https://files.readme.io/2cfa1ad-wallet-logomark.png" alt="best cryptomarketplace trusted by coinbase" />
// 			</a>