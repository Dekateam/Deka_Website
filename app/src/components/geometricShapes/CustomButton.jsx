"use client";
import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const CustomButton = styled(Button)(({ theme, buttoncolor }) => ({
  backgroundColor: buttoncolor,
  color: "black",
  borderRadius: "16px",
  paddingX: "18px",
  "&:hover": {
    backgroundColor: buttoncolor,
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: buttoncolor,
  },
  "&:focus": {
    boxShadow: `0 0 0 0.2rem ${buttoncolor}`, // Corrected this line
  },
}));

const ButtonComponent = ({ color, title, action }) => {

  const handleClick = () => {
    if (typeof action === 'function') {
      action();
    }
  };

  return (
    <Box
      display={"flex"}
      justifyContent={{ xs: "center", md: "right" }}
      marginX={{ md: "40px", lg: "0" }}
    >
      <CustomButton
        buttoncolor={color} // Prop name changed to lowercase
        variant="contained" 
        disableRipple 
        onClick={handleClick}
      >
        {title}
      </CustomButton>
    </Box>
  );
};

export default ButtonComponent;
