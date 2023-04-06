import React from 'react';
import { IoFilterSharp } from 'react-icons/io5';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import { MdFormatListBulleted } from 'react-icons/md';
import { MdGridOn } from 'react-icons/md';
import { BsGrid1X2 } from 'react-icons/bs';
import { RxViewGrid } from 'react-icons/rx';
import Accordion from 'react-bootstrap/Accordion';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Profile_collection_card from '../Profile_collection_card/Profile_collection_card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Radio } from '@mui/material';
import Profile_collection_tab_mob from '../Profile_collection_tab_mob/Profile_collection_tab_mob';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Profile_collection_tab_item_data() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div className="sc-29427738-0 graeed sc-630fc9ab-0 sc-3f102755-0 gtDMWH jSPhMX hLGbAz">
                <div height="100%" width="calc(100vw - 17px)" className="sc-29427738-0 sc-3f102755-1 gHZPOh gpxecR">
                    <div className="fresnel-container fresnel-greaterThanOrEqual-lg sc-1242568d-1 dZzJwG">
                        <div display="flex" height="100%" className="sc-29427738-0 sc-e1213540-0 dqOkeF hdXdDy">
                            <div width="100%" className="sc-29427738-0 sc-630fc9ab-0 iCDJqk jSPhMX">
                                <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                    <div className="fresnel-container fresnel-greaterThanOrEqual-lg ">
                                        <button aria-expanded="true" aria-label="Close" data-testid="filter-toggle" className="sc-29427738-0 sc-788bb508-0 nFISH bpmNDx sc-9a637e94-1 kSESLX" type="button">
                                            <span className="sc-29427738-0 sc-d58c749b-2 sc-9a637e94-0 ILliQ cWTWPE enUGCb">
                                                <i color="charcoal" font-weight="600" value="filter_list" size="24" className="sc-a143597d-0 buXgzV material-icons-outlined"><IoFilterSharp />
                                                </i>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div width="100%" className="sc-29427738-0 fUxcOT">
                                    <div width="100%" className="sc-29427738-0 sc-bdnxRM gIUWxk jDXFgB">
                                        <span className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">
                                            <div className="sc-a3ec9f15-3 bdRjVp">
                                                <div className="sc-29427738-0 ePjRuL">
                                                    <div className="sc-37393a8-0 iFtgSt" aria-expanded="false">
                                                        <div className="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-4422a702-0 dSVLeh jSPhMX kKyBpy fYgjHJ">
                                                            <i color="gray" size="24" value="search" className="sc-a143597d-0 iyKxcj material-icons"><HiOutlineSearch /></i>
                                                        </div>
                                                        <input aria-invalid="false" aria-controls="CollectionTraitSearch--results" id="trait-selector-input" placeholder="Search by name or attribute" role="searchbox" value="" style={{ cursor: "text" }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div width="240px" className="sc-29427738-0 gMYjoS">
                                    <span className="sc-29427738-0 sc-bdnxRM sc-a3ec9f15-0 dVNeWL iPAlIP euhRUu">
                                        <div className="fresnel-container fresnel-lessThan-lg sc-a3ec9f15-1 fbFfqn">
                                        </div>
                                        <div className="fresnel-container fresnel-greaterThanOrEqual-lg ">
                                            <div className="fresnel-container fresnel-greaterThanOrEqual-lg ">
                                                <div cursor="pointer" aria-expanded="false">
                                                    <Dropdown className="sc-37393a8-0 bfXCzr sc-9a485e76-0 ggtkBP sc-a3ec9f15-2 dVaSwQ">
                                                        <Dropdown.Toggle className="acuure" variant="" id="dropdown-basic">
                                                            Price low to high
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu className="acuure_bddy">
                                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    {/* <Accordion className="sc-37393a8-0 bfXCzr sc-9a485e76-0 ggtkBP sc-a3ec9f15-2 dVaSwQ">
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header className="acuure">Price low to high</Accordion.Header>
                                                            <Accordion.Body className="acuure_bddy">
                                                                <ul>
                                                                    <li>Recently listed</li>
                                                                    <li>Recently created</li>
                                                                    <li>Recently sold</li>
                                                                    <li>Highest last sale </li>
                                                                    <li>Ending soon </li>
                                                                </ul>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion> */}
                                                    {/* <div className="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-4422a702-0 kQKAhB jSPhMX kKyBpy fYgjHJ"> */}
                                                    {/* <i aria-label="Show more" color="gray" cursor="pointer" value="keyboard_arrow_down" size="24" className="sc-a143597d-0 dYnUi material-icons"><IoIosArrowDown /></i> */}
                                                    {/* </div> */}
                                                </div>
                                            </div>
                                            <div className="fresnel-container fresnel-lessThan-lg ">
                                            </div>
                                        </div>
                                    </span>
                                </div>
                                <div className="sc-29427738-0 kQKAhB">
                                    <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                                        <div className="sc-29427738-0 sc-630fc9ab-0 sc-a5e21c2d-1 nFISH jSPhMX feIvTb">
                                            <button className="sc-29427738-0 sc-788bb508-0 dULEQL dOsloX sc-a5e21c2d-0 jiZrkm sc-697bd841-0 fGGXeH sc-31a229f7-0 fnSUKO" aria-pressed="false" type="button">
                                                <div aria-hidden="true" pointer-events="none" className="sc-29427738-0 sc-630fc9ab-0 ioyAEo jSPhMX">
                                                    <i size="22" value="format_list_bulleted" color="gray" font-weight="400" className="sc-a143597d-0 bGxSOS material-icons-outlined"><MdFormatListBulleted /></i>
                                                </div>
                                            </button>
                                            <button className="sc-29427738-0 sc-788bb508-0 dULEQL dOsloX sc-a5e21c2d-0 jiZrkm sc-697bd841-0 fGGXeH sc-31a229f7-0 fnSUKO" aria-pressed="false" type="button">
                                                <div aria-hidden="true" pointer-events="none" className="sc-29427738-0 sc-630fc9ab-0 ioyAEo jSPhMX">
                                                    <i size="22" value="grid_on" color="gray" font-weight="400" className="sc-a143597d-0 bGxSOS material-icons-outlined"><MdGridOn /></i>
                                                </div>
                                            </button>
                                            <button className="sc-29427738-0 sc-788bb508-0 dULEQL dOsloX sc-a5e21c2d-0 jiZrkm sc-697bd841-0 oIWTJ sc-31a229f7-0 ipnhla" aria-pressed="true" disabled="" type="button">
                                                <div aria-hidden="true" pointer-events="none" className="sc-29427738-0 sc-630fc9ab-0 ioyAEo jSPhMX">
                                                    <i size="22" value="window" color="charcoal" font-weight="400" className="sc-a143597d-0 gechKN material-icons-outlined"><RxViewGrid /></i>
                                                </div>
                                            </button>
                                            <button className="sc-29427738-0 sc-788bb508-0 dULEQL dOsloX sc-a5e21c2d-0 jiZrkm sc-697bd841-0 fGGXeH sc-31a229f7-0 fnSUKO" aria-pressed="false" type="button">
                                                <div aria-hidden="true" pointer-events="none" className="sc-29427738-0 sc-630fc9ab-0 ioyAEo jSPhMX">
                                                    <i size="22" value="auto_awesome_mosaic" color="gray" font-weight="400" className="sc-a143597d-0 bGxSOS material-icons-outlined"><BsGrid1X2 /></i>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="sc-29427738-0 kQKAhB">
                                    <button width="[object Object]" type="button" className="sc-29427738-0 sc-788bb508-0 hogHsI htkSpH">
                                        <span color="inherit" className="sc-29427738-0 sc-bdnxRM cdrsRT ijjDTa">Make collection offer</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Profile_collection_tab_mob />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 accor_main">
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
                    </div>

                    <div className="col-sm-6 col-lg-3 mt-3 mt-md-0">
                        <Profile_collection_card />
                    </div>

                    <div className="col-sm-6 col-lg-3 mt-3 mt-md-0">
                        <Profile_collection_card />
                    </div>

                    <div className="col-sm-6 col-lg-3 mt-3 mt-md-0">
                        <Profile_collection_card />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile_collection_tab_item_data