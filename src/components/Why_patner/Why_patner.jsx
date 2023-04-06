import React from 'react'
import iconMoney from '../Assets/iconMoney.svg'
import iconusers from '../Assets/iconusers.svg'
import wallet from '../Assets/wallet.svg'
import collection from '../Assets/collection.svg'
import nfts from '../Assets/nfts.svg'

function Why_patner() {
  return (
    <>
        <h1 className='mt-5 d-flex text-center'> 
            <b>Why partner with OpenSea</b>
        </h1>
        <p className='mt-4 px-3 text-center'>
        While we take pride in being the first and largest marketplace and in our robust feature <br /> set, we also help our partners succeed with the following...</p>
        
<div className="container">
    <div className="row mt-5 ">
        <div className="col-md-4 text-center" >
            <div className='i_con_img_p'><img src={iconMoney}  width="45" alt="" /></div>
            
            <div className="">
            <h3 className='mt-3'><b>Generate Revenue</b></h3>
            <p className='mt-4'>With millions in transactions since 2017, <br /> we’ll help you generate revenue on our <br /> platform ⁠— from direct sales to <br /> secondary sales</p>
            </div>
        </div>
        <div className="col-lg-4 text-center">
        <img src={iconusers} width="45" alt="" />
        <h3 className='mt-3'><b>Reach Millions</b></h3>
        <p className='mt-4'>With over thousands of users and <br /> followers, we can help you reach a large <br /> audience of collectors</p>
        </div>
        <div className="col-lg-4 text-center">
        <img src={wallet} width="45" className=' ' alt="" />
        <h3 className='mt-3'><b>Spend Less</b></h3>
        <p className='mt-4'>Compared with other NFT marketplaces, <br /> we have lowest fees in the space <br /> allowing you to spend less with your <br /> created collection</p>
        </div>
    </div>
</div>

<div className='container'>

<div className='row d-flex justify-content-evenly'>
    <div className='col-lg-4 text-center'>
    <img src={collection} width="45" alt="" />
    <h3 className='mt-5'><b>Robust Features</b></h3>
    <p className='mt-4'>With the most powerful way for users to <br /> buy and sell NFTS, we offer the most <br /> advanced features</p>

    </div>

<div className='col-lg-4 text-center'> 
<img src={nfts} width="45" alt="" />
<h3 className='mt-5'><b>Breadth of Categories</b></h3>
<p className='mt-4'>With over thousands of collections, we <br /> are proud to host the widest range of <br /> categories, ranging from digital to <br /> physical NFTs</p>
</div>

</div>
</div>

    </>
  )
}

export default Why_patner