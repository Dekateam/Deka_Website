import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function TeamAbout(props) {
  return (
    <>
      <Card
        sx={{ maxWidth: 250, maxHeight: 300, borderRadius: "10px" }}
        className="sky_blue"
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image={props.img}
            alt="Team Images"
            // style={{ padding: "10px" }}
            className="sky_blue"
          />
          {/* <CardContent className="sky_blue">
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {props.Details}
            </Typography>
          </CardContent> */}
        </CardActionArea>
      </Card>
    </>
  );
}
