"use client";
import { Vazirmatn } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const vazir = Vazirmatn({ subsets: ["arabic", "latin"], display: "swap" });

const theme = createTheme({
  typography: {
    fontFamily: vazir.style.fontFamily,
  },
});

export default theme;
