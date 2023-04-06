import React from 'react'
import a_docs_nft from '../Assets/a_docs_nft.png'
import Button from '@mui/material/Button';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PersonIcon from '@mui/icons-material/Person';
import { AiTwotoneContacts } from "react-icons/ai";

function R_docs_nft() {
  return (
    <>

 <div className="container">
        <div className="row mt-5">

        <div className="col-12 col-md-6 my-5">
<img src={a_docs_nft} className='w-50' alt="" />

            </div>

            <div className="col-12 col-md-6">

<h3 className='text-start Heading_color_all px-3'><b>Fetch NFTs with our API</b></h3>
<p className='text-start prha px-3'>OpenSea provides a REST API for fetching NFT items based on a <br /> set of parameters. Apps can now display:</p>

<h6 className='text-start Heading_color_all px-3'> <span className='text-primary'><ContactPageIcon /> </span> <b className='ps-3'> NFTs</b></h6>
<p className='text-start ps-5 prha px-3'>Filter by collection, type, or wallet address.</p>

<h6 className='text-start Heading_color_all px-3'> <span className='text-primary'><AiTwotoneContacts /></span><b className='ps-3'>Activity</b></h6>
<p className='text-start ps-5 prha px-3'>Get all NFT related events (not just on our marketplace)  <br />  including sales, listings, bids, transfers, and more.</p>

<h6 className='text-start Heading_color_all p-3'> <span className='text-primary'><PersonIcon /></span><b className='ps-3'>Accounts</b></h6>
<p className='text-start ps-5 prha px-3'>Get profile information for wallet addresses. </p>

<Button variant="contained" className='d-flex justify-content-start'> View API Reference </Button>

            </div>

          
           
        </div>
    </div>

    <div className='hr_line my-5'>
        <hr />
    </div>

    </>
  )
}

export default R_docs_nft