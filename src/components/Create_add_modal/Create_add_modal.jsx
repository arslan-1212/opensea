import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineClose } from 'react-icons/ai';
import "./Create_add_modal.css"


function Create_add_modal(props) {

  return (
    <div>
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter text-center"> 
        <span className='d-block mx-auto'>
        Add Properties

        </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='text-center'>
        Properties show up underneath your item, are clickable, and can be filtered in your collection's sidebar.
        </p>

        <div className="row ">
            <div className="col-md-6">
                <h4>Type</h4>

                <div className="">
                <div class="input-group ">
    <div class="input-group-text" id="btnGroupAddon"><AiOutlineClose></AiOutlineClose></div>
    <input type="text" class="form-control inpu_grp" placeholder="Character" aria-label="Input group example" aria-describedby="btnGroupAddon"/>
  </div>
                </div>
            </div>
            <div className="col-md-4 ps-3 ps-md-0 responsive_stats">
                <h4>Name</h4>
                <input type="text" placeholder='Male' className='male_input' />
            </div>
        </div>

            <div className='mt-4'>
                <button className='add_more_pro'>Add more</button>
            </div>
      </Modal.Body>
      <Modal.Footer>
        <button className='save_pro add_more_pro w-100' onClick={props.onHide}> Save</button>
      </Modal.Footer>
    </Modal>
      
    </div>
  )
}

export default Create_add_modal
