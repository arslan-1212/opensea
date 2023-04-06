import { Offcanvas } from "react-bootstrap";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import {
  MdOutlineAccountBalanceWallet,
  MdOutlineExplore,
} from "react-icons/md";
import { GiArchaeopteryxFossil, GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineTwitter, AiTwotoneSetting } from "react-icons/ai";
import { BsFillPencilFill, BsInstagram } from "react-icons/bs";
import { IoIosStats, IoLogoYoutube } from "react-icons/io";
import { SiDiscord } from "react-icons/si";
import Accordion from "react-bootstrap/Accordion";
import pic1 from "../Assets/allnfts-light.svg";
import pic2 from "../Assets/art-light.svg";
import pic3 from "../Assets/collectibles-light.svg";
import pic4 from "../Assets/domain-names-light.svg";
// import Button from 'react-bootstrap/Button';
import pic5 from "../Assets/music-light.svg";
import pic6 from "../Assets/photography-category-light.svg";
import pic7 from "../Assets/sports-light.svg";
import pic8 from "../Assets/trading-cards-light.svg";
import pic9 from "../Assets/utility-light.svg";
import { Link } from "react-router-dom";
import pic10 from "../Assets/virtual-worlds-light.svg";
import { BiCalendar, BiWorld } from "react-icons/bi";
import { RiFileCopy2Line } from "react-icons/ri";
import Res_wallet_of_canvas from "../Res_wallet_of_canvas/Res_wallet_of_canvas";

function Responsive_navbar_offCanvas({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show);
  return (
    <div>
      <Button onClick={handleShow} className="me-2 offcanvas_header_btn p-0">
        <GiHamburgerMenu className="res_pos_icons" />
      </Button>
      <Offcanvas
        className="responsive_navbar_offcanvas_postiontion"
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header>
      
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Accordion defaultActiveKey="" flush className="responsive_acc">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="d-flex align-items-center">
                  <MdOutlineExplore className="moblie_view_icons"></MdOutlineExplore>

                  <Link to="/Explore_main" className="text-decoration-none">
                    {" "}
                    <h6 onClick={handleClose} className="moblie_menu_heading">
                      Explore
                    </h6>
                  </Link>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="">
                  <Link
                    to="/ALL_explore"
                    onClick={handleClose}
                    className="text-decoration-none"
                  >
                    {" "}
                    <span>
                      <img src={pic1} alt="" className="ffr_ppic me-3" />
                    </span>
                    <span className="responsive_moblie_links"> All NFTs</span>
                  </Link>
                  <br />
                  <Link
                    to="/Art_hover"
                    onClick={handleClose}
                    className="text-decoration-none "
                  >
                    {" "}
                    <span>
                      <img src={pic2} alt="" className="ffr_ppic me-3 mt-3" />
                    </span>
                    <span className="responsive_moblie_links mt-3"> Art</span>{" "}
                  </Link>{" "}
                  <br />
                  <Link
                    to="/Colloctibles_hover"
                    className="text-decoration-none "
                    onClick={handleClose}
                  >
                    {" "}
                    <span>
                      <img src={pic3} alt="" className="ffr_ppic me-3 mt-3" />
                    </span>
                    <span className="responsive_moblie_links mt-3">
                      {" "}
                      Collectibles
                    </span>{" "}
                    <br />
                  </Link>
                  <Link
                    to="/Domine_hover"
                    onClick={handleClose}
                    className="text-decoration-none"
                  >
                    {" "}
                    <span>
                      <img src={pic4} alt="" className="ffr_ppic me-3 mt-3" />
                    </span>
                    <span className="responsive_moblie_links mt-3">
                      {" "}
                      Domain Names
                    </span>{" "}
                    <br />
                  </Link>
                  <Link
                    to="/Music_hover"
                    onClick={handleClose}
                    className="text-decoration-none"
                  >
                    {" "}
                    <span>
                      <img src={pic5} alt="" className="ffr_ppic me-3 mt-3" />
                    </span>
                    <span className="responsive_moblie_links mt-3"> Music</span>{" "}
                    <br />
                  </Link>
                  <Link
                    to="/Photography_hover"
                    className="text-decoration-none"
                    onClick={handleClose}
                  >
                    {" "}
                    <span>
                      <img src={pic6} alt="" className="ffr_ppic me-3 mt-3" />
                    </span>
                    <span className="responsive_moblie_links mt-3">
                      {" "}
                      Photography
                    </span>{" "}
                    <br />
                  </Link>
                  <Link
                    to="/Sport_hover"
                    onClick={handleClose}
                    className="text-decoration-none"
                  >
                    {" "}
                    <span>
                      <img src={pic7} alt="" className="ffr_ppic me-3 mt-3" />
                    </span>
                    <span className="responsive_moblie_links mt-3">
                      {" "}
                      Sports
                    </span>{" "}
                    <br />
                  </Link>
                  <Link
                    to="/Utilityhover"
                    onClick={handleClose}
                    className="text-decoration-none"
                  >
                    {" "}
                    <span>
                      <img src={pic9} alt="" className="ffr_ppic me-3 mt-3" />
                    </span>
                    <span className="responsive_moblie_links mt-3">
                      {" "}
                      Utility
                    </span>{" "}
                    <br />
                  </Link>
                  <span onClick={handleClose}>
                    <img src={pic10} alt="" className="ffr_ppic me-3 mt-3" />
                  </span>
                  <span className="responsive_moblie_links ">
                    {" "}
                    Virtual World
                  </span>{" "}
                  <br />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <div className="d-flex align-items-center">
                  <BiCalendar className="moblie_view_icons"></BiCalendar>
                  <Link to="/Drop" className="text-decoration-none">
                    {" "}
                    <h6 className="moblie_menu_heading" onClick={handleClose}>
                      Drops
                    </h6>{" "}
                  </Link>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div>
                  <span
                    onClick={handleClose}
                    className="responsive_moblie_links"
                  >
                    Calendar
                  </span>
                  <br />
                </div>
                <div className="mt-4">
                  <span
                    onClick={handleClose}
                    className="responsive_moblie_links margin_mobbb"
                  >
                    Learn more
                  </span>
                  <br />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <div className="d-flex align-items-center">
                  <IoIosStats className="moblie_view_icons"></IoIosStats>
                  <h6 className="moblie_menu_heading" onClick={handleClose}>
                    Stats
                  </h6>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div>
                  <span
                    onClick={handleClose}
                    className="responsive_moblie_links"
                  >
                    Rankings
                  </span>
                  <br />
                </div>
                <div className="mt-4">
                  <Link to="/activity" className="tdn text-decoration-none"><span
                    onClick={handleClose}
                    className="responsive_moblie_links margin_mobbb"
                  >
                    Activity
                  </span></Link>
                  <br />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <div className="d-flex align-items-center">
                  <RiFileCopy2Line className="moblie_view_icons"></RiFileCopy2Line>
                  <Link
                    to="/resources_main_page"
                    className="text-decoration-none"
                  >
                    {" "}
                    <h6 onClick={handleClose} className="moblie_menu_heading">
                      Resources
                    </h6>
                  </Link>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div>
                  <span
                    onClick={handleClose}
                    className="responsive_moblie_links"
                  >
                    Learn
                  </span>
                  <br />
                </div>
                <div className="mt-3"  onClick={handleClose}>
              <Link to='/r_help_center' className="tdn text-decoration-none" >
                  <span
                   
                    className="responsive_moblie_links margin_mobbb"
                  >
                    Help Center
                  </span>
                  </Link>
                  <br />
                </div>
                <div className="mt-3">
                  <span
                    onClick={handleClose}
                    className="responsive_moblie_links margin_mobbb"
                  >
                    Platform Status
                  </span>
                  <br />
                </div>
                <div className="mt-3">
                  <Link to="/R_full_partner" className="text-decoration-none">
                    {" "}
                    <span
                      onClick={handleClose}
                      className="responsive_moblie_links margin_mobbb"
                    >
                      Partners
                    </span>
                    <br />
                  </Link>
                </div>
                <div className="mt-3">
                  <Link
                    to="/R_full_tax_page"
                    className="text-decoration-none"
                    onClick={handleClose}
                  >
                    {" "}
                    <span className="responsive_moblie_links margin_mobbb">
                      Taxes
                    </span>
                    <br />
                  </Link>
                </div>
                <div className="mt-3" onClick={handleClose}>
                <Link to='/R_blog_cards_full_page' className="tdn text-decoration-none">
                  <span className="responsive_moblie_links margin_mobbb">
                    Blog
                  </span></Link>
                  <br />
                </div>
                <div className="mt-3" onClick={handleClose}>
                  <span className="responsive_moblie_links margin_mobbb">
                    Docs
                  </span>
                  <br />
                </div>
                <div className="mt-3" onClick={handleClose}>
                <Link to='/newsletter' className="text-decoration-none">
                  <span className="responsive_moblie_links margin_mobbb">
                    Newsletter
                  </span></Link>
                  <br />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <div className="d-flex align-items-center ms-3 my-3">
              <BsFillPencilFill className="moblie_view_icons"></BsFillPencilFill>

              <Link
                to="/main_create_page"
                className="text-decoration-none"
                onClick={handleClose}
              >
                {" "}
                <h6 className="moblie_menu_heading">Create</h6>
              </Link>
            </div>
            <div className="d-flex align-items-center ms-3 my-3">
              <AiTwotoneSetting className="moblie_view_icons"></AiTwotoneSetting>

              <Link
                to="/seeting_pro_main"
                className="text-decoration-none"
                onClick={handleClose}
              >
                {" "}
                <h6 className="moblie_menu_heading">Setting</h6>
              </Link>
            </div>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <BiWorld className="moblie_view_icons"></BiWorld>
                    <h6 className="moblie_menu_heading">Language</h6>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="">
                  <span
                    onClick={handleClose}
                    className="responsive_moblie_links margin_mobbb"
                  >
                    English
                  </span>
                  <br />
                </div>
                <div className="mt-3">
                  <span
                    onClick={handleClose}
                    className="responsive_moblie_links margin_mobbb"
                  >
                    Español
                  </span>
                  <br />
                </div>
                <div className="mt-3">
                  <span
                    onClick={handleClose}
                    className="responsive_moblie_links margin_mobbb"
                  >
                    Deutsch
                  </span>
                  <br />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <button  className="mbl_buttton_res w-100">
          <div>
                    <>                  {[ 'end' ].map((placement, idx) => (
        <Res_wallet_of_canvas key={idx} placement={placement} name={placement} />
      ))}</>
   
                    {/* <button className="icon-dropbtn "><MdOutlineAccountBalanceWallet  className='fs-2'/></button> */}
                    </div>
          </button>

          <div className="offcanvas_footer_mboile_vielw">
            <div className="d-flex justify-content-center mbole_main_dev_icons">
              <AiOutlineTwitter className="moblie_footer_icons"></AiOutlineTwitter>
              <BsInstagram className="moblie_footer_icons"></BsInstagram>
              <SiDiscord className="moblie_footer_icons"></SiDiscord>
              <IoLogoYoutube className="moblie_footer_icons"></IoLogoYoutube>
              <SiDiscord className="moblie_footer_icons"></SiDiscord>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Responsive_navbar_offCanvas;
