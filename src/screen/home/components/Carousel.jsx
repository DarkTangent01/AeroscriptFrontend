// Filename: Carousel.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const FALLBACK = "https://placehold.co/1600x500/png?text=Aeroscript+Banner";

const slides = [
  {
    img: "https://picsum.photos/id/1015/1600/500", // mountains
    title: "Explore the Future of Tech",
    subtitle: "Discover cutting-edge products powered by innovation.",
  },
  {
    img: "https://picsum.photos/id/1039/1600/500", // city night
    title: "Smart Shopping Made Simple",
    subtitle: "Seamless experience across your favorite categories.",
  },
  {
    img: "https://picsum.photos/id/1043/1600/500", // beach
    title: "Exclusive Deals on Gadgets",
    subtitle: "Upgrade your lifestyle with exciting new offers.",
  },
  {
    img: "https://picsum.photos/id/1056/1600/500", // road
    title: "Your Style, Your Way",
    subtitle: "Trendy fashion collections for every occasion.",
  },
];

export default function CarouselComponent() {
  return (
    <Box
      className="carousel-wrapper"
      sx={{
        width: "100%",
        borderRadius: 3,
        overflow: "hidden",
        "& .carousel .slide img": {
          width: "100%",
          height: { xs: 200, sm: 300, md: 420 },
          objectFit: "cover",
          display: "block",
          filter: "brightness(0.85)",
        },
        "& .carousel .thumbs-wrapper": { display: "none" },
      }}
    >
      <Carousel
        infiniteLoop
        autoPlay
        interval={3500}
        stopOnHover
        showThumbs={false}
        showStatus={false}
        showIndicators
        useKeyboardArrows
        swipeable
        emulateTouch
        dynamicHeight={false}
      >
        {slides.map((s, i) => (
          <Box key={i} sx={{ position: "relative" }}>
            <img
              src={s.img}
              alt={s.title}
              onError={(e) => {
                if (e.currentTarget.src !== FALLBACK) e.currentTarget.src = FALLBACK;
              }}
              loading="eager"
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0) 100%)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                left: { xs: 12, sm: 24 },
                bottom: { xs: 12, sm: 20 },
                right: { xs: 12, sm: "auto" },
                color: "common.white",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, textShadow: "0 2px 8px rgba(0,0,0,.4)" }}
              >
                {s.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 0.5,
                  maxWidth: 600,
                  textShadow: "0 1px 4px rgba(0,0,0,.35)",
                  opacity: 0.95,
                }}
              >
                {s.subtitle}
              </Typography>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
