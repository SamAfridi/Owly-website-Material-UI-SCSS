import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import ListItem from "@mui/material/ListItem";
import logo from "../images/logo.png";
import "./../style/index.scss";

const drawerWidth = "100%";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  padding: theme.spacing(0, 2),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Slider() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box className="box">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
        >
          <img className="header_contant_img" src={logo} alt="logo" />
          <h2>Owly</h2>
        </Typography>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="end"
          sx={{ ...(open && { display: "none" }) }}
        >
          <BiMenuAltRight />
        </IconButton>
      </Toolbar>
      <Drawer
        sx={{
          width: drawerWidth,

          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
        }}
        variant="persistent"
        anchor="top"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <AiOutlineClose />
            ) : (
              <BiMenuAltRight />
            )}
          </IconButton>
        </DrawerHeader>
        <Box sx={{ paddingLeft: "30%" }}>
          <List className="list">
            <ListItem className="list_Item">Home</ListItem>
            <ListItem className="list_Item">About</ListItem>
            <ListItem className="list_Item">Expertise</ListItem>
            <ListItem className="list_Item">Services</ListItem>
            <ListItem className="list_Item">Timeline</ListItem>
            <ListItem className="list_Item">Award</ListItem>
            <ListItem className="list_Item">Media</ListItem>
            <ListItem className="list_Item">Contact</ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
