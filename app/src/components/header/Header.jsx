"use client"

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Link from '@mui/material/Link';

const drawerWidth = 240;
//تعریف ایتم های داخل هدر  با ادرس موردنظر
const navItems = [
  { label: 'خانه', path: '/' },
  { label: 'پروژه ها', path: '/projects' },
  { label: 'قالب ها', path: '/templates' },
  { label: 'درباره ما', path: '/about' },
];

const DrawerAppBar = (props) => {
  const { window } = props;

  //تعریف useState ها
  const [mobileOpen, setMobileOpen] = React.useState(false); //useState برای باز و بسته شدن دراور
  const [activeItem, setActiveItem] = React.useState('خانه') //useState برای نشان دادن ایتم فعال در هدر

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavItemClick = (item) => {
    setActiveItem(item);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box marginY={"20px"}>
      <img src='/images/logoDeka.png' width={"100px"}></img>
      </Box>
      <List>
        {navItems.map((item) => (
          <Link href={item.path} key={item.label} underline='none' >
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
          </Link>
        ))}
      </List>
      
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ width: '100%' }}>
      <CssBaseline />
      <Grid component="nav" sx={{ backgroundColor:'transparent', boxShadow: 'none'}}>
        <Grid sx={{margin:'5px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, margin:'10px' }}>
          <img src='/images/logoDeka.png' width={"100px"}></img>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Link href={item.path} key={item.label} >
                <Typography
                  sx={{
                    color: '#fff',
                    fontSize: '1.1rem',
                    marginX: '30px',
                    cursor: 'pointer',
                    borderBottom: activeItem === item.label ? '2px solid red' : 'none',
                    display: 'inline-block',
                  }}
                  onClick={() => handleNavItemClick(item.label)}>
                  {item.label}
                </Typography>
              </Link>
            ))}
          </Box>


        </Grid>
      </Grid>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor:'white' },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;

