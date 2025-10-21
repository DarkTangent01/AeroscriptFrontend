// Footer.jsx — premium e-commerce footer (MUI v5)

import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  Divider,
  Link,
  Container,
  Stack,
  IconButton,
  Paper,
  TextField,
  Button,
  Chip,
} from "@mui/material";

// Icons
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ReplayIcon from "@mui/icons-material/Replay";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

// --- Reusable link like your old FooterLink, with nicer hover ---
function FooterLink({ to, children }) {
  return (
    <Typography variant="body2" sx={{ mt: 1, fontSize: 13, lineHeight: 1.8 }}>
      <Link
        component={RouterLink}
        to={to}
        underline="none"
        sx={{
          color: "rgba(255,255,255,0.85)",
          transition: "color .2s ease",
          "&:hover": { color: "warning.main" },
        }}
      >
        {children}
      </Link>
    </Typography>
  );
}

const sectionTitleSx = {
  color: "#ffffff",
  mb: 1.5,
  fontSize: 13,
  letterSpacing: 0.6,
  textTransform: "uppercase",
  fontWeight: 700,
};

// Simple payment “chips” (lightweight vs loading external images)
const PaymentChip = ({ label }) => (
  <Chip
    size="small"
    label={label}
    sx={{
      bgcolor: "rgba(255,255,255,0.06)",
      color: "rgba(255,255,255,0.85)",
      borderColor: "rgba(255,255,255,0.12)",
      borderWidth: 1,
      borderStyle: "solid",
      "& .MuiChip-label": { px: 1, py: 0.25, fontSize: 11, letterSpacing: 0.3 },
    }}
    variant="outlined"
  />
);

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 0,
        bgcolor: "#172337",
        color: "common.white",
        width: "100%",
        position: "relative",
      }}
    >
      {/* Top Feature Bar */}
      <Box
        sx={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          bgcolor: "rgba(255,255,255,0.02)",
        }}
      >
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={12} sm={6} md={"auto"}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <SupportAgentIcon fontSize="small" />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  24x7 Customer Support
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={"auto"}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <LocalShippingIcon fontSize="small" />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Superfast &amp; Safe Delivery
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={"auto"}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <VerifiedUserIcon fontSize="small" />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Secure Payments
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={"auto"}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <ReplayIcon fontSize="small" />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Easy Returns &amp; Replacements
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main Footer Content */}
      <Container maxWidth="lg" sx={{ pt: { xs: 4, sm: 6 }, pb: 3 }}>
        <Grid container spacing={4}>
          {/* Column 1: About */}
          <Grid item xs={12} sm={6} md={2.2}>
            <Typography variant="subtitle2" sx={sectionTitleSx}>
              About
            </Typography>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/contact">Contact Us</FooterLink>
            <FooterLink to="/stories">Aeroscript Stories</FooterLink>
            <FooterLink to="/press">Press</FooterLink>
            <FooterLink to="/wholesales">Aeroscript Wholesales</FooterLink>
            <FooterLink to="/corporateinformation">Corporate Information</FooterLink>
          </Grid>

          {/* Column 2: Help */}
          <Grid item xs={12} sm={6} md={2.2}>
            <Typography variant="subtitle2" sx={sectionTitleSx}>
              Help
            </Typography>
            <FooterLink to="/about">Payments</FooterLink>
            <FooterLink to="/about">Shipping</FooterLink>
            <FooterLink to="/about">Cancellation &amp; Returns</FooterLink>
            <FooterLink to="/about">FAQ</FooterLink>
            <FooterLink to="/about">Report Infringement</FooterLink>
          </Grid>

          {/* Column 3: Policy */}
          <Grid item xs={12} sm={6} md={2.2}>
            <Typography variant="subtitle2" sx={sectionTitleSx}>
              Policy
            </Typography>
            <FooterLink to="/returnpolicy">Return Policy</FooterLink>
            <FooterLink to="/terms">Terms Of Use</FooterLink>
            <FooterLink to="/security">Security</FooterLink>
            <FooterLink to="/privacy">Privacy</FooterLink>
            <FooterLink to="/sitemap">Sitemap</FooterLink>
            <FooterLink to="/erp">ERP Policy</FooterLink>
          </Grid>

          {/* Column 4: Social + App badges */}
          <Grid item xs={12} sm={6} md={2.2}>
            <Typography variant="subtitle2" sx={sectionTitleSx}>
              Social
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton size="small" color="inherit" sx={{ opacity: 0.9 }}>
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" color="inherit" sx={{ opacity: 0.9 }}>
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" color="inherit" sx={{ opacity: 0.9 }}>
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" color="inherit" sx={{ opacity: 0.9 }}>
                <YouTubeIcon fontSize="small" />
              </IconButton>
            </Stack>

            <Typography variant="subtitle2" sx={{ ...sectionTitleSx, mt: 2 }}>
              Get the App
            </Typography>
            <Stack spacing={1}>
              <Paper
                variant="outlined"
                sx={{
                  bgcolor: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: 1.25,
                  py: 0.75,
                  borderRadius: 1.5,
                }}
              >
                <AndroidIcon sx={{ fontSize: 18 }} />
                <Typography variant="caption" sx={{ opacity: 0.95 }}>
                  Get it on <b>Google Play</b>
                </Typography>
              </Paper>
              <Paper
                variant="outlined"
                sx={{
                  bgcolor: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: 1.25,
                  py: 0.75,
                  borderRadius: 1.5,
                }}
              >
                <AppleIcon sx={{ fontSize: 18 }} />
                <Typography variant="caption" sx={{ opacity: 0.95 }}>
                  Download on the <b>App Store</b>
                </Typography>
              </Paper>
            </Stack>
          </Grid>

          {/* Column 5 & 6: Addresses + quick contact */}
          <Grid item xs={12} md={3.2}>
            <Typography variant="subtitle2" sx={sectionTitleSx}>
              Registered Office Address
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.8 }}
            >
              Aeroscript Internet Private Limited,
              <br />
              210 New Street Varanasi,
              <br />
              Uttar Pradesh East, Pincode 232101
              <br />
              CIN: UI2652448699874
              <br />
              Telephone: 1800 232 42526
            </Typography>

            <Typography variant="subtitle2" sx={{ ...sectionTitleSx, mt: 2 }}>
              Mail Us
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.8 }}
            >
              Aeroscript Internet Private Limited,
              <br />
              210 New Street Varanasi,
              <br />
              Uttar Pradesh East, Pincode 232101
            </Typography>

            {/* Quick contact mini row */}
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <MailOutlineIcon sx={{ fontSize: 18, opacity: 0.9 }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  support@aeroscript.in
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneInTalkIcon sx={{ fontSize: 18, opacity: 0.9 }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  1800 232 42526
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        {/* Middle divider */}
        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.12)" }} />

        {/* Newsletter + Payments row */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography
              variant="subtitle2"
              sx={{ ...sectionTitleSx, mb: 1, textTransform: "none" }}
            >
              Stay updated — get offers &amp; product drops
            </Typography>
            <Stack
              component="form"
              direction={{ xs: "column", sm: "row" }}
              spacing={1}
              onSubmit={(e) => e.preventDefault()}
            >
              <TextField
                placeholder="Enter your email address"
                type="email"
                size="small"
                sx={{
                  maxWidth: 360,
                  bgcolor: "rgba(255,255,255,0.06)",
                  input: { color: "rgba(255,255,255,0.92)" },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                sx={{ fontWeight: 700 }}
              >
                Subscribe
              </Button>
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" } }}
          >
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <PaymentChip label="UPI" />
              <PaymentChip label="Visa" />
              <PaymentChip label="Mastercard" />
              <PaymentChip label="RuPay" />
              <PaymentChip label="NetBanking" />
              <PaymentChip label="Cash on Delivery" />
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Bottom bar */}
      <Box sx={{ bgcolor: "rgba(0,0,0,0.12)", py: 1.5 }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              © {new Date().getFullYear()} Aeroscript Shopping — All rights reserved.
            </Typography>

            <Stack direction="row" spacing={2}>
              <FooterLink to="/terms">Terms</FooterLink>
              <FooterLink to="/privacy">Privacy</FooterLink>
              <FooterLink to="/security">Security</FooterLink>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
