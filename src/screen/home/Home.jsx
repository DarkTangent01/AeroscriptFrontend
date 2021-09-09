import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer'
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
// import { Grid } from '@material-ui/core';
// import Cards from './components/Cards';

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 5,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        marginTop: '3rem'
    },

    menu: {
        display: 'flex',
        marginBottom: '5px',
    }

}))

const Home = () => {
    const classes = useStyles();
    return (
        <>
            <Helmet>
                <title>
                    Aeroscript
                </title>
            </Helmet>
            <Header />
            <main className={classes.content}>
                <Paper elevation={3} className={classes.spiner}>
                    menu
                </Paper>
                <Paper elevation={3} classes={classes.menu}>
                    main content
                </Paper>

            </main>
            <Footer />
        </>
    )
}

export default Home
