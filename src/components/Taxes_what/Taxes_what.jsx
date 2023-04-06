import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LockIcon from "@mui/icons-material/Lock";
import Button from '@mui/material/Button';

function Taxes_what() {
  return (
    <>
      <h1 className="my-5 text-center">
        {" "}
        <b>What OpenSea users get</b>
      </h1>

      <div className="container">
        <div className="row justify-content-center  ">
          <div className="col-lg-6">
            <div className="d-flex">            <div className=" text-primary call me-4">
              <ShoppingCartIcon />
            </div>
            <div className="text-start">
              <h6 className="mb-3">
                {" "}
                <b>
                  {" "}
                  Free for up to 50 <br /> <span>transactions</span>
                </b>
              </h6>
              <p>
                Join CoinTracker to get free tax <br /> reports for up to 50
                transactions <br /> your first year.
              </p>
            </div>
          </div>
          </div>





          <div className="col-lg-6  ">
            <div className="d-flex">
            <div className="text-primary call me-4">
              <span>
                {" "}
                <ThumbUpOffAltIcon />
              </span>
            </div>
            <div className="text-start">
              <h6 className="mb-3">
                {" "}
                <b>
                  {" "}
                  Discounted for power <br /> users
                </b>
              </h6>
              <p>
                Get 10% off all CoinTracker <br /> premium services.
              </p>
            </div>
          </div>
        </div>
        </div>




        <div className="row mt-5">
  <div className="col-md-6 d-flex ">
<div className=' text-primary call me-4'>
<AccountBalanceWalletIcon/>
</div>  
    <div className='text-start'><h6 className='mb-3'> <b> Simple and seamless filing</b></h6>
     <p>With flexible filing options, <br /> CoinTracker makes managing <br /> your NFT taxes easy.
     </p></div>
  </div>
  <div className="col-md-6 d-flex ">
<div className='text-primary call me-4'>

<span> <LockIcon/>
</span>

</div>  
    <div className='text-start'><h6 className='mb-3'> <b> 
Trusted and secure  <br />platform</b></h6>
     <p>CoinTracker has over 500,000 <br /> users and tracks over $20 billion <br/>in crypto assets.
     </p></div>
  </div>
</div>

<Button variant="contained" className="p-3 bb d-block m-auto my-3">Get started</Button>

      </div>
    </>
  );
}

export default Taxes_what;
