import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MdOutlineAccountBalanceWallet, MdOutlineShoppingCart } from "react-icons/md";
import {AiOutlineInfoCircle} from "react-icons/ai"
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { FaUserCircle } from 'react-icons/fa';
import sola from "../Assets/sola.webp"
import prol from "../Assets/prol.webp"
import ledger from "../Assets/ledger.webp"
import pha from "../Assets/pha.svg"
import phaa from "../Assets/phaa.png"
import metamask from "../Assets/metamask.png"

function Wallet_ofcanvas_nav({ name, ...props }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  return (
    <div>
         <Button  onClick={handleShow} className="me-2 offcanvas_header_btn">
         <MdOutlineAccountBalanceWallet className='fs-2 text-dark'/>
      </Button>
      <Offcanvas className='' show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
          <div className='d-flex align-items-center  align-item-center '><span><FaUserCircle className='fs-2'></FaUserCircle> </span> <h6 className='wallet_nav_clr'> My wallet</h6>
          <span>
     
    </span>
          </div>
        </Offcanvas.Header>
        <hr />
        <Offcanvas.Body>
     <p className='wallet_nav_content_heading'>If you don't have a <span className='wallet_special'> wallet </span> yet, you can select a provider and create one now.</p>
     <div className="wallet_convas_nav">
        <div className='bb_wallet'>
     <div className="d-flex  align-items-center ">
            <img src={sola} className='sola_img ms-2' alt="" />
            <h6 className='profile_modal_body_heading'>Coinbase Wallet</h6>

        </div>
        </div>
        <div className='bb_wallet'>
     <div className="d-flex  align-items-center ">
            <img src={ledger} className='sola_img ms-2' alt="" />
            <h6 className='profile_modal_body_heading'>Ledger</h6>

        </div>
        </div>
        <div className='bb_wallet'>
     <div className="d-flex  align-items-center ">
            <img src={prol} className='sola_img ms-2' alt="" />
            <h6 className='profile_modal_body_heading'>WalletConnect</h6>

        </div>
        </div>
        <div className="bb_wallet">
        <div className="d-flex justify-content-between align-items-center px-2">
            <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                <img src={pha} alt="" className='sola_img' />
                <h6 className='profile_modal_body_heading'>Phantom</h6>
                </div>
            </div>
                <div>
                    <h6 className='popular_wallet_solana'>Solana</h6>
                </div>
        </div>
        </div>
        <div className="bb_wallet">
        <div className="d-flex justify-content-between align-items-center px-2">
            <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                <img src={metamask} alt="" className='sola_img' />
                <h6 className='profile_modal_body_heading'>MetaMask</h6>
                </div>
            </div>
                <div>
                    <h6 className='popular_wallet'>POPULAR</h6>
                </div>
        </div>
        </div>
        <div className="bb_wallet">
      <h4 className='text-center wallet_show_more'>Show More</h4>
        </div>

        
        </div>
        </Offcanvas.Body>
      </Offcanvas>
     
      
    </div>
  )
}

export default Wallet_ofcanvas_nav
