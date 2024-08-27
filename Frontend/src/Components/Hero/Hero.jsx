import { ArrowForward } from "@mui/icons-material";
import { Box, Container, Stack, Typography, Link, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Styles.css";
import { Pagination } from "swiper/modules";

// استيراد الصور مباشرة إذا كان ذلك ممكنًا
import banner15 from "../../assets/banner-15.jpg";
import banner16 from "../../assets/banner-16.jpg";
import banner17 from "../../assets/banner-17.jpg";
import banner25 from "../../assets/banner-25.jpg";
import { useTheme } from "@emotion/react";
import Banner from "./Banner";
const Hero = () => {
  const theme = useTheme();
  const MySlider = [
    { text: "MEN", link: banner15 },
    { text: "WOMEN", link: banner25 },
  ];
  return (
    <Container>
      <Box sx={{pt:2, mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}>
         <Swiper
        pagination={{ dynamicBullets: true,  }}
        modules={[Pagination]}
        loop={true}
        className="mySwiper"
      >
        {MySlider.map((item) => {
          return (
            <SwiperSlide key={item.text}>
              <img src={item.link} alt="Banner 15" />
              <Box
                sx={{
                  [theme.breakpoints.up("sm")]: {
                    position: "absolute",
                    left: "10%",
                    textAlign: "start",
                  },
                  [theme.breakpoints.down("sm")]: {
                    pt: 4,
                    pb: 6,
                  },
                }}
              >
                <Typography sx={{ color: "#222" }} variant="h6">
                  LIFESTYLE COLLECTION
                </Typography>
                <Typography
                  sx={{ color: "#222", fontWeight: 400, my: 1 }}
                  variant="h4"
                >
                  {item.text}
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{ justifyContent: { xs: "center", md: "start" } }}
                >
                  <Typography color={"#333"} mr={1} variant="h5">
                    SALE UP TO
                  </Typography>
                  <Typography color={"#d23f57"} variant="h5">
                    30% OFF
                  </Typography>
                </Stack>
                <Typography
                  sx={{ color: "#000", fontWeight: 300, my: 1 }}
                  variant="body1"
                >
                  Get Free Shipping On Orders Over $99.00
                </Typography>
                <Button
                  sx={{
                    px: 5,
                    py: 1,
                    mt: 2,
                    backgroundColor: "#222",
                    boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                    color: "#fff",
                    borderRadius: "1px",
                    "&:hover": {
                      bgcolor: "#151515",
                      boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                    },
                  }}
                  variant="contained"
                >
                  shop now
                </Button>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Box sx={{ minWidth: "26.6%", display: { xs: "none", md: "block" } }}>
        <Box sx={{ position: "relative" }}>
          <img src={banner17} alt="Banner 17" width="100%" />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              left: 31,
              transform: "translateY(-50%)",
            }}
          >
            <Typography variant="caption" sx={{ color: "#2b3445" }}>
              NEW ARRIVALS
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#2b3445", lineHeight: "16px", mt: 1 }}
            >
              SUMMER
            </Typography>
            <Typography variant="h6" sx={{ color: "#2b3445" }}>
              SALE 20% OFF
            </Typography>
            <Link
              sx={{
                color: "#2b3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.5s",
                cursor: "pointer",
                "&:hover": { color: "#d23f57" },
              }}
              underline="none"
            >
              shop now
              <ArrowForward sx={{ fontSize: "15px" }} />
            </Link>
          </Stack>
        </Box>

        <Box sx={{ position: "relative" }}>
          <img src={banner16} width="100%" alt="Banner 16" />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              left: 31,
              transform: "translateY(-50%)",
            }}
          >
            <Typography variant="caption" sx={{ color: "#2b3445" }}>
              GAMING 4K
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#2b3445", lineHeight: "16px", mt: 1 }}
            >
              DESKTOPS &
            </Typography>
            <Typography variant="h6" sx={{ color: "#2b3445" }}>
              LAPTOPS
            </Typography>
            <Link
              sx={{
                color: "#2b3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.5s",
                cursor: "pointer",
                "&:hover": { color: "#d23f57" },
              }}
              underline="none"
            >
              shop now
              <ArrowForward sx={{ fontSize: "15px" }} />
            </Link>
          </Stack>
        </Box>
      </Box>
      </Box>
     <Banner/>
      
    </Container>
  );
};

export default Hero;
