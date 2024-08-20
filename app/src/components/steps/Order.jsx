"use client";
import { Button, Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";



const steps = [
    {desc:"جلسه آشنایی و بررسی نیاز و اهداف شما"},
    {desc:"خرید و تهیه دامنه و هاست "},
    {desc:"طراحی قالب سایت توسط uiux Designer"},
    {desc:"انجام فرایند کدنویسی توسط تیم برنامه نویس دکا"},
    {desc:"محتوا نویسی و سئو"},
    {desc:"ساخت بات های هوشمندانه با استفاده از زبان پایتون"},
]

const Order = () => {
    return(
        <Box marginBottom={"100px"}>
            <Box marginBottom={"50px"}>
                <Typography fontSize={{xs:"19px",sm:"22px"}} color={"white"} textAlign={"right"}>
                    مراحل انجام سفارش
                </Typography> 
                <Box width={'158px'} height={"3px"} backgroundColor={"var(--sky_blue)"} marginTop={"2px"}></Box>
            </Box>
            {
                steps.map((step,index) => (
                    <Box display={"flex"} justifyContent={"right"} alignItems={"start"} marginY={"20px"}>
                        <Box width={"10px"} height={"10px"} borderRadius={"50px"} backgroundColor={"var(--sky_blue)"} marginTop={{xs:"7px",sm:"10px"}}></Box>
                        <Typography marginX={"10px"} fontWeight={"100"} color={"white"} fontSize={{xs:"13px",sm:"17px"}}>{step.desc}</Typography>
                    </Box>
                ))
            }
        </Box>
    )
};
export default Order;