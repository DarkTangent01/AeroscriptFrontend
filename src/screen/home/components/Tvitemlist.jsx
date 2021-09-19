import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import tvitemData from "../data/Tvitemdata";
import Carousel from "react-elastic-carousel";
import Cards from "./Cards";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    paddingTop: '0px',
  },
}));

const breakPoints = [
  { width: 500, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
  { width: 1500, itemsToShow: 4 },
];

export default function Tvitemlist() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Carousel breakPoints={breakPoints}>
        {
          tvitemData.map((items) => (
            <Cards image={items.img} title={items.title} description={items.description} url={items.url} view={items.view} />
          ))
        }
      </Carousel>
    </div>
  );
}
