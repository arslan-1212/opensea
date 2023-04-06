import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Profile_modal.css"
import metamask from "../Assets/metamask.png"
import wl from "../Assets/wl.jpg"
import sola from "../Assets/sola.webp"
import prol from "../Assets/prol.webp"
import ledger from "../Assets/ledger.webp"
import pha from "../Assets/pha.svg"
import phaa from "../Assets/phaa.png"



function Profile_modal(props) {
  return (
    <div>
         <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered 
      className='profile_name'
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter text-center">
        <h4 className='proflie_model_heading'>Connect your wallet</h4>
        <span className='proflie_modal_sub_heading'>If you don't have a wallet, you can select a provider  and create one now. <span><a href="#"> Learn more</a></span></span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                <img src={metamask} alt="" className='sola_img' />
                <h6 className='profile_modal_body_heading'>MetaMask</h6>
                </div>
            </div>
                <div>
                    <h6 className='popular'>POPULAR</h6>
                </div>
        </div>
        <div className="d-flex align-items-center mt-3">
            <img src={sola} className='sola_img' alt="" />
            <h6 className='profile_modal_body_heading'>Coinbase Wallet</h6>

        </div>
        <div className="d-flex align-items-center mt-3">
            <img src={prol} className='sola_img' alt="" />
            <h6 className='profile_modal_body_heading'>WalletConnect</h6>

        </div>
        <div className="d-flex align-items-center mt-3">
            <img src={ledger} className='sola_img' alt="" />
            <h6 className='profile_modal_body_heading'>Ledger</h6>

        </div>
        <div className="d-flex mt-3 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                <img src={pha} alt="" className='sola_img' />
                <h6 className='profile_modal_body_heading'>Phantom</h6>
                </div>
            </div>
                <div>
                    <h6 className='popular'>Solana</h6>
                </div>
        </div>
        <div className="d-flex mt-3 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                <img src={phaa} alt="" className='sola_img' />
                <h6 className='profile_modal_body_heading'>BitKeep</h6>
                </div>
            </div>
                <div>
                    <h6 className='popular'>BNB Chain</h6>
                </div>
        </div>
       
      </Modal.Body>
      <Modal.Footer className='proflie_fotter_heading'>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        <h3 className='profile_modal_footer text-center'>Show more</h3>
      </Modal.Footer>
    </Modal>
      
    </div>
  )
}

export default Profile_modal
