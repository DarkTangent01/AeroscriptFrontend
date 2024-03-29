import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(40),
            height: theme.spacing(40),
        },
    },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={5}>
                
            </Paper>
        </div>
    )
}

export default Home
