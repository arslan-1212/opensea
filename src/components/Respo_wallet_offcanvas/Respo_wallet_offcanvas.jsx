import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MdOutlineShoppingCart } from "react-icons/md";
import {AiOutlineInfoCircle} from "react-icons/ai"
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function Respo_wallet_offcanvas({ name, ...props }) {
    const [show5, setShow5] = useState(false);
    const handleClose = () => setShow5(false);
const handleShow = () => setShow5(true);
  return (
    <div>
    
    <div>
   
         <Button  onClick={handleShow} className="me-2 offcanvas_header_btn">
         <MdOutlineShoppingCart className=' text-dark resp_shoping_chart'/>
      </Button>
      <Offcanvas className='' show={show5} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <div className='d-flex align-items-center  '><h3>Your cart</h3>
          <span> 
          <Tooltip className='bg_main_tool' title={<span className='bg-dark'> Items in your cart are not guaranteed at purchase. <span style={{color:'red'}}> Learn more </span></span>} arrow placement="bottom"> 
      <IconButton>
        <AiOutlineInfoCircle></AiOutlineInfoCircle>
      </IconButton>
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

    </div>
  )
}

export default Respo_wallet_offcanvas