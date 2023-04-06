import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import FilterListIcon from "@mui/icons-material/FilterList";
// import "./Canvas_accordian.css"
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordian_all_nft from "../Accordian_all_nft/Accordian_all_nft";
import Sort_radio from '../Sort_radio/Sort_radio';

function Sort_data({ name, ...props }) {
    const [showw, setShoww] = useState(false);

    const handleClosee = () => setShoww(false);
    const handleShoww = () => setShoww(true);
  return (
    <div>
       <Button variant="" onClick={handleShoww} className="me-2 d-block d-md-none ssssss ">
      <FilterListIcon className='text-dark ' /> Sort by
      </Button>
      <Offcanvas show={showw} onHide={handleClosee} {...props} className="h-100">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-center m-auto'>Sort</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <Sort_radio/>
        </Offcanvas.Body>
        <div className='d-flex justify-content-evenly px-3 my-2'>
            
            <button className='btn done_responsive text-light fw-bold btn-lg ssssss w-100' onClick={handleClosee} > Done</button>
        </div>
      </Offcanvas>
    </div>
  )
}

export default Sort_data
