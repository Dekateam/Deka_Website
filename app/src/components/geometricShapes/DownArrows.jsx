import { Box } from "@mui/material";
import "./styles.css";
import React from "react";

const colors = ["#08BBB5", "#045662", "#03515D", "#024151"]; // رنگ‌های فلش‌ها

const DownArrows = () => {
  return (
    <div className="">
      {colors.map((color, index) => (
        <Box display={"flex"}>
          <div
            key={index}
            className="arrow-style"
            style={{ borderColor: color }}
          />
        </Box>
      ))}
    </div>
  );
};

export default DownArrows;
