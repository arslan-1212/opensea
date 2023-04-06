import React from 'react'
import "./FAQ.css"
import Accordion from 'react-bootstrap/Accordion';
import { propTypes } from 'react-bootstrap/esm/Image';

function FAQ(props) {
    return (
        <div>

            <div className="container  p-0">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <Accordion >
                            <Accordion.Item eventKey="0" className='tayyb' >
                                <Accordion.Header className='m_hh'>{props.main_heading}</Accordion.Header>
                                <Accordion.Body className='text-start'>
                                    <p className=''>{props.explain}</p>
                                    <p className=''>{props.explain2}</p>
                                    <p className=''>{props.explain3}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FAQ