import React, { useState } from "react";
import "./Responsive_Navbar.css";
import responsive_logo from "../Assets/responsive_logo.svg";
import { BsSearch } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Responsive_navbar_offCanvas from "../Responsive_navbar_offcanvas/Responsive_navbar_offCanvas";
import { Link } from "react-router-dom";
import Wallet_offcanvas from "../Wallet_offcanvas/Wallet_offcanvas";
import Respo_wallet_offcanvas from "../Respo_wallet_offcanvas/Respo_wallet_offcanvas";

function Resposive_Navbar() {
  const [show5, setShow5] = useState(false);
  const handleClose = () => setShow5(false);
const handleShow = () => setShow5(true);
  return (
    <div className="container-fluid py-2 moblie_nav_here">
      <div className="main_responsive_navbar d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Link className="nawa" to="/">
            {" "}
            <img src={responsive_logo} className="responsive_logo" alt="" />
          </Link>
          <div>
            <h6 className="logo_name_responsive">opensea</h6>
          </div>
        </div>
        <div className="responsive_avbar_icons">
          <div className="d-flex">
            <BsSearch className="res_pos_icons me-2"></BsSearch>
           
            <>                  {[ 'end' ].map((placement, idx) => (
        <Respo_wallet_offcanvas key={idx} placement={placement} name={placement} />
      ))}</>
          
      

            {["end"].map((placement, idx) => (
              <Responsive_navbar_offCanvas
                key={idx}
                placement={placement}
                name={placement}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resposive_Navbar;
