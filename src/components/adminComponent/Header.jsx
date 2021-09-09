import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Helmet } from 'react-helmet';
import HomeIcon from '@material-ui/icons/Home';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import ShopTwoIcon from '@material-ui/icons/ShopTwo';
import FaceIcon from '@material-ui/icons/Face';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Addproduct from './pages/Addproduct';
import Viewproduct from './pages/Viewproduct';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: "red",
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },

    link: {
        textDecoration: "none",
        color: "black"
    },
    // menuButtonw: {
    //     marginRight: theme.spacing(2),
    // },
    // title: {
    //     flexGrow: 1,
    // },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function Header() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [listopen, setListOpen] = React.useState(false);
    const [listopenuser, setListOpenUser] = React.useState(false);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleClick = () => {
        setListOpen(!listopen);
    };

    const handleClickuser = () => {
        setListOpenUser(!listopenuser);
    };

    // const [auth, setAuth] = React.useState(true);
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const openw = Boolean(anchorEl);


    return (
        <div className={classes.root}>
            <Helmet>
                <title>
                    Aeroscript | Dashboard
                </title>
            </Helmet>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Router>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>

                        {/* {['Home', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))} */}
                        <Link to='/admin' className={classes.link} >
                            <ListItem button>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Home"} />
                            </ListItem>
                        </Link>
                    </List>


                    <List>
                        <ListItem button onClick={handleClick}>
                            <ListItemIcon>
                                <AddShoppingCartIcon />
                            </ListItemIcon>
                            <ListItemText primary="Manage Product" />
                            {listopen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={listopen} timeout="auto" unmountOnExit>


                            <Link to='/addproduct' className={classes.link} >
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <ShopTwoIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Add Product" />
                                    </ListItem>
                                </List>
                            </Link>

                            <Link to='/viewproduct' className={classes.link} >
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <VisibilityIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="View Product" />
                                    </ListItem>
                                </List>
                            </Link>
                        </Collapse>
                    </List>

                    <List>
                        <ListItem button onClick={handleClickuser}>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary="User" />
                            {listopenuser ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={listopenuser} timeout="auto" unmountOnExit>


                            <Link to='/adduser' className={classes.link} >
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <AddCircleIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Add User" />
                                    </ListItem>
                                </List>
                            </Link>

                            <Link to='/viewproduct' className={classes.link} >
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <VisibilityIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="View User" />
                                    </ListItem>
                                </List>
                            </Link>
                        </Collapse>
                    </List>

                    <List>
                        <Link to='/profile' className={classes.link} >
                            <ListItem button>
                                <ListItemIcon>
                                    <FaceIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Profile"} />
                            </ListItem>
                        </Link>
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Router>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                    <Route exact path='/admin' component={Home} />
                    <Route exact path='/addproduct' component={Addproduct} />
                    <Route exact path='/viewproduct' component={Viewproduct} />
                </Switch>
            </main>
        </div>
    );
}

