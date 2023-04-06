import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Taxex_Frequently() {
  return (
    <div className="container">
        <div className="row d-flex justify-content-center my-5">
            <div className="col-md-9 col-sm-10">

   <h1 className='mb-5 text-center'><b>Frequently asked questions</b></h1>      
{/* <p className='my-5'>For more FAQs visit our partnership page in ourhelp center

<a class="px-2 none" href="" rel="" target="">help center</a> </p>  */}

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> <h6 className='text-start'> <b>can openSea do may taxes for me?</b></h6> </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography className='text-start px-0 px-md-0 coor'>
        No. You are responsible for determining what, if any, taxes apply to your purchases, sales,<br />and transfers of NFTs. If you have specific questions regarding taxes, please consult with a <br /> professional tax advisor.
        <a class="px-2 none" href="" rel="" target="">  Learn more here.</a> 
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion className='my-3'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
                  <Typography> <h6 className='text-start'> <b>What do I owe in taxes?</b></h6> </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography className='text-start px-0 px-md-0 coor'>
        We understand it can feel challenging to work through your purchases, sales, and transfers <br />
         to determine what taxes may apply. Thankfully, there are third-party services who can <br /> help. We recommend CoinTracker as one such service.
       

          </Typography>
         
        </AccordionDetails>
      </Accordion>
      <Accordion className='my-3'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >

<Typography>  <h6 className='text-start'> <b>Wow does openSea work with coinTracker?</b></h6> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-start px-0 px-md-0 coor'>
          CoinTracker is not an OpenSea product, and OpenSea does not share any information with CoinTracker. Items you purchased, sold, or transferred using OpenSea's services will be <br /> available  in your wallet address history. This history is public. CoinTracker will review your <br /> wallet address history to help you determine what taxes you may owe.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='my-3'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
            
          <Typography>  <h6 className='text-start'> <b>what exchanges and currencies are supported? </b></h6></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-start px-0 px-md-0 coor '>
            <p className='text-start'>          Cointracker supports over 300 exchanges and over 8,000 cryptocurrencies.
          <a class="px-2 none" href="" rel="" target="">See a full list of supported exchanges here.</a>  .</p>

          </Typography>
        </AccordionDetails>
      </Accordion>
   
            </div>
        </div>
    </div>
  )
}

export default Taxex_Frequently