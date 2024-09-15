import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

//کارت مربوط به صفحه درباره ما

export default function TeamAbout(props) {
  return (
    <>
      <Card
        sx={{
          maxWidth: 250,
          maxHeight: 500,
          marginBottom: { xs: "30px", md: "0px" },
          borderRadius: "10px",
        }}
        className="main_color"
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image={props.img}
            alt="Team Images"
            style={{ padding: "10px" }}
            className="main_color"
          />
          <CardContent className="main_color">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color={"white"}
            >
              {props.title}
            </Typography>
            <Typography variant="body2" color={"white"}>
              {props.Details}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
