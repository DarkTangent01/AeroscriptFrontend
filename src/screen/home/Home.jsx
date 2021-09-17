import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Imagelist from "./components/Imagelist";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Menulist from "./components/Menulist";
import Carousell from "./components/Carousel";

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
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Aeroscript</title>
      </Helmet>
      <Header />
      <main className={classes.content}>
        <Paper elevation={3} className={classes.dropdown}>
          <Menulist />
        </Paper>

        <Paper elevation={3} className={classes.carousal}>
          <Carousell/>
        </Paper>

        <Paper elevation={3} className={classes.menu}>
          <Imagelist />
        </Paper>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
