import React from 'react'
import "./Minnt.css"
import { MdVerified } from 'react-icons/md';
import msll from "../Assets/collection_logo_sml.avif"
import ProgressBar from 'react-bootstrap/ProgressBar';
import Accordion from 'react-bootstrap/Accordion';
import bldu_1 from '../Accets/narrative-1.avif'
import bldu_2 from '../Accets/narrative-2.avif'
import bldu_3 from '../Accets/narrative-3.avif'
import bldu_4 from '../Accets/narrative-4.avif'
import Dropslider from '../Drop_slider/Dropslider';

function Minnt() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className='fst_aB_mIn'>
                            <h5 className='fw-bold text-start'>About this collection</h5>
                            <div className='d-flex justfy-content-center mt-3'>
                                <><img src={msll} alt="" className='slmo_img' /></>
                                <h6 className='fw-bold d-flex align-items-center me-1 ixd'>inBetweeners  x  Dolce&Gabbana Drip</h6>
                                <span className=''><MdVerified className='veri' /></span>
                            </div>
                            <p className='mt-3 text-start'>The inBetweeners x Dolce&Gabbana and UNXD Drip Collection is the <br /> next installment of a collaboration that celebrates works between <br /> the two Italian groups. Dolce&Gabbana's heritage shines through <br /> GianPiero's inBetweeners, and leans into the power and excitement <br /> of web3. The Bears by GianPiero serve as a motif for Dolce&Gabbana <br /> products as the inBetweener's Bears mesh the curious and <br /> playfulness with DG,s elegance. We are excited to introduce a new <br /> era in the world of luxury fashion and art that spreads peace, love, <br /> and happiness around the world.</p>
                            <div className='mt-4'>
                                <div className='d-flex justify-content-between'>
                                    <span className='fw-bold'>75.9% minted</span>
                                    <span className='text-muted'>759/1,000</span>
                                </div>
                                <span className=''><ProgressBar variant="primary" now={80} className="progresh mt-2" /></span>
                            </div>
                            <div className='mt-4 border py-3 px-4 view_c_box '>
                                <h5 className='fw-bold text-start'>Mint sold out</h5>
                                <h6 className="text-muted text-start">All items were minted</h6>
                                <button className='btn btn-lg btn-primary view_c_butn mt-3'> <span className='fw-bold'>View collection</span></button>
                                <div>
                                </div>
                            </div>
                            <div className='acrdians mb-5'>
                                <Accordion defaultActiveKey="" >
                                    <Accordion.Item eventKey="0" className='for_nobrd' >
                                        <Accordion.Header>
                                            <span className='truww'>
                                                <span className='fr_foont fw-bold'>inBetweener Holders, DGFamily Holders</span>
                                                <span className='text-muted mt-2 hdrt'>December 14 at 1:00 AM GMT+5</span>
                                            </span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <h6 className='text-start text-muted'>Price: 0.69 ETH</h6>
                                            <h6 className='text-start text-muted'>Limit 2 per inBetweeners/DGFamily in your wallet</h6>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1" className='for_nobrd'>
                                        <Accordion.Header>
                                            <span className='truww'>
                                                <span className='fr_foont fw-bold'>Public Allowlist</span>
                                                <span className='text-muted mt-2 hdrt'>December 14 at 1:30 AM GMT+5</span>
                                            </span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <h6 className='text-start text-muted'>Price: 0.78 ETH</h6>
                                            <h6 className='text-start text-muted'>Limit 10 per wallet</h6>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2" className='for_nobrd'>
                                        <Accordion.Header>
                                            <span className='truww'>
                                                <span className='fr_foont fw-bold'>Public Mint</span>
                                                <span className='text-muted mt-2 hdrt'>December 14 at 2:00 AM GMT+5</span>
                                            </span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <h6 className='text-start text-muted'>Price: 0.88 ETH</h6>
                                            <h6 className='text-start text-muted'>Limit: 10 per wallet</h6>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6  justify-content-center">
                        <Dropslider/>
                    </div>
                </div>
            </div>

            <div className="container-fluid my-3 p-0">
                <img src={bldu_1} alt="#" className='bldu_pic' />

                <div className="row my-4 mx-0">
                    <div className="col-lg-7 text-start">
                        <div className='arre_nawaz'>
                            <h5>GP x DG</h5>
                            <p>An exclusive GianPiero x Dolce&Gabbana collaboration nearly 10 years in the making, and we're excited to bring it to life through the inBetweeners x Dolce&Gabbana and UNXD Drip Collection. The Collection comprises of 2,000 digital collectibles designed by inBetweener’s own GianPiero.</p>
                        </div>
                    </div>
                </div>

                <img src={bldu_2} alt="#" className='bldu_pic' />

                <div className="row my-4 mx-0">
                    <div className="col-lg-7 text-start">
                        <div className='arre_nawaz'>
                            <h5>Meet GianPiero D’Allesandro</h5>
                            <p>GianPiero is a graphic artist and creative visionary born and raised in Naples, Italy. GianPiero has built a global following through his art and creativity centered around nostalgia, love, and positivity. The message that GianPiero’s art provokes has captivated the attention of brands and celebrities including Justin Bieber, Netflix, Snoop Dogg, Luc Belaire Rose, and more. <br /> <br /> In addition to inBetweeners, GianPiero serves as the sole cartoonist and illustrator at DrewHouse, a brand co-founded by Justin Bieber.</p>
                        </div>
                    </div>
                </div>

                <img src={bldu_3} alt="#" className='bldu_pic' />

                <div className="row my-4 mx-0">
                    <div className="col-lg-7 text-start">
                        <div className='arre_nawaz'>
                            <h5>About inBetweeners</h5>
                            <p>inBetweeners is an exclusive GianPiero NFT collection of hand-drawn bears living on the Ethereum blockchain. Each inBetwener is uniquely based on a combination of 150+ randomized attributes. <br /> <br /> inBetweeners spread positivity in the real world and metaverse. We uplift and encourage our own to be wholesome and healthy. Our mission is simple: make the world a more loving place. <br /> <br /> We are a global crowdsourced community focused on spreading love and positivity. A place where you have thousands of shoulders to lean on. As our identity rises up to the cloud, inBetweeners keeps us grounded.</p>
                        </div>
                    </div>
                </div>

                <img src={bldu_4} alt="#" className='bldu_pic' />

                <div className="row my-4 mx-0">
                    <div className="col-lg-7 text-start">
                        <div className='arre_nawaz'>
                            <h5>Collection Utility</h5>
                            <p>This collection is an exclusive collaboration between inBetweeners x Dolce&Gabbana and UNXD. Merging the worlds of fashion and art, each collectible is redeemable for one of 21 physical pieces reinvented from Dolce&Gabbana's vault. At reveal, the clothes your bear is wearing will be the garment that you will be able to redeem. Holders will also receive an authenticated print of their revealed Bear.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Minnt