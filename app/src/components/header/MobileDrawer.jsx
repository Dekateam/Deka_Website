"use client"
import * as React from 'react';
import "./styles.css"
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';  
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import Diversity1Icon from '@mui/icons-material/Diversity1';


export default function MobileDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

 

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ left: open });
  };

  const menuItems = [
    { title: 'خانه', url: '/', icon: <HomeIcon /> },
    { title: 'پروژه ها', url: '/projects', icon: <MailIcon /> },
    { title: 'قالب ها', url: '/templates', icon: <InboxIcon /> },
    { title: 'درباره ما', url: '/about', icon: <Diversity1Icon /> },
  ];

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item,index) => (
          <ListItem key={index} disablePadding>
            <Link href={item.url} passHref className='none-decoration'>
              <ListItemButton component="a">
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} className='text-center'/>
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Box 
        width={"40px"}
        height={"40px"}
        borderRadius={"10px"}
        sx={{backgroundColor:"#011a30"}}
        onClick={toggleDrawer(true)}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"white"}
        margin={"10px"}
      >
        <MenuIcon />
      </Box>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}
