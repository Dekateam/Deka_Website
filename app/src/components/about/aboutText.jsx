import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

//متن مربوط به صفحه درباره ما

const AboutText = () => {
  return (
    <>
      <Grid
        container
        sx={{
          margin: { md: "20px 150px" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          className="main_color"
          color={"white"}
          padding={"10px"}
          width={"80%"}
          borderRadius={"10px"}
          textAlign={"center"}
        >
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
            شما کاربران عزیز امروز میتوانید برای طراحی سایت جدید و بهبود سازی
            سایت خود از ما مشاوره دریافت کنید .
          </Typography>
          <Typography>
            تیم دکا راه حلی برای مشکلات شما و پر رونق کردن کسب و کار شما
          </Typography>
        </Box>
      </Grid>
    </>
  );
};
export default AboutText;
