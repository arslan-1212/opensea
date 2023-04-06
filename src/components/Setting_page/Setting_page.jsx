import React from "react";
import "./Setting_page.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  MdFeaturedPlayList,
  MdLocalOffer,
  MdNotifications,
} from "react-icons/md";
import { GiSlashedShield } from "react-icons/gi";
import {
  BsCurrencyDollar,
  BsInstagram,
  BsPencil,
  BsTwitter,
} from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { AiFillInfoCircle, AiOutlineCopy } from "react-icons/ai";
function Setting_page() {
  return (
    <div className="ps_fixed1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 text-start ps-md-5">
            <div className="bord_rght mt-5">
              <h6 className="main_setting_heading">Setting</h6>

              <div className="d-flex mt-3">
                <AccountCircleIcon></AccountCircleIcon>
                <h6 className="setting_side_heading">Profile</h6>
              </div>
              <div className="d-flex mt-4 py-2 iconsss">
                <MdFeaturedPlayList className="side_setting_icons"></MdFeaturedPlayList>
                <h6 className="setting_side_heading1">Featured items</h6>
              </div>
              <div className="d-flex mt-4 py-2 iconsss">
                <MdNotifications className="side_setting_icons"></MdNotifications>
                <h6 className="setting_side_heading1">Notifications</h6>
              </div>
              <div className="d-flex mt-4 py-2 iconsss">
                <MdLocalOffer className="side_setting_icons"></MdLocalOffer>
                <h6 className="setting_side_heading1">offers</h6>
              </div>
              <div className="d-flex mt-4 py-2 iconsss">
                <GiSlashedShield className="side_setting_icons"></GiSlashedShield>
                <h6 className="setting_side_heading1">Account support</h6>
              </div>
              <div className="d-flex mt-4 py-2 iconsss">
                <BsCurrencyDollar className="side_setting_icons"></BsCurrencyDollar>
                <h6 className="setting_side_heading1">Earnings</h6>
              </div>
            </div>
          </div>

          <div className="col-md-8 text-start">
            <div className="py-4 px-2">
              <h2 className="setting_pro_del">Profile details</h2>
              <div>
                <button className="preview_setting setting_hvr">Preview</button>
              </div>
              <div className="content_setting_right">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mt-3">
                      <label htmlFor="username" className="label_setting">
                        Username
                      </label>{" "}
                      <br />
                      <input
                        type="text"
                        id="username"
                        className="seeting_right_input setting_hvr"
                      />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="bio" className="label_setting">
                        Bio
                      </label>{" "}
                      <br />
                      {/* <input type="text" id='username' className='seeting_right_input' /> */}
                      <textarea
                        name=""
                        id="bio"
                        cols="30"
                        className="setting_rght_txta setting_hvr"
                        placeholder="Tell the world your story!"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="mt-3">
                      <label htmlFor="email" className="label_setting">
                        Email Address
                      </label>{" "}
                      <br />
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        className="seeting_right_input setting_hvr"
                      />
                    </div>

                    <div className="mt-3">
                      <label htmlFor="#" className="label_setting">
                        Social Connections
                      </label>{" "}
                      <br />
                      <span className="ss_sub">
                        Help collectors verify your account by connecting social
                        accounts
                      </span>
                      <div className="d-flex justify-content-between mt-3">
                        <div className="d-flex align-items-center">
                          <BsTwitter className="fs-3 fw-bold me-2"></BsTwitter>{" "}
                          <span className="fw-bold">Twitter</span>
                        </div>

                        <div className="setting_twi_connect">
                          <button className="twittwer_connect">Connect</button>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div className="d-flex align-items-center">
                          <BsInstagram className="fs-3 fw-bold me-2"></BsInstagram>{" "}
                          <span className="fw-bold">Instagram</span>
                        </div>

                        <div className="setting_twi_connect">
                          <button className="twittwer_connect">Connect</button>
                        </div>
                      </div>
                      <div className="mt-3 worrrld">
                        <label htmlFor="link" className="label_setting">
                          Links
                        </label>{" "}
                        <br />
                        <BiWorld className="world_icon"></BiWorld>
                        <input
                          type="text"
                          id="link"
                          placeholder="yoursite.io"
                          className="seeting_right_input wpl setting_hvr"
                        />
                      </div>
                      <div className="mt-3 worrrld">
                        <label htmlFor="link" className="label_setting">
                          Wallet Address
                        </label>{" "}
                        <br />
                        <input
                          type="text"
                          id="link"
                          placeholder="0xac4babfa9376bab1cf2b291eceea3c29"
                          className="seeting_right_input setting_hvr "
                        />
                        <AiOutlineCopy className="world_icon1"></AiOutlineCopy>
                      </div>
                      <div className="mt-3">
                        {" "}
                        <button className="twittwer_connect">Save</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex align-items-center">
                      <h3 className="fs-5 fw-bold me-3">Profile Image</h3>
                      {/* <AiFillInfoCircle></AiFillInfoCircle> */}
                      <div className="kakakaka me-2">
                  <span className="sdsdsds    ">
                  Recommanded 350px x 350px <br />
                  Max size :100MB

                  
                  </span>{" "}
                  <AiFillInfoCircle className="me-2"> </AiFillInfoCircle>{" "}
                </div>
                    </div>
                    <div className="circle_setting"></div>

                    <div className="d-flex align-items-center mt-3">
                      <h3 className="fs-5 fw-bold me-3">Profile Banner</h3>
                      <div className="kakakaka me-2">
                  <span className="sdsdsds    ">
                  Recommanded 1400px x 350px <br />
                  Max size :100MB

                  
                  </span>{" "}
                  <AiFillInfoCircle className="me-2"> </AiFillInfoCircle>{" "}
                </div>
                    </div>
                    <div className="reactangle_here">
                      <div className="icon_ss">
                        <BsPencil className="pencil_icon"></BsPencil>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting_page;
