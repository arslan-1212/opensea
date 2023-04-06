import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoFilterSharp } from 'react-icons/io5';
import { MdOutlineSwapVert } from 'react-icons/md';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import { Radio } from '@mui/material';
import "./Profile_collection_tab_mob.css";
import Profile_collection_offcanvas from '../Profile_collection_offcanvas.jsx/Profile_collection_offcanvas';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Profile_collection_tab_mob() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    return (
        <div className="tab_mob">
            <div className="container_fluid">
                <div className="row">
                    <div className="sc-29427738-0 mt-4">
                        <p className="sc-29427738-0 sc-bdnxRM dVNeWL jRRGWp">
                            <div className="sc-37393a8-0 iFtgSt sc-e8931d0e-0 cJbnHG">
                                <div color="gray" className="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-4422a702-0 gMILgy jSPhMX kKyBpy fYgjHJ">
                                    <i color="currentColor" value="search" size="24" className="sc-a143597d-0 RovoC material-icons"><HiOutlineSearch /></i>
                                </div>
                                <input aria-invalid="false" placeholder="Filter" type="search" value="" style={{ cursor: "text" }} />
                            </div>
                        </p>
                    </div>
                </div>

                
                <div className="row ">
                    <div className="col-6 eroww">
                        {/* <Button variant="" onClick={handleShow} className="w-100">
                        </Button> */}
                            <button aria-expanded="true" onClick={handleShow} aria-label="Open" class="sc-29427738-0 sc-788bb508-0 dZDA-Dt bpmNDx sc-e120eff9-1 w-100 h-75 profile_mob fresnel-lessThan-lg" data-testid="filter-toggle" width="100%" type="button"><span class="sc-29427738-0 sc-bdnxRM sc-e120eff9-0 dVNeWL eimMfF jNMSxT"><div class="sc-29427738-0 sc-630fc9ab-0 dSVLeh jSPhMX"><i color="charcoal" font-weight="600" value="filter_list" size="24" class="sc-a143597d-0 buXgzV material-icons-outlined"><IoFilterSharp /></i></div>Filters</span></button>

                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Filters</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item className="accur_item" eventKey="0">
                                        <Accordion.Header><div className="event_header">Status</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className="sale_main_2">
                                                <span className="sale">Buy Now</span>
                                                <Checkbox
                                                    {...label}
                                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                                />

                                            </div>

                                            <div className="sale_main_2">
                                                <span className="sale">On Auction</span>
                                                <Checkbox
                                                    {...label}

                                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                                />
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item className="accur_item" eventKey="1">
                                        <Accordion.Header><div className="event_header">Price</div></Accordion.Header>
                                        <Accordion.Body>

                                            <div className="sc-29427738-0 fxMmBv">
                                                <p className="sc-29427738-0 sc-bdnxRM dVNeWL jRRGWp">
                                                    <div className="sc-37393a8-0 iFtgSt sc-e8931d0e-0 cJbnHG">
                                                        <div color="gray" className="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-4422a702-0 gMILgy jSPhMX kKyBpy fYgjHJ">
                                                            <i color="currentColor" value="search" size="24" className="sc-a143597d-0 RovoC material-icons"><HiOutlineSearch /></i>
                                                        </div>
                                                        <input aria-invalid="false" placeholder="Filter" type="search" value="" style={{ cursor: "text" }} />
                                                    </div>
                                                </p>
                                            </div>

                                        </Accordion.Body>
                                    </Accordion.Item>



                                    <Accordion.Item className="accur_item" eventKey="2">
                                        <Accordion.Header><div className="event_header">Quantity</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className="sale_main_2">
                                                <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                                    <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">All items</div>
                                                </div>
                                                <Radio
                                                    {...label}

                                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                                />
                                            </div>

                                            <div className="sale_main_2">
                                                <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                                    <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Single items</div>
                                                </div>
                                                <Radio
                                                    {...label}
                                                    defaultChecked
                                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                                />
                                            </div>

                                            <div className="sale_main_2">
                                                <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                                    <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Bundles</div>
                                                </div>
                                                <Radio
                                                    {...label}

                                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                                />
                                            </div>

                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item className="accur_item" eventKey="3">
                                        <Accordion.Header><div className="event_header">Currency</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className="sale_main_2">
                                                <span className="sale">ETH</span>
                                                <Link to="/Activity">  <Checkbox
                                                    {...label}

                                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                                />
                                                </Link>
                                            </div>

                                            <div className="sale_main_2">
                                                <span className="sale">WETH</span>
                                                <Link to="/Activity_listing"> <Checkbox
                                                    {...label}

                                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                                /></Link>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item className="accur_item" eventKey="4">
                                        <Accordion.Header><div className="event_header">Artist</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div className="sc-29427738-0 fxMmBv">
                                                <p className="sc-29427738-0 sc-bdnxRM dVNeWL jRRGWp">
                                                    <div className="sc-37393a8-0 iFtgSt sc-e8931d0e-0 cJbnHG">
                                                        <div color="gray" className="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-4422a702-0 gMILgy jSPhMX kKyBpy fYgjHJ">
                                                            <i color="currentColor" value="search" size="24" className="sc-a143597d-0 RovoC material-icons"><HiOutlineSearch /></i>
                                                        </div>
                                                        <input aria-invalid="false" placeholder="Filter" type="search" value="" style={{ cursor: "text" }} />
                                                    </div>
                                                </p>
                                            </div>

                                            <div className="sale_main_2">
                                                <span className="sale">Burnasso</span>
                                                <Link to="/Activity_listing"> <Checkbox
                                                    {...label}

                                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                                /></Link>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>

                    <div className="col-6 eroww">
                        {/* <Button variant="" onClick={handleShow2}>
                        </Button> */}
                            <button width="100%"  onClick={handleShow2} class="sc-29427738-0 sc-788bb508-0 kqzAEQ bpmNDx sc-e120eff9-1 profile_mob w-100 h-75" type="button"><span class="sc-29427738-0 sc-bdnxRM sc-e120eff9-0 dVNeWL eimMfF jNMSxT"><div display="flex" class="sc-29427738-0 eSNKWK"><i size="24" value="swap_vert" class="sc-a143597d-0 RovoC material-icons"><MdOutlineSwapVert /></i></div>Sort</span></button>

                        <Offcanvas show={show2} onHide={handleClose2}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Sort by</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <div className="sale_main_2">
                                    <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                        <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Single items</div>
                                    </div>
                                    <Radio
                                        {...label}
                                        defaultChecked
                                        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                    />
                                </div>

                                <div className="sale_main_2">
                                    <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                        <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Single items</div>
                                    </div>
                                    <Radio
                                        {...label}
                                        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                    />
                                </div>

                                <div className="sale_main_2">
                                    <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                        <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Single items</div>
                                    </div>
                                    <Radio
                                        {...label}
                                        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                    />
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                </div>

                <div className="row">
                
                                <>                  {[ 'end' ].map((placement, idx) => (
        <Profile_collection_offcanvas key={idx} placement={placement} name={placement} />
      ))}</>
                </div>
            </div>
        </div>
    )
}

export default Profile_collection_tab_mob