import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer'
import Imagelist from './components/Imagelist';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Slider from './components/Carousel';
import { ButtonToolbar, Dropdown } from 'rsuite';
import '../home/css/home.css';
import '../../../node_modules/rsuite/dist/styles/rsuite-dark.css';

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 5,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        marginTop: '3rem',

    },

    dropdown: {
        marginBottom: '1rem',
        padding: theme.spacing(2),
    },

    menu: {
        display: 'flex',
        marginBottom: '16px',
        marginTop: '16px',
    },

}));

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
                <Paper elevation={3} className={classes.dropdown}>
                    <ButtonToolbar className="btn">


                        <Dropdown title="Top Offers" activeKey="a">
                            <Dropdown.Item eventKey="a">Active Item</Dropdown.Item>
                            <Dropdown.Item eventKey="b">Item B</Dropdown.Item>
                            <Dropdown.Item eventKey="c">Item C</Dropdown.Item>
                            <Dropdown.Item eventKey="d">Item D</Dropdown.Item>
                        </Dropdown>


                        <Dropdown title="Home">
                            <Dropdown.Menu title="Home Furnishings">
                                <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                                <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                                <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                                <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                                <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                                <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                                <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                                <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                                <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                                <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                                <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                                <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                                <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                                <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                                <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                                <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                                <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                                <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                                <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                                <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                                <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                                <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                            </Dropdown.Menu>
                            <Dropdown.Menu title="Living Room">
                                <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                                <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                            </Dropdown.Menu>
                            <Dropdown.Menu title="Kitchen & dining">
                                <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                                <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                            </Dropdown.Menu>
                            <Dropdown.Menu title="Bedroom Room">
                                <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                                <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                            </Dropdown.Menu>
                            <Dropdown.Menu title="Home Decoration">
                                <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                                <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                            </Dropdown.Menu>
                            <Dropdown.Menu title="Tools & Utility">
                                <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                                <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                            </Dropdown.Menu>
                            <Dropdown.Menu title="Lighting & Electricals">
                                <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                                <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                            </Dropdown.Menu>
                            <Dropdown.Menu title="Space Saving">
                                <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                                <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                            </Dropdown.Menu>
                            <Dropdown.Menu title="Cleaning & Bath">
                                <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                                <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                            </Dropdown.Menu>
                            <Dropdown.Menu title="Home Furnitures">
                                <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                                <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                            </Dropdown.Menu>
                            <Dropdown.Menu title="Pet & Guardning">
                                <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                                <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown title="Electronics" activeKey="a">
                            <Dropdown.Item eventKey="a">Active Item</Dropdown.Item>
                            <Dropdown.Item eventKey="b">Item B</Dropdown.Item>
                            <Dropdown.Item eventKey="c">Item C</Dropdown.Item>
                            <Dropdown.Item eventKey="d">Item D</Dropdown.Item>
                        </Dropdown>


                        <Dropdown title="Fashion" activeKey="e-2">
                            <Dropdown.Item eventKey="a">Item A</Dropdown.Item>
                            <Dropdown.Item eventKey="b">Item B</Dropdown.Item>
                            <Dropdown.Item eventKey="c">Item C</Dropdown.Item>
                            <Dropdown.Item eventKey="d">Item D</Dropdown.Item>
                            <Dropdown.Menu title="Active Menu">
                                <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                                <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown title="Appliances" activeKey="a">
                            <Dropdown.Item eventKey="a">Active Item</Dropdown.Item>
                            <Dropdown.Item eventKey="b">Item B</Dropdown.Item>
                            <Dropdown.Item eventKey="c">Item C</Dropdown.Item>
                            <Dropdown.Item eventKey="d">Item D</Dropdown.Item>
                        </Dropdown>

                        <Dropdown title="Mobiles" activeKey="a">
                            <Dropdown.Item eventKey="a">Active Item</Dropdown.Item>
                            <Dropdown.Item eventKey="b">Item B</Dropdown.Item>
                            <Dropdown.Item eventKey="c">Item C</Dropdown.Item>
                            <Dropdown.Item eventKey="d">Item D</Dropdown.Item>
                        </Dropdown>


                        <Dropdown title="Travel" activeKey="e-2">
                            <Dropdown.Item eventKey="a">Item A</Dropdown.Item>
                            <Dropdown.Item eventKey="b">Item B</Dropdown.Item>
                            <Dropdown.Item eventKey="c">Item C</Dropdown.Item>
                            <Dropdown.Item eventKey="d">Item D</Dropdown.Item>
                            <Dropdown.Menu title="Active Menu">
                                <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                                <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown title="Beauty Toys & more" activeKey="e-2">
                            <Dropdown.Item eventKey="a">Item A</Dropdown.Item>
                            <Dropdown.Item eventKey="b">Item B</Dropdown.Item>
                            <Dropdown.Item eventKey="c">Item C</Dropdown.Item>
                            <Dropdown.Item eventKey="d">Item D</Dropdown.Item>
                            <Dropdown.Menu title="Active Menu">
                                <Dropdown.Item eventKey="e-1">Item E-1</Dropdown.Item>
                                <Dropdown.Item eventKey="e-2">Active Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>



                    </ButtonToolbar>
                </Paper>


                <Paper elevation={3} className={classes.carousal}>
                    <Slider />
                </Paper>
                <Paper elevation={3} className={classes.menu}>
                    <Imagelist />
                </Paper>

            </main>
            <Footer />
        </>
    )
}

export default Home
