"use client";
import "../globals.css";
import "../css/colors.css";
import "../css/swipper.css";
import { Button, Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import DownArrows from "../src/components/geometricShapes/DownArrows";
import MemoryCard from "../src/components/geometricShapes/MemoryCard";
import Square from "../src/components/geometricShapes/square";
import ButtonComponent from "../src/components/geometricShapes/CustomButton";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const RegistrationButton = styled(Button)({
  backgroundColor: "var(--light_green)",
  color: "black",
  borderRadius: "16px",
  paddingX: "18px",
  "&:hover": {
    backgroundColor: "var(--light_green)",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "var(--light_green)",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem var(--light_green)",
  },
});

const features = [
  {
    title: "طرح های مدرن",
    url: "./icons/america.png",
  },
  {
    title: "ایده های جذاب",
    url: "./icons/innovation.png",
  },
  {
    title: "راهکارهای خلاقانه",
    url: "./icons/pen.png",
  },
];

const Digital_business_needs = [
  {
    title: "دیجیتال مارکتینگ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
    src: "./icons/barchart.png",
    isRight: true,
  },
  {
    title: "دیجیتال مارکتینگ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
    src: "./icons/paintpalette.png",
    isRight: false,
  },
  {
    title: "دیجیتال مارکتینگ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
    src: "./icons/paintbucket.png",
    isRight: true,
  },
  {
    title: "دیجیتال مارکتینگ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
    src: "./icons/search.png",
    isRight: false,
  },
  {
    title: "دیجیتال مارکتینگ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
    src: "./icons/slice.png",
    isRight: true,
  },
  {
    title: "دیجیتال مارکتینگ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
    src: "./icons/tools.png",
    isRight: false,
  },
];

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: {
          xs: "white",
          md: "var(--main_color)",
        },
      }}
    >
      {/* section 1 (title & Group photo) */}
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={{ md: "-50px" }}
      >
        <Grid
          xs={12}
          md={6}
          display={{ xs: "none", md: "flex" }}
          justifyContent={"center"}
        >
          <Box>
            <Typography
              color={"white"}
              variant="h4"
              textAlign={{ xs: "center", md: "right" }}
              marginX={{ md: "40px", lg: "0" }}
            >
              دکاتیم راه حلی برای برای مشکلات شما
            </Typography>
            <Typography
              color={"white"}
              variant="h6"
              textAlign={{ xs: "center", md: "right" }}
              marginY={"20px"}
              marginX={{ md: "40px", lg: "0" }}
            >
              برای دریافت مشاوره به ما بپیوندید
            </Typography>
            <Box
              display={"flex"}
              justifyContent={{ xs: "center", md: "right" }}
              marginX={{ md: "40px", lg: "0" }}
            >
              <ButtonComponent
                color="var(--light_green)"
                title="ثبت نام کنید"
                action={() => (window.location.href = "/about")}
              />
            </Box>
          </Box>
        </Grid>
        <Grid
          xs={12}
          md={6}
          display={"flex"}
          justifyContent={"center"}
          sx={{ marginTop: { xs: "10px", md: "0" } }}
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
        marginTop={{ md: "70px" }}
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
            color={{ xs: "var(--main_color)", md: "white" }}
            // variant="h5"
            fontSize={{ xs: "17px", sm: "22px" }}
            textAlign={"center"}
            marginTop={{ xs: "40px", md: "12px" }}
            marginX={"7px"}
          >
            دکاتیم رمزی برای دستیابی به رتبه های برتر
          </Typography>
          <Box marginY={{ xs: "30px", md: "50px" }}>
            <DownArrows />
          </Box>
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
        sx={{ paddingBottom: { sm: "180px", md: "170px" } }}
      >
        <Box
          width={"100%"}
          display={{ xs: "none", md: "flex" }}
          justifyContent={"center"}
        >
          {features.map((feature, index) => (
            <Grid
              key={index}
              xs={12}
              sm={4}
              display={"flex"}
              justifyContent={"center"}
            >
              <Square item={feature} />
            </Grid>
          ))}
        </Box>
        <Box
          width={"100%"}
          display={{ xs: "flex", md: "none" }}
          justifyContent={"center"}
        >
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          >
            {features.map((feature, index) => (
              <Box key={index}>
                <SwiperSlide key={index}>
                  <Square item={feature} />
                </SwiperSlide>
              </Box>
            ))}
          </Swiper>
        </Box>

        <Grid xs={12} sm={6} md={4} display={"flex"} justifyContent={"center"}>
          <Box
            width={{ xs: "80%", md: "95%" }}
            height={{ xs: "50px", md: "70px" }}
            backgroundColor={"#011a30"}
            borderRadius={"15px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={"20px"}
          >
            <Typography
              textAlign={"center"}
              fontSize={{ xs: "15px", sm: "17px", md: "20px" }}
              color={"white"}
            >
              نیازهای شما برای کسب و کار دیجیتال
            </Typography>
          </Box>
        </Grid>

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
