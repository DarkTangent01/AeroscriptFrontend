import React from 'react';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => {

})

const Productdetails = () => {
    const classes = useStyles();
    return (
        <div>
            <Header/>
            <Footer/>
        </div>
    )
}

export default Productdetails
