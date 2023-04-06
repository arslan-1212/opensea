import React from "react";
import "./Profile_collection.css";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { ImShare2 } from "react-icons/im";
import { HiDotsHorizontal } from "react-icons/hi";
import Profile_collection_tab from "../Profile_collection_tab/Profile_collection_tab";

function Profile_collection() {
  return (
    <div>
      <div width="100%" className="sc-29427738-0 sc-630fc9ab-0 ctwQVs jSPhMX">
        <div className="sc-a2bbba39-1 pak">
          <img
            sizes="100vw"
            src="https://i.seadn.io/gae/z80nwXsabcTO6LsfjMFu7LNfKEnLwU1nEMeQMwWv3TfWcV1iqIQSHrpuXWwWEsyFZKjT-nexGOUvdY5yfWMUJYInSJQPK5oO7cDf3Q?auto=format&w=3840"
            alt=""
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="sc-29427738-0 sc-e1213540-0 dVNeWL katee ktCeqg">
          <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
            <div className="sc-29427738-0 fTiUJh">
              <div
                display="inline-flex"
                className="sc-29427738-0 sc-6d5b054-2 keQErz gzCMxz"
              >
                <button
                  type="button"
                  className="sc-b267fe84-0 sc-6d5b054-1 cRVARX iwPltr"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: "1",
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                      position: "absolute",
                      inset: "0px",
                    }}
                  >
                    <img
                      alt="BurnassoPhotography"
                      sizes="168px"
                      srcset="https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=48 48w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=64 64w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=128 128w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=256 256w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=384 384w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=512 512w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=640 640w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=750 750w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=828 828w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=1080 1080w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=1200 1200w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=1920 1920w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=2048 2048w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=3840 3840w"
                      src="https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=3840"
                      decoding="async"
                      data-nimg="fill"
                      className="sc-6d5b054-0 jhsaBJ"
                      style={{
                        position: "absolute",
                        inset: "0px",
                        boxSizing: "border-box",
                        padding: "0px",
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: "0px",
                        height: "0px",
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </span>
                </button>
              </div>
            </div>
            <div className="sc-29427738-0 caTXlx">
              <div className="fresnel-container fresnel-lessThan-sm "></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="sc-29427738-0 sc-630fc9ab-0 sc-cda59426-0 dVNeWL jSPhMX clKHJV">
          <div className="sc-29427738-0 sc-e1213540-0 dVNeWL ktCeqg">
            <div
              width="100%"
              className="sc-29427738-0 sc-630fc9ab-0 cBQkIJ jSPhMX"
            >
              <div className="sc-29427738-0 iObdpu">
                <div
                  data-testid="phoenix-header"
                  className="sc-29427738-0 sc-630fc9ab-0 sc-5bb7da0c-1 dJYDEb jSPhMX irjhco"
                >
                  <div className="fresnel-container fresnel-lessThan-sm "></div>
                  <div className="fresnel-container fresnel-greaterThanOrEqual-sm ">
                    <h1
                      width="100%"
                      className="sc-29427738-0 sc-bdnxRM dKfiYh iIKkrq"
                    >
                      BurnassoPhotography
                    </h1>
                  </div>
                </div>
              </div>
              <div className="sc-29427738-0 caTXlx">
                <div className="fresnel-container fresnel-greaterThanOrEqual-sm ">
                  <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                    <div className="fresnel-container fresnel-greaterThan-md ">
                      <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                        <div className="sc-29427738-0 sc-630fc9ab-0 sc-35f75ba4-0 dVNeWL jSPhMX eFBUmw">
                          <a
                            className="sc-1f719d57-0 fKAlPV"
                            href="https://www.twitter.com/Burnasso"
                            rel="nofollow noopener"
                            target="_blank"
                          >
                            <button
                              className="sc-29427738-0 sc-788bb508-0 nFISH bpmNDx sc-9a637e94-1 kSESLX"
                              type="button"
                            >
                              <span className="sc-29427738-0 sc-d58c749b-2 sc-9a637e94-0 ILliQ cWTWPE enUGCb">
                                <div className="sc-29427738-0 sc-630fc9ab-0 sc-4e4338f-0 dVNeWL jSPhMX gWzlCz">
                                  <Tooltip
                                    title="Twitter"
                                    arrow
                                    placement="top"
                                  >
                                    <Button>
                                      <svg
                                        className=""
                                        fill="#04111D"
                                        viewBox="0 0 18 16"
                                        style={{
                                          height: "20px",
                                          width: "20px",
                                        }}
                                      >
                                        <path d="M.09 13.791c1.992.14 3.728-.344 5.327-1.571-.816-.098-1.527-.311-2.127-.786-.584-.466-1.032-1.047-1.272-1.841h1.48c.008-.033.016-.066.024-.107-.816-.237-1.512-.663-2.032-1.342-.52-.67-.775-1.448-.8-2.3.52.148 1.016.295 1.52.434.016-.033.04-.065.056-.098-.72-.606-1.24-1.334-1.431-2.275a3.92 3.92 0 01.391-2.7c2 2.389 4.511 3.715 7.598 3.936-.096-.778-.104-1.498.16-2.202.912-2.463 3.983-3.249 5.894-1.481.216.196.4.229.632.147.632-.229 1.255-.474 1.903-.72-.248.81-.784 1.408-1.415 1.989.615-.164 1.231-.336 1.839-.5.024.025.048.041.072.066-.464.491-.912 1.007-1.415 1.449-.272.237-.36.458-.376.818-.144 4.01-1.752 7.25-5.175 9.289-3.487 2.07-7.077 1.947-10.612-.025-.064-.04-.12-.09-.24-.18z"></path>
                                      </svg>
                                    </Button>
                                  </Tooltip>
                                </div>
                              </span>
                            </button>
                          </a>
                        </div>
                        <div className="sc-29427738-0 sc-35f75ba4-1 dVNeWL hLooXR "></div>
                      </div>
                    </div>
                    <div className="sc-29427738-0 sc-630fc9ab-0 bOAEkR jSPhMX">
                      <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                        <div className="fresnel-container fresnel-greaterThan-md ">
                          <div className="sc-29427738-0 cfwEDN">
                            <Tooltip
                              title="Add to watch list"
                              arrow
                              placement="top"
                            >
                              <Button>
                                <svg
                                  color="#04111D"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{ height: "20px", width: "20px" }}
                                >
                                  <path
                                    d="M12.6,3.9l2.2,4.4c0.1,0.2,0.3,0.4,0.6,0.4l4.9,0.7c0.6,0.1,0.8,0.8,0.4,1.2l-3.6,3.4c-0.2,0.2-0.3,0.4-0.2,0.6 l0.8,4.9c0.1,0.6-0.5,1.1-1.1,0.8l-4.4-2.3c-0.2-0.1-0.5-0.1-0.7,0l-4.4,2.3c-0.5,0.3-1.2-0.2-1.1-0.8L7,14.8c0-0.2,0-0.5-0.2-0.6 l-3.6-3.4C2.8,10.3,3,9.5,3.6,9.4l4.9-0.7c0.2,0,0.4-0.2,0.6-0.4l2.2-4.4C11.6,3.4,12.4,3.4,12.6,3.9z"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-miterlimit="10"
                                    stroke-width="2.5"
                                  ></path>
                                </svg>
                              </Button>
                            </Tooltip>
                          </div>
                        </div>
                        <div
                          className="sc-29427738-0 cfwEDN"
                          aria-expanded="false"
                        >
                          <button
                            aria-label="Share"
                            className="sc-29427738-0 sc-788bb508-0 nFISH bpmNDx sc-9a637e94-1 kSESLX"
                            type="button"
                          >
                            <span className="sc-29427738-0 sc-d58c749b-2  sc-9a637e94-0 ILliQ cWTWPE enUGCb">
                              <i
                                value="share"
                                size="20"
                                className="sc-a143597d-0 sc-e3c2f05e-2 QGIXS  yHwMy material-icons"
                                color="black"
                              >
                                <Tooltip title="Share" arrow placement="top">
                                  <Button className="toll">
                                    <ImShare2 />
                                  </Button>
                                </Tooltip>
                              </i>
                            </span>
                          </button>
                        </div>
                      </div>
                      <div
                        className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX"
                        aria-expanded="false"
                      >
                        <button
                          aria-label="More dropdown"
                          className="sc-29427738-0 sc-788bb508-0 nFISH bpmNDx sc-9a637e94-1 kSESLX"
                          type="button"
                        >
                          <span className="sc-29427738-0 sc-d58c749b-2 sc-9a637e94-0 ILliQ cWTWPE enUGCb">
                            <i
                              value="more_horiz"
                              size="24"
                              className="sc-a143597d-0 sc-e3c2f05e-1 RovoC irqkfp material-icons"
                              color="black"
                            >
                              <Tooltip title="Add" arrow placement="top">
                                <Button className="toll">
                                  <HiDotsHorizontal />
                                </Button>
                              </Tooltip>
                            </i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sc-29427738-0 dVNeWL">
          <div className="sc-29427738-0 sc-e1213540-0 kFtGow bPDgXz">
            <div className="sc-29427738-0 sc-630fc9ab-0 dULEQL jSPhMX">
              <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                <div className="sc-29427738-0 sc-630fc9ab-0 cyfgpf jSPhMX">
                  <div className="fresnel-container fresnel-lessThan-md "></div>
                  <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                    <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                      <span className="sc-29427738-0 sc-d58c749b-2 dxcUSQ cvEkFP">
                        By&nbsp;
                      </span>
                      <a
                        href="/Burnasso_Collection?tab=created"
                        className="sc-1f719d57-0 fKAlPV"
                      >
                        <span className="sc-29427738-0 sc-d58c749b-2 sc-70a13c31-0 dxcUSQ fmDjro Pabcp">
                          Burnasso_Collection
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fresnel-container fresnel-greaterThanOrEqual-sm ">
                  <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX"></div>
                </div>
              </div>
              <div className="fresnel-container fresnel-lessThan-sm "></div>
            </div>
          </div>
        </div>

        <div className="sc-29427738-0 dVNeWL ">
          <div className="sc-29427738-0 dVNeWL">
            <div className="sc-29427738-0 devnel cGrweX">
              <div className="fresnel-container  fresnel-greaterThanOrEqual-sm ">
                <span
                  color="text.body"
                  className="sc-29427738-0 sc-d58c749b-2 kshOha gSNOcC"
                >
                  <div className="fresnel-container fresnel-lessThan-sm "></div>
                  <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                    <span className="sc-29427738-0 sc-d58c749b-2 dxcUSQ cvEkFP">
                      <div className="fresnel-container fresnel-greaterThanOrEqual-sm ">
                        <span
                          data-testid="collection-description-metadata-items"
                          className="sc-29427738-0 eqSVis"
                        >
                          <div className="sc-29427738-0 sc-40f22686-0 dVNeWL fQmmxD">
                            <div className="fresnel-container fresnel-lessThan-md "></div>
                            <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                              <span className="sc-29427738-0 sc-d58c749b-2 dxcUSQ cvEkFP">
                                Items{" "}
                                <div className="sc-29427738-0 sc-40f22686-0 dVNeWL fQmmxD">
                                  <div className="fresnel-container fresnel-lessThan-md "></div>
                                  <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                                    <span className="sc-29427738-0 sc-d58c749b-2 mt-3 dxcUSQ fmDjro">
                                      60
                                    </span>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </span>
                        &nbsp;&nbsp;·&nbsp;{" "}
                        <span
                          data-testid="collection-description-metadata-created-date"
                          className="sc-29427738-0 eqSVis"
                        >
                          <div className="sc-29427738-0 sc-40f22686-0 dVNeWL fQmmxD">
                            <div className="fresnel-container fresnel-lessThan-md "></div>
                            <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                              <span className="sc-29427738-0 sc-d58c749b-2 dxcUSQ cvEkFP">
                                Created{" "}
                                <div className="sc-29427738-0 sc-40f22686-0 dVNeWL fQmmxD">
                                  <div className="fresnel-container fresnel-lessThan-md "></div>
                                  <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                                    <span className="sc-29427738-0 sc-d58c749b-2 dxcUSQ fmDjro">
                                      Oct 2021
                                    </span>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </span>
                        &nbsp;&nbsp;·&nbsp;
                        <span
                          data-testid="collection-description-metadata-creator-fee"
                          className="sc-29427738-0 eqSVis"
                        >
                          <div className="sc-29427738-0 sc-40f22686-0 dVNeWL fQmmxD">
                            <div className="fresnel-container fresnel-lessThan-md "></div>
                            <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                              <span className="sc-29427738-0 sc-d58c749b-2 dxcUSQ cvEkFP">
                                Creator fee{" "}
                                <div className="sc-29427738-0 sc-40f22686-0 dVNeWL fQmmxD">
                                  <div className="fresnel-container fresnel-lessThan-md "></div>
                                  <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                                    <span className="sc-29427738-0 sc-d58c749b-2 dxcUSQ fmDjro">
                                      10%
                                    </span>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </span>
                        &nbsp;&nbsp;·&nbsp;
                        <span
                          data-testid="collection-description-metadata-chain"
                          className="sc-29427738-0 sc-40f22686-0 eqSVis fQmmxD"
                        >
                          <div className="sc-29427738-0 sc-40f22686-0 dVNeWL fQmmxD">
                            <div className="fresnel-container fresnel-lessThan-md "></div>
                            <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                              <span className="sc-29427738-0 sc-d58c749b-2 dxcUSQ cvEkFP">
                                Chain{" "}
                                <div className="sc-29427738-0 sc-40f22686-0 dVNeWL fQmmxD">
                                  <div className="fresnel-container fresnel-lessThan-md "></div>
                                  <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                                    <span className="sc-29427738-0 sc-d58c749b-2 dxcUSQ fmDjro">
                                      Ethereum
                                    </span>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </span>
                        &nbsp;&nbsp;·&nbsp;
                        <span
                          data-testid="collection-description-metadata-category"
                          className="sc-29427738-0 sc-40f22686-0 eqSVis fQmmxD"
                        >
                          <div className="sc-29427738-0 sc-40f22686-0 dVNeWL fQmmxD">
                            <div className="fresnel-container fresnel-lessThan-md "></div>
                            <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                              <span className="sc-29427738-0 sc-d58c749b-2 dxcUSQ cvEkFP">
                                Category{" "}
                                <div className="sc-29427738-0 sc-40f22686-0 dVNeWL fQmmxD">
                                  <div className="fresnel-container fresnel-lessThan-md "></div>
                                  <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                                    <span className="sc-29427738-0 sc-d58c749b-2 dxcUSQ fmDjro">
                                      Photography
                                    </span>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="fresnel-container fresnel-lessThan-md "></div>
                </span>
              </div>
              <div className="fresnel-container fresnel-lessThan-sm "></div>
            </div>
            <div className="sc-29427738-0 dVNeWL">
              <div className="fresnel-container fresnel-greaterThanOrEqual-sm ">
                <div className="sc-29427738-0 sc-630fc9ab-0 devnel sc-b12235c3-4 djemRh jSPhMX jLssxg">
                  <div className="sc-29427738-0 sc-d58c749b-2 sc-b12235c3-7 NZOwx bga-DWL bHvIdf">
                    <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                      <span className="sc-29427738-0 sc-d58c749b-2 dxcUSQ cvEkFP">
                        <p>BurnassoPhotography 📸</p>
                        <p>
                          📸 describes a moment that will never happen a second
                          time
                        </p>
                      </span>
                    </div>
                    <div className="fresnel-container fresnel-lessThan-md "></div>
                  </div>
                  <div className="sc-29427738-0 sc-b12235c3-5 jOQGbU jXYUkv">
                    <button type="button" className="sc-b267fe84-0 cRVARX">
                      <div className="sc-29427738-0 bpCble">
                        <div className="fresnel-container fresnel-lessThan-md "></div>
                        <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                          <div className="sc-29427738-0 sc-d58c749b-2 dxcUSQ cvEkFP styledPhoenixText"></div>
                        </div>
                      </div>
                      <i
                        size="20"
                        value="expand_more"
                        className="sc-a143597d-0 sc-b12235c3-6 QGIXS iIlwEy material-icons"
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="fresnel-container fresnel-lessThan-sm "></div>
              <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                <div className="sc-29427738-0 sc-630fc9ab-0 eeeth sc-b12235c3-3 dVNeWL jSPhMX dmMKDX">
                  <div className="fresnel-container fresnel-lessThan-sm "></div>
                  <div className="fresnel-container fresnel-between-sm-md "></div>
                  <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                    <a
                      data-testid="collection-stats-volume"
                      href="/collection/burnassophotography/activity"
                      className="sc-1f719d57-0 fKAlPV"
                    >
                      <div className="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-b12235c3-1 dVNeWL jSPhMX kKyBpy bQPkHY">
                        <span className="sc-29427738-0 sc-d58c749b-1 ILliQ jsHA-dC styledPhoenixText">
                          <div className="sc-29427738-0 sc-630fc9ab-0 dVNeWL jSPhMX">
                            <span className="sc-29427738-0 sc-d58c749b-1 ILliQ jsHA-dC">
                              2
                            </span>
                            <div className="sc-29427738-0 jXdVGG">ETH</div>
                          </div>
                        </span>
                        <span
                          color="text.subtle"
                          className="sc-29427738-0 sc-d58c749b-2 bTxZbA idltxX"
                        >
                          total volume
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="fresnel-container fresnel-lessThan-sm "></div>
                  <div className="fresnel-container fresnel-between-sm-md "></div>
                  <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                    <a
                      data-testid="collection-stats-floor-price"
                      href="/collection/burnassophotography?search[sortAscending]=true&amp;search[sortBy]=UNIT_PRICE&amp;search[toggles][0]=BUY_NOW"
                      className="sc-1f719d57-0 fKAlPV"
                    >
                      <div className="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-b12235c3-1 dVNeWL jSPhMX kKyBpy bQPkHY">
                        <span className="sc-29427738-0 sc-d58c749b-1 ILliQ jsHA-dC styledPhoenixText">
                          <div className="sc-29427738-0 sc-630fc9ab-0 dVNeWL jSPhMX">
                            <span className="sc-29427738-0 sc-d58c749b-1 ILliQ jsHA-dC">
                              0.1
                            </span>
                            <div className="sc-29427738-0 jXdVGG">ETH</div>
                          </div>
                        </span>
                        <span
                          color="text.subtle"
                          className="sc-29427738-0 sc-d58c749b-2 bTxZbA idltxX"
                        >
                          floor price
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="fresnel-container fresnel-lessThan-sm "></div>
                  <div className="fresnel-container fresnel-between-sm-md "></div>
                  <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                    <a
                      data-testid="collection-stats-best-offer"
                      href="/collection/burnassophotography/activity?search[eventTypes][0]=COLLECTION_OFFER"
                      className="sc-1f719d57-0 fKAlPV"
                    >
                      <div className="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-b12235c3-1 dVNeWL jSPhMX kKyBpy bQPkHY">
                        <span className="sc-29427738-0 sc-d58c749b-1 ILliQ jsHA-dC styledPhoenixText">
                          <div className="sc-29427738-0 sc-630fc9ab-0 dVNeWL jSPhMX">
                            <span className="sc-29427738-0 sc-d58c749b-1 ILliQ jsHA-dC">
                              --
                            </span>
                          </div>
                        </span>
                        <span
                          color="text.subtle"
                          className="sc-29427738-0 sc-d58c749b-2 bTxZbA idltxX"
                        >
                          best offer
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="fresnel-container fresnel-lessThan-sm "></div>
                  <div className="fresnel-container fresnel-between-sm-md "></div>
                  <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                    <a
                      data-testid="collection-stats-listed"
                      href="/collection/burnassophotography/activity?search[eventTypes][0]=AUCTION_CREATED"
                      className="sc-1f719d57-0 fKAlPV"
                    >
                      <div className="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-b12235c3-1 dVNeWL jSPhMX kKyBpy bQPkHY">
                        <span className="sc-29427738-0 sc-d58c749b-1 ILliQ jsHA-dC styledPhoenixText">
                          <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                            78%
                          </div>
                        </span>
                        <span
                          color="text.subtle"
                          className="sc-29427738-0 sc-d58c749b-2 bTxZbA idltxX"
                        >
                          listed
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="fresnel-container fresnel-lessThan-sm "></div>
                  <div className="fresnel-container fresnel-between-sm-md "></div>
                  <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                    <span data-testid="collection-stats-owners">
                      <div className="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-b12235c3-1 dVNeWL jSPhMX kKyBpy bQPkHY">
                        <span className="sc-29427738-0 sc-d58c749b-1 ILliQ jsHA-dC styledPhoenixText">
                          <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                            85
                          </div>
                        </span>
                        <span
                          color="text.subtle"
                          className="sc-29427738-0 sc-d58c749b-2 bTxZbA idltxX"
                        >
                          owners
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="fresnel-container fresnel-lessThan-sm "></div>
                  <div className="fresnel-container fresnel-between-sm-md "></div>
                  <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                    <span data-testid="collection-stats-unique-owners">
                      <div className="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-b12235c3-1 dVNeWL jSPhMX kKyBpy bQPkHY">
                        <span className="sc-29427738-0 sc-d58c749b-1 ILliQ jsHA-dC styledPhoenixText">
                          <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                            10%
                          </div>
                        </span>
                        <span
                          color="text.subtle"
                          className="sc-29427738-0 sc-d58c749b-2 bTxZbA idltxX"
                        >
                          unique owners
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="fresnel-container fresnel-lessThan-md "></div>
            </div>
          </div>
        </div>

        <Profile_collection_tab />
      </div>
    </div>
  );
}

export default Profile_collection;

// immerse yourself in the 📸 and let magic happen
// it‘s inspiring and fascinating at the same time ✨
