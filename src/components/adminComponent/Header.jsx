// Filename: (replace your file) — MUI v5 mini-variant admin shell

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link as RouterLink, Route, Switch } from 'react-router-dom';

import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Typography,
  CssBaseline,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Drawer as MuiDrawer,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import FaceIcon from '@mui/icons-material/Face';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// Your admin sub-pages
import Home from './pages/Home';
import Addproduct from './pages/Addproduct';
import Viewproduct from './pages/Viewproduct';

const drawerWidth = 240;

// ----- Mini-variant drawer helpers (MUI v5 pattern) -----
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: 'red',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function AdminShell() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [listOpenProduct, setListOpenProduct] = React.useState(false);
  const [listOpenUser, setListOpenUser] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const toggleProduct = () => setListOpenProduct((v) => !v);
  const toggleUser = () => setListOpenUser((v) => !v);

  return (
    <Box sx={{ display: 'flex' }}>
      <Helmet>
        <title>Aeroscript | Dashboard</title>
      </Helmet>

      {/* Keep a single CssBaseline at app root ideally.
          It's here for safety if app root doesn't include it. */}
      <CssBaseline />

      {/* Top AppBar */}
      <AppBar position="fixed" open={open} elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 3, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Side Drawer (mini variant) */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} aria-label="close drawer">
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        {/* Home */}
        <List sx={{ py: 0 }}>
          <ListItemButton component={RouterLink} to="/admin">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </List>

        {/* Manage Product */}
        <List sx={{ py: 0 }}>
          <ListItemButton onClick={toggleProduct}>
            <ListItemIcon>
              <AddShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Manage Product" />
            {listOpenProduct ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={listOpenProduct} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                component={RouterLink}
                to="/addproduct"
              >
                <ListItemIcon>
                  <ShopTwoIcon />
                </ListItemIcon>
                <ListItemText primary="Add Product" />
              </ListItemButton>

              <ListItemButton
                sx={{ pl: 4 }}
                component={RouterLink}
                to="/viewproduct"
              >
                <ListItemIcon>
                  <VisibilityIcon />
                </ListItemIcon>
                <ListItemText primary="View Product" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>

        {/* User */}
        <List sx={{ py: 0 }}>
          <ListItemButton onClick={toggleUser}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="User" />
            {listOpenUser ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={listOpenUser} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                component={RouterLink}
                to="/adduser"
              >
                <ListItemIcon>
                  <AddCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Add User" />
              </ListItemButton>

              <ListItemButton
                sx={{ pl: 4 }}
                component={RouterLink}
                to="/viewproduct" // keep your original route mapping
              >
                <ListItemIcon>
                  <VisibilityIcon />
                </ListItemIcon>
                <ListItemText primary="View User" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>

        <Divider />

        {/* Misc list (kept from your original) */}
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItemButton key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader /> {/* pushes content below AppBar */}
        <Switch>
          <Route exact path="/admin" component={Home} />
          <Route exact path="/addproduct" component={Addproduct} />
          <Route exact path="/viewproduct" component={Viewproduct} />
        </Switch>
      </Box>
    </Box>
  );
}
