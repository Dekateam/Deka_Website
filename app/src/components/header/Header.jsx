"use client";
import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import ButtonComponent from "../geometricShapes/CustomButton";
import QuarterCircles from "../geometricShapes/QuarterCircles";
import DrawerAppBar from "./Desktop";
import MobileDrawer from "./MobileDrawer";
import { usePathname } from "next/navigation";
import { Backdrop, Fade, Modal } from "@mui/material";

// Define the action function here
// const handleButtonClick = () => {
//   window.location.href = "/about";
// };
const SocialMedia = [
  {
    url: "/icons/linkedin.png",
    alt: "لینکدین",
    link: "https://www.linkedin.com/in/your-profile",
  },
  {
    url: "./icons/instagram.png",
    alt: "اینستاگرام",
    link: "https://www.instagram.com/your-profile",
  },
  {
    url: "./icons/email.png",
    alt: "ایمیل",
    link: "mailto:your-email@example.com",
  },
];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "var(--sky_blue_3)",
  border: "2px solid #ffff",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const Header = () => {
  const pathname = usePathname();

  // تنظیم طول اگر در صفحه خانه باشد یا دیگر صفحات
  const headerHeight = pathname === "/" ? "300px" : "90px";
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          {pathname === "/" && (
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
              title="ثبت نام کنید"
              action={handleOpen}
            />
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    {SocialMedia.map((item, i) => (
                      <Box margin={"8px"}>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          key={i}
                          color="black"
                        >
                          <img
                            src={item.url}
                            alt={item.alt}
                            width={"30px"}
                            height={"30px"}
                          />
                        </a>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Fade>
            </Modal>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
