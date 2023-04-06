import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table_col from '../Table_col/Table_col';
import Icon_bar_respon from '../Icon_bar_respon/Icon_bar_respon';
import Icon_bar from '../Icon_bar/Icon_bar'
import Responsive_table from '../Responsive_table/Responsive_table';
import "./Tab.css"
import Top_table from '../Top_table/Top_table';
import Resposive_table_top from '../Resposive_table_top/Resposive_table_top';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { borderColor } from '@mui/system';
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
    <Box sx={{ width: '100%' }}>
      <Box className='  all-flex ' sx={{ borderBottom: "1px solid" , borderColor: "#ddd"}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example " className='ps-4 cooolor'
      
        >
          <Tab label="Trending" {...a11yProps(0)} sx={{ fontSize: "20px", fontWeight: "700" }} />
          <Tab label="Top" {...a11yProps(1)} sx={{ fontSize: "20px", fontWeight: "700" }} />

        </Tabs>
        <div className="d-flex justify-content-between mt-4 mt-md-0 paddd-end-lg">
          <div>
            <button className='btn btn-lg btn-lg-lg border radius-border px-3 me-1 shdow_none'> 24h <RiArrowDropDownLine className='fs-2'/></button>
          </div>
          <Icon_bar_respon />
          <Icon_bar />
          <div>
            <Link to="/View_tab"><button className='btn btn-lg btn-lg-lg border radius-border ms-1 px-3 shdow_none'> Veiw All</button></Link>
          </div>
        </div>
      
      </Box>


      <TabPanel value={value} index={0}>
        <Table_col />
<Responsive_table/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Top_table/>
        <Resposive_table_top/>
      </TabPanel>
      
    </Box>
  );
}
