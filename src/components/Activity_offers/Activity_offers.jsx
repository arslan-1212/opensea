import React from 'react';
import Activity_items from '../Activity_items/Activity_items';
import Accordion from 'react-bootstrap/Accordion';
import Checkbox from '@mui/material/Checkbox';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoCart, IoFilterSharp } from 'react-icons/io5';
import Activity_prop from '../Activity_prop/Activity_prop';
import { Link } from 'react-router-dom';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Activity_offers() {
  return (
    <div className='active_lesting_padd_top'>
        <div>
            <div className="shaadoow">
                <div className="fresnel-container fresnel-greaterThanOrEqual-lg sc-1242568d-1 dZzJwG">
                    <div display="flex" height="100%" className="sc-29427738-0 sc-e1213540-0 dqOkeF hdXdDy">
                        <div width="100%" className="sc-29427738-0 sc-630fc9ab-0 iCDJqk jSPhMX">
                            <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                <div className="fresnel-container fresnel-greaterThanOrEqual-lg ">
                                    <button aria-expanded="true" aria-label="Close" data-testid="filter-toggle" className="sc-29427738-0 sc-788bb508-0 nFISH bpmNDx sc-9a637e94-1 kSESLX" type="button">
                                        <span className="sc-29427738-0 sc-d58c749b-2 sc-9a637e94-0 ILliQ cWTWPE enUGCb">
                                            <i color="charcoal" font-weight="600" value="filter_list" size="24" className="sc-a143597d-0 buXgzV material-icons-outlined"><IoFilterSharp /></i>
                                        </span></button></div></div></div></div></div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 accor_main">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item className="accur_item" eventKey="0">
                                <Accordion.Header><div className="event_header">Event Type</div></Accordion.Header>
                                <Accordion.Body>
                                    <div className="sale_main">
                                        <span className="sale">Sales</span>
                                       <Link to="/Activity"> <Checkbox
                                            {...label}
                                            
                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        /></Link>
                                    </div>

                                    <div className="sale_main">
                                        <span className="sale">Listings</span>
                                       <Link to="/Activity_listing"> <Checkbox
                                            {...label}
                                            
                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        /></Link>
                                    </div>

                                    <div className="sale_main">
                                        <span className="sale">Offers</span>
                                        <Link to="/Activity_offers"><Checkbox
                                            {...label}
                                            defaultChecked
                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        /></Link>
                                    </div>

                                    <div className="sale_main">
                                        <span className="sale">Collection offers</span>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                    <div className="sale_main">
                                        <span className="sale">Transfers</span>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item className="accur_item" eventKey="1">
                                <Accordion.Header><div className="event_header">Collections</div></Accordion.Header>
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

                                    <Activity_prop url="https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&amp;w=48 1x, https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&amp;w=64 2x" src="https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&amp;w=64" title="CryptoPunks" />

                                    <Activity_prop url="https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&amp;w=64" decoding="async" data-nimg="intrinsic" srcset="https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&amp;w=48 1x, https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&amp;w=64 2x" title="Bored Ape" />

                                    <Activity_prop url="https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&amp;w=64" decoding="async" data-nimg="intrinsic" srcset="https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&amp;w=48 1x, https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&amp;w=64 2x" title="Otherdeed" />

                                    <Activity_prop url="https://i.seadn.io/gcs/files/9617c138dee52ff098742ce9e25f5d8a.png?auto=format&amp;w=64" decoding="async" data-nimg="intrinsic" srcset="https://i.seadn.io/gcs/files/9617c138dee52ff098742ce9e25f5d8a.png?auto=format&amp;w=48 1x, https://i.seadn.io/gcs/files/9617c138dee52ff098742ce9e25f5d8a.png?auto=format&amp;w=64 2x" title="Mutant" />

                                    <Activity_prop url="https://i.seadn.io/gcs/files/498b0e830344cd420b80c3ae1161c3ca.png?auto=format&amp;w=64" decoding="async" data-nimg="intrinsic" srcset="https://i.seadn.io/gcs/files/498b0e830344cd420b80c3ae1161c3ca.png?auto=format&amp;w=48 1x, https://i.seadn.io/gcs/files/498b0e830344cd420b80c3ae1161c3ca.png?auto=format&amp;w=64 2x" title="Savage" />

                                </Accordion.Body>
                            </Accordion.Item>



                            <Accordion.Item className="accur_item" eventKey="2">
                                <Accordion.Header><div className="event_header">Chains</div></Accordion.Header>
                                <Accordion.Body>
                                    <div className="sale_main">
                                        <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                            <div className="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                                <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Arbitrum" src="https://opensea.io/static/images/logos/arbitrum.svg" decoding="async" data-nimg="intrinsic" className="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                                    <noscript>
                                                    </noscript>
                                                </span>
                                            </div>
                                            <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Arbitrum</div>
                                        </div>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                    <div className="sale_main">
                                        <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                            <div className="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                                <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Arbitrum" src="https://opensea.io/static/images/logos/avalanche.svg" decoding="async" data-nimg="intrinsic" className="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                                    <noscript>
                                                    </noscript>
                                                </span>
                                            </div>
                                            <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Avalanche</div>
                                        </div>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                    <div className="sale_main">
                                        <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                            <div className="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                                <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Arbitrum" src="https://opensea.io/static/images/logos/bsc.png" decoding="async" data-nimg="intrinsic" className="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                                    <noscript>
                                                    </noscript>
                                                </span>
                                            </div>
                                            <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">BNB Chain</div>
                                        </div>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                    <div className="sale_main">
                                        <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                            <div className="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                                <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Arbitrum" src="https://opensea.io/static/images/logos/ethereum.svg" decoding="async" data-nimg="intrinsic" className="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                                    <noscript>
                                                    </noscript>
                                                </span>
                                            </div>
                                            <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Ethereum</div>
                                        </div>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                    <div className="sale_main">
                                        <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                            <div className="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                                <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Arbitrum" src="https://opensea.io/static/images/logos/klaytn.svg" decoding="async" data-nimg="intrinsic" className="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                                    <noscript>
                                                    </noscript>
                                                </span>
                                            </div>
                                            <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Klaytn</div>
                                        </div>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                    <div className="sale_main">
                                        <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                            <div className="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                                <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Arbitrum" src="https://opensea.io/static/images/logos/optimism.svg" decoding="async" data-nimg="intrinsic" className="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                                    <noscript>
                                                    </noscript>
                                                </span>
                                            </div>
                                            <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Optimism</div>
                                        </div>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                    <div className="sale_main">
                                        <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                            <div className="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                                <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Arbitrum" src="https://opensea.io/static/images/logos/polygon.svg" decoding="async" data-nimg="intrinsic" className="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                                    <noscript>
                                                    </noscript>
                                                </span>
                                            </div>
                                            <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Polygon</div>
                                        </div>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                    <div className="sale_main">
                                        <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                            <div className="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                                <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Arbitrum" src="https://opensea.io/static/images/logos/solana.svg" decoding="async" data-nimg="intrinsic" className="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                                    <noscript>
                                                    </noscript>
                                                </span>
                                            </div>
                                            <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Solana</div>
                                        </div>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </div>

                    <div className="col-md-9">
                    <div className="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 tgTCr jSPhMX kKyBpy">
                    <div className="sc-29427738-0 resssponsse sc-630fc9ab-0 sc-ecfc7326-0 sc-d400cbf1-1 cbPOR jSPhMX dwHBvC cmiZwC fresnel-greaterThanOrEqual-lg">
                        <div width="190px" display="flex" className="sc-29427738-0 sc-87407077-0 kuRVgt">
                            </div>
                            <div width="300px" display="flex" className="sc-29427738-0 sc-87407077-0 gTqShe">
                                <p className="sc-29427738-0 sc-bdnxRM dVNeWL eimMfF">Item</p>
                                </div>
                                <div width="90px" display="flex" className="sc-29427738-0 sc-87407077-0 kngZAJ">
                                    <p className="sc-29427738-0 sc-bdnxRM dVNeWL eimMfF">Price</p>
                                    </div>
                                    <div width="75px" display="flex" className="sc-29427738-0 sc-87407077-0 eNEoCR">
                                        <p className="sc-29427738-0 sc-bdnxRM dVNeWL eimMfF">Quantity</p>
                                        </div>
                                        <div width="125px" display="flex" className="sc-29427738-0 sc-87407077-0 fZTVZV">
                                            <p className="sc-29427738-0 sc-bdnxRM dVNeWL eimMfF">From</p>
                                            </div>
                                            <div width="125px" display="flex" className="sc-29427738-0 sc-87407077-0 fZTVZV">
                                                <p className="sc-29427738-0 sc-bdnxRM dVNeWL eimMfF">To</p>
                                                </div>
                                                <div width="160px" display="flex" className="sc-29427738-0 sc-87407077-0 eGwnwZ">
                                                    <p className="sc-29427738-0 sc-bdnxRM dVNeWL eimMfF">Time</p>
                                                    </div>
                                                    </div>

                                                    <Activity_items item="https://i.seadn.io/gae/16VePbNVa-dOXX-M0XGw1bJvoSeY3XvhOM17G42VhpdMpdyoZvuV-d2HQ3x2daXQVI9ibxnq3mdTRyn5tVUZGQwLxGQk2g3sbDtO3w?auto=format&w=3840"
                         item_category="Sale" item_name="Otherdeed" item_nmbr="82970" item_price="1.700 ETH" item_amount="$2,066.28" item_quantity="1" item_from="PlanD_69" item_to="thecrypton" item_time="20 minutes ago"
                        />

                        <Activity_items item="https://i.seadn.io/gcs/files/d3781f86c3ff626070559d01a85b1f0f.png?auto=format&w=3840"
                         item_category="Sale" item_name="Mutant" item_nmbr="Mutant Hound Collar #4937" item_price="1.390 ETH" item_amount="$16,86.55" item_quantity="1" item_from="DD7" item_to="9E745" item_time="32 seconds ago"
                        />

                                                    <Activity_items item="https://i.seadn.io/gae/rsFEXPGI6BC7BLDmIaQOMyp_7RBURD1ksuHtOZw9VhhXB7kxwU8d98JzYRDXYMmayDSuiY-pno_rJOiamQnqXhUFUBjKEJrwoDrf?auto=format&w=3840"
                         item_category="Sale" item_name="Bored Ape Yatch Club" item_nmbr="7i98" item_price="76 ETH" item_amount="$92,226.76" item_quantity="1" item_from="Khalissman" item_to="70EC2F" item_time="45 seconds ago"
                        />

                                                    <Activity_items item="https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=3840"
                         item_category="Sale" item_name="Rug Buds" item_nmbr="Rug Buds #668" item_price="0.0049 ETH" item_amount="$5.96" item_quantity="1" item_from="vonny" item_to="2FB957" item_time="29 seconds ago"
                        />

                        <Activity_items item="https://i.seadn.io/gcs/files/129b97582f0071212ee7cf440644fc28.gif?auto=format&w=3840"
                         item_category="Sale" item_name="The Potatoz" item_nmbr="Potatoz#2570" item_price="3.190 ETH" item_amount="$3,891.55" item_quantity="1" item_from="976891" item_to="HakuCrypto" item_time="58 seconds ago"
                        />

                        

                        <Activity_items item="https://i.seadn.io/gae/NtBpTM_wdyHUWbTJAZX434jLINoiNDGyDFJT55A-Nm-MSSgNKP3L1E5_PBH-Jb01HmrHiLfTX57KcXN_SQw3VaK2RZdndc-GaeOL?auto=format&w=3840"
                         item_category="Sale" item_name="CryptoPunks" item_nmbr="CryptoPunks #8187" item_price="72.950 ETH" item_amount="$88,525.55" item_quantity="1" item_from="punksotc.eth" item_to="TrippVault" item_time="18 seconds ago"
                        />

                        <Activity_items item="https://i.seadn.io/gcs/files/d3781f86c3ff626070559d01a85b1f0f.png?auto=format&w=3840"
                         item_category="Sale" item_name="Mutant Hound Collars" item_nmbr="Mutant Hound Collar #4937" item_price="1.390 ETH" item_amount="$16,86.55" item_quantity="1" item_from="DD7" item_to="9E745" item_time="32 seconds ago"
                        />

                        
                                                    </div>
                        

                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Activity_offers