import { Typography } from "@mui/material";
import * as React from "react";
import "./styles.css";
import Box from "@mui/material/Box";

const Footer = () => {
  const SocialMedia = [
    {
      url: "./icons/linkedin.png",
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

  return (
    <Box>
      <Box backgroundColor={"var(--main_color)"} paddingTop={"50px"}>
        <Typography
          textAlign={"center"}
          fontSize={{ xs: "17px", sm: "20px" }}
          color={"white"}
        >
          ما را در شبکه های اجتماعی دنبال کنید
        </Typography>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          {SocialMedia.map((item, i) => (
            <Box margin={"8px"}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
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

        <Box
          marginTop={{ xs: "10px", sm: "80px" }}
          marginBottom={"30px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography fontSize={{ xs: "12px", sm: "14px" }} color={"white"}>
            تمام حقوق این سایت برای دکاتیم
          </Typography>
          <img
            src="./icons/copyright.png"
            alt="copyright"
            className="margin-x"
          />
          <Typography fontSize={{ xs: "12px", sm: "14px" }} color={"white"}>
            محفوظ می باشد.
          </Typography>
        </Box>
        <Box
          paddingBottom={"20px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img src="./images/logoDeka.png" width={"150px"} height={"70px"} />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
