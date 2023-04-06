import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
// import "./Drawer_profile_collection.css"
// import "./Explore_all_nft.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Domain_explore from "../Domain_explore/Domain_explore";
import Accordian_all_nft from "../Accordian_all_nft/Accordian_all_nft";
import Canvas_accordian from "../Canvas_accordian/Canvas_accordian";
import FilterListIcon from "@mui/icons-material/FilterList";
import Collectibles_explore from "../Collectibles_explore/Collectibles_explore";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsGrid, BsGrid1X2, BsGrid3X3 } from "react-icons/bs";
import { ButtonGroup } from "@mui/material";
import Profile_collection_card from "../Profile_collection_card/Profile_collection_card";
// import Drawer_card_of_cards from "./Drawer_card_of_cards";
import Activity_accordian from "../Profile_nft_activity/Activity_accordian"
import Activity_nft_details from "./Activity_nft_details";
import "./Profile_nft_activity.css"
import { HiOutlineSearch } from "react-icons/hi";

const drawerWidth = 340;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
     <AppBar className="upper_drwr_baar css-ciy9n4-MuiPaper-gdg d-none d-md-block">

<Toolbar className=" d-flex justify-content-between">
  <IconButton
    className="circle_icon"
    aria-label="open drawer"
    onClick={handleDrawerOpen}
    edge="start"
    sx={{ mr: 2, display: !open ? "block" : "none" }}
  >
    <FilterListIcon />
  </IconButton>



  <IconButton
    className="circle_icon"
    aria-label="open drawer"
    onClick={handleDrawerClose}
    edge="start"
    sx={{ mr: 2, display: !open ? "none " : " block" }}
  >
    {" "}
    <FilterListIcon />
  </IconButton>

</Toolbar>
</AppBar>
    
    
    <Box sx={{ display: "flex" }} className="d-none d-md-flex upr_drww" >
      <CssBaseline />

      <Drawer open={open}

        className="drawer_appbar_zgss drawer_appbar_z_analytics"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"

      >
        {/* <DrawerHeader>
        </DrawerHeader> */}

        <div className="activirt_drawer_appbar ">
          
          <Activity_accordian/>
        </div>
      </Drawer>

        <Main open={open}>
          <DrawerHeader />
          <Typography style={{width: "100%"}}>
            <Activity_nft_details />
          </Typography>
        </Main>
     
    </Box>
    </>
  );
}
