import React from "react";
import "./Nft_main_detail.css";
import { FaEthereum } from "react-icons/fa";
import { MdFavoriteBorder, MdVerified } from "react-icons/md";
import { HiShare } from "react-icons/hi";
import { BsFillTagFill } from "react-icons/bs";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FiExternalLink, FiMoreHorizontal } from "react-icons/fi";
import nft_iim from "../Accets/monkey.png";
import { IoEyeSharp } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { TfiTimer } from "react-icons/tfi";
import { MdOutlineSubject } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { MdOutlineSort } from "react-icons/md";
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import nft_main_pic_play from "../Accets/billio.webp"
import Profile_collection_card from "../Profile_collection_card/Profile_collection_card";

function Nft_main_detail() {
  return (
    <div className="container-fluid py-5">
      <div className="row my-5 ">
        <div className="col-lg-6 col-sm-11">

          <div className="nft_display  border text-center">

            <div className="icons_layer d-flex justify-content-between px-3 pt-1 my-2">
              <FaEthereum className="favort" />
              <div className="right_sid_icon d-flex align-items-center">
                <FiExternalLink className="favort" />
                <p className="m-0">0</p>
                <MdFavoriteBorder className="favort" />
              </div>
            </div>

            <div className="nft_immg">
              <img src={nft_iim} alt="" className="nft_display_styl  " />
            </div>
          </div>

          <div className="description_layer mt-3 border">
            <div className="titel border-bottom">
              <h5><MdOutlineSubject /> Description</h5>
            </div>

            <div className="token_by my-4 ">
              <h6 className="m-0 ms-3"> By <a href="" className="text-decoration-none text-dark">B77344</a></h6>
            </div>

            <Accordion defaultActiveKey="" className="">
              <Accordion.Item eventKey="0">
                <Accordion.Header ><MdOutlineSort className="tag_ico me-2" /><span className="listing_sty">About Billionairess Ape Club</span></Accordion.Header>
                <Accordion.Body className="">
                  <div className="row">
                    <div className="col-lg-2 text-end">
                      <img src={nft_main_pic_play} alt="" className="billi_mmgg" />
                    </div>
                    <div className="col-lg-8">
                      <p className="detail_bbx">A handcrafted collection developed by artist Audrey. Each with their own identity to be discovered within the wider stories of BAC. BAC will grant you access to future benefits exclusively for members only
                        Category <b>PFPs</b></p>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="" className="">
              <Accordion.Item eventKey="0">
                <Accordion.Header ><TbListDetails className="tag_ico me-2" /><span className="listing_sty">Details</span></Accordion.Header>
                <Accordion.Body className="">
                  <Table className="m-0">
                    <tbody className="">
                      <tr className="tbl_rrw">
                        <td className="tbl_ddta">Contract Address</td>
                        <td className="tbl_ddta"><a href="" className="text-decoration-none"> 0x495f...7b5e</a></td>
                      </tr>
                      <tr className="tbl_rrw">
                        <td className="tbl_ddta">Token ID</td>
                        <td className="tbl_ddta text-muted">  3836144089616254...</td>
                      </tr>
                      <tr className="tbl_rrw">
                        <td className="tbl_ddta">Token Standard</td>
                        <td className="tbl_ddta text-muted">  ERC-1155</td>
                      </tr>
                      <tr className="tbl_rrw">
                        <td className="tbl_ddta">Chain</td>
                        <td className="tbl_ddta text-muted"> Ethereum</td>
                      </tr>
                      <tr className="tbl_rrw">
                        <td className="tbl_ddta">Metadata</td>
                        <td className="tbl_ddta text-muted">Centralized</td>
                      </tr>
                      <tr className="tbl_rrw">
                        <td className="tbl_ddta">Creator Earnings</td>
                        <td className="tbl_ddta text-muted">10%</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

        </div>

        <div className="col-lg-6 col-sm-11">
          <div className="right_first_link d-flex justify-content-between ">
            <p className="azu_1st "><a href="" className="text-decoration-none">Azuka Ape Official
              <MdVerified className=' fs-4 ps-1 ' />
            </a></p>
            <div>
              <button className="fst_bbtn"><HiShare /> </button>
              <button className="fst_bbtn"><FiMoreHorizontal /></button>
            </div>
          </div>

          <h4 className="text-start main_titl">Azuka Ape #32331</h4>

          <p className="mt-2">Owned by <a href="" className="text-decoration-none">AzukaApeFounder</a></p>

          <div className="d-flex">
            <div className="ps-2 d-flex ">
              <IoEyeSharp className="mt-1 fs-5" />
              <p className="view_heart_ppt">273 views</p>
            </div>
            <div className="ps-5 d-flex ">
              <AiOutlineHeart className="mt-1 fs-5" />
              <p className="view_heart_ppt">2 favorites</p></div>
            <div className="ps-5 d-flex">
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><mask height="24" id="mask0_1845_35583" maskUnits="userSpaceOnUse" width="24" x="0" y="0"><rect fill="currentColor" height="24" width="24"></rect></mask><g><path d="M6.5 11L12 2L17.5 11H6.5ZM17.5 22C16.25 22 15.1873 21.5627 14.312 20.688C13.4373 19.8127 13 18.75 13 17.5C13 16.25 13.4373 15.1873 14.312 14.312C15.1873 13.4373 16.25 13 17.5 13C18.75 13 19.8127 13.4373 20.688 14.312C21.5627 15.1873 22 16.25 22 17.5C22 18.75 21.5627 19.8127 20.688 20.688C19.8127 21.5627 18.75 22 17.5 22ZM3 21.5V13.5H11V21.5H3ZM17.5 20C18.2 20 18.7917 19.7583 19.275 19.275C19.7583 18.7917 20 18.2 20 17.5C20 16.8 19.7583 16.2083 19.275 15.725C18.7917 15.2417 18.2 15 17.5 15C16.8 15 16.2083 15.2417 15.725 15.725C15.2417 16.2083 15 16.8 15 17.5C15 18.2 15.2417 18.7917 15.725 19.275C16.2083 19.7583 16.8 20 17.5 20ZM5 19.5H9V15.5H5V19.5ZM10.05 9H13.95L12 5.85L10.05 9Z" fill="currentColor"></path></g></svg>
              <p className="view_heart_ppt">PFPs</p></div>
          </div>
          <div className="list_menu_some">
            <ul class="list-group">
              <li class="list-group-item group_list_m_some py-3"><TfiTimer className="mb-1 fs-5" /> Sale ends February 18, 2023 at 9:15 AM GMT+5 </li>
              <li class="list-group-item"><p className="Current_price">Current price</p>
                <div className="d-flex "><h3>0.094 ETH</h3> <p className="Current_price ps-2 mt-2">$151.57</p></div>
                <div className="main_bttn_ad ">
                  <button className="btn btn-lg btn-primary w-100 py-3 cor_bt">Add to Cart</button>
                  <button className="btn btn-lg text-dark border Add_to  w-100 py-3 cor_bt">Make offer</button>
                </div>
              </li>

            </ul>
          </div>

          <div className="listing mt-3 ">
            <Accordion defaultActiveKey="">
              <Accordion.Item eventKey="0">
                <Accordion.Header ><BsFillTagFill className="tag_ico me-2" /><span className="listing_sty">Listings</span></Accordion.Header>
                <Accordion.Body className="p-0">
                  <div className="table-responsive">
                  <Table striped className="m-0 tbl_ro_stt table">
                    <thead>
                      <tr className="" >
                        <th>Price</th>
                        <th>USD Price</th>
                        <th>Expiration</th>
                        <th>From</th>
                      
                      </tr>
                    </thead>
                    <tbody className="tbl_ro_st">
                      <tr className="" >
                        <td>0.009 ETH</td>
                        <td>$14.166666</td>
                        <td>About 23 hours</td>
                        <td>B77344</td>
                        <td className=""> <button className="btn btn-md tabl_buy_bttnn"><BsFillLightningChargeFill className="me-2" />Buy</button></td>
                      </tr>
                    </tbody>
                  </Table>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 col-sm-11">
          <Accordion defaultActiveKey="0" className="" alwaysOpen >
            <Accordion.Item eventKey="0">
              <Accordion.Header ><MdOutlineSort className="tag_ico me-2" /><span className="listing_sty">More From This Collection</span></Accordion.Header>
              <Accordion.Body className="">
                <div className=" card_layr py-4">
                  <div className="col-lg-3"><Profile_collection_card/></div>
                  <div className="col-lg-3"><Profile_collection_card/></div>
                  <div className="col-lg-3"><Profile_collection_card/></div>
                  <div className="col-lg-3"><Profile_collection_card/></div>
                  <div className="col-lg-3"><Profile_collection_card/></div>
                  <div className="col-lg-3"><Profile_collection_card/></div>
                  <div className="col-lg-3"><Profile_collection_card/></div>
                  <div className="col-lg-3"><Profile_collection_card/></div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>

    </div>
  );
}

export default Nft_main_detail;
