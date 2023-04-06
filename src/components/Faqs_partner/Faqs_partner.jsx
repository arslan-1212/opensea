import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Faqs_partner() {
  return (
    <div className="container">
        <div className="row d-flex justify-content-center my-5">
            <div className="col-md-8 col-sm-10">

   <h1 className='mb-1'><b>FQAS</b></h1>      
<p className='my-5'>For more FAQs visit our partnership page in our

<a class="px-2 none" href="" rel="" target="">help center</a> </p> 

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> <h5 className='text-start'> <b>What is an NFT? What is market them so great?</b></h5> </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography className='text-start px-0 px-md-0 coor'>
          An NFT is a digital asset stored on the blockchain. These assets hold <br /> information, like descriptions, properties, and media files. NFTs are unique, <br />  one-of-a-kind, and non-interchangeable. <br /> <br />

The history of every NFT is recorded on the blockchain, meaning buyers can  <br/> prove their ownership and creators can receive creator earnings every time <br /> their work is re-sold. NFTs can be traded on marketplaces, proudly displayed <br />
 in online galleries or used to access exclusive content and real-life <br /> experiences.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion className='my-3'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
                  <Typography> <h5 className='text-start'> <b>What makes OpenSea special?</b></h5> </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography className='text-start px-0 px-md-0 coor'>
          OpenSea is the largest NFT marketplace, with the most users and projects. <br /> <br /> Sellers can benefit from creator earnings of up to 10% on OpenSea. Combined   <br />

          with our secondary market dominance, content curation, and sorting  <br/> features, your NFTs will be primed for success long after the initial sale. <br /> 
          </Typography>
         
        </AccordionDetails>
      </Accordion>
      <Accordion className='my-3'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >

<Typography>  <h5 className='text-start'> <b>What does a partnership with OpenSea entail?</b></h5> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-start px-0 px-md-0 coor'>
          OpenSea partners can enjoy guidance from our industry leading experts on  <br />
          NFT development, sale structure, and promotion. <br /> < br />
          Once you’ve finalized your content, we will advise on pricing based on  <br />
          previous sales and current market trends. Our dedicated team will make sure  <br />
          you feel comfortable using the platform and advise on best practices. <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='my-3'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
            
          <Typography>  <h5 className='text-start'> <b>How do we get started? </b></h5></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-start px-0 px-md-0 coor '>
          Currently, we’re most interested in promoting projects that have multi-tiered  <br/>
          sales (i.e. 1-of-1s, 1-of-manys, etc), have interesting & unique artwork, include   <br/>
          robust digital unlockable content experiences, and have already been    <br/>
          marketed in well-trafficked channels. If you fit this description, please fill in <br/>
          our partnership request form <a class="px-2 none" href="" rel="" target="">help center</a>  .
          </Typography>
        </AccordionDetails>
      </Accordion>
   
            </div>
        </div>
    </div>
  
  );
}