"use client";  
import * as React from "react";  
import Grid from "@mui/material/Unstable_Grid2";  
import Box from "@mui/material/Box";  
import ButtonComponent from "../geometricShapes/CustomButton";  
import QuarterCircles from "../geometricShapes/QuarterCircles";  
import DrawerAppBar from "./Desktop";  
import MobileDrawer from "./MobileDrawer";  
import { usePathname } from 'next/navigation';  

// Define the action function here  
const handleButtonClick = () => {  
  window.location.href = "/about";  
};  

const Header = () => {  
  const pathname = usePathname();  

  // تنظیم طول اگر در صفحه خانه باشد یا دیگر صفحات  
  const headerHeight = pathname === '/' ? '300px' : '90px';  

  return (  
    <>  
      {/* header & circle for desktop */}  
      <Grid  
        container  
        sx={{  
          overflowX: "hidden",  
          height: headerHeight, // فقط در صفحه خانه مقدار 300 را میگیرد  
          backgroundColor: "var(--main_color)",  
        }}  
        display={{ xs: "none", md: "flex" }}  
      >  
        <Grid xs={12} md={8}>  
          <DrawerAppBar />  
        </Grid>  
        <Grid  
          md={4}  
          sx={{  
            display: { xs: "none", md: "flex" },  
            justifyContent: "end",  
            position: "relative",  
          }}  
        >  
          {/*  فقط در صفحه خانه اجرا می شود  */}  
          {pathname === '/' && (  
            <Box  
              sx={{  
                position: "absolute",  
                left: "-250px",  
                top: "-250px",  
              }}  
            >  
              <QuarterCircles />  
            </Box>  
          )}  
        </Grid>  
      </Grid>  

      {/* header for mobile size */}  
      <Grid  
        container  
        display={{ xs: "block", md: "none" }}  
        sx={{ backgroundColor: "white" }}  
      >  
        <Grid  
          xs={12}  
          marginY={"15px"}  
          display={"flex"}  
          justifyContent={"center"}  
        >  
          <img src="/images/logoDeka.png" width={"100px"} alt="Logo" />  
        </Grid>  
        <Grid  
          xs={12}  
          display={"flex"}  
          justifyContent={"space-between"}  
          alignItems={"center"}  
        >  
          <Box>  
            <MobileDrawer />  
          </Box>  

          <Box marginX={"10px"}>  
            <ButtonComponent  
              color="var(--sky_blue)"  
              title="مشاوره"  
              action={handleButtonClick} // Use the action function here  
            />  
          </Box>  
        </Grid>  
      </Grid>  
    </>  
  );  
};  

export default Header;