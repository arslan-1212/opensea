import React from 'react'
import a_docs_power from '../Assets/a_docs_power.png'
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContactPageIcon from '@mui/icons-material/ContactPage';

function R_docs_power() {
  return (
    <>

 <div className="container">
        <div className="row mt-5">

       

            <div className="col-12 col-md-6">

<h3 className='text-start mb-4 Heading_color_all  '><b>Power your in-app economy  <br /> with OpenSea.js</b></h3>

<h5 className='text-start Heading_color_all '> <span className='text-primary'><ShoppingCartIcon /> </span> <b className='ps-3'> Buy, sell, & bundle</b></h5>
<p className='text-start ps-5 prha '>Enable users to create auctions (w/o paying gas) in any  <br /> currency, bid on items, and create multi-item bundles.</p>

<h5 className='text-start Heading_color_all '> <span className='text-primary'><ContactPageIcon /></span><b className='ps-3'> Easily pull in data on your NFT items</b></h5>
<p className='text-start ps-5 prha '>Access the OpenSea API with a JavaScript wrapper, <br />  allowing you to search NFTs, collections, users, and more.</p>

<button type="button" class="btn btn-primary d-flex justify-content-start my-3">View our SDK</button>


            </div>

            <div className="col-12 col-md-6">
<img src={a_docs_power} className='w-75 ' alt="" />

            </div>
           
        </div>
    </div>

    <div className='hr_line my-5'>
        <hr />
    </div>

    </>
  )
}

export default R_docs_power