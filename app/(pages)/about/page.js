"use client";
// import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TeamData from "@/app/src/components/about/teamData";
import TeamAbout from "@/app/src/components/about/aboutCart";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../css/swipper.css";

// import required modules
import { Pagination } from "swiper/modules";
import AboutText from "@/app/src/components/about/aboutText";

const TeamView = () => {
  const [teamView] = useState(TeamData); // Directly use stored team data

  return (
    <>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={0}
        className="main_color"
        sx={{ padding: "20px 80px", display: { xs: "none", md: "flex" } }}
      >
        {teamView.map((teamAbout) => (
          <Grid item md={4} xs={12} key={teamAbout.id} sx={{ margin: 0 }}>
            <TeamAbout {...teamAbout} />
          </Grid>
        ))}
        <AboutText />
      </Grid>
      <Grid
        container
        marginBottom={"30px"}
        sx={{ display: { padding: "20px 80px", md: "none" } }}
      >
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {teamView.map((teamAbout) => (
            <SwiperSlide key={teamAbout.id}>
              <Grid item sx={{ margin: 0 }}>
                <TeamAbout {...teamAbout} />
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
        <AboutText />
      </Grid>
    </>
  );
};

export default TeamView;
