"use client";
import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import ButtonComponent from "../geometricShapes/CustomButton";
import QuarterCircles from "../geometricShapes/QuarterCircles";
import DrawerAppBar from "./Desktop";
import MobileDrawer from "./MobileDrawer";

// تعریف تابع اکشن در اینجا
const handleButtonClick = () => {
  window.location.href = "/about";
};

const Header = () => {
  return (
    <>
      {/* header & circle for desktop */}
      <Grid
        container
        sx={{
          overflowX: "hidden",
          height: "300px",
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
          <Box
            sx={{
              position: "absolute",
              left: "-250px",
              top: "-250px",
            }}
          >
            <QuarterCircles />
          </Box>
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
              action={handleButtonClick} // استفاده از تابع اکشن در اینجا
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default Header;
