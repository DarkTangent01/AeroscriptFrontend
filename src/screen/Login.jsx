// Filename: Login.jsx (MUI v5)

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI v5
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { admin_login } from '../actions/adminActions';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Aeroscript
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });

  const dispatch = useDispatch();
  const { loading, error, adminInfo } = useSelector((state) => state.adminLogin);
  const history = useHistory();

  useEffect(() => {
    if (adminInfo) history.push('/admin');
  }, [history, adminInfo]);

  const emailError = touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordError = touched.password && password.length < 6;

  const submitHandler = (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    if (emailError || passwordError) return;
    dispatch(admin_login(email, password));
  };

  return (
    <Container component="main" maxWidth={false} disableGutters>
      <Helmet>
        <title>Aeroscript | Admin-SignIn</title>
      </Helmet>
      <CssBaseline />

      {/* Full-viewport gradient background */}
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
            maxWidth: { xs: 420, sm: 480 },
            borderRadius: 4,
            p: { xs: 3, sm: 5 },
            boxShadow: '0 10px 25px rgba(0,0,0,0.08), 0 6px 8px rgba(0,0,0,0.05)',
            backdropFilter: 'saturate(1.05) blur(2px)',
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

            <Typography component="h1" variant="h5" sx={{ fontWeight: 700 }} align="center">
              Sign in
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2.5 }} align="center">
              to continue to admin panel
            </Typography>

            {error && <ErrorMessage>{error}</ErrorMessage>}
            {loading && <Loading />}
          </Box>

          {/* Form */}
          <Box component="form" noValidate onSubmit={submitHandler} sx={{ mt: 1 }}>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              id="email"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              error={Boolean(emailError)}
              helperText={emailError ? 'Enter a valid email address' : ' '}
              autoComplete="email"
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              id="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, password: true }))}
              error={Boolean(passwordError)}
              helperText={passwordError ? 'Minimum 6 characters' : ' '}
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      onClick={() => setShowPassword((s) => !s)}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
              <FormControlLabel control={<Checkbox color="primary" />} label="Remember me" />
              <Link href="#" variant="body2">Forgot password?</Link>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              size="large"
              disableElevation
              sx={{ mt: 3, mb: 1.5, py: 1.2, fontWeight: 600, borderRadius: 3, textTransform: 'none' }}
            >
              Sign In
            </Button>
          </Box>

          <Box sx={{ mt: 6 }}>
            <Copyright />
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
