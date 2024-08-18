
"use client"

import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Link from '@mui/material/Link';
import { usePathname } from 'next/navigation'; // Import usePathname



const navItems = [
  { label: 'خانه', path: '/' },
  { label: 'پروژه ها', path: '/projects' },
  { label: 'قالب ها', path: '/templates' },
  { label: 'درباره ما', path: '/about' },
];

const DrawerAppBar = (props) => {
  const { window } = props; 
  const pathname = usePathname(); // Use usePathname to get the current route
  const currentPath = pathname;


  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Box marginY={"20px"}>
        <img src='/images/logoDeka.png' width={"100px"} alt="Logo" />
      </Box>
      <List>
        {navItems.map((item) => (
          <Link href={item.path} key={item.label} underline='none'>
            <ListItem disablePadding>
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
      <Grid component="nav" sx={{ boxShadow: 'none' }}>
        <Grid sx={{margin:'5px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, margin:'10px' }}>
            <img src='/images/logoDeka.png' width={"100px"} alt="Logo" />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Link href={item.path} key={item.label}>
                <Typography
                  sx={{
                    color: '#fff',
                    fontSize: '1.1rem',
                    marginX: '30px',
                    cursor: 'pointer',
                    borderBottom: currentPath === item.path ? '2px solid red' : 'none',
                    display: 'inline-block',
                  }}
                >
                  {item.label}
                </Typography>
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>
     
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;


