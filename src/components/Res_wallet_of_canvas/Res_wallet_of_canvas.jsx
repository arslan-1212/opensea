import React, {useState} from 'react'
import metamask from "../Assets/metamask.png"
import { FaUserCircle } from 'react-icons/fa';
import sola from "../Assets/sola.webp"
import prol from "../Assets/prol.webp"
import ledger from "../Assets/ledger.webp"
import pha from "../Assets/pha.svg"
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MdOutlineAccountBalanceWallet, MdOutlineShoppingCart } from "react-icons/md";


function Res_wallet_of_canvas({name, ...props}) {
    const [show4, setShow4] = useState(false);
    const handleClose = () => setShow4(false);
const handleShow = () => setShow4(true);
  return (
    <div>

<div>
         <Button  onClick={handleShow} className="me-2 offcanvas_header_btn">
      Connect wallet

      </Button>
      <Offcanvas className='' show={show4} onHide={handleClose} {...props}>
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
        <div className='bb_wallet' onClick={handleClose}>
     <div className="d-flex  align-items-center ">
            <img src={sola} className='sola_img ms-2' alt="" />
            <h6 className='profile_modal_body_heading'>Coinbase Wallet</h6>

        </div>
        </div>
        <div className='bb_wallet ' onClick={handleClose}>
     <div className="d-flex  align-items-center ">
            <img src={ledger} className='sola_img ms-2' alt="" />
            <h6 className='profile_modal_body_heading'>Ledger</h6>

        </div>
        </div>
        <div className='bb_wallet' onClick={handleClose}>
     <div className="d-flex  align-items-center ">
            <img src={prol} className='sola_img ms-2' alt="" />
            <h6 className='profile_modal_body_heading'>WalletConnect</h6>

        </div>
        </div>
        <div className="bb_wallet" onClick={handleClose}>
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
        <div className="bb_wallet" onClick={handleClose}>
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
        <div className="bb_wallet" onClick={handleClose}>
      <h4 className='text-center wallet_show_more'>Show More</h4>
        </div>

        
        </div>
        </Offcanvas.Body>
      </Offcanvas>
     
      
    </div>
    </div>
  )
}

export default Res_wallet_of_canvas