
import "./Drops.css"
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import bnr from "../Assets/banner.mp4"
import collpic from "../Assets/collection-logo.avif"
import { MdVerified } from 'react-icons/md';
import { AiOutlineBell } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import frs_drp from "../Accets/patchworks.avif"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Drops() {

  const [value2, setValue2] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue2(newValue);
  };



  return (
    <div>
      <div className="container p-0">
        <div className="row m-0">
          <div className="col-lg-12 col-md-12 col-sm-12 pe-0 mainnn_col">
            <div className='dr_main'>
              <h1 className='main_heading text-start'>Drops</h1>

              <div className='main_tab'>
                <Box sx={{ width: '100%' }}>
                  <Box sx={{ borderBottom: 1, borderColor: 'lightgray' }}>
                    <Tabs value={value2} onChange={handleChange} aria-label="basic tabs example">
                      <Tab label="Upcoming" className="opp fw-bold" {...a11yProps(0)} />
                      <Tab label="Past" className="opp fw-bold" {...a11yProps(1)} />
                      
                    </Tabs>
                  </Box>

                  
                  <TabPanel value={value2} index={0} className="p-0 upcm">
                    <div className="band">
                      <span className="dec d-flex justify-content-start">January 12</span>
                      <div className="uper">
                        <img src={frs_drp} alt="" className="bike_movi aga_in" />
                        <div className="row for_position text-white">
                          <div className="for_wrt col-lg-11 col-md-9">
                            <div className="in_between mt-4 text-start">
                              <h3 className="fw-bolder lfm">Patchworks<MdVerified className='ms-1' /></h3>
                              <h6 className="fw-bold lfm">By&nbsp;CameoPass<MdVerified className='ms-1' /></h6>
                              <h6 className="fw-bold lfm">More details coming soon</h6>
                            </div>
                            <div className="row main_time_box mt-4 ">
                              <div className="col-lg-4 col-md-2 time">
                         
                              </div>
                              <div className="col-lg-8 col-md-2 view gYb ">
                                <div className="bell_1 me-3"><AiOutlineBell className='fs-4 ' /></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className="band mt-3">
                      <span className="dec d-flex justify-content-start">January 13</span>
                      <div className="uper">
                        <video src="./images/banner.mp4" autoPlay loop playsinline muted className="bike_movi aga_in" ></video>
                        <div className="row for_position text-white">
                          <div className="for_wrt col-lg-11 col-md-9">
                            <div className="pic_first text-start"><img src={collpic} alt="" className="cool_img" /></div>
                            <div className="in_between mt-4 text-start">
                              <h3 className="fw-bolder lfm">inBetweeners x Dolce&Gabbana Drip<MdVerified className='ms-1' /></h3>
                              <h6 className="fw-bold lfm">By&nbsp;ItsMeGianPiero<MdVerified className='ms-1' /></h6>
                              <h6 className="fw-bold lfm">2,000 items. 0.88 ETH</h6>
                            </div>
                            <div className="row main_time_box">
                              <div className="col-lg-4 col-md-2 time">
                                <div className="day"><span className="w_fon">0</span> <span className="b_fon">DAYS</span></div>
                                <div className="day"><span className="w_fon">14</span> <span className="b_fon">HRS</span></div>
                                <div className="day"><span className="w_fon">25</span> <span className="b_fon">MINS</span></div>
                                <div className="day"><span className="w_fon">12</span> <span className="b_fon">SECS</span></div>
                              </div>
                              <div className="col-lg-8 col-md-2 view gYb ">
                                <div className="bell_1 me-3"><AiOutlineBell className='fs-4 ' /></div>
                                <div className="bell px-4 py-3"><span className="fw-bold">View drop</span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </TabPanel>

                  
                  <TabPanel value={value2} index={1}>
                  <div className="band">
                      <span className="dec d-flex justify-content-start">December 9</span>
                      <Link to="/Nextdg" className="text-decoration-none"><div className="uper">
                        <video src="./images/banner.mp4" autoPlay loop playsinline muted className="bike_movi aga_in"></video>
                        <div className="row for_position text-white">
                          <div className="for_wrt col-lg-11 col-md-9">
                            <div className="pic_first text-start"><img src={collpic} alt="" className="cool_img" /></div>
                            <div className="in_between mt-4 text-start">
                              <h3 className="fw-bolder lfm">inBetweeners x Dolce&Gabbana Drip<MdVerified className='ms-1' /></h3>
                              <h6 className="fw-bold lfm">By&nbsp;ItsMeGianPiero<MdVerified className='ms-1' /></h6>
                              <h6 className="fw-bold lfm">2,000 items. 0.88 ETH</h6>
                            </div>
                            <div className="row main_time_box mt-4 ">
                              <div className="col-lg-4 col-md-2 time">
                                <div className="day"><span className="w_fon">0</span> <span className="b_fon">DAYS</span></div>
                                <div className="day"><span className="w_fon">14</span> <span className="b_fon">HRS</span></div>
                                <div className="day"><span className="w_fon">25</span> <span className="b_fon">MINS</span></div>
                                <div className="day"><span className="w_fon">12</span> <span className="b_fon">SECS</span></div>
                              </div>
                              <div className="col-lg-8 col-md-2 view gYb ">
                                <div className="bell_1 me-3"><AiOutlineBell className='fs-4 ' /></div>
                                <div className="bell px-4 py-3"><span className="fw-bold">View drop</span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div></Link>
                    </div>
                  </TabPanel>
  
                </Box>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drops
