import * as React from "react";
import "./styles.css";
import "../../../global.css";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Typography } from "@mui/material";

const Square = ({ item }) => {
  return (
    <Box
      width={"200px"}
      height={{ xs: "150px", md: "180px" }}
      borderRadius={"30px"}
      marginY={"30px"}
      marginX={"auto"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ backgroundColor: "var(--sky_blue)" }}
      className={"box-shadow"}
    >
      <Typography
        color={"white"}
        variant="h6"
        textAlign={"center"}
        marginBottom={"10px"}
      >
        {item.title}
      </Typography>
      <img src={item.url} width={"70px"} height={"70px"} />
    </Box>
  );
};
export default Square;
