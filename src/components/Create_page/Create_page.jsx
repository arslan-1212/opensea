import React, { useState } from "react";
import {
  AiFillHome,
  AiFillInfoCircle,
  AiFillStar,
  AiFillUnlock,
  AiFillWarning,
  AiOutlinePlus,
} from "react-icons/ai";
import { BsImageFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Create_page.css";
import Switch from "@mui/material/Switch";
import ethereum from "../Assets/ethereum.svg";
import Create_add_modal from "../Create_add_modal/Create_add_modal";
import Create_level_modal from "../Create_level_modal/Create_level_modal";

function Create_page() {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const [checked1, setChecked1] = React.useState(true);
  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
  };
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [show, setShow] = useState(false);
  return (
    <div className="ps_fixed2 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-2 text-start">
            <h1 className="create_page_main_heading">Create New Item</h1>

            <p>
              <span className="req_create_fi">* Required fields</span>
            </p>

            <label htmlFor="ht" className="labal_for_create_nft">
              Image, Video, Audio, or 3D Model *{" "}
            </label>
            <p>
              <span className="req_create_fi">
                File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
                OGG, GLB, GLTF. Max size: 100 MB
              </span>
            </p>

            <div className="img_upload_create_div">
              <BsImageFill className="fs-1"></BsImageFill>
            </div>
            <div className="main_name_input mt-3">
              <label htmlFor="name" className="labal_for_create_nft">
                * Name
              </label>
            </div>
            <div>
              <input
                type="text"
                placeholder="item name"
                className="create_page_input_here"
                name=""
                id="name"
              />
            </div>

            <div className="main_name_input mt-3 mb-3">
              <label htmlFor="link" className="labal_for_create_nft">
                External link
              </label>
              <br />{" "}
              <span className="req_create_fi mb-3">
                OpenSea will include a link to this URL on this item's detail
                page, so that users can click to learn more about it. You are
                welcome to link to your own webpage with more details.
              </span>
            </div>
            <div>
              <input
                type="text"
                placeholder="https://yoursite.io/item/123"
                className="create_page_input_here"
                name=""
                id="link"
              />
            </div>

            <div className="main_name_input mt-3 mb-3">
              <label htmlFor="textarea" className="labal_for_create_nft">
                Description
              </label>
              <br />{" "}
              <span className="req_create_fi mb-3">
                The description will be included on the item's detail page
                underneath its image. Markdown syntax is supported.
              </span>
            </div>
            <div>
              <textarea
                name=""
                id="textarea"
                cols="30"
                rows="8"
                placeholder="Provide a detailed description of your item."
                className="create_page_textareaa_here"
              ></textarea>
            </div>

            <div className="main_name_input mt-3 mb-3">
              <label htmlFor="collection" className="labal_for_create_nft">
                Collection
              </label>
              <br />{" "}
              <span className="req_create_fi mb-3">
                This is the collection where your item will{" "}
                <appear className="span">
                <div className="kakakaka me-2">
                  <span className="sdsdsds    ">
                  Moving items to a different collection may take up to 30 minutes. You can 

                    <span style={{ color: "rgb(66, 160, 255)" }}>
                    manage your collections here.
                    </span>{" "}
                  </span>{" "}
                  <AiFillInfoCircle className="me-2"> </AiFillInfoCircle>{" "}
                </div>
                </appear>
              </span>
            </div>
            <div>
              <select
                name=""
                className="create_page_input_here"
                id="collection"
              >
                <option value="" selected>
                  Select Collection
                </option>
                <option value="">no results</option>
              </select>
            </div>

            <div className="properties_create_page">
              <div className="d-flex justify-content-between">
                <div className="pro_left_content d-flex">
                  <span>
                    <GiHamburgerMenu className="fs-5"></GiHamburgerMenu>
                  </span>
                  <div className="pro">
                    <div className="pro_left_content_main_co ms-3">
                      <span className="main_pro_heING">Properties</span> <br />
                      <span className="main_pro_heING_sub">
                        Textual traits that show up as rectangles
                      </span>
                    </div>
                  </div>
                </div>

                <div className="right_content_pro">
                  <button
                    className="rght_content_btn"
                    onClick={() => setModalShow(true)}
                  >
                    {" "}
                    <AiOutlinePlus className="fs-3"></AiOutlinePlus>
                  </button>
                </div>
              </div>
            </div>

            <div className="properties_create_page pag_T">
              <div className="d-flex justify-content-between">
                <div className="pro_left_content d-flex">
                  <span>
                    <AiFillStar className="fs-5"></AiFillStar>
                  </span>
                  <div className="pro">
                    <div className="pro_left_content_main_co ms-3">
                      <span className="main_pro_heING"> Levels</span> <br />
                      <span className="main_pro_heING_sub">
                        Numerical traits that show as a progress bar
                      </span>
                    </div>
                  </div>
                </div>

                <div className="right_content_pro">
                  <button
                    className="rght_content_btn"
                    onClick={() => setModalShow1(true)}
                  >
                    {" "}
                    <AiOutlinePlus className="fs-3"></AiOutlinePlus>
                  </button>
                  <Create_add_modal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                  <Create_level_modal
                    create_head="Add levels"
                    create_sub=" Levels show up underneath your item, are clickable, and can be filtered in your collection"
                    show={modalShow1}
                    onHide={() => setModalShow1(false)}
                  />
                </div>
              </div>
            </div>

            <div className="properties_create_page pag_T">
              <div className="d-flex justify-content-between">
                <div className="pro_left_content d-flex">
                  <span>
                    <AiFillHome className="fs-5"></AiFillHome>
                  </span>
                  <div className="pro">
                    <div className="pro_left_content_main_co ms-3">
                      <span className="main_pro_heING"> Stats</span> <br />
                      <span className="main_pro_heING_sub">
                        Numerical traits that just show as numbers
                      </span>
                    </div>
                    <Create_level_modal
                      create_head="Add Stats"
                      create_sub="Stats show up underneath your item, are clickable, and can be filtered in your collection"
                      show={modalShow2}
                      onHide={() => setModalShow2(false)}
                    />
                  </div>
                </div>

                <div className="right_content_pro">
                  <button
                    className="rght_content_btn"
                    onClick={() => setModalShow2(true)}
                  >
                    {" "}
                    <AiOutlinePlus className="fs-3"></AiOutlinePlus>
                  </button>
                </div>
              </div>
            </div>

            <div className="properties_create_page pag_T">
              <div className="d-flex justify-content-between">
                <div className="pro_left_content d-flex">
                  <span>
                    <AiFillUnlock className="fs-5"></AiFillUnlock>
                  </span>
                  <div className="pro">
                    <div className="pro_left_content_main_co ms-3">
                      <span className="main_pro_heING">
                        {" "}
                        Unlockable Content
                      </span>{" "}
                      <br />
                      <span className="main_pro_heING_sub">
                        Include unlockable content that can only be revealed by
                        the owner of the item.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="right_content_pro">
                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    onClick={() => setShow(!show)}
                    inputProps={{ "aria-label": "controlled" }}
                  />

                </div>
              </div>
            </div>
            <div className={`${show ? "d-block panel swtich_on" : "d-none"}`}>
              <textarea
                className="txt_show"
                placeholder="Enter content (access key, code to redeem, link to a file, etc.)"
                id=""
                cols="30"
                rows="6"
              ></textarea>

              <p>
                <span style={{ color: "rgb(32, 129, 226)" }}> Markdown </span>{" "}
                syntax is supported
              </p>
            </div>

            <div className="properties_create_page pag_T">
              <div className="d-flex justify-content-between">
                <div className="pro_left_content d-flex">
                  <span>
                    <AiFillWarning className="fs-5"></AiFillWarning>
                  </span>
                  <div className="pro">
                    <div className="pro_left_content_main_co ms-3">
                      <span className="main_pro_heING ">
                        Explicit & Sensitive Content
                      </span>{" "}
                      <br />
                      <span className="main_pro_heING_sub me-2">
                        Set this item as explicit and sensitive content
                      </span>
                      <div className="kakakaka me-2">
                  <span className="sdsdsds   explict ">
                  Setting your asset as explicit and sensitive content, like pornography and other not safe for work (NSFW) content, will protect users with safe search while browsing OpenSea.

                    <span style={{ color: "rgb(66, 160, 255)" }}>
                    Learn more about explicit content at OpenSea here.
                    </span>{" "}
                  </span>{" "}
                  <AiFillInfoCircle className="me-2"> </AiFillInfoCircle>{" "}
                </div>
                    </div>
                  </div>
                </div>

                <div className="right_content_pro">
                  <Switch
                    checked={checked1}
                    onChange={handleChange1}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
              </div>
            </div>

            <div className="main_name_input mt-3 mb-3">
              <label htmlFor="link" className="labal_for_create_nft">
                Supply
              </label>
              <br />{" "}
              <span className="req_create_fi mb-3">
                The number of items that can be minted. No gas cost to you!{" "}
                <span>
                  <AiFillInfoCircle className="ms-2  tss"></AiFillInfoCircle>
                </span>{" "}
              </span>
            </div>
            <div>
              <input
                type="number"
                placeholder="1"
                className="create_page_input_here"
                name=""
                id="link"
              />
            </div>

            <div className="main_name_input mt-3 mb-3">
              <label htmlFor="link" className="labal_for_create_nft">
                Blockchain
              </label>
              <br />
            </div>
            <div className="nanaa">
              <img src={ethereum} className="ethereu" alt="" />
              <select className="create_page_input_here px2" name="" id="">
                <option value="Ethereum" selected>
                  Ethereum
                </option>
              </select>{" "}
            </div>

            <div className="main_name_input mt-3 mb-3">
              <label htmlFor="link" className="labal_for_create_nft">
                Freeze metadata
                <div className="kakakaka">
                  <span className="sdsdsds">
                    Once locked, your content cannot be edited or removed as it
                    is permanently stored in decentralized file storage, which
                    will be accessible for other clients to view and use.{" "}
                    <span style={{ color: "rgb(66, 160, 255)" }}>
                      Learn more about freezing metadata here.
                    </span>{" "}
                  </span>{" "}
                  <AiFillInfoCircle className=""> </AiFillInfoCircle>{" "}
                </div>
              </label>
              <br />
              <span className="req_create_fi mb-3">
                Freezing your metadata will allow you to permanently lock and
                store all of this item's content in decentralized file storage.{" "}
              </span>
            </div>
            <div className="metadata">
              <span className="labal_for_create_nft">
                To freeze your metadata, you must create your item first.
              </span>
            </div>

            <div className="creatE_btu mt-5">
              <button className="button_create_main">Create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create_page;
