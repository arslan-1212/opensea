import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MdOutlineShoppingCart } from "react-icons/md";
import {AiOutlineInfoCircle} from "react-icons/ai"
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';




function Wallet_offcanvas({ name, ...props }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    return (
        
    

    <div>
   
         <Button  onClick={handleShow} className="me-2 offcanvas_header_btn">
         <MdOutlineShoppingCart className='fs-2 text-dark'/>
      </Button>
      <Offcanvas className='main_cart_ooff' show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
          <div className='d-flex align-items-center  '><h3>Your cart</h3>
          <span> 
          <Tooltip className='bg_main_tool' title={<span className='bg-dark'> Items in your cart are not guaranteed at purchase. <span style={{color:'red'}}> Learn more </span></span>} arrow placement="bottom"> 
          {/* <Tooltip className='toool_tippp' title={<span className='tooltiple_cart'>Items in your cart are not guaranteed at purchase. Learn more</span>}> */}
      <IconButton>
        {/* <DeleteIcon /> */}
        <AiOutlineInfoCircle></AiOutlineInfoCircle>
      </IconButton>
    {/* </Tooltip> */}
    </Tooltip> 
    </span>
          </div>
        </Offcanvas.Header>
        <hr />
        <Offcanvas.Body>
      <div className='cart_body_content'>
      Add items to get started.
      <button className='btn-primary btn cart_content_button ' disabled>Complete purchase</button>
      </div>



    
        </Offcanvas.Body>
      </Offcanvas>
     

 

      
    </div>
  )
}

export default Wallet_offcanvas
