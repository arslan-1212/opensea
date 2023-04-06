import React from 'react'
import Card_veiw from '../Card_veiw/Card_veiw'
import vei from "../Accets/veiw1.avif"
import cook1 from "../Accets/cook1.avif"
import cook2 from "../Accets/cook2.webp"
import cook3 from "../Accets/cook3.avif"
import cook4 from "../Accets/cook4.webp"
import cook5 from "../Accets/cook5.avif"
import cook6 from "../Accets/cook6.webp"
import cook7 from "../Accets/cook7.avif"
import cook8 from "../Accets/cook8.avif"
import cook9 from "../Accets/cooks9.avif"
import cook10 from "../Accets/cool10.webp"
import "./Veiw_all.css"
function Veiw_all() {
  return (
    <div>
      <div className=" d-none d-md-block">
<div className="row static_position m-0 bg-white">
    <div className="col-4 text-start veiw_head_text ps-5 ">colloction</div>

<div className="col-2 veiw_head_text text-start">volume</div>
<div className="col-2 veiw_head_text text-start">% Change</div>
<div className="col-2 veiw_head_text text-start">Floor price</div>
<div className="col-2 veiw_head_text text-start">sales</div>
      </div>
      <Card_veiw first_no="1" frist_photo={vei} text_1="Lil Kami" text_2="286 ETH" text_3="—" text_4="0.04 ETH" text_5="5,694"/>
      <Card_veiw first_no="2" frist_photo={cook1} text_1="RTFKT- MNLTH X " text_2="0.50 ETH" text_3="—" text_4="0.04 ETH" text_5="1,694"/>
      <Card_veiw first_no="3" frist_photo={cook2} text_1="Noble Cards: Season One" text_2="26 ETH" text_3="—" text_4="0.23 ETH" text_5="2,694"/>
      <Card_veiw first_no="4" frist_photo={cook3} text_1="ENS:ETHEREUM NAME S..." text_2="28 ETH" text_3="—" text_4="0.12 ETH" text_5="4,694"/>
      <Card_veiw first_no="5" frist_photo={cook4} text_1="Daily Changing Ugly Face" text_2="286 ETH" text_3="—" text_4="0.07 ETH" text_5="6,694"/>
      <Card_veiw first_no="6" frist_photo={cook5} text_1="The Immortal Pass" text_2="86 ETH" text_3="—" text_4="0.02 ETH" text_5="3,694"/>
      <Card_veiw first_no="7" frist_photo={cook6} text_1="Hangyaku" text_2="286 ETH" text_3="—" text_4="0.04 ETH" text_5="7,694"/>
      <Card_veiw first_no="8" frist_photo={cook7} text_1="Bored Y00ts AC" text_2="186 ETH" text_3="—" text_4="0.04 ETH" text_5="8,694"/>
      <Card_veiw first_no="9" frist_photo={cook8} text_1="White Rabbit Producer Pa..." text_2="086 ETH" text_3="—" text_4="0.01 ETH" text_5="9,694"/>
      <Card_veiw first_no="10" frist_photo={cook9} text_1="Bored Ape Yacht Club" text_2="156 ETH" text_3="—" text_4="0.09 ETH" text_5="5,695"/>
      <Card_veiw first_no="12" frist_photo={cook1} text_1="Dipples" text_2="96 ETH" text_3="—" text_4="0.07 ETH" text_5="5,694"/>
      <Card_veiw first_no="14" frist_photo={cook2} text_1="RTFKT- MNLTH X " text_2="246 ETH" text_3="—" text_4="0.04 ETH" text_5="7,554"/>
      <Card_veiw first_no="15" frist_photo={cook3} text_1="Noble Cards: Season One" text_2="546 ETH" text_3="—" text_4="0.04 ETH" text_5="5,114"/>
      <Card_veiw first_no="16" frist_photo={cook4} text_1="ENS:ETHEREUM NAME S..." text_2="126 ETH" text_3="—" text_4="0.08 ETH" text_5="5,623"/>
      <Card_veiw first_no="17" frist_photo={cook5} text_1="Daily Changing Ugly Face" text_2="346 ETH" text_3="—" text_4="0.06 ETH" text_5="2,623"/>
      <Card_veiw first_no="18" frist_photo={cook6} text_1="The Immortal Pass" text_2="186 ETH" text_3="—" text_4="0.05 ETH" text_5="5,454"/>
      <Card_veiw first_no="19" frist_photo={cook7} text_1="Hangyaku" text_2="136 ETH" text_3="—" text_4="0.03 ETH" text_5="5,094"/>
      <Card_veiw first_no="20" frist_photo={cook8} text_1="Bored Ape Yacht Club" text_2="106 ETH" text_3="—" text_4="0.01 ETH" text_5="3,694"/>
   
      </div>
      
    </div>
  )
}

export default Veiw_all
