import React from 'react'
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import a_docs_open from '../Assets/a_docs_open.png'
import PieChartIcon from '@mui/icons-material/PieChart';
import { AiOutlineLineChart } from "react-icons/ai";
import "./R_docs_open.css"

import Button from '@mui/material/Button';


function R_docs_open() {
  return (
    <>



 <div className="container d-flex justify-content-evenly">
        <div className="row d-flex justify-content-end">
            <div className="col-12 col-md-6">

<h1 className='text-start Heading_color_all'><b>Open your own marketplace</b></h1>
<p className='text-start prha'>Let your users freely trade your NFTs by opening your own <br /> marketplace on OpenSea.</p>

<h4 className='text-start Heading_color_all'> <span className='text-primary'><LaptopWindowsIcon /></span> <b className='ps-3'> Customize</b></h4>
<p className='text-start ps-5 prha'>You can finally open a beautiful, customizable <br /> marketplace on your own domain, fully integrated <br /> into your project.</p>

<h4 className='text-start Heading_color_all'> <span className='text-primary'><PieChartIcon /></span><b className='ps-3'> Set your own fee</b></h4>
<p className='text-start ps-5 prha'>You can set your own fee on the secondary sales of <br />your items on OpenSea. Whenever a user makes a <br /> sale, you earn a commission.</p>

<h4 className='text-start Heading_color_all'> <span className='text-primary'><AiOutlineLineChart /></span> <b className='ps-3'> Get stats & insights</b></h4>
<p className='text-start ps-5 prha'>Get stats and insights to see how your collectibles <br />  are trending.</p>

<button type="button" class="btn btn-primary btn-lg btn_txt">Get Started</button>

            </div>
            <div className="col-12 col-md-6 mt-3 mt-md-0">
<img src={a_docs_open} className='w-75' alt="" />

            </div>
        </div>
    </div>

    <div className='hr_line my-5'>
        <hr />
    </div>

    </>
  )
}

export default R_docs_open