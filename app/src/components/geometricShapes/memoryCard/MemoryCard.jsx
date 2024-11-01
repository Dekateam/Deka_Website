// import * as React from "react";
// import { useState, useRef } from "react";
// import Grid from "@mui/material/Unstable_Grid2";
// import { Box, Typography } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import Xarrow from "react-xarrows";
// import "./styles.css";

// const MemoryCard = ({ item }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const memoryRef = useRef(null);

//   const handleExpandClick = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <Grid container display={"flex"} justifyContent={"center"}>
//       {/* Right Memory Card */}
//       <Grid xs={12} sm={5} display={"flex"} justifyContent={"end"}>
//         {item.isRight && (
//           <div
//             className="right-memory-style right-shadow"
//             id={`memory-${item.id}`}
//             ref={memoryRef}
//           >
//             <Grid display={"flex"} justifyContent={"right"} alignItems={"right"} padding={"10px"}>
//               <Box display={"flex"} flexDirection={"column"} alignItems={"start"}>
//                 <img src={item.src} width={"48px"} height={"48px"} />
//                 <Typography color={"white"} textAlign={"center"} fontSize={"14px"} marginTop={"3px"}>
//                   {item.title}
//                 </Typography>
//               </Box>
//             </Grid>
//             <Box width={"115px"} position={"absolute"} left={"5px"} top={"88px"}>
//               <Typography color={"white"} fontSize={"12px"} className="desc-text">
//                 {item.desc}
//               </Typography>
//             </Box>
//             <div className="right-postion-style" onClick={handleExpandClick}></div>

//             {/* Full description box with transition */}
//             <Box
//               className={`full-desc-box ${isExpanded ? "expanded" : ""}`}
//               onClick={handleExpandClick}
//               sx={{ right: { sm: "-50px", md: "-200px" }, top: { sm: "150px", md: "160px" }, cursor: "pointer" }}
//               position={"absolute"}
//               display={"flex"}
//               justifyContent={"center"}
//               alignItems={"center"}
//               borderRadius={"50px"}
//               width={"25px"}
//               height={"25px"}
//               backgroundColor={"red"}
//             >
//               <CloseIcon sx={{ color: "#fff" }} />
//             </Box>
//             <Box
//               className={`full-desc-box ${isExpanded ? "expanded" : ""}`}
//               sx={{
//                 left: { sm: "-50px", md: "0px" },
//                 width: { sm: "300px", md: "400px" },
//                 height: { sm: "100%", md: "80%" },
//                 top: { sm: "180px", md: "195px" },
//                 transition: "opacity 0.5s ease, transform 0.5s ease",
//               }}
//               position={"absolute"}
//               padding={"7px"}
//               backgroundColor={"#08bbb5"}
//               borderRadius={"20px"}
//               display={"flex"}
//               justifyContent={"center"}
//               alignItems={"center"}
//             >
//               <Typography fontSize={"14px"} color={"black"} textAlign={"right"}>
//                 {item.desc}
//               </Typography>
//             </Box>
//           </div>
//         )}
//       </Grid>

//       {/* Middle Line */}
//       <Grid sm={2} display={"flex"} justifyContent={"center"}>
//         <Box
//           marginTop={"-20px"}
//           height={"210%"}
//           width={"3px"}
//           backgroundColor={"var(--sky_blue)"}
//           id={`middle-line-${item.id}`}
//         >
//         </Box>
//       </Grid>

//       {/* Left Memory Card */}
//       <Grid xs={12} sm={5} display={"flex"} justifyContent={"start"}>
//         {!item.isRight && (
// <div className="left-memory-style left-shadow" id={`memory-${item.id}`} ref={memoryRef}>
//   <Grid display={"flex"} justifyContent={"left"} alignItems={"left"} padding={"10px"}>
//     <Box display={"flex"} flexDirection={"column"} alignItems={"end"}>
//       <img src={item.src} width={"50px"} height={"50px"} />
//       <Typography color={"white"} textAlign={"center"} fontSize={"14px"} marginTop={"3px"}>
//         {item.title}
//       </Typography>
//     </Box>
//   </Grid>
//   <Box width={"115px"} position={"absolute"} right={"7px"} top={"88px"}>
//     <Typography color={"white"} fontSize={"12px"} className="desc-text">
//       {item.desc}
//     </Typography>
//   </Box>
//   <div className="left-postion-style" onClick={handleExpandClick}></div>

//   {/* Full description box with transition */}
//   <Box
//     className={`full-desc-box ${isExpanded ? "expanded" : ""}`}
//     onClick={handleExpandClick}
//     sx={{ left: { sm: "-50px", md: "-200px" }, top: { sm: "150px", md: "160px" }, cursor: "pointer" }}
//     position={"absolute"}
//     display={"flex"}
//     justifyContent={"center"}
//     alignItems={"center"}
//     borderRadius={"50px"}
//     width={"25px"}
//     height={"25px"}
//     backgroundColor={"red"}
//   >
//     <CloseIcon sx={{ color: "#fff" }} />
//   </Box>
//   <Box
//     className={`full-desc-box ${isExpanded ? "expanded" : ""}`}
//     sx={{
//       right: { sm: "-50px", md: "0px" },
//       width: { sm: "300px", md: "400px" },
//       height: { sm: "100%", md: "80%" },
//       top: { sm: "180px", md: "195px" },
//       transition: "opacity 0.5s ease, transform 0.5s ease",
//     }}
//     position={"absolute"}
//     padding={"7px"}
//     backgroundColor={"#08bbb5"}
//     borderRadius={"20px"}
//     display={"flex"}
//     justifyContent={"center"}
//     alignItems={"center"}
//   >
//     <Typography fontSize={"14px"} color={"black"} textAlign={"right"}>
//       {item.desc}
//     </Typography>
//   </Box>
// </div>
//         )}
//       </Grid>

//       {/* Drawing Xarrow between unique middle line and each memory card */}
//       <Xarrow
//         start={`middle-line-${item.id}`}
//         end={`memory-${item.id}`}
//         color="var(--sky_blue)"
//         strokeWidth={2}
//         headSize={6}
//         curveness={0.5}
//         startAnchor="top"
//         key={`arrow-${item.id}`}
//       />
//     </Grid>
//   );
// };

// export default MemoryCard;

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Xarrow from "react-xarrows";
import "./styles.css";

const MemoryCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const memoryRef = useRef(null);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      },
    );

    if (memoryRef.current) {
      observer.observe(memoryRef.current);
    }

    return () => {
      if (memoryRef.current) {
        observer.unobserve(memoryRef.current);
      }
    };
  }, []);

  return (
    <Grid container display={"flex"} justifyContent={"center"}>
      {/* Right-side memory card */}
      <Grid xs={12} sm={5} display={"flex"} justifyContent={"end"}>
        {item.isRight && (
          <div
            className="right-memory-style right-shadow"
            id={`memory-${item.id}`}
            ref={memoryRef}
          >
            <Grid
              display={"flex"}
              justifyContent={"right"}
              alignItems={"right"}
              padding={"10px"}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"start"}
              >
                <img src={item.src} width={"48px"} height={"48px"} />
                <Typography
                  color={"white"}
                  textAlign={"center"}
                  fontSize={"14px"}
                  marginTop={"3px"}
                >
                  {item.title}
                </Typography>
              </Box>
            </Grid>
            <Box
              width={"115px"}
              position={"absolute"}
              left={"5px"}
              top={"88px"}
            >
              <Typography
                color={"white"}
                fontSize={"12px"}
                className="desc-text"
              >
                {item.desc}
              </Typography>
            </Box>
            <div
              className="right-postion-style"
              onClick={handleExpandClick}
            ></div>

            {/* Full description box with transition */}
            <Box
              className={`full-desc-box ${isExpanded ? "expanded" : ""}`}
              onClick={handleExpandClick}
              sx={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
                right: { sm: "-50px", md: "-200px" },
                top: { sm: "150px", md: "160px" },
                cursor: "pointer",
              }}
              position={"absolute"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"50px"}
              width={"25px"}
              height={"25px"}
              backgroundColor={"red"}
            >
              <CloseIcon sx={{ color: "#fff" }} />
            </Box>
            <Box
              className={`full-desc-box ${isExpanded ? "expanded" : ""}`}
              sx={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(20px)",
                left: { sm: "-50px", md: "0px" },
                width: { sm: "300px", md: "400px" },
                height: { sm: "100%", md: "80%" },
                top: { sm: "180px", md: "195px" },
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
              position={"absolute"}
              padding={"7px"}
              backgroundColor={"#08bbb5"}
              borderRadius={"20px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography fontSize={"14px"} color={"black"} textAlign={"right"}>
                {item.desc}
              </Typography>
            </Box>
          </div>
        )}
      </Grid>

      {/* Vertical line in the middle */}
      <Grid sm={2} display={"flex"} justifyContent={"center"}>
        <Box
          marginTop={"-20px"}
          height={"210%"}
          width={"3px"}
          backgroundColor={"var(--sky_blue)"}
          id={`middle-line-${item.id}`}
        />
      </Grid>

      {/* Left-side memory card */}
      <Grid xs={12} sm={5} display={"flex"} justifyContent={"start"}>
        {!item.isRight && (
          <div
            className="left-memory-style left-shadow"
            id={`memory-${item.id}`}
            ref={memoryRef}
          >
            <Grid
              display={"flex"}
              justifyContent={"left"}
              alignItems={"left"}
              padding={"10px"}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"start"}
              >
                <img src={item.src} width={"48px"} height={"48px"} />
                <Typography
                  color={"white"}
                  textAlign={"center"}
                  fontSize={"14px"}
                  marginTop={"3px"}
                >
                  {item.title}
                </Typography>
              </Box>
            </Grid>
            <Box
              width={"115px"}
              position={"absolute"}
              right={"5px"}
              top={"88px"}
            >
              <Typography
                color={"white"}
                fontSize={"12px"}
                className="desc-text"
              >
                {item.desc}
              </Typography>
            </Box>
            <div
              className="left-postion-style"
              onClick={handleExpandClick}
            ></div>

            {/* Full description box with transition */}
            <Box
              className={`full-desc-box ${isExpanded ? "expanded" : ""}`}
              onClick={handleExpandClick}
              sx={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(20px)",
                left: { sm: "-50px", md: "-200px" },
                top: { sm: "150px", md: "160px" },
                cursor: "pointer",
              }}
              position={"absolute"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"50px"}
              width={"25px"}
              height={"25px"}
              backgroundColor={"red"}
            >
              <CloseIcon sx={{ color: "#fff" }} />
            </Box>
            <Box
              className={`full-desc-box ${isExpanded ? "expanded" : ""}`}
              sx={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(20px)",
                right: { sm: "-50px", md: "0px" },
                width: { sm: "300px", md: "400px" },
                height: { sm: "100%", md: "80%" },
                top: { sm: "180px", md: "195px" },
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
              position={"absolute"}
              padding={"7px"}
              backgroundColor={"#08bbb5"}
              borderRadius={"20px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography fontSize={"14px"} color={"black"} textAlign={"right"}>
                {item.desc}
              </Typography>
            </Box>
          </div>
        )}
      </Grid>

      <Xarrow
        start={`middle-line-${item.id}`}
        end={`memory-${item.id}`}
        color="var(--sky_blue)"
        strokeWidth={2}
        headSize={6}
        curveness={0.5}
        startAnchor="top"
        key={`arrow-${item.id}`}
      />
    </Grid>
  );
};

export default MemoryCard;
