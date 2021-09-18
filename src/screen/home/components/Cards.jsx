import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },

  Cards: {
    width: "200%",
    color: "#fff",
    margin: "0 10px 12px",
  },
  Typography: {
    fontSize: '16px'
  }
});

export default function Cards({ image, title, description, view, url }) {
  const classes = useStyles();
  return (
    <Card className={[classes.Cards, classes.root]}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          width="140"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.Typography} >
            {title}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button component={Link} to={view} size="small" color="primary">
          View
        </Button>
        <Button component={Link} to={url} size="small" color="primary">
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
}
