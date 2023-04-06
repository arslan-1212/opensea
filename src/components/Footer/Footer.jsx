import React from 'react'
import "./Footer.css"
import { FaTwitter } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaRedditAlien } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { SiTiktok } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import open from "../Accets/opensea-white.svg"
function Footer() {
  return (
    <div className='py-5 main_footer_bg text-white'>
      <div className="container ">
        <div className="row">
            <div className="col-lg-6 pt-3">
                <div className="stay_in text-start">
                    <h4>Stay in the loop</h4>
                    <p>Join our mailing list to stay in the loop with our newest feature <br /> releases, NFT drops, and tips and tricks for navigating <br /> OpenSea.</p>
                </div>
                <div className="srch_br d-flex">
                <input type="email" placeholder='Your email address' class="form-control mail_box maill-boox" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <button className='btn btn-lg ms-4 maill-boox-btn'>Sign up</button>
                </div>
            </div>
            <div className="col-lg-6 pt-3">
                <h4 className='text-start'>Join the community</h4>
<div className="icon-primary ">
    <div className='p-3 bg-dark-icon me-2 mt-2'>
        <FaTwitter className='fs-4'/>
    </div>
    <div className='p-3 bg-dark-icon me-2 mt-2'>
        <BsInstagram className='fs-4'/>
    </div>
    <div className='p-3 bg-dark-icon me-2 mt-2'>
        <FaDiscord className='fs-4'/>
    </div>
    <div className='p-3 bg-dark-icon me-2 mt-2'>
        <FaRedditAlien className='fs-4'/>
    </div>
    <div className='p-3 bg-dark-icon me-2 mt-2'>
        <AiFillYoutube className='fs-4'/>
    </div>
    <div className='p-3 bg-dark-icon me-2 mt-2'>
        <SiTiktok className='fs-4'/>
    </div>
    <div className='p-3 bg-dark-icon me-2 mt-2'>
        <HiOutlineMail className='fs-4'/>
    </div>
</div>
            </div>
        </div>
        <hr className='  my-5'/>

        <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 d-block">
                <div><img src={open} width="50" className='float-start' alt="" /></div><br/><br/><br/>
                <div className='text-start'><h3>OpenSea</h3></div>
                <div className='text-start'>
                    <p>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
                </div>
                
            </div>
            <ul className="col-lg-2 col-md-3  text-start">
                <p className='fw-bold fs-5 link-main'>MarketPlace</p>
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">All NFT'S</a> </li>
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">Art</a> </li>
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">Collectibles</a> </li>
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">Domain Names</a> </li>
                {/* <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">All NFT'S</a> </li> */}
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">Music</a> </li>
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">Photography</a> </li>
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">Sports</a> </li>
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">Trading Cards</a> </li>
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">Utility</a> </li>
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">Virtual Worlds</a> </li>
            </ul>
            <ul className="col-lg-2 col-md-3  text-capitalize text-start">
            <p className='fw-bold fs-5 link-main'>My Account</p>
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">Profile</a> </li>
                <li  className='link_of_nft '><a className='text-white text-decoration-none text-capitalize' href="">Favorites</a> </li>
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">Watchlist</a> </li>
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">My collections</a> </li>
                {/* <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">All NFT'S</a> </li> */}
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">Create</a> </li>
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">Setting</a> </li>
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">Sports</a> </li>

                <p className='fw-bold fs-5 link-main mt-4'>state</p>
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">Rankings</a> </li>
                <li  className='link_of_nft '><a className='text-white text-decoration-none text-capitalize' href="">Activity</a> </li>

            </ul>
            <ul className="col-lg-2 col-md-3  text-capitalize text-start">
            <p className='fw-bold fs-5 link-main'>Resources</p>
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">Learn</a> </li>
                <li  className='link_of_nft '><a className='text-white text-decoration-none text-capitalize' href="">Help Center</a> </li>
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">Platform Status</a> </li>
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">Partners</a> </li>
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">Taxes</a> </li>
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">Blog</a> </li>
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">Docs</a> </li>
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">Newsletter</a> </li>
                </ul>
                <ul className="col-lg-2 col-md-3  text-capitalize text-start">
            <p className='fw-bold fs-5 link-main'>Company</p>
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">About</a> </li>
                <li  className='link_of_nft '><a className='text-white text-decoration-none text-capitalize' href="">Careers</a> </li>
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">Ventures</a> </li>
                <li  className='link_of_nft '><a className='text-white text-decoration-none ' href="">Grants</a> </li>
                
                </ul>
        </div>
        <hr/>
        <div className="row">
            <div className="col-lg-6 text-center text-md-start">
                <p >
                © 2018 - 2022 Ozone Networks, Inc
                </p>
            </div>
            <div className="col-lg-6 justify-content-center justify-content-md-end  d-flex">
                <p>
                    <a  className='text-white text-decoration-none link_of_nft' href="#">Privacy Policy
</a>
                </p>
                <p>
                    <a  className='text-white ms-2 text-decoration-none link_of_nft' href="#">
                    Terms of Service
                    </a>
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
