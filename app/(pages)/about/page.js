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
  const [teamView] = useState(TeamData);

  return (
    <>
      {/* کارت ها و متن درباره ما در حالت تبللت به بالا */}
      <Grid
        container
        rowSpacing={2}
        columnSpacing={0}
        sx={{
          padding: "20px 80px",
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
        }}
      >
        <AboutText />
        {teamView.map((teamAbout) => (
          <Grid
            item
            md={4}
            lg={3}
            xs={12}
            key={teamAbout.id}
            sx={{ margin: 0 }}
          >
            <TeamAbout {...teamAbout} />
          </Grid>
        ))}
      </Grid>

      {/* کارت ها و متن درباره ما در حالت تبللت به پایین */}

      <Grid
        container
        marginBottom={"30px"}
        sx={{ display: { padding: "20px 10px", md: "none" } }}
      >
        <AboutText />
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {teamView.map((teamAbout) => (
            <SwiperSlide key={teamAbout.id}>
              <Grid item sx={{ marginTop: "20px" }}>
                <TeamAbout {...teamAbout} />
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </>
  );
};

export default TeamView;
