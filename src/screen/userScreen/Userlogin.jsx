// Filename: Userlogin.jsx (Brand panel left, login card right)

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link as RouterLink } from "react-router-dom";
import { login } from "../../actions/userActions";

// Match home layout
import Header from "../home/components/Header";
import Footer from "../home/components/Footer";

// MUI
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  TextField,
  Typography,
  Divider,
  LinearProgress,
  Dialog,
  DialogContent,
  Slide,
  Chip,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import { Player } from "@lottiefiles/react-lottie-player";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link component={RouterLink} to="/" color="inherit" underline="hover">
        Aeroscript
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Userlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });

  const [otpOpen, setOtpOpen] = useState(false);
  const openOtp = () => setOtpOpen(true);
  const closeOtp = () => setOtpOpen(false);

  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector((s) => s.userLogin);
  const history = useHistory();

  useEffect(() => {
    if (userInfo) history.push("/");
  }, [history, userInfo]);

  const emailError =
    touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordError = touched.password && password.length < 6;

  const submitHandler = (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    if (emailError || passwordError) return;
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (!otpOpen) return;
    const t = setTimeout(() => setOtpOpen(false), 2200);
    return () => clearTimeout(t);
  }, [otpOpen]);

  return (
    <>
      <Helmet>
        <title>Aeroscript | Sign in</title>
      </Helmet>
      <CssBaseline />

      <Header />
      <Box sx={(t) => t.mixins.toolbar} />

      {/* Page body */}
      <Box
        component="main"
        sx={{
          bgcolor: "background.default",
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Container maxWidth="lg" sx={{ flex: "1 0 auto", py: { xs: 4, md: 6 } }}>
          <Grid
            container
            spacing={{ xs: 3, md: 6 }}
            alignItems="center"
            justifyContent="space-between"
          >
            {/* LEFT: Brand panel (hidden on small screens) */}
            <Grid item xs={12} md={5} sx={{ display: { xs: "none", md: "block" } }}>
              <Box sx={{ pl: { md: 1 } }}>
                {/* Wordmark */}
                <Typography
                  component="h1"
                  sx={{
                    fontWeight: 900,
                    letterSpacing: -0.5,
                    lineHeight: 1.1,
                    fontSize: { md: 42, lg: 48 },
                    color: "text.primary",
                  }}
                >
                  <Box component="span" sx={{ color: "text.primary" }}>
                    Aeroscript
                  </Box>
                  <Box component="span" sx={{ color: "warning.main", fontWeight: 900 }}>
                    .in
                  </Box>
                </Typography>

                {/* Subtle underline accent */}
                <Box
                  sx={{
                    mt: 1,
                    width: 120,
                    height: 6,
                    borderRadius: 999,
                    background:
                      "linear-gradient(90deg, #ff6a00, #ff9a3d)",
                    opacity: 0.85,
                    boxShadow: "0 6px 18px rgba(255,106,0,.35)",
                  }}
                />

                {/* Tagline or any extra brand copy (optional) */}
                <Typography
                  variant="subtitle1"
                  sx={{ mt: 2, color: "text.secondary", maxWidth: 440 }}
                >
                  Sign in for a faster checkout, order tracking and personalized deals.
                </Typography>
              </Box>
            </Grid>

            {/* RIGHT: Login card */}
            <Grid item xs={12} md={7} lg={6}>
              <Paper
                elevation={0}
                sx={{
                  ml: { md: "auto" }, // push to the right on desktop
                  p: { xs: 2.5, sm: 3.5 },
                  borderRadius: 3,
                  bgcolor: "background.paper",
                  boxShadow:
                    "0 10px 26px rgba(0,0,0,0.06), 0 6px 10px rgba(0,0,0,0.04)",
                }}
              >
                {loading && <LinearProgress sx={{ mb: 2, borderRadius: 1 }} />}

                {/* Title row */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Avatar
                    sx={{
                      bgcolor: (t) => t.palette.secondary.main,
                      color: "common.white",
                      width: 40,
                      height: 40,
                      boxShadow: "0 6px 14px rgba(124,77,255,.28)",
                    }}
                  >
                    <LockOutlinedIcon fontSize="small" />
                  </Avatar>
                  <Typography sx={{ ml: 1.5, fontWeight: 800, fontSize: 18 }}>
                    Sign in to your account
                  </Typography>
                </Box>

                {/* Compact security strip inside card */}
                <Box
                  sx={{
                    mt: 1,
                    mb: 2.5,
                    p: 1.2,
                    px: 1.6,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    borderRadius: 2,
                    bgcolor: (t) => t.palette.secondary.main + "14",
                    border: (t) => `1px solid ${t.palette.secondary.main}33`,
                  }}
                >
                  <Chip
                    icon={<ShieldOutlinedIcon />}
                    label="Secure & seamless sign-in"
                    size="small"
                    color="secondary"
                    sx={{
                      color: "common.white",
                      "& .MuiChip-icon": { color: "common.white" },
                    }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    Encryption & OTP verification keep your account safe.
                  </Typography>
                </Box>

                {/* Errors / loading */}
                {error && (
                  <Box sx={{ mb: 1.5 }}>
                    <ErrorMessage>{error}</ErrorMessage>
                  </Box>
                )}
                {loading && <Loading />}

                {/* Form */}
                <Box component="form" noValidate onSubmit={submitHandler}>
                  <TextField
                    fullWidth
                    margin="normal"
                    id="email"
                    label="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                    error={Boolean(emailError)}
                    helperText={emailError ? "Enter a valid email address" : " "}
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
                    margin="normal"
                    id="password"
                    label="Password"
                    type={showPw ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, password: true }))}
                    error={Boolean(passwordError)}
                    helperText={passwordError ? "Minimum 6 characters" : " "}
                    autoComplete="current-password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label={showPw ? "Hide password" : "Show password"}
                            onClick={() => setShowPw((s) => !s)}
                            edge="end"
                            size="small"
                          >
                            {showPw ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    sx={{
                      mt: 2.5,
                      py: 1.15,
                      fontWeight: 700,
                      borderRadius: 2,
                      textTransform: "none",
                      boxShadow: "0 8px 24px rgba(124,77,255,.22)",
                    }}
                  >
                    Sign In
                  </Button>

                  <Divider sx={{ my: 2.4 }}>OR</Divider>

                  <Button
                    type="button"
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    sx={{
                      py: 1.05,
                      fontWeight: 700,
                      borderRadius: 2,
                      textTransform: "none",
                      borderColor: "secondary.main",
                      "&:hover": {
                        borderColor: "secondary.dark",
                        bgcolor: (t) => t.palette.secondary.main + "08",
                      },
                    }}
                    onClick={openOtp}
                  >
                    Request an OTP
                  </Button>

                  <Grid container sx={{ mt: 2 }}>
                    <Grid item xs>
                      <Link
                        component={RouterLink}
                        to="/forget_password"
                        underline="hover"
                      >
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link component={RouterLink} to="/signup" underline="hover">
                        Don&apos;t have an account? Sign Up
                      </Link>
                    </Grid>
                  </Grid>
                </Box>

                <Box sx={{ mt: 5 }}>
                  <Copyright />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>

        <Footer />
      </Box>

      {/* OTP Animation Dialog (free Lottie) */}
      <Dialog
        open={otpOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeOtp}
        PaperProps={{
          sx: { borderRadius: 3, p: 0, minWidth: { xs: 320, sm: 380 } },
        }}
      >
        <DialogContent sx={{ p: 3, textAlign: "center" }}>
          <Player
            autoplay
            loop={false}
            src="https://assets10.lottiefiles.com/packages/lf20_touohxv0.json"
            style={{ height: 140, marginBottom: -6 }}
          />
          <Typography variant="h6" sx={{ mt: 1, fontWeight: 700 }}>
            OTP Sent Successfully
          </Typography>
          <Typography variant="body2" sx={{ mt: 0.5 }} color="text.secondary">
            We&apos;ve sent an OTP to your registered mobile number.
          </Typography>
          <Button
            variant="contained"
            size="small"
            startIcon={<CheckCircleRoundedIcon />}
            sx={{ mt: 2, textTransform: "none", borderRadius: 2 }}
            onClick={closeOtp}
          >
            Okay
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
