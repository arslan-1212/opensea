import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./Explore.css";
import Trending from '../Trending/Trending';
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

function Explore() {

    const [value, setValue] = React.useState(0);


    const trending_Data=[{
       linkUrl: [
        {'url':"https://i.seadn.io/gcs/files/2754ce09410ac26f95a1c44e2719dc6f.jpg?auto=format&w=3840"},
        {'url': "https://i.seadn.io/gcs/files/f980181df268011a4491137fc71afdb5.jpg?auto=format&w=128"}
    ],
        title:"Trump Digital Trading Cards"
    }
]
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div className="explore_main">
                <div className="container-fluid">
                    <div className="row">
                        <div class="sc-29427738-0 sc-e1213540-0 dVNeWL ktCeqg">
                            <div class="sc-29427738-0 sc-630fc9ab-0 SipyW jSPhMX">
                                <div class="fresnel-container fresnel-lessThan-sm ">
                                </div>
                                <div class="fresnel-container fresnel-greaterThanOrEqual-sm ">
                                    <h1 class="sc-29427738-0 sc-d58c749b-0 jfEjBH ipKiCP">Explore collections</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row tab_main">
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Trending" {...a11yProps(0)} />
                                    <Tab label="Top" {...a11yProps(1)} />
                                    <Tab label="Art" {...a11yProps(2)} />
                                    <Tab label="Collectibles" {...a11yProps(3)} />
                                    <Tab label="Domain Names" {...a11yProps(4)} />
                                    <Tab label="Music" {...a11yProps(5)} />
                                    <Tab label="Photography" {...a11yProps(6)} />
                                    <Tab label="Sports" {...a11yProps(7)} />
                                    <Tab label="Trading Cards" {...a11yProps(8)} />
                                    <Tab label="Utility" {...a11yProps(9)} />
                                    <Tab label="Virtual Worlds" {...a11yProps(10)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <div className="">
                                    <div className="row">
                                        <div className="col-md-4">

                                            <Trending  url="https://i.seadn.io/gcs/files/2754ce09410ac26f95a1c44e2719dc6f.jpg?auto=format&w=3840" secondUrl="https://i.seadn.io/gcs/files/f980181df268011a4491137fc71afdb5.jpg?auto=format&w=128" title="Trump Digital Trading Cards"  />
                                        </div>
                                        <div className="col-md-4">

                                            <Trending url="https://i.seadn.io/gcs/files/9617c138dee52ff098742ce9e25f5d8a.png?auto=format&w=2048" secondUrl="https://i.seadn.io/gcs/files/9617c138dee52ff098742ce9e25f5d8a.png?auto=format&w=2048" title="Mutant Hound Collars" />
                                        </div>
                                        <div className="col-md-4">

                                            <Trending url="https://i.seadn.io/gae/KvlgKf6LLnjB1-m6jewIZz4e66VW5NWewtUXECDnTPYzOTuCWSsiQ8QhqFQ1TWzGbVwlczgGtjVrCKoj4nzdH8WJCM1w4QLVJseOkIQ?auto=format&w=2048" secondUrl="https://i.seadn.io/gae/Jt0pP1TzhfUrG52l_Ffe0I8KcPWmaUjk14W3R1UuuHM4BJfqS4jBkfv9-euuMQRLxNS44PvV3V_ZtMgkAhS4bBkK8FeFW2qDh-TM6A?auto=format&w=128"  title="Wolf Game" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">

                                            <Trending  url="https://i.seadn.io/gcs/files/86fd57236ca5539ede498e2b5abb2ca7.png?auto=format&w=2048" title="Trump Digital Trading Cards" secondUrl="https://i.seadn.io/gcs/files/84aeda61734ec5126c8eedd88872ebb8.png?auto=format&w=128"  />
                                        </div>
                                        <div className="col-md-4">

                                            <Trending url="https://i.seadn.io/gcs/files/685fbc921e4ae5b3a6017829a2426aac.jpg?auto=format&w=3840" secondUrl="https://i.seadn.io/gcs/files/baa3587972e4c666cd8f8e214379b0b1.jpg?auto=format&w=256" title="Mutant Hound Collars" />
                                        </div>
                                        <div className="col-md-4">

                                            <Trending url="https://i.seadn.io/gcs/files/f1c896f15955b69e7b759bf8ea8a2118.png?auto=format&w=3840" secondUrl="https://i.seadn.io/gcs/files/2491ef33b7163325c3d80a1782d2b681.png?auto=format&w=256"  title="Wolf Game" />
                                        </div>
                                    </div>
                                </div>

                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                Item Two
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                Item Three
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                Item One
                            </TabPanel>
                            <TabPanel value={value} index={4}>
                                Item Two
                            </TabPanel>
                            <TabPanel value={value} index={5}>
                                Item Three
                            </TabPanel>
                            <TabPanel value={value} index={6}>
                                Item One
                            </TabPanel>
                            <TabPanel value={value} index={7}>
                                Item Two
                            </TabPanel>
                            <TabPanel value={value} index={8}>
                                Item Three
                            </TabPanel>
                            <TabPanel value={value} index={9}>
                                Item One
                            </TabPanel>
                            <TabPanel value={value} index={10}>
                                Item Two
                            </TabPanel>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore