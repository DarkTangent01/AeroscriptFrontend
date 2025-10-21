// Filename: Register.jsx (MUI v5 — 3×2 layout, widened card, centered brand)

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link as RouterLink } from "react-router-dom";
import { register as registerAction } from "../../actions/userActions";

import Header from "../home/components/Header";
import Footer from "../home/components/Footer";

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  TextField,
  Typography,
  LinearProgress,
  Chip,
  FormControlLabel,
  Divider,
  Grid,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";

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

export default function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [accept, setAccept] = useState(false);

  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);
  const [localMsg, setLocalMsg] = useState("");

  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector((s) => s.userRegister);
  const history = useHistory();

  useEffect(() => {
    if (userInfo) history.push("/");
  }, [history, userInfo]);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordsMatch = password && confirm && password === confirm;

  const canSubmit =
    firstname &&
    lastname &&
    emailValid &&
    phoneNumber &&
    password &&
    confirm &&
    passwordsMatch &&
    accept;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!passwordsMatch) {
      setLocalMsg("Passwords do not match");
      return;
    }
    setLocalMsg("");
    dispatch(registerAction(firstname, lastname, email, password, phoneNumber));
  };

  const inputSx = {
    "& .MuiInputBase-root": {
      backgroundColor: "background.default",
      borderRadius: 2,
    },
  };

  return (
    <>
      <Helmet>
        <title>Aeroscript | Sign up</title>
      </Helmet>
      <CssBaseline />

      <Header />
      <Box sx={(t) => t.mixins.toolbar} />

      <Box component="main" sx={{ bgcolor: "background.default", py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              // wider form card on desktop
              gridTemplateColumns: { xs: "1fr", md: "minmax(380px, 520px) 780px" },
              gap: { xs: 3, md: 6 },
              alignItems: "center",       // center brand vertically vs card
            }}
          >
            {/* Left brand block — centered */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 900,
                  letterSpacing: -0.5,
                  lineHeight: 1.1,
                  fontSize: { md: 46, lg: 52 },
                  color: "text.primary",
                }}
              >
                Aeroscript
                <Box component="span" sx={{ color: "warning.main" }}>
                  .in
                </Box>
              </Typography>

              <Box
                sx={{
                  mt: 1,
                  width: 120,
                  height: 6,
                  borderRadius: 999,
                  background: "linear-gradient(90deg,#ff6a00,#ff9a3d)",
                  boxShadow: "0 6px 18px rgba(255,106,0,.35)",
                }}
              />
              <Typography
                variant="subtitle1"
                sx={{ mt: 2, color: "text.secondary", maxWidth: 420, fontSize: 16, lineHeight: 1.5 }}
              >
                Create your account for a smoother checkout, order tracking, and personalized
                recommendations.
              </Typography>
            </Box>

            {/* Right card */}
            <Box sx={{ ml: { md: "auto" } }}>
              <Paper
                elevation={0}
                sx={{
                  width: "100%",
                  maxWidth: { xs: 430, md: 760 }, // wide so 3 inputs fit
                  p: { xs: 2.5, sm: 3.5 },
                  borderRadius: 3,
                  bgcolor: "background.paper",
                  boxShadow: "0 10px 26px rgba(0,0,0,0.06), 0 6px 10px rgba(0,0,0,0.04)",
                }}
              >
                {loading && <LinearProgress sx={{ mb: 2, borderRadius: 1 }} />}

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
                    Create your account
                  </Typography>
                </Box>

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
                    label="Secure & seamless sign-up"
                    size="small"
                    color="secondary"
                    sx={{
                      color: "common.white",
                      "& .MuiChip-icon": { color: "common.white" },
                    }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    Your data is encrypted. We value your privacy.
                  </Typography>
                </Box>

                {!!error && (
                  <Box sx={{ mb: 1.5 }}>
                    <ErrorMessage>{error}</ErrorMessage>
                  </Box>
                )}
                {!!localMsg && (
                  <Box sx={{ mb: 1.5 }}>
                    <ErrorMessage>{localMsg}</ErrorMessage>
                  </Box>
                )}
                {loading && <Loading />}

                {/* ===== FORM: two rows of three (md+), stacked on mobile ===== */}
                <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 1 }}>
                  <Grid container spacing={1.5}>
                    {/* Row 1 */}
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        label="First Name"
                        autoComplete="given-name"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        sx={inputSx}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        autoComplete="family-name"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        sx={inputSx}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={!!email && !emailValid}
                        helperText={!!email && !emailValid ? "Enter a valid email address" : " "}
                        sx={inputSx}
                      />
                    </Grid>

                    {/* Row 2 */}
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        label="Phone number"
                        autoComplete="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                        sx={inputSx}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        label="Password"
                        type={showPw ? "text" : "password"}
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={inputSx}
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
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        label="Confirm Password"
                        type={showPw2 ? "text" : "password"}
                        autoComplete="new-password"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        error={!!confirm && !passwordsMatch}
                        helperText={!!confirm && !passwordsMatch ? "Passwords do not match" : " "}
                        sx={inputSx}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label={showPw2 ? "Hide confirm password" : "Show confirm password"}
                                onClick={() => setShowPw2((s) => !s)}
                                edge="end"
                                size="small"
                              >
                                {showPw2 ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>

                  <FormControlLabel
                    sx={{ mt: 1 }}
                    control={
                      <Checkbox color="primary" checked={accept} onChange={(e) => setAccept(e.target.checked)} />
                    }
                    label="I agree to the Terms & Conditions"
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    disabled={!canSubmit}
                    sx={{
                      mt: 2.5,
                      mb: 2,
                      py: 1.15,
                      fontWeight: 700,
                      borderRadius: 2,
                      textTransform: "none",
                      boxShadow: "0 8px 24px rgba(124,77,255,.22)",
                    }}
                  >
                    Sign Up
                  </Button>

                  <Divider sx={{ my: 1.5 }} />

                  <Typography variant="body2" sx={{ textAlign: "right" }}>
                    <Link component={RouterLink} to="/user" underline="hover">
                      Already have an account? Sign in
                    </Link>
                  </Typography>

                  <Box sx={{ mt: 4 }}>
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary" }}
                      align="center"
                      display="block"
                    >
                      By signing up, you agree to our Terms & Privacy Policy.
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                      <Copyright />
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
