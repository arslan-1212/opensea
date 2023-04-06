import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Table_col from '../Table_col/Table_col';
import Icon_bar_respon from '../Icon_bar_respon/Icon_bar_respon';
import Icon_bar from '../Icon_bar/Icon_bar'
import { RiArrowDropDownLine } from 'react-icons/ri';
// import Responsive_table from '../Responsive_table/Responsive_table';
// import "./Tab.css"
// import Top_table from '../Top_table/Top_table';
// import Resposive_table_top from '../Resposive_table_top/Resposive_table_top';
import Veiw_all from '../Veiw_all/Veiw_all';
import Veiw_card_res from '../Veiw_card_res/Veiw_card_res';
import "./View_tab.css"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    className=''
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

    <Box sx={{ width: '100%' }} className="pd_fixed1 mb-5">
      <div className="py-4 text-center text-md-start ps-0 ps-md-4 ">
        <h1 className='fw-bold'>Collection stats</h1>
      </div>
      <Box className='  all-flex ' >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example " className='ps-4 cooolor'
      variant='scrollable'
        >
          <Tab label="Trending" {...a11yProps(0)} sx={{ fontSize: "15px", fontWeight: "700" }} />
          <Tab label="Top" {...a11yProps(1)} sx={{ fontSize: "15px", fontWeight: "700" }} />
          <Tab label="Watchlist" {...a11yProps(2)} sx={{ fontSize: "15px", fontWeight: "700" }} />

        </Tabs>
        <div className="d-flex justify-content-around mt-4 mt-md-0 pt-4 pt-md-0 paddd-end-lg">
          <div>
            <button className='btn btn-lg btn-lg-lg border radius-border px-4 me-1'> 24h <RiArrowDropDownLine className='fs-2'/></button>
          </div>
          <Icon_bar_respon />
          <Icon_bar />
          <div>
            {/* <button className='btn btn-lg btn-lg-lg border radius-border ms-1 '> Veiw All</button> */}
          </div>
        </div>
       
      </Box>
      <hr/>
<div className="px-md-4 px-0">
      <TabPanel value={value} index={0}>
       <Veiw_all/>
       <Veiw_card_res/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Veiw_all/>
       <Veiw_card_res/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Veiw_all/>
       <Veiw_card_res/>
      </TabPanel>
      </div>
    </Box>
  );
}
