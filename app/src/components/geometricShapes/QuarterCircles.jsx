"use client";

import React from "react";

const colors = [
  "var(--sky_blue_4)",
  "var(--sky_blue_3)",
  "var(--sky_blue_2)",
  "var(--sky_blue_1)",
  "var(--sky_blue)",
];

const QuarterCircles = () => {
  return (
    <div style={{ position: "relative", width: "500px", height: "500px" }}>
      {colors.map((color, index) => {
        const diameter = 160 + (colors.length - 1 - index) * 90;
        return (
          <div
            key={index}
            style={{
              position: "absolute",
              width: diameter,
              height: diameter,
              borderRadius: "50%",
              backgroundColor: color,
              top: `calc(50% - ${diameter / 2}px)`,
              left: `calc(50% - ${diameter / 2}px)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default QuarterCircles;
