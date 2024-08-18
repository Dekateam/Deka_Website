import * as React from "react";
import { useState } from "react";
import "./styles.css";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import CloseIcon from '@mui/icons-material/Close';
import "../../../../globals.css";



const MemoryCard = ({item}) => {

    const [isExpanded,setIsExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded)
    }
return (
    <Grid container display={"flex"} justifyContent={"center"}>
        <Grid md={2}></Grid>
        <Grid xs={12} sm={6} md={4} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
        {item.isRight && (
            <>
            <div className="right-memory-style">
            <Grid display={"flex"}  justifyContent={"right"} alignItems={"right"}
            padding={"10px"}>
            <Box display={"flex"} flexDirection={"column"} alignItems={"start"}
            >
                <img src={item.src} width={"48px"} height={"48px"} />
                <Typography color={"white"} textAlign={"center"} fontSize={"14px"} marginTop={"3px"}>
                    {item.title}
                </Typography>
            </Box>
            </Grid>
            <Box width={"115px"} position={"absolute"} left={"5px"} top={"88px"}>
                <Typography color={"white"} fontSize={"12px"} className="desc-text">
                    {item.desc}
                 </Typography>
            </Box>
            <div className="right-postion-style"
            onClick={handleExpandClick}></div>

{/* Full description box */}
            {isExpanded && (
                <>
                <Box
                onClick={handleExpandClick}
                 sx={{right:{sm:"-50px", md:"-200px"}, top:{sm:"150px", md:"160px"}, cursor:"pointer"}}
                    position={"absolute"}
                    display={"flex"} justifyContent={"center"} alignItems={"center"}
                    borderRadius={"50px"} width={"25px"} height={"25px"} backgroundColor={"red"}
                    
                 >
                    <CloseIcon sx={{ color: "#fff" }}/>
                </Box>
            <Box sx={{left:{sm:"-50px", md:"0px"} , width:{sm:"300px", md:"400px"},height:{sm:"100%", md:"80%"}, top:{sm:"180px", md:"195px"}}} position={"absolute"}
             padding={"7px"} backgroundColor={"#08bbb5"}
             borderRadius={"20px"}
             display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Typography fontSize={"14px"} color={"black"} textAlign={"right"}>
                    {item.desc}
                </Typography>
             </Box>
                </>
            )}

            </div>
            </>
            )}
            </Grid>
            <Grid xs={12} sm={6} md={4} display={"flex"} justifyContent={"center"}>
            {!item.isRight && (
             <div className="left-memory-style">
            <Grid display={"flex"}  justifyContent={"left"} alignItems={"left"}
                padding={"10px"}>
                <Box display={"flex"} flexDirection={"column"} alignItems={"end"}
                >
                    <img src={item.src} width={"50px"} height={"50px"} />
                    <Typography color={"white"} textAlign={"center"} fontSize={"14px"} marginTop={"3px"}>
                        {item.title}
                    </Typography>
                </Box>
                </Grid>
                <Box width={"115px"}  position={"absolute"} right={"7px"} top={"88px"}>
                    <Typography color={"white"} fontSize={"12px"} className="desc-text">
                        {item.desc}    
                     </Typography>
                </Box>
                <div className="left-postion-style"
                onClick={handleExpandClick}></div>
                
                {/* Full description box */}
                {isExpanded && (
                <>
                <Box
                onClick={handleExpandClick}
                 sx={{left:{sm:"-50px", md:"-200px"}, top:{sm:"150px", md:"160px"}, cursor:"pointer"}}
                    position={"absolute"}
                    display={"flex"} justifyContent={"center"} alignItems={"center"}
                    borderRadius={"50px"} width={"25px"} height={"25px"} backgroundColor={"red"}
                    
                 >
                    <CloseIcon sx={{ color: "#fff" }}/>
                </Box>
            <Box sx={{right:{sm:"-50px", md:"0px"} , width:{sm:"300px", md:"400px"},height:{sm:"100%", md:"80%"}, top:{sm:"180px", md:"195px"}}} position={"absolute"}
             padding={"7px"} backgroundColor={"#08bbb5"}
             borderRadius={"20px"}
             display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Typography fontSize={"14px"} color={"black"} textAlign={"right"}>
                    {item.desc}
                </Typography>
             </Box>
                </>
            )}
            </div>
            )}
</Grid>
<Grid md={2}></Grid>
        
    </Grid>
)
};
 export default MemoryCard;