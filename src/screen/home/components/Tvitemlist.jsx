// Filename: Tvitemlist.jsx (MUI v5)

import * as React from "react";
import { Box } from "@mui/material";
import Carousel from "react-elastic-carousel";
import tvitemData from "../data/Tvitemdata";
import Cards from "./Cards";

const breakPoints = [
  { width: 500, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
  { width: 1500, itemsToShow: 4 },
];

export default function Tvitemlist() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        overflow: "hidden",
        bgcolor: "background.paper",
        pt: 0,
        px: { xs: 0.5, sm: 1 },
        py: 1,
      }}
    >
      <Carousel
        breakPoints={breakPoints}
        pagination={false}
        itemPadding={[0, 6]} // vertical, horizontal padding per item
        style={{ width: "100%", marginInline: "2px" }}
      >
        {tvitemData.map((item, idx) => (
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
