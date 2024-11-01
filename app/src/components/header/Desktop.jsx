"use client";

import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Link from "@mui/material/Link";
import { usePathname } from "next/navigation"; // Import usePathname
import "../../../css/colors.css";

const navItems = [
  { label: "خانه", path: "/" },
  // { label: "پروژه ها", path: "/projects" },
  // { label: "قالب ها", path: "/templates" },
  { label: "درباره ما", path: "/about" },
];

const DrawerAppBar = (props) => {
  const { window } = props;
  const pathname = usePathname(); // Use usePathname to get the current route
  const currentPath = pathname;

  const drawer = (
    <Box sx={{ textAlign: "center", backgroundColor: "#011a30" }}>
      <Box marginY={"20px"}>
        <img src="/images/logoDeka.png" width={"100px"} alt="Logo" />
      </Box>
      <List>
        {navItems.map((item) => (
          <Link href={item.path} key={item.label} underline="none">
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "right" }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ width: "100%" }}>
      <CssBaseline />
      <Grid component="nav" sx={{ boxShadow: "none" }}>
        <Grid
          container
          sx={{
            margin: "5px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Grid
            xs={8}
            sx={{
              display: { xs: "none", sm: "flex" },
              width: "10%",
              margin: "10px",
              justifyContent: "end",
            }}
          >
            <img src="/images/logoDeka.png" width={"100px"} alt="Logo" />
          </Grid>
          <Grid
            xs={4}
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
            }}
            justifyContent={"center"}
          >
            {navItems.map((item) => (
              <Link href={item.path} key={item.label}>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "1.1rem",
                    marginX: "30px",
                    cursor: "pointer",
                    borderBottom:
                      currentPath === item.path
                        ? "2px solid var(--sky_blue)"
                        : "none",
                    display: "inline-block",
                  }}
                >
                  {item.label}
                </Typography>
              </Link>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

// DrawerAppBar.propTypes = {
//   window: PropTypes.func,
// };

export default DrawerAppBar;
