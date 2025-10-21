import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// MUI v5 theme setup
import { ThemeProvider, createTheme, CssBaseline, StyledEngineProvider } from '@mui/material';


// Your screens
import Admin from './screen/Admin';
import Forgetpassword from './screen/userScreen/Forgetpassword';
import Login from './screen/Login';
import Register from './screen/userScreen/Register';
import Userlogin from './screen/userScreen/Userlogin';
import Home from './screen/home/Home';
import Notfound from './screen/pages/404/Notfound';
import Corporate from './screen/pages/Corporate';
import Cartpage from './screen/pages/Cartpage';
import About from './screen/pages/About';
import Press from './screen/pages/Press';
import Offerpage from './screen/pages/Offerpage';
import ReturnPolicy from './screen/pages/Returnpolicy';
import Stories from './screen/pages/Stories';
import UserProfile from './screen/pages/Userprofile';
import Vieworder from './screen/pages/Vieworder';
import Wholesales from './screen/pages/Wholesales';
import MyNotification from './screen/pages/Mynotifications';
import Mychats from './screen/pages/Mychats';
import Myorders from './screen/pages/Myorders';
import ProductDetailes from './screen/pages/Productdetails';
import ProductPage from './screen/pages/Productpage';
import Contacts from './screen/pages/Contact';
import Grocerystore from './screen/pages/Grocerystore';
import Mobilestore from './screen/pages/Mobilestore';

// ---- MUI v5 theme ----
const theme = createTheme({
  palette: {
    mode: 'light',
    primary:   { main: '#1e88e5' }, // blue
    secondary: { main: '#7c4dff' }, // purple
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: ['Inter','Roboto','Helvetica','Arial','sans-serif'].join(','),
  },
  components: {
    /** IMPORTANT: this overrides CssBaseline's default white body background
     *  and fixes the white strip under the footer on all browsers. */
    MuiCssBaseline: {
      styleOverrides: {
        'html, body, #root': {
          height: '100%',
        },
        body: {
          backgroundColor: '#172337',  // match Footer bg
          overflowX: 'hidden',
          margin: 0,
        },
        // optional: avoids a light corner on overlay scrollbars
        '::-webkit-scrollbar-corner': {
          backgroundColor: '#172337',
        },
      },
    },

    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600, borderRadius: 12 },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: { borderRadius: 16 },
      },
    },
    MuiTextField: {
      defaultProps: { variant: 'outlined' },
    },
  },
});

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/user' component={Userlogin} />
            <Route exact path='/signup' component={Register} />
            <Route exact path='/forget_password' component={Forgetpassword} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/admin_login' component={Login} />
            <Route exact path='/Cart' component={Cartpage} />
            <Route exact path='/corporate' component={Corporate} />
            <Route exact path='/about' component={About} />
            <Route exact path='/press' component={Press} />
            <Route exact path='/offers' component={Offerpage} />
            <Route exact path='/returnpolicy' component={ReturnPolicy} />
            <Route exact path='/stories' component={Stories} />
            <Route exact path='/profile' component={UserProfile} />
            <Route exact path='/vieworder' component={Vieworder} />
            <Route exact path='/wholesales' component={Wholesales} />
            <Route exact path='/notifications' component={MyNotification} />
            <Route exact path='/chats' component={Mychats} />
            <Route exact path='/orders' component={Myorders} />
            <Route exact path='/productsdetailes' component={ProductDetailes} />
            <Route exact path='/product' component={ProductPage} />
            <Route exact path='/contact' component={Contacts} />
            <Route exact path='/grocerystore' component={Grocerystore} />
            <Route exact path='/Mobilestore' component={Mobilestore} />
            <Route component={Notfound} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
