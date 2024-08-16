import * as React from "react";
import "./styles.css";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Typography } from "@mui/material";

const Square = ({item}) =>{
return(
    <Box width={"200px"} height={"170px"} borderRadius={"20px"}
        margin={"30px"} display={"flex"} flexDirection={"column"}
        alignItems={"center"} justifyContent={"center"}
        sx={{backgroundColor:"#08bbb5"}}>
        <Typography color={"white"} variant="h6" textAlign={"center"} marginBottom={"10px"}>
            {item.title}
        </Typography>
        <img src={item.url} width={"70px"} height={"70px"} />
    </Box>
)
};
export default Square;