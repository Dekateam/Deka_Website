import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const AboutText = () => {
  return (
    <>
      <Grid container sx={{ margin: { md: "20px 150px" } }}>
        <Box className="sky_blue" padding={"10px"} borderRadius={"10px"} textAlign={"center"}>
          <Typography textAlign={"start"}>سلام:</Typography>
          <Typography>
            تیم دکا متشکل از تعدادی دانشپذیر مستعد و با انگیزه هست که برای
            موفقیت این تیم را تشکیل داده اند .
          </Typography>
          <Typography>
            اعضای تیم دکا با گذراندن دوره آموزشی مختلف استعداد خود را شکوفا کرده
            اند.
          </Typography>
          <Typography>
          شما کاربران عزیز امروز میتوانید برای ظراحی سایت جدید وبهبود سازی سایت
          خود از ما مشاوره دریافت کنید .
          </Typography>
           تیم دکا راه حلی برای مشکلات شما و پر
          رونق کردن کسب و کار شما
        </Box>
      </Grid>
    </>
  );
};
export default AboutText;
