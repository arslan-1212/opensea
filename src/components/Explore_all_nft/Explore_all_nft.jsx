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
import "./Explore_all_nft.css";
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
    <Box sx={{ display: "flex" }} className="d-none d-md-flex" >
      <CssBaseline />

      <AppBar className="appbar_line  d-none d-md-block">

        <Toolbar className="d-flex justify-content-between">
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
          <Typography variant="h6" noWrap component="div" className="d-flex justify-content-around">
            <div className="me-4">
              <Button
                className="  dashbord me-5"
                id="basic-button"
                aria-controls={open1 ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open1 ? 'true' : undefined}
                onClick={handleClick}
              >
                Sort by  <RiArrowDropDownLine className="fs-2" />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open1}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>Recently listed</MenuItem>
                <MenuItem onClick={handleClose}>Recently created</MenuItem>
                <MenuItem onClick={handleClose}>Bundles</MenuItem>
                <MenuItem onClick={handleClose}>Recently sold</MenuItem>
                <MenuItem onClick={handleClose}>Recently received</MenuItem>
                <MenuItem onClick={handleClose}>Endin soon</MenuItem>
                <MenuItem onClick={handleClose}>Price low to high</MenuItem>
                <MenuItem onClick={handleClose}>Price low to high</MenuItem>
                <MenuItem onClick={handleClose}>Hightest last sale</MenuItem>
                <MenuItem onClick={handleClose}>Oldest</MenuItem>
              </Menu>
            </div>

          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={open}

        className="drawer_appbar_z"
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
        <DrawerHeader>
        </DrawerHeader>

        <div className="drawer_appbar">
          <Accordian_all_nft />
        </div>
      </Drawer>
      
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
          <Collectibles_explore />
        </Typography>
      </Main>
    </Box>
  );
}
