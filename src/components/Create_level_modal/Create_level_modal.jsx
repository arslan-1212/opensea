import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineClose } from 'react-icons/ai';

function Create_level_modal(props,create_head,create_sub) {
  return (
    <div>
       <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='model_create_page'
      
    >
      <Modal.Header  closeButton>
        <Modal.Title id="contained-modal-title-vcenter text-center"> 
        <span className='d-block mx-auto'>
        {props.create_head}

        </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='text-center'>
       {props.create_sub}
        </p>

        <div className="row ">
            <div className="col-md-6">
                <h4>Name</h4>

                <div className="">
                <div class="input-group ">
    <div class="input-group-text" id="btnGroupAddon"><AiOutlineClose></AiOutlineClose></div>
    <input type="text" class="form-control inpu_grp" placeholder="speed" aria-label="Input group example" aria-describedby="btnGroupAddon"/>
  </div>
                </div>
            </div>
            <div className="col-md-4 ps-3 ps-md-0">
                <h4>value</h4>
                <div class="input-group  d-flex">
    <input type="number" class="form-control inpu_grp" placeholder="3" aria-label="Input group example" aria-describedby="btnGroupAddon"/>
    <div class="input-group-text" id="btnGroupAddon">of</div>
    <input type="number" placeholder='5' className='w-25 nummmmber_impu' />
  </div>
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

export default Create_level_modal
