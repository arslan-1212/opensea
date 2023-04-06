import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Nextdrop from './Nextdrop';
import picone from "../Assets/roadmap.avif"
import pictow from "../Assets/roadmap-2.avif"
import picthree from "../Assets/roadmap-3.avif"
import Team from './Team';
import gain from "../Assets/gianpiero-1.avif"
import FAQ from "../Next_dg/FAQ"
import Minnt from './Minnt';
import collpic from "../Assets/collection-logo.avif"
import { MdVerified } from 'react-icons/md';
import { AiOutlineBell } from 'react-icons/ai';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='container-fluid '>
            <div className="row">
                <div className="col-md-12 col-sm-12 p-0">
                    <div className="uperr">
                        <video src="./images/banner.mp4" autoPlay loop playsinline muted className="bike_movi naexdgggg" style={{borderRadius:'0px'}}></video>
                   
                    </div>
                </div>
                <div className="col-md-12 col-sm-12">
                    <div className='drop_tab_box'>
                        <Box sx={{ width: '100%' }} >
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable" className="bx_scrol">
                                    <Tab label="Mint" className='fw-bold ' {...a11yProps(0)} />
                                    <Tab label="Roadmap" className='fw-bold ' {...a11yProps(1)} />
                                    <Tab label="Team" className='fw-bold ' {...a11yProps(2)} />
                                    <Tab label="FAQ" className='fw-bold ' {...a11yProps(3)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <Minnt />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <Nextdrop photo={picone} peraone="December 2022" first_pera="inBetweeners x Dolce&Gabbana and UNXD Drop" second_pera="" />
                                <Nextdrop photo={pictow} peraone="December 2022" first_pera="Art Reveal"
                                    second_pera="The reveal will feature exclusive art designed by GianPiero in collaboration with Dolce&Gabbana. The art includes a variation of 21 unique collectibles of Gianpiero’s iconic bears reimagined in DG fashion… with each dripped out in Dolce. Upon reveal, the DG vault piece your bear is wearing will be the physical D&G product you can redeem. Additionally, you will receive a limited edition physical print of the collectible you reveal" />
                                <Nextdrop photo={picthree} peraone="Early 2023" first_pera="Redemption"
                                    second_pera="Drip IRL! Holders of DG x inBetweeners Drip collection will be able to redeem their digital collectible for the physical DG product via a 3rd party redemption platform. Additionally, holders will receive a limited edition physical print of their Drip Collectible." />
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <Team balu={gain} hading="GianPiero" heading2="Artist & Visionary"
                                    prar="GianPiero, aka GP, is an artist born and raised outside of Naples, Italy whose work exudes happiness, positivity, and playfulness. Over the past ten years, GianPiero has organically built a following of over 140k+ Instagram followers, captivating the attention and being commissioned by the likes of Snoop Dog, Netflix, Levi's, and most notably Justin Bieber. In 2019, Justin discovered GianPiero on Instagram and reached out to him asking if he’d help him on a project, Drewhouse. GP was later recruited has been the creative director of DrewHouse, where he leads the art and illustration for the brand." />
                                <div className=''>
                                    <Team balu={gain} hading="GianPiero" heading2="Artist & Visionary"
                                        prar="GianPiero, aka GP, is an artist born and raised outside of Naples, Italy whose work exudes happiness, positivity, and playfulness. Over the past ten years, GianPiero has organically built a following of over 140k+ Instagram followers, captivating the attention and being commissioned by the likes of Snoop Dog, Netflix, Levi's, and most notably Justin Bieber. In 2019, Justin discovered GianPiero on Instagram and reached out to him asking if he’d help him on a project, Drewhouse. GP was later recruited has been the creative director of DrewHouse, where he leads the art and illustration for the brand." />
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                <div className='mt-5'>
                                    <FAQ main_heading="When is the mint date?"
                                        explain="Phase 1: Premium Holders Access for inBetweeners &amp; DGFamily Box Holders 12/13/2022 at 3pm EST."
                                        explain2="Phase 2: Allowlist Early Access 12/13/2022 at 3:30pm EST."
                                        explain3="Phase 3: Public 12/13/2022 at 4pm EST." />
                                </div>
                                <div className='mt-4'>
                                    <FAQ main_heading="What is the mint price?"
                                        explain="Phase 1: Premium Holders Access for inBetweeners &amp; DGFamily Box Holders 12/13/2022 at 3pm EST."
                                        explain2="Phase 2: Allowlist Early Access 12/13/2022 at 3:30pm EST."
                                        explain3="Phase 3: Public 12/13/2022 at 4pm EST." />
                                </div>
                                <div className='mt-4'>
                                    <FAQ main_heading="What will i get for redeeming my collectible?"
                                        explain="Phase 1: Premium Holders Access for inBetweeners &amp; DGFamily Box Holders 12/13/2022 at 3pm EST."
                                        explain2="Phase 2: Allowlist Early Access 12/13/2022 at 3:30pm EST."
                                        explain3="Phase 3: Public 12/13/2022 at 4pm EST." />
                                </div>
                                <div className='mt-4'>
                                    <FAQ main_heading="How will I redeeming my DRIP tokan for the physical item?"
                                        explain="Phase 1: Premium Holders Access for inBetweeners &amp; DGFamily Box Holders 12/13/2022 at 3pm EST."
                                        explain2="Phase 2: Allowlist Early Access 12/13/2022 at 3:30pm EST."
                                        explain3="Phase 3: Public 12/13/2022 at 4pm EST." />
                                </div>
                                <div className='mt-4'>
                                    <FAQ main_heading="When is the reveal?"
                                        explain="Phase 1: Premium Holders Access for inBetweeners &amp; DGFamily Box Holders 12/13/2022 at 3pm EST."
                                        explain2="Phase 2: Allowlist Early Access 12/13/2022 at 3:30pm EST."
                                        explain3="Phase 3: Public 12/13/2022 at 4pm EST." />
                                </div>
                                <div className='mt-4'>
                                    <FAQ main_heading="How many can I mint?"
                                        explain="Phase 1: Premium Holders Access for inBetweeners &amp; DGFamily Box Holders 12/13/2022 at 3pm EST."
                                        explain2="Phase 2: Allowlist Early Access 12/13/2022 at 3:30pm EST."
                                        explain3="Phase 3: Public 12/13/2022 at 4pm EST." />
                                </div>
                                <div className='mt-4'>
                                    <FAQ main_heading="How do I purchase with a credit card or debit?"
                                        explain="Phase 1: Premium Holders Access for inBetweeners &amp; DGFamily Box Holders 12/13/2022 at 3pm EST."
                                        explain2="Phase 2: Allowlist Early Access 12/13/2022 at 3:30pm EST."
                                        explain3="Phase 3: Public 12/13/2022 at 4pm EST." />
                                </div>
                                <div className='my-4 '>
                                    <FAQ main_heading="Are there any mint reserved from the team?"
                                        explain="Phase 1: Premium Holders Access for inBetweeners &amp; DGFamily Box Holders 12/13/2022 at 3pm EST."
                                        explain2="Phase 2: Allowlist Early Access 12/13/2022 at 3:30pm EST."
                                        explain3="Phase 3: Public 12/13/2022 at 4pm EST." />
                                </div>
                            </TabPanel>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
}