import * as React from "react";
import "./styles.css";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

const MemoryCard = ({item}) => {
return (
    <Grid container display={"flex"} justifyContent={"center"}>
        <Grid md={2}></Grid>
        <Grid xs={12} md={4} display={"flex"} justifyContent={"center"}>
        {item.isRight ? (
            <div className="right-memory-style">
            <Grid display={"flex"}  justifyContent={"right"} alignItems={"right"}
            padding={"10px"}>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}
            >
                <img src={item.src} width={"50px"} height={"50px"} />
                <Typography color={"white"} textAlign={"center"} variant="">
                    {item.title}
                </Typography>
            </Box>
            </Grid>
            <Box width={"115px"} position={"absolute"} left={"5px"} top={"88px"}>
                <Typography color={"white"} fontSize={"12px"} className="desc-text">
                    {item.desc}
                 </Typography>
            </Box>
            <div className="right-postion-style"></div>
            </div>
            ):""}
            </Grid>
            <Grid xs={12} md={4} display={"flex"} justifyContent={"center"}>
            {!item.isRight ? (
             <div className="left-memory-style">
            <Grid display={"flex"}  justifyContent={"left"} alignItems={"left"}
                padding={"10px"}>
                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}
                >
                    <img src={item.src} width={"50px"} height={"50px"} />
                    <Typography color={"white"} textAlign={"center"} variant="">
                        {item.title}
                    </Typography>
                </Box>
                </Grid>
                <Box width={"115px"}  position={"absolute"} right={"7px"} top={"88px"}>
                    <Typography color={"white"} fontSize={"12px"} className="desc-text">
                        {item.desc}    
                     </Typography>
                </Box>
                <div className="left-postion-style"></div>
    
            </div>
            ):""}
</Grid>
<Grid md={2}></Grid>
        
    </Grid>
)
};
 export default MemoryCard;