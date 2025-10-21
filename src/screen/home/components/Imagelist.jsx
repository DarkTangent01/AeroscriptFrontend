// Filename: Imagelist.jsx (MUI v5)

import * as React from "react";
import { Box, useTheme } from "@mui/material";
import Carousel from "react-elastic-carousel";
import itemData from "../data/Itemdata";
import Cards from "./Cards";

const breakPoints = [
  { width: 500, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
  { width: 1500, itemsToShow: 4 },
];

export default function Imagelist() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        bgcolor: "background.paper",
        px: { xs: 0.5, sm: 1 },
        py: 1,
      }}
    >
      <Carousel
        breakPoints={breakPoints}
        pagination={false}
        itemPadding={[0, 6]} // top/bottom, left/right padding per item
        style={{
          width: "100%",
          marginInline: "2px",
        }}
      >
        {itemData.map((item, idx) => (
          <Box key={item.id ?? item.view ?? item.title ?? idx} sx={{ px: 0.5 }}>
            <Cards
              image={item.img}
              title={item.title}
              description={item.description}
              url={item.url}
              view={item.view}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
