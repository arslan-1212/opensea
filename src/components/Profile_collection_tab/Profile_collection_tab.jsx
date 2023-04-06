import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IoFilterSharp } from 'react-icons/io5';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import { MdFormatListBulleted } from 'react-icons/md';
import { MdGridOn } from 'react-icons/md';
import { BsGrid1X2 } from 'react-icons/bs';
import { RxViewGrid } from 'react-icons/rx';
import Accordion from 'react-bootstrap/Accordion';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Profile_collection_card from '../Profile_collection_card/Profile_collection_card';
import "./Profile_collection_tab.css";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Radio } from '@mui/material';
import Profile_collection_tab_mob from '../Profile_collection_tab_mob/Profile_collection_tab_mob';
import Profile_collection_tab_item_data from '../Profile_collection_tab_item_data/Profile_collection_tab_item_data';
// import Drawer_profile_collection from './components/Drawer_profile_collection/Drawer_profile_collection';
import Drawer_profile_collection from "../Drawer_profile_collection/Drawer_profile_collection"
import Profile_nft_activity from "../Profile_nft_activity/Profile_nft_activity"
import Profile_nft_analytics from "../Profile_nft_analytics/Profile_nft_analytics"
import Activity_nft_details from "../Profile_nft_activity/Activity_nft_details";


function TabPanel(props) {
    const { children, value, index, ...other } = props

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

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function Profile_collection_tab() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div className="taaabbs spc_btm">
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Items" {...a11yProps(0)} />
                            <Tab label="Analytics" {...a11yProps(1)} />
                            <Tab label="Activity" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0} className="d-block">
                        <div className="d-block d-md-none">
                            <Profile_collection_tab_item_data />
                        </div>
                        <Drawer_profile_collection />
                    </TabPanel>
                    <TabPanel value={value} index={1} sx={{padding:"0px"}}>
                    <Profile_nft_analytics/>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Profile_nft_activity/>
                        <div className='d-block d-md-none'>
                        <Activity_nft_details />
                        </div>
                    </TabPanel>
                </Box>
            </div>


        </div>
    )
}

export default Profile_collection_tab