import React from 'react';
// import "./Trending.css";
import "./Trending_main.css"

function Trending_main(props) {
    
    // console.log("Data",trending_Data[0]);
    return (
        <div>
       
                    <div className="trending_main">
                        <div class="sc-29427738-0 gIUWxk">
                            <div role="" style={{ position: "relative", width: "100%", maxWidth: "100%", height: "320px", maxHeight: "320px" }}>
                                <div className="col-md-3">
                                    <div role="gridcell" style={{ width: "100%", writingMode: "horizontal-tb", position: "absolute", top: "0px", left: "0px" }}>
                                        <div class="sc-29427738-0 sc-d1fcbabf-6 dVNeWL dIfFHE">
                                            <a href="#" class="sc-1f719d57-0 fKAlPV">
                                                <div class="sc-29427738-0 sc-d1fcbabf-1 dVNeWL eBMgqA">
                                                    <div height="0" class="sc-29427738-0 eCIkYY">
                                                        <span style={{ boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "absolute", inset: "0px" }}>
                                                            <img src={props.url} alt="" className='sc-d1fcbabf-9 XGnYb' style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }}/>
                                                        </span>
                                                    </div>
                                                    <div class="sc-29427738-0 sc-630fc9ab-0 sc-d1fcbabf-7 gpIolb jSPhMX jZRBYb">
                                                        <div class="sc-d1fcbabf-2 bHfIfv">
                                                            <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "70px", height: "70px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative" }}>
                                                            <img src={props.secondUrl} alt="" class="sc-d1fcbabf-8 cAzOso" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                                            </span>
                                                        </div>
                                                        <div overflow="hidden" class="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 dMeJes jSPhMX kKyBpy">
                                                            <div overflow="hidden" class="sc-29427738-0 sc-630fc9ab-0 kwyWzG jSPhMX">
                                                                <div class="sc-29427738-0 sc-bdnxRM sc-d1fcbabf-10 dVNeWL eimMfF PcqYT">{props.title}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                              
                            </div>
                        </div>
                    </div>
              

        </div>
    )
}

export default Trending_main