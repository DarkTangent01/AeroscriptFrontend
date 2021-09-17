import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CSSBaseline from '@material-ui/core/CssBaseline';
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 5,
    backgroundColor: "#00121b",
    // borderTop: "solid 3px #8B4513",
    padding: '41px 16px 0 8px',
  },
  subFooter: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  paragraph: {
    color: "#fff",
    borderBottom: 'solid',
    borderBottomColor: '#FFA500',
    width: '2rem',
    fontSize: '20px'
  },
  companynameIntro: {
    color: "#fff",
    marginTop: '12px'
  },
  companyname: {
    display: 'flex',
    color: "#ffff",
    fontSize: '47px',
    justifyContent: 'center'
  },
  footername: {
    color: "#ffff",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    fontSize: '13px'
  },
  link: {
    textDecoration: 'none',
    color: 'white', 
    outline: 'none', 
    transition: '0.3s', 
    '&:hover': {
      color: '#ff9800'
    },
    letterSpacing: '1px',
  },
  navigation: {
    color: 'white', 
    marginTop: '10px'
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CSSBaseline/>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Typography className={classes.companyname}>
            Aeroscript
          </Typography>
          <Typography className={classes.companynameIntro}>
            Mail Us:<br/>
            Aeroscript Internet Private Limited,
            210 New Street Varanasi,
            Uttar Pradesh East,
            Pincode 232101
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography className={classes.paragraph}>
            About
          </Typography>
          <Typography className={classes.navigation} > <Link to='/about' className={classes.link} > About US </Link> </Typography>
          <Typography className={classes.navigation} > <Link to='/about' className={classes.link} > Contact Us </Link> </Typography>
          <Typography className={classes.navigation} > <Link to='/about' className={classes.link} > Aeroscript Stories </Link> </Typography>
          <Typography className={classes.navigation} > <Link to='/about' className={classes.link} > Press </Link> </Typography>
          <Typography className={classes.navigation} > <Link to='/about' className={classes.link} > Aeroscript Wholesales </Link> </Typography>
          <Typography className={classes.navigation} > <Link to='/about' className={classes.link} > Corporate Information </Link> </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography className={classes.paragraph}>
            Policy
          </Typography>
          <Typography className={classes.navigation} > <Link to='/about' className={classes.link} > Return Policy </Link> </Typography>
          <Typography className={classes.navigation} > <Link to='/about' className={classes.link} > Terms Of Use </Link> </Typography>
          <Typography className={classes.navigation} > <Link to='/about' className={classes.link} > Security </Link> </Typography>
          <Typography className={classes.navigation} > <Link to='/about' className={classes.link} > Privacy </Link> </Typography>
          <Typography className={classes.navigation} > <Link to='/about' className={classes.link} > Sitemap </Link> </Typography>
          <Typography className={classes.navigation} > <Link to='/about' className={classes.link} > ERP Policy </Link> </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography className={classes.paragraph}>
            Help
          </Typography>
          <Typography className={classes.navigation} > <Link to='/about' className={classes.link} > Payments </Link> </Typography>
          <Typography className={classes.navigation} > <Link to='/about' className={classes.link} > Shipping </Link> </Typography>
          <Typography className={classes.navigation} > <Link to='/about' className={classes.link} > Cancellation & Return </Link> </Typography>
          <Typography className={classes.navigation} > <Link to='/about' className={classes.link} > FAQ </Link> </Typography>
          <Typography className={classes.navigation} > <Link to='/about' className={classes.link} > Report Infringement</Link> </Typography>
        </Grid>
        <Grid className={classes.subFooter} item xs={12}>
          <Typography className={classes.footername}>
            Aeroscript Shopping &reg; {new Date().getFullYear()}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
