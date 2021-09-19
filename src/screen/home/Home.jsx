import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Imagelist from "./components/Imagelist";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Paper, Button } from "@material-ui/core";
import Menulist from "./components/Menulist";
import Carousell from "./components/Carousel";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import adsImage from "../../images/ads.jpg";
import Tvitemlist from "./components/Tvitemlist";
import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 5,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    marginTop: "3rem",
  },

  dropdown: {
    marginBottom: "1rem",
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-evenly",
  },

  menu: {
    display: "flex",
    marginBottom: "16px",
    marginTop: "16px",
  },
  carousel: {
    marginBottom: "10px",
  },

  grid: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  innerGrid: {
    flexGrow: 1,
  },
  Typography: {
    display: "flex",
    justifyContent: "flex-start",
    color: "black",
    fontWeight: "700",
    fontSize: "20px",
    marginBottom: "2rem",
  },
  TypographyRemain: {
    display: "flex",
    justifyContent: "flex-start",
    fontWeight: "700",
    color: "black",
    fontSize: "20px",
    marginBottom: "2rem",
  },
  Button: {
    // top: "-4rem",
    left: "10rem",
    [theme.breakpoints.between("sm", "md")]: {
      left: "11rem",
    },
    color: "#fff",
  },
  ButtonRem: {
    // top: "-4rem",
    left: "10rem",
    // [theme.breakpoints.between("sm", "md")]: {
    //   left: "11rem",
    // },
    color: "#fff",
    marginBottom: "-16px",
  },
  Divider: {
    marginBottom: "4rem",
    marginTop: "-3rem",
  },
  DividerRemain: {
    marginBottom: "4rem",
    marginTop: "-1rem",
  },
  adsImage: {
    width: 300,
    margin: "auto",
    height: 480,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Online Shopping Site in India: shop online for books, smartphones, smart Tvs, Watches</title>
      </Helmet>
      <Header />
      <main className={classes.content}>
        <Paper elevation={3} className={classes.dropdown}>
          <Menulist />
        </Paper>

        <Paper elevation={3} className={classes.carousel}>
          <Carousell />
        </Paper>

        <div className={classes.grid}>
          <CssBaseline />
          <Grid container spacing={6}>
            <Grid item xs={12} sm={9}>
              <Paper className={classes.paper}>
                <div className={classes.innerGrid}>
                  <Grid container spacing={8}>
                    <Grid item xs={6} sm={8}>
                      <Typography className={classes.Typography} component="p">
                        Deal of the Day
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Button
                        variant="contained"
                        color="secondary"
                        component={Link}
                        to="/viewall"
                        className={classes.Button}
                      >
                        View all
                      </Button>
                    </Grid>
                  </Grid>
                </div>
                <Divider className={classes.Divider} />
                <Imagelist />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Paper className={classes.paper}>
                <img
                  src={adsImage}
                  className={classes.adsImage}
                  alt="Advertisement"
                  srcSet=""
                />
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className={classes.grid}>
          <CssBaseline />
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <div className={classes.innerGrid}>
                  <Grid container spacing={8}>
                    <Grid item xs={6} sm={8}>
                      <Typography
                        className={classes.TypographyRemain}
                        component="p"
                      >
                        Shop for TVs
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <Button
                        variant="contained"
                        color="secondary"
                        component={Link}
                        to="/viewall"
                        className={classes.ButtonRem}
                      >
                        View all
                      </Button>
                    </Grid>
                  </Grid>
                </div>

                <Divider className={classes.DividerRemain} />
                <Tvitemlist />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
