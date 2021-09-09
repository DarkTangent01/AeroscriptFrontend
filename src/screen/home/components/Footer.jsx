// import React from 'react'
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import Link from '@material-ui/core/Link';
// import { makeStyles } from '@material-ui/core';


// const useStyles = makeStyles((theme) => ({

//     footer: {
//         display: "flex",
//         background: "rgb(63 81 181)",
//         height: "50px",
//         width: "auto",
//         alignItems: "center",
//         justifyContent: "center",
//         color: "#ffffff",
//       }
    
// }))



// const Footer = () => {
//     const classes = useStyles();
//     return (

//         <footer  >
//             <Box
//             px={{xs: 3, sm: 10}}
//             py={{xs: 5, sm: 10}} 
//              color='white' className={classes.footer}>
//                 <Container>
//                     <Grid container spacing={5} >
//                         <Grid item xs={12} sm={4} >
//                             <Box borderBottom={1}>Help</Box>
//                             <Box>
//                                 <Link href='/' color='inherit' >
//                                     contact
//                                 </Link>
//                             </Box>
//                             <Box>
//                                 <Link href='/' color='inherit' >
//                                     Support
//                                 </Link>
//                             </Box>
//                             <Box>
//                                 <Link href='/' color='inherit' >
//                                     Privacy Policy
//                                 </Link>
//                             </Box>
//                         </Grid>


//                         <Grid item xs={12} sm={4} >
//                             <Box borderBottom={1}>Account</Box>
//                             <Box>
//                                 <Link href='/' color='inherit' >
//                                     Login
//                                 </Link>
//                             </Box>
//                             <Box>
//                                 <Link href='/' color='inherit' >
//                                     Signup
//                                 </Link>
//                             </Box>
//                             <Box>
//                                 <Link href='/' color='inherit' >
//                                     Forget Password
//                                 </Link>
//                             </Box>
//                         </Grid>
//                         <Grid item xs={12} sm={4} >
//                             <Box borderBottom={1}>Support</Box>
//                             <Box>
//                                 <Link href='/' color='inherit' >
//                                     contact
//                                 </Link>
//                             </Box>
//                             <Box>
//                                 <Link href='/' color='inherit' >
//                                     Support
//                                 </Link>
//                             </Box>
//                             <Box>
//                                 <Link href='/' color='inherit' >
//                                     Privacy Policy
//                                 </Link>
//                             </Box>
//                         </Grid>
//                     </Grid>
//                     <Box textAlign="center" 
//                     pt={{xs: 5, sm:10}} pb={{xs: 5, sm: 0}} > Aeroscript Shopping &reg; {new Date().getFullYear()} </Box>
//                 </Container>
//             </Box>
//         </footer>
//     )
// }

// export default Footer



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';



const useStyles = makeStyles((theme) => ({
//   text: {
//     padding: theme.spacing(2, 2, 0),
//   },
//   paper: {
//     paddingBottom: 50,
//   },
// //   list: {
// //     marginBottom: theme.spacing(2),
// //   },
//   subheader: {
//     backgroundColor: theme.palette.background.paper,
//   },
  appBar: {
    top: 'auto',
    bottom: 0,
  },

  box : {
      textAlign: 'center',
  }
//   grow: {
//     flexGrow: 1,
//   },
// //   fabButton: {
// //     position: 'absolute',
// //     zIndex: 1,
// //     top: -30,
// //     left: 0,
// //     right: 0,
// //     margin: '0 auto',
// //   },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <div className={classes.grow} />
          <Box className={classes.box} > Aeroscript Shopping &reg; {new Date().getFullYear()} </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
