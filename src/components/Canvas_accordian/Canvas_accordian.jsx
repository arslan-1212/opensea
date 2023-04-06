import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import FilterListIcon from "@mui/icons-material/FilterList";
import "./Canvas_accordian.css"
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordian_all_nft from "../Accordian_all_nft/Accordian_all_nft";
function Canvas_accordian({ name, ...props }) {
    const [showw, setShoww] = useState(false);

    const handleClosee = () => setShoww(false);
    const handleShoww = () => setShoww(true);
  return (
    <div>
      <Button variant="" onClick={handleShoww} className="me-2 d-block d-md-none ssssss ">
      <FilterListIcon className='te  ' /> Fliter
      </Button>
      <Offcanvas show={showw} onHide={handleClosee} {...props} className="h-100">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-center m-auto'>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <Accordian_all_nft/>
        </Offcanvas.Body>
        <div className='d-flex justify-content-evenly px-3 my-2'>
            <button className='btn btn-light text-primary fw-bold btn-lg ssssss sss' onClick={handleClosee} > Clear</button>
            <button className='btn done_responsive text-light fw-bold btn-lg ssssss sss' onClick={handleClosee} > Done</button>

        </div>
      </Offcanvas>
    </div>
  )
}

export default Canvas_accordian
