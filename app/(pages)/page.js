"use client";
import { Button, Typography } from "@mui/material";
import "../globals.css";
import DrawerAppBar from "../src/components/header/Header";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import QuarterCircles from "../src/components/geometricShapes/QuarterCircles";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import DownArrows from "../src/components/geometricShapes/DownArrows";
import MemoryCard from "../src/components/geometricShapes/MemoryCard";

const BootstrapButton = styled(Button)({
  backgroundColor: "#21FF2A",
  color: "black",
  borderRadius: "16px",
  paddingX: "18px",
  "&:hover": {
    backgroundColor: "#5cff61",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#21FF2A",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem #21FF2A",
  },
});

const Digital_business_needs = [
  {
    title: "دیجیتال مارکتینگ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
    src: "./icons/email.jpg",
    isRight: true,
  },
  {
    title: "دیجیتال مارکتینگ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
    src: "./icons/email.jpg",
    isRight: false,
  },
  {
    title: "دیجیتال مارکتینگ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
    src: "./icons/email.jpg",
    isRight: true,
  },
  {
    title: "دیجیتال مارکتینگ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
    src: "./icons/email.jpg",
    isRight: false,
  },
  {
    title: "دیجیتال مارکتینگ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
    src: "./icons/email.jpg",
    isRight: true,
  },
  {
    title: "دیجیتال مارکتینگ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
    src: "./icons/email.jpg",
    isRight: false,
  },
];

const Home = () => {
  return (
    <Box>
      <Grid container sx={{ overflowX: "hidden", height: "300px" }}>
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

      {/* section 2 */}
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={"-50px"}
      >
        <Grid xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <Box>
            <Typography
              color={"white"}
              variant="h4"
              textAlign={{ xs: "center", md: "right" }}
            >
              دکاتیم راه حلی برای برای مشکلات شما
            </Typography>
            <Typography
              color={"white"}
              variant="h6"
              textAlign={{ xs: "center", md: "right" }}
              marginY={"20px"}
            >
              برای دریافت مشاوره به ما بپیوندید
            </Typography>
            <Box
              display={"flex"}
              justifyContent={{ xs: "center", md: "right" }}
            >
              <BootstrapButton variant="contained" disableRipple>
                ثبت نام کنید
              </BootstrapButton>
            </Box>
          </Box>
        </Grid>
        <Grid
          xs={12}
          md={6}
          display={"flex"}
          justifyContent={"center"}
          sx={{ marginTop: { xs: "50px", md: "0" } }}
        >
          <Box
            sx={{
              width: { xs: "90%", md: "75%" },
              height: { xs: "200px", sm: "320px", md: "250px" },
              position: "relative", // Required for next/image
            }}
          >
            <Image
              src="/images/team.jpg"
              alt="Team"
              layout="fill" // This makes the image fill the Box
              objectFit="cover" // Adjusts how the image fits the Box
            />
          </Box>
        </Grid>
      </Grid>

      {/* section 3 */}
      <Grid
        container
        display={"flex"}
        justifyContent={"space-around"}
        marginTop={"70px"}
        alignItems={"start"}
      >
        <Grid
          md={4}
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "right",
            position: "relative",
          }}
        >
          <img
            src="/images/staircase-right.png"
            width={"90%"}
            height={"190px"}
          />
        </Grid>

        <Grid
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            color={"white"}
            variant="h5"
            textAlign={"center"}
            marginTop={"12px"}
            marginBottom={"40px"}
          >
            دکاتیم رمزی برای دستیابی به رتبه های برتر
          </Typography>
          <DownArrows />
        </Grid>

        <Grid
          md={4}
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "left",
            position: "relative",
          }}
        >
          <img
            src="/images/staircase-left.png"
            width={"90%"}
            height={"190px"}
          />
        </Grid>
      </Grid>

      {/* section 4 */}
      <Grid
        container
        backgroundColor={"white"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Grid xs={12} marginTop={"20px"}>
          {Digital_business_needs.map((need, index) => (
            <MemoryCard item={need} key={index} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
export default Home;
