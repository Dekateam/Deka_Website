import * as React from "react";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import "../../../../css/colors.css"
import CloseIcon from '@mui/icons-material/Close';

const MemoryMdDown = ({item}) => {


    const [isExpanded,setIsExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded)
    }


   return(
    <Box position={"relative"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} >
        <Box display={"flex"} flexDirection={"column"} alignItems={"start"} justifyContent={"start"}
            borderRadius={"20px"} width={"200px"} height={"170px"}
            marginTop={"10px"}
            padding={"15px"}
            position={"relative"}
            sx={{backgroundColor:"var(--main_color)"}}>
        <img src={item.src} width={"48px"} height={"48px"} />
        <Typography color={"white"} textAlign={"center"} fontSize={"14px"} marginTop={"3px"}>
                {item.title}
        </Typography>
            <Box width={"150px"} marginTop={"5px"}>
                <Typography color={"white"} fontSize={"12px"} className="desc-text">
                    {item.desc}
                </Typography>
            </Box>
        </Box>

    {/* sky blue circle */}
        <Box onClick={handleExpandClick} display={"flex"} alignItems={"center"} justifyContent={"center"}
                borderRadius={"50px"} width={"37px"} height={"42px"}
                backgroundColor={"white"}
                marginTop={"-18px"} zIndex={"99"}>
            <Box display={"flex"} justifyContent={"center"}
                    borderRadius={"50px"} width={"29px"} height={"29px"}
                    bottom={"-11px"}
                    sx={{backgroundColor:"var(--sky_blue)", cursor:"pointer"}}>
            </Box>
        </Box>

        {/* Full description box */}
        {isExpanded && (
        <Box>
        <Box
                onClick={handleExpandClick}
                 sx={{ top:"180px", cursor:"pointer"}}
                    position={"absolute"}
                    display={"flex"} justifyContent={"center"} alignItems={"center"}
                    borderRadius={"50px"} width={"25px"} height={"25px"} backgroundColor={"red"}
                    
                 >
                    <CloseIcon sx={{ color: "#fff" }}/>
                </Box>
                <Box display={"flex"} alignItems={"center"} justifyContent={"center"}
            borderRadius={"20px"} width={"280px"} height={"170px"}
            marginY={"10px"}
            padding={"15px"}
            position={"relative"}
            sx={{backgroundColor:"var(--sky_blue)"}}>
                <Typography fontSize={"13px"} color={"black"} textAlign={"right"}>
                    {item.desc}
                </Typography>
        </Box>
        </Box>
        )}
        
    </Box>
   )
} ;export default MemoryMdDown;