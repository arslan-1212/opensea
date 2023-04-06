import React from 'react';
import { IoCart } from 'react-icons/io5';


function Activity_items(props) {
    return (
        <div>



            <div role="list" tabindex="0" className='lest' style={{ position: "relative", width: "100%", maxWidth: "100%", height: "100px", maxHeight: "112px" }}>
                <div role="listitem" className='boxx_shaadow lest_iitam' style={{ top: "28px", left: "0px", width: "1030px", writingMode: "horizontal-tb", position: "absolute" }}>
                    <div className="sc-29427738-0 sc-4e15afd9-0 dVNeWL kcFcYa">
                        <button role="row" className="sc-b267fe84-0 cRVARX sc-29427738-0 sc-630fc9ab-0 sc-a8df1259-0 sc-d400cbf1-0 cJOBgF jSPhMX eGZhwM kvvAeD" type="button">
                            <div className="sc-29427738-0 sc-860fab97-2 dVNeWL haJRsS">
                                <div width="190px" display="flex" className="sc-29427738-0 sc-87407077-0 jDGoIW">
                                    <i size="18" value="shopping_cart" className="sc-a143597d-0 Prfel material-icons cart_icon"><IoCart /></i>
                                    <h6 className="sc-29427738-0 sc-bdnxRM figDpC iPAlIP">{props.item_category}</h6>
                                </div>
                                <div width="300px" display="flex" className="sc-29427738-0 sc-87407077-0 doNvbE">
                                    <div className="sc-29427738-0 sc-ae1bc31d-0 dVNeWL iXySNU">
                                        <div color="inherit" display="block" className="sc-29427738-0 jOFJRc">
                                            <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                                <div className="sc-45b283d7-0 czNTRz AssetCell--img">
                                                    <div height="100%" width="100%" className="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-4422a702-0 sc-dada3b88-0 friJpq jSPhMX kKyBpy fYgjHJ cmjqwQ">
                                                        <div className="sc-f087f95e-0 sc-f087f95e-1 gwpnfr gyivza AssetMedia--img" style={{ height: "48px", width: "48px" }}>
                                                            <span style={{ boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "absolute", inset: "0px" }}>
                                                                <img src={props.item} style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain" }} />
                                                                <noscript></noscript>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sc-29427738-0 ePCcKz fresnel-greaterThanOrEqual-sm" width="252px">
                                                    <span className="sc-29427738-0 sc-bdnxRM sc-a8df1259-6 brdhhA fQDfDu">
                                                        <div className="sc-fe5f9c83-0 mGAUR" tabindex="-1">
                                                            <div className="sc-9afeb3b1-0 hwGXqA sc-860fab97-0 iBkeiD">
                                                                <a className="sc-1f719d57-0 fKAlPV CollectionLink--link CollectionLink--isSmall" href="/collection/rugbuds">
                                                                    <span className="sc-29427738-0 dVNeWL">{props.item_name}</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </span>
                                                    <span data-testid="activity-table-item-name" font-size="14px" className="sc-29427738-0 sc-bdnxRM sc-a8df1259-2 erpyI iPAlIP">
                                                        <a className="sc-1f719d57-0 fKAlPV sc-860fab97-1 cgNqjZ" href="/assets/ethereum/0xbfab01504ab8c6278aaecdbed0903fcd15e740a4/668">
                                                            <div className="sc-fe5f9c83-0 iFPiFs" tabindex="-1">{props.item_nmbr} </div>
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div width="90px" display="flex" className="sc-29427738-0 sc-87407077-0 dEEZyh">
                                    <div className="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 gOkAbJ jSPhMX kKyBpy">
                                        <div className="sc-29427738-0 gpjbBU">
                                            <div className="sc-726a600f-0 hAFCSl Price--main">
                                                <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                                    <div className="sc-fe5f9c83-0 mGAUR Price--amount" tabindex="-1">{props.item_price}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sc-29427738-0 gpjbBU">
                                            <span className="sc-29427738-0 sc-bdnxRM dVNeWL fBfnHR">
                                                <div className="sc-726a600f-0 efaSkm" color="inherit">
                                                    <div className="sc-fe5f9c83-0 mGAUR Price--fiat-amount" tabindex="-1">{props.item_amount}</div>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div width="75px" display="flex" className="sc-29427738-0 sc-87407077-0 bvDFrf">
                                    <p font-size="[object Object]" font-weight="400" width="100%" color="text.body" className="sc-29427738-0 sc-bdnxRM sc-d400cbf1-3 hoMxeg bCCtkE">
                                        <div className="sc-fe5f9c83-0 mGAUR" tabindex="-1">{props.item_quantity}</div>
                                    </p>
                                </div>
                                <div width="125px" display="flex" className="sc-29427738-0 sc-87407077-0 Ralqi">
                                    <div className="sc-29427738-0 sc-70a13c31-1 hggeJI ePLwsZ AccountLink--ellipsis-overflow" data-testid="AccountLink" font-weight="400" height="24px">
                                        <a className="sc-1f719d57-0 hoTuIF sc-29427738-0 ikrGyo AccountLink--ellipsis-overflow" font-weight="400" href="/vonny">
                                            <span>{props.item_from}</span>
                                        </a>
                                    </div>
                                </div>
                                <div width="125px" display="flex" className="sc-29427738-0 sc-87407077-0 Ralqi">
                                    <div className="sc-29427738-0 sc-70a13c31-1 hggeJI ePLwsZ AccountLink--ellipsis-overflow" data-testid="AccountLink" font-weight="400" height="24px">
                                        <a className="sc-1f719d57-0 hoTuIF sc-29427738-0 ikrGyo AccountLink--ellipsis-overflow" font-weight="400" href="/0x2fb957766B7D9B70B924a42a9f2321e840Fa74AE">
                                            <span>{props.item_to}</span>
                                        </a>
                                    </div>
                                </div>
                                <div width="160px" display="flex" className="sc-29427738-0 new_tab sc-87407077-0 hPCEIH">
                                    <div className="sc-29427738-0 sc-86bdbe0d-0 ikrGyo cKGUXL" data-testid="EventTimestamp" font-weight="400">
                                        <a className="sc-1f719d57-0 fKAlPV EventTimestamp--link" href="https://etherscan.io/tx/0x4755b6b4b3faa9c3d478c19e78d56247745ae985bb911870f43ab84a5bb8909b" rel="nofollow noopener" target="_blank" title="Opens in a new window" aria-expanded="false">{props.item_time} <div display="inline-block" className="sc-29427738-0 kBPgGh">
                                            <i aria-hidden="true" className="sc-a143597d-0 RovoC EventTimestamp--link-icon material-icons EventTimestamp--link-icon" value="open_in_new" size="24">open_in_new</i>
                                        </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Activity_items