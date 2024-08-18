import { Box } from "@mui/material";
import "./styles.css";
import React from "react";

const colors = ["#08BBB5", "#045662", "#03515D", "#024151"]; // رنگ‌های فلش‌ها

const DownArrows = () => {
  return (
    <div className="">
      {colors.map((color, index) => (
        <Box key={index} display={"flex"}>
          <div
            className="arrow-style"
            style={{ borderColor: color }}
          />
        </Box>
      ))}
    </div>
  );
};

export default DownArrows;
