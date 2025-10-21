// Filename: Forgetpassword.jsx (MUI v5)

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link as RouterLink } from 'react-router-dom';

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Paper,
  Link,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link component={RouterLink} color="inherit" to="/">
        Aeroscript
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Forgetpassword() {
  return (
    <Container component="main" maxWidth={false} disableGutters>
      <Helmet>
        <title>Aeroscript | Forget Password</title>
      </Helmet>
      <CssBaseline />

      {/* Background + Centering */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
          background: (theme) =>
            `linear-gradient(135deg, ${theme.palette.primary.light}22, ${theme.palette.secondary.light}33)`,
        }}
      >
        {/* Card */}
        <Paper
          elevation={0}
          sx={{
            width: '100%',
            maxWidth: { xs: 420, sm: 520 },
            p: { xs: 3, sm: 5 },
            borderRadius: 4,
            boxShadow: '0 10px 25px rgba(0,0,0,0.08), 0 6px 8px rgba(0,0,0,0.05)',
            bgcolor: 'background.paper',
          }}
        >
          {/* Header */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                mb: 2,
                display: 'grid',
                placeItems: 'center',
                background: (theme) =>
                  `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
              }}
            >
              <Avatar sx={{ bgcolor: 'transparent', color: 'common.white' }}>
                <LockOutlinedIcon />
              </Avatar>
            </Box>

            <Typography component="h1" variant="h5" sx={{ fontWeight: 700 }}>
              Forget Password
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 1, mb: 2.5, textAlign: 'center' }}
            >
              Enter your details to reset your password
            </Typography>
          </Box>

          {/* Form */}
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  id="firstName"
                  label="First Name"
                  autoComplete="given-name"
                  fullWidth
                  required
                  variant="outlined"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="lastName"
                  id="lastName"
                  label="Last Name"
                  autoComplete="family-name"
                  fullWidth
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  fullWidth
                  required
                  variant="outlined"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="I agree with terms & conditions"
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mt: 3, mb: 2, py: 1.2, fontWeight: 600, borderRadius: 3, textTransform: 'none' }}
            >
              Reset Password
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  component={RouterLink}
                  to="/user"
                  underline="hover"
                  sx={{ fontSize: 14 }}
                >
                  Remember password? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ mt: 5 }}>
            <Copyright />
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
