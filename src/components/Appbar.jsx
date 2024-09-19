import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Divider } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Appbar = () => {
  const [open, setOpen] = useState(false);

   const handClose =()=>{
    setOpen(!open)
   }

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <div style={{ display: 'flex' }}>
      <AppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
         <MenuIcon/>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            My App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Toolbar />
        <div>
          <List>
          <ListItem button component={Link} to="/DashBoard">
              <ListItemText onClick={handClose} primary="DashBoard" />
            </ListItem>
            <ListItem button component={Link} to="/home">
              <ListItemText onClick={handClose} primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemText onClick={handClose} primary="About" />
            </ListItem>
            <ListItem button component={Link} to="/contact">
              <ListItemText onClick={handClose} primary="Contact" />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
      <main
        style={{
          flexGrow: 1,
          padding: '16px',
          marginLeft: drawerWidth,
        }}
      >
        {/* Your main content goes here */}
      </main>
    </div>
  );
};

export default Appbar;
