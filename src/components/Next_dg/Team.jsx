import React from 'react'
import "./Team.css"

function Team(props) {
    return (
        <div>
            <div className="container-fluid my-4 ">
                <div className="row d-flex justify-content-center mox">

                    <div className="col-lg-5 border piee ">
                        <div className="row pt-3">
                            <div className="col-lg-4">
                                <img src={props.balu} alt="" className='balu_pic_radi' />
                            </div>
                            <div className="col-lg-8 text-start ">
                                <div className='irn'>
                                <h4 className='fw-bold'>{props.hading}</h4>
                                <h6>{props.heading2}</h6>
                                <p className='text-muted'>{props.prar}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 border piee pieeon ">
                        <div className="row pt-3">
                            <div className="col-lg-4">
                                <img src={props.balu} alt="" className='balu_pic_radi' />
                            </div>
                            <div className="col-lg-8 text-start">
                                <div className="irn">
                                <h4 className='fw-bold '>{props.hading}</h4>
                                <h6 className=''>{props.heading2}</h6>
                                <p className='text-muted'>{props.prar}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Team
