import React from 'react'
import Trending_main from '../Trending_main/Trending_main'
import bacchi from "../Assets/cook1.avif"
import bachi from "../Assets/cook1.avif"
import yellow from "../Assets/yellow.avif"
import menn from "../Assets/menn.avif"
import pic from "../Assets/pic.avif"
import arrow from "../Assets/arrow.avif"
import pac from "../Assets/pac.avif"
import golden from "../Assets/golden.avif"
import red from "../Assets/red.avif"
import G from "../Assets/G.avif"
import P from "../Assets/P.avif"
import D from "../Assets/D.avif"
import black from "../Assets/black.avif"
import B from "../Assets/B.avif"
import snl from "../Assets/snl.avif"
import petra from "../Assets/petra.avif"
import PP from "../Assets/PP.avif"
import Rob from "../Assets/Rob.avif"
import R from "../Assets/R.avif"
import larka from "../Assets/larka.avif"
import coca from "../Assets/coca.avif"
import C from "../Assets/C.avif"
import eyes from "../Assets/eyes.webp"





function Who_card_pro() {
  return (
    <div className='px-1 px-md-5'>
    <div className='text-center'>
      <h1 className='mt-2'> <b>Who has partnered with us</b> </h1>

      <p className='my-5'>We've collaborated with high-profile organizations and celebrities and generated <br />
      
      millions of dollars in revenue in the process.</p>

      </div>
  <div className="row m-0 p-0 mt-4 ">
        <div className='col-12 col-md-4 '>
          <Trending_main url={yellow} secondUrl={yellow} title="888 by Kevin Abosch  "/>
        </div>
        <div className='col-12 col-md-4 '>
          <Trending_main url={menn} secondUrl={eyes} title="The Mike Tyson NFT"/>
        </div>
        <div className='col-12 col-md-4 '>
          <Trending_main url={pic} secondUrl={D} title="DeLorean's 40th  anachdvgd "/>
        </div>
        </div>

      <div className="row p-0 m-0  mt-4">
      <div className='col-12 col-md-4 '>
        <Trending_main url={arrow} secondUrl={red} title=" Reddit CryptoSnoos "/>
      </div>
      <div className='col-12 col-md-4'>
        <Trending_main url={pac} secondUrl={G} title="PACMAN x Genies:Into"/>
      </div>
      <div className='col-12 col-md-4 '>
        <Trending_main url={golden} secondUrl={P} title="Golden state warriors"/>
      </div>
      </div>
      <div className="row  m-0 mt-4 ">
      <div className='col-12 col-md-4 '>
        <Trending_main url={black} secondUrl={B} title="Lil - I Got An NFT"/>
      </div>
      <div className='col-12 col-md-4'>
        <Trending_main url={snl} secondUrl={snl} title="Saturday Night"/>
      </div>
      <div className='col-12 col-md-4'>
        <Trending_main url={petra} secondUrl={PP} title="Petra Cortright - Room"/>
      </div>
      </div>
      <div className="row  m-0  mt-4">
      <div className='col-12 col-md-4 '>
        <Trending_main url={Rob} secondUrl={R} title="Rob Gronkowski champion"/>
      </div>
      <div className='col-12 col-md-4 '>
        <Trending_main url={larka} secondUrl={G} title="Wonder:Shawn Mender"/>
      </div>
      <div className='col-12 col-md-4 '>
        <Trending_main url={coca} secondUrl={C} title="Coca-cola"/>
      </div>
      </div>

    </div>
  )
}

export default Who_card_pro
