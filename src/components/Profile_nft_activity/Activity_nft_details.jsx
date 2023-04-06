import React from 'react'
import Activity_items from '../Activity_items/Activity_items';
import { IoCart } from 'react-icons/io5';
import nft_main_pic from "../Accets/nf_nft.avif"
import { Link } from 'react-router-dom';

function Activity_nft_details() {
    return (
        <div className='table-responsive'>
            <table class="table table-borderless ">
                <thead className='main_tbl_shell'>
                    <tr className='main_tbl_shell'>
                        <th scope="col" className='d-none d-md-block'>#</th>
                        <th scope="col" className='hdin'>Item</th>
                        <th scope="col" className='hdin'>Price</th>
                        <th scope="col" className='hdin'>Quantity</th>
                        <th scope="col" className='hdin'>From</th>
                        <th scope="col" className='hdin'>T0</th>
                        <th scope="col" className='hdin'>Time</th>
                    </tr>
                </thead>
                <tbody className='main_tbl_shell'>

                    <Link to="/Nft_main_detail" style={{display:'contents'}}>
                  
                        <tr className='detail_line'>
                        <td className='d-none d-md-block'>
                            <IoCart />
                            <span className='ms-2'>Sale</span>
                        </td>
                        <td className='w-25 '>
                            <span className='d-flex' style={{position:"relative", top:"12px"}}>
                                <img src="https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=3840" alt="" className='iim ' />
                                <div className='align-items-center ms-2 d-none d-md-block'>
                                    <div className='fr_tone'>Rug Buds</div>
                                    <div className='fr2_tine'>Shallz#1331</div>
                                </div>
                            </span>
                        </td>
                        <td>
                            <div>
                                <div className="prc_eth">0.0049 ETH</div>
                                <div className="prc_dlr">$5.96</div>
                            </div>
                        </td>
                        <td>
                            <span className='qunt text-center'>1</span>
                        </td>

                        <td>
                            <span className='frm'>vonny</span>
                        </td>

                        <td>
                            <span className='frm'>2FB957</span>
                        </td>

                        <td>
                            <span className='frm'>29 sec</span>
                        </td>

                    </tr>
                   
                    </Link>
                    <Link to="/Nft_main_detail" style={{display:'contents'}}>
                    <tr className='detail_line'>
                        <td className='d-none d-md-block'>
                            <IoCart />
                            <span className='ms-2'>Sale</span>
                        </td>
                        <td className='w-25'>
                            <span className='d-flex' style={{position:"relative", top:"12px"}}>
                                <img src="https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=3840" alt="" className='iim' />
                                <div className='align-items-center ms-2 d-none d-md-block'>
                                    <div className='fr_tone'>Rug Buds</div>
                                    <div className='fr2_tine'>Shallz#1331</div>
                                </div>
                            </span>
                        </td>
                        <td>
                            <div>
                                <div className="prc_eth">0.0049 ETH</div>
                                <div className="prc_dlr">$5.96</div>
                            </div>
                        </td>
                        <td>
                            <span className='qunt text-center'>1</span>
                        </td>

                        <td>
                            <span className='frm'>vonny</span>
                        </td>

                        <td>
                            <span className='frm'>2FB957</span>
                        </td>

                        <td>
                            <span className='frm'>29 sec</span>
                        </td>

                    </tr>
                    </Link>
                    <Link to="/Nft_main_detail" style={{display:'contents'}}>
                    <tr className='detail_line'>
                        <td className='d-none d-md-block'>
                            <IoCart />
                            <span className='ms-2'>Sale</span>
                        </td>
                        <td className='w-25'>
                            <span className='d-flex'style={{position:"relative", top:"12px"}}>
                                <img src="https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=3840" alt="" className='iim' />
                                <div className='align-items-center ms-2 d-none d-md-block'>
                                    <div className='fr_tone'>Rug Buds</div>
                                    <div className='fr2_tine'>Shallz#1331</div>
                                </div>
                            </span>
                        </td>
                        <td>
                            <div>
                                <div className="prc_eth">0.0049 ETH</div>
                                <div className="prc_dlr">$5.96</div>
                            </div>
                        </td>
                        <td>
                            <span className='qunt text-center'>1</span>
                        </td>

                        <td>
                            <span className='frm'>vonny</span>
                        </td>

                        <td>
                            <span className='frm'>2FB957</span>
                        </td>

                        <td>
                            <span className='frm'>29 sec</span>
                        </td>

                    </tr>
                    </Link>
                </tbody>
            </table>
        </div>
    )
}

export default Activity_nft_details
