"use client";
import "../global.css";
import "../css/colors.css";
import "../css/swipper.css";
import { Backdrop, Button, Fade, Link, Modal, Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import DownArrows from "../src/components/geometricShapes/DownArrows";
import MemoryCard from "../src/components/geometricShapes/memoryCard/MemoryCard";
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
import MemoryMdDown from "../src/components/geometricShapes/memoryCard/MdDown";
import BrandsSwipper from "../src/components/brands/BrandsSwipper";
import Order from "../src/components/steps/Order";

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
    desc: "دکا‌تیم با تحلیل داده‌ها و ارائه راهکارهای بهینه، به کسب‌وکارها کمک می‌کند تا با تصمیم‌گیری‌های دقیق‌تر، بهره‌وری خود را افزایش دهند و استراتژی‌های خود را بهینه‌سازی کنند. خدمات ما شامل تحلیل رفتار مشتریان، بررسی عملکرد فروش و پیش‌بینی روندهای آینده است. با دکا‌تیم، ارزش واقعی داده‌هایتان را کشف کرده و به رشد پایدار برسید.",
    src: "./icons/barchart.png",
    isRight: true,
    id: 1,
  },
  {
    title: "'گرافیک",
    desc: "دکا‌تیم با طراحی گرافیکی حرفه‌ای شامل لوگو، رابط کاربری (UI/UX)، بنر تبلیغاتی و کارت ویزیت، به برجسته‌سازی برند شما کمک می‌کند. تیم ما با جدیدترین روندهای طراحی، هویتی ماندگار برای کسب‌وکار شما می‌سازد. با دکا‌تیم، برند و وبسایت شما با کیفیت بالا در بازار دیجیتال دیده خواهد شد. برای تحول گرافیکی کسب‌وکارتان، با ما تماس بگیرید.",
    src: "./icons/paintpalette.png",
    isRight: false,
    id: 2,
  },
  {
    title: "ساخت وبسایت",
    desc: "دکا‌تیم با طراحی و ساخت وبسایت حرفه‌ای، به کسب‌وکارها کمک می‌کند تا حضوری مؤثر در فضای آنلاین داشته باشند. ما وبسایت‌های ریسپانسیو و سئو بهینه ارائه می‌دهیم که به افزایش رتبه جستجو و جذب مشتریان کمک می‌کند. خدمات ما شامل طراحی رابط کاربری جذاب، سرعت لود بالا و امکانات متناسب با نیاز شما است. با دکا‌تیم، حضور قدرتمند در دنیای دیجیتال را تجربه کنید.",
    src: "./icons/paintbucket.png",
    isRight: true,
    id: 3,
  },
  {
    title: "پشتیبانی سایت",
    desc: "خدمات پشتیبانی سایت دکا‌تیم تضمین می‌کند که وبسایت شما همواره به‌روز، امن و بدون مشکل باشد. با نظارت مداوم، رفع سریع اشکالات فنی و به‌روزرسانی منظم، عملکرد بهینه وبسایت شما حفظ می‌شود. با پشتیبانی دکا‌تیم، با خیالی آسوده بر رشد کسب‌وکار خود تمرکز کنید. برای تضمین عملکرد بی‌نقص، با ما تماس بگیرید.",
    src: "./icons/search.png",
    isRight: false,
    id: 4,
  },
  {
    title: "آنالیز داده",
    desc: "دکا‌تیم با تحلیل داده‌ها به کسب‌وکارها کمک می‌کند تا تصمیمات دقیق‌تری بگیرند. ما با ابزارهای پیشرفته، الگوهای پنهان را شناسایی و راهکارهای بهینه‌سازی ارائه می‌دهیم؛ از جمله تحلیل رفتار مشتریان، بررسی فروش و پیش‌بینی روندهای آینده. هدف ما افزایش بهره‌وری و بهبود استراتژی‌هاست. با دکا‌تیم، ارزش واقعی داده‌هایتان را کشف کنید و رشد پایدار را تجربه کنید.",
    src: "./icons/slice.png",
    isRight: true,
    id: 5,
  },
  {
    title: "سئوسایت",
    desc: "خدمات سئو دکا‌تیم به بهبود رتبه جستجوی گوگل و افزایش ترافیک ارگانیک سایت شما کمک می‌کند. ما با بهینه‌سازی محتوا، بهبود ساختار فنی و ایجاد لینک‌های باکیفیت، وبسایت شما را برای موتورهای جستجو جذاب‌تر می‌کنیم. با سئو تخصصی ما، مشتریان بیشتری جذب کنید و فروش خود را افزایش دهید. همین امروز تماس بگیرید تا شما را به صفحه اول گوگل برسانیم.",
    src: "./icons/tools.png",
    isRight: false,
    id: 6,
  },
];
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
  width: 500,
  bgcolor: "var(--sky_blue_3)",
  border: "2px solid #ffff",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
                    <Typography marginBottom={"20px"} color={"white"} display={"flex"} justifyContent={"center"}>
                       برای ارتباط با ما از طریق لینک های زیر اقدام نمایید
                    </Typography>
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
                    <Typography margintop={"20px"} color={"white"} display={"flex"} justifyContent={"center"}>
                    ۰۹۳۶۱۳۹۷۷۹۷
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
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
              src="/images/us.jpg"
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
        position={"relative"}
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
            className="right-arrow-navy left-arrow-navy"
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
            width={{ xs: "80%", md: "95+%" }}
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

        <Grid xs={12} marginTop={"20px"} display={{ xs: "none", sm: "block" }}>
          {Digital_business_needs.map((need, index) => (
            <MemoryCard item={need} key={index} />
          ))}
        </Grid>
        <Grid
          xs={12}
          marginTop={"20px"}
          display={{ xs: "flex", sm: "none" }}
          flexDirection={"column"}
          alignItems={"center"}
        >
          {Digital_business_needs.map((need, index) => (
            <MemoryMdDown item={need} key={index} />
          ))}
        </Grid>
        <Box className="arrow-down" display={{ xs: "none", md: "block" }}></Box>
      </Grid>

      {/* brand section */}
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        backgroundColor={"var(--main_color)"}
      >
        <Grid xs={12} md={11}>
          <BrandsSwipper />
        </Grid>
      </Grid>

      {/* steps ordering section */}
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        backgroundColor={"var(--main_color)"}
      >
        <Grid xs={11} marginY={"20px"}>
          <Order />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Home;
