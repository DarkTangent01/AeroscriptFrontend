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
    maxWidth: 300,
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }

  },

  Cards: {
    width: "300",
    color: "#fff",
    margin: "16px 7px 15px auto",
    
  },
  Typography: {
    fontSize: "16px",
    color: 'black',
    fontWeight: 'bold'
  },
  Button: {
    backgroundColor: '#ff0038',
    fontWeight: 'bold',
    "&:hover": {
      backgroundColor: '#D9534F',
    }
  },
  btnextra:{
    display: 'flex',
    justifyContent: 'space-evenly'
  }
});

export default function Cards({ image, title, description, view, url }) {
  const classes = useStyles();
  return (
    <Card className={[classes.Cards, classes.root]}>
      <CardActionArea>
        <CardMedia
          style={{height: '100%', width: '100%' }}
          component="img"
          alt="aeroscript_products"
          height="220"
          image={image}
          title="aeroscript_products"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.Typography}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.btnextra} >
        <Button className={classes.Button} component={Link} to={view} size="small">
          View
        </Button>
        <Button className={classes.Button} component={Link} to={url} size="small"  >
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
}
