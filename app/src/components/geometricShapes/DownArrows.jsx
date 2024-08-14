// import React from "react";
// import { Box } from "@mui/material";

// const DownArrows = ({ size = "20px" }) => {
//   const arrowColors = ["red", "blue", "green", "yellow"];
//   const arrows = Array(4).fill(null);

//   return (
//     <Box display="flex" flexDirection="column" alignItems="center">
//       {arrows.map((_, index) => (
//         <Box
//           key={index}
//           sx={{
//             backgroundColor: "red",
//             width: 0,
//             height: 0,
//             borderLeft: `${size} solid ${arrowColors[index]}`, // رنگ لبه چپ
//             borderRight: `${size} solid ${arrowColors[index]}`, // رنگ لبه راست
//             borderBottom: `${size} solid transparent`, // فضای خالی در پایین برای ایجاد شکل
//             margin: "2px 0", // فاصله کم بین فلش‌ها
//           }}
//         />
//       ))}
//     </Box>
//   );
// };

// export default DownArrows;

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
