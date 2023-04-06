import * as React from "react";
import { useState } from "react";
import "./Accordian_all_nft.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Radio } from "@mui/material";
import acc1 from "../Assets/acc1.avif";
import acc2 from "../Assets/acc2.avif";
import acc3 from "../Assets/acc3.avif";
import acc4 from "../Assets/acc4.avif";
import acc5 from "../Assets/acc5.avif";
import acc6 from "../Assets/acc6.webp";
import acc7 from "../Assets/acc7.webp";
import acc8 from "../Assets/acc8.avif";
import chain1 from "../Assets/chain1.svg";
import chain2 from "../Assets/chain1.svg";
import chain3 from "../Assets/chain3.png";
import chain4 from "../Assets/chain4.svg";
import chain5 from "../Assets/chain5.svg";
import chain6 from "../Assets/chain4.svg";

import Accorden_data from "../Accorden_data/Accorden_data";
import E_acordin_h from "../E_acordin_h/E_acordin_h";
import SearchIcon from "@mui/icons-material/Search";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function SimpleAccordion() {
  const [age, setAge] = React.useState("");
  const [showw, setShoww] = useState(false);
  const handleClosee = () => setShoww(false);
  const handleShoww = () => setShoww(true);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="activity_acordian_dawer mt-5">
      <Accordion disableGutters defaultExpanded className="px-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="fs-2" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" className="fw-bold">
            Status
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="new_main" onClick={handleClosee}>
              <span className="new_all">Buy Now</span>
              <Checkbox
                {...label}

                sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}

              />
            </div>

            <div className="new_main">
              <span className="new_all">On Auction</span>
              <Checkbox
                {...label}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}
                onClick={handleClosee}
              />
            </div>

            <div className="new_main">
              <span className="new_all">New</span>
              <Checkbox
                {...label}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}
              />
            </div>

            <div className="new_main">
              <span className="new_all">Has Offers</span>
              <Checkbox
                {...label}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}
              />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters className="px-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="fs-2" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6" className="fw-bold">
            Price
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="d-flex align-items-center justify-content-evenly">
            <div>
              <FormControl sx={{ minWidth: 90 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  className="selecter_border "
                >
                  <MenuItem value="" className="menutext">
                    <em className="menutext">USD</em>
                  </MenuItem>
                  <MenuItem className="menutext" value={10}>
                    ETH
                  </MenuItem>
                  <MenuItem className="menutext" value={20}>
                    SOL
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="radius_boreder_text">
              <TextField autoFocus placeholder="Min" className="hello_height" />
            </div>
            <div>
              <p className="fw-bold fs-5 px-1 pt-3">to</p>
            </div>
            <div className="radius_boreder_text">
              <TextField autoFocus placeholder="Max" className="hello_height" />
            </div>
          </Typography>
          <div>
            <button className="btn btn-primary btn-lg w-100 fw-bold pb-2 classs_apply my-3">
              Apply
            </button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters className="px-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="fs-2" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" className="fw-bold">
            Quantity
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="new_main">
              <span className="new_all">All items</span>
              <Radio
                {...label}
                defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}
              />
            </div>

            <div className="new_main">
              <span className="new_all">Single items</span>
              <Radio
                {...label}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}
              />
            </div>

            <div className="new_main">
              <span className="new_all">Bundles</span>
              <Radio
                {...label}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}
              />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters className="px-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="fs-2" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" className="fw-bold">
            Collection
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='my-2  position-relative w-100'><SearchIcon className='input_icon' /><input type="text" placeholder='Fiter ' className='input_border py-2 ps-5' /> </div>
            <Accorden_data acc1={acc1} crypto="CryptoPunks" num="9,998" />
            <Accorden_data acc1={acc2} crypto="Bored Ape Ya..." num="9,998" />
            <Accorden_data acc1={acc3} crypto="Otherdeed for Otherside" num="99,999" />
            <Accorden_data acc1={acc4} crypto="Mutant Hound " num="10,000" />
            <Accorden_data acc1={acc5} crypto="Mutant Ape Yacht Club" num="19,435" />
            <Accorden_data acc1={acc6} crypto="Kubz" num="5,787" />
            <Accorden_data acc1={acc7} crypto="The Potatoz" num="9,999" />
            <Accorden_data acc1={acc8} crypto="Pudgy Pengu" num="9,998" />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters className="px-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="fs-2" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" className="fw-bold">
            Collection
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='my-2  position-relative w-100'><SearchIcon className='input_icon' /><input type="text" placeholder='Fiter ' className='input_border py-2 ps-5' /> </div>
            <Accorden_data acc1={chain1} crypto="CryptoPunks" num="" />
            <Accorden_data acc1={chain2} crypto="Bored Ape Ya..." num="" />
            <Accorden_data acc1={chain3} crypto="Otherdeed for Otherside" num="" />
            <Accorden_data acc1={chain4} crypto="Mutant Hound " num="" />
            <Accorden_data acc1={chain5} crypto="Mutant Ape Yacht Club" num="" />
            <Accorden_data acc1={chain6} crypto="Kubz" num="" />


          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters className='px-2'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="fs-2" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" className="fw-bold">Category</Typography>
        </AccordionSummary>


        <AccordionDetails>
          <div className='my-2 position-relative '><SearchIcon className='input_icon' /><input type="text" placeholder='Fiter ' className='input_border py-2 ps-5' /> </div>
          <Typography>
            <div className='d-flex justify-content-between'>
              <div> Domain Names</div>
              <div className=''><Checkbox className=''  {...label} sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }} /></div></div>
            <div className='d-flex justify-content-between'>
              <div> Domain Names</div>
              <div className=''><Checkbox  {...label} sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }} /></div></div>
            <div className='d-flex justify-content-between'><div> Sports</div>
              <div className=''><Checkbox  {...label} sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }} /></div>     </div>
            <div className='d-flex justify-content-between'>
              <div> Music </div>
              <div className=''><Checkbox  {...label} sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }} /></div> </div>
            <div className='d-flex justify-content-between'>
              <div> Photography </div>
              <div className=''><Checkbox  {...label} sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }} /></div> </div>
            <div className='d-flex justify-content-between'>
              <div> Sports </div>
              <div className=''><Checkbox  {...label} sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }} /></div> </div>
            <div className='d-flex justify-content-between'>
              <div> Trading Cards </div>
              <div className=''><Checkbox  {...label} sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }} /></div> </div>
            <div className='d-flex justify-content-between'>
              <div> Utility </div>
              <div className=''><Checkbox  {...label} sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }} /></div> </div>
            <div className='d-flex justify-content-between'>
              <div> Virtual Worlds </div>
              <div className=''><Checkbox  {...label} sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }} /></div> </div>


          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters className='px-2'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='fs-2' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h6' className='fw-bold'>Currency</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='d-flex justify-content-between'>
              <div>

                WETH

              </div>
              <div className=''><Checkbox  {...label} sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }} /></div></div>
            <div className='d-flex justify-content-between'>
              <div> APE</div>
              <div className=''><Checkbox  {...label} sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }} /></div></div>
            <div className='d-flex justify-content-between'><div> APE</div>
              <div className=''><Checkbox  {...label} sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }} /></div>     </div>
            <div className='d-flex justify-content-between'>
              <div> AVAX </div>
              <div className=''><Checkbox  {...label} sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }} /></div> </div>


          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
