import React from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  Container,
  Paper,
  Typography,
  Grid,
  Divider,
  Fade,
  Slide,
  Stack,
  Chip,
  Button,
  IconButton,
  useScrollTrigger,
  Fab,
  Zoom,
} from "@mui/material";
import { styled, alpha, useTheme } from "@mui/material/styles";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import StarIcon from "@mui/icons-material/Star";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Menulist from "./components/Menulist";
import CarouselMain from "./components/Carousel";
import Imagelist from "./components/Imagelist";
import Tvitemlist from "./components/Tvitemlist";

// ---------- Styled helpers ----------
const Section = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2.5, 2.5),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(3, 3),
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(3.5, 3.5),
  },
  borderRadius: 20,
  boxShadow:
    "0 12px 28px rgba(0,0,0,0.06), 0 6px 12px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.06)",
  background:
    theme.palette.mode === "light"
      ? theme.palette.background.paper
      : alpha(theme.palette.background.default, 0.8),
  transition: "transform .18s ease, box-shadow .18s ease",
  "&:hover": {
    transform: "translateY(-1px)",
    boxShadow:
      "0 18px 40px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.06)",
  },
}));

const HeroCard = styled(Paper)(({ theme }) => ({
  borderRadius: 20,
  overflow: "hidden",
  boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
}));

function BackToTopFab(props) {
  const trigger = useScrollTrigger({ threshold: 180 });
  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        sx={{ position: "fixed", bottom: { xs: 72, sm: 32 }, right: 24, zIndex: 1300 }}
      >
        <Fab color="primary" size="medium" aria-label="back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <ArrowUpwardIcon />
        </Fab>
      </Box>
    </Zoom>
  );
}

function useDealCountdown() {
  const [left, setLeft] = React.useState({ h: "--", m: "--", s: "--" });
  React.useEffect(() => {
    const tick = () => {
      // Countdown to 23:59:59 IST today
      const now = new Date();
      const end = new Date();
      end.setHours(23, 59, 59, 999);
      const ms = Math.max(0, end.getTime() - now.getTime());
      const totalSec = Math.floor(ms / 1000);
      const h = String(Math.floor(totalSec / 3600)).padStart(2, "0");
      const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, "0");
      const s = String(totalSec % 60).padStart(2, "0");
      setLeft({ h, m, s });
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);
  return left;
}

export default function Home() {
  const [show, setShow] = React.useState(false);
  const theme = useTheme();
  const deal = useDealCountdown();

  React.useEffect(() => {
    const t = setTimeout(() => setShow(true), 30);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Online Shopping Site in India: shop online for books, smartphones, smart TVs, watches
        </title>
        <meta
          name="description"
          content="Discover premium deals on smartphones, TVs, fashion & more. Fast delivery, secure payments, and exciting daily offers."
        />
      </Helmet>

      <Header />
      <Box sx={(t) => t.mixins.toolbar} />

      {/* Background: light gradient with subtle pattern */}
      <Box
        component="main"
        sx={{
          bgcolor: theme.palette.mode === "light" ? "#f6f7fb" : "background.default",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          // gradient layers
          backgroundImage:
            theme.palette.mode === "light"
              ? `radial-gradient(circle at 10% 10%, ${alpha(theme.palette.primary.main, 0.06)} 0, transparent 35%),
                 radial-gradient(circle at 90% 0%, ${alpha(theme.palette.secondary.main, 0.06)} 0, transparent 40%)`
              : "none",
        }}
      >
        <Menulist />

        {/* Entrance animation container */}
        <Slide in={show} direction="up" timeout={320}>
          <Box>
            <Fade in={show} timeout={420}>
              <Container maxWidth="xl" sx={{ mt: 3, mb: { xs: 6, sm: 10 } }}>
                {/* Hero / Carousel */}
                <HeroCard sx={{ mb: { xs: 3, sm: 4 } }}>
                  <CarouselMain />
                </HeroCard>

                {/* Deal of the Day */}
                <Section elevation={0} sx={{ mb: { xs: 4, sm: 6 } }}>
                  <Grid container alignItems="center" spacing={2} sx={{ mb: 1 }}>
                    <Grid item xs={12} md>
                      <Stack direction="row" alignItems="center" spacing={1.2}>
                        <LocalFireDepartmentIcon sx={{ color: "error.main" }} />
                        <Typography variant="h6" sx={{ fontWeight: 800 }}>
                          Deal of the Day
                        </Typography>
                        <Chip
                          icon={<FlashOnIcon />}
                          label={`${deal.h}:${deal.m}:${deal.s}`}
                          size="small"
                          sx={{
                            fontWeight: 700,
                            bgcolor: alpha(theme.palette.warning.main, 0.15),
                            color: theme.palette.warning.darker ?? theme.palette.warning.dark,
                          }}
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md="auto">
                      <Stack direction="row" spacing={1} justifyContent={{ xs: "flex-start", md: "flex-end" }}>
                        <Button variant="contained" size="small">View all</Button>
                        <Button variant="text" size="small">Terms</Button>
                      </Stack>
                    </Grid>
                  </Grid>
                  <Divider sx={{ my: { xs: 2, sm: 3 } }} />
                  <Imagelist />
                </Section>

                {/* TVs */}
                <Section elevation={0} sx={{ mb: { xs: 4, sm: 6 } }}>
                  <Grid container alignItems="center" spacing={2} sx={{ mb: 1 }}>
                    <Grid item xs={12} md>
                      <Stack direction="row" alignItems="center" spacing={1.2}>
                        <StarIcon sx={{ color: "primary.main" }} />
                        <Typography variant="h6" sx={{ fontWeight: 800 }}>
                          Big Screens, Bigger Smiles
                        </Typography>
                        <Chip
                          label="Top picks"
                          size="small"
                          sx={{
                            fontWeight: 700,
                            bgcolor: alpha(theme.palette.primary.main, 0.1),
                            color: theme.palette.primary.main,
                          }}
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md="auto">
                      <Button variant="outlined" size="small">Explore TVs</Button>
                    </Grid>
                  </Grid>
                  <Divider sx={{ my: { xs: 2, sm: 3 } }} />
                  <Tvitemlist />
                </Section>


                <Section elevation={0} sx={{ mb: { xs: 4, sm: 6 } }}>
                  <Grid container alignItems="center" spacing={2} sx={{ mb: 1 }}>
                    <Grid item xs={12} md>
                      <Stack direction="row" alignItems="center" spacing={1.2}>
                        <StarIcon sx={{ color: "primary.main" }} />
                        <Typography variant="h6" sx={{ fontWeight: 800 }}>
                          Big Screens, Bigger Smiles
                        </Typography>
                        <Chip
                          label="Top picks"
                          size="small"
                          sx={{
                            fontWeight: 700,
                            bgcolor: alpha(theme.palette.primary.main, 0.1),
                            color: theme.palette.primary.main,
                          }}
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md="auto">
                      <Button variant="outlined" size="small">Explore TVs</Button>
                    </Grid>
                  </Grid>
                  <Divider sx={{ my: { xs: 2, sm: 3 } }} />
                  <Tvitemlist />
                </Section>


                <Section elevation={0} sx={{ mb: { xs: 4, sm: 6 } }}>
                  <Grid container alignItems="center" spacing={2} sx={{ mb: 1 }}>
                    <Grid item xs={12} md>
                      <Stack direction="row" alignItems="center" spacing={1.2}>
                        <StarIcon sx={{ color: "primary.main" }} />
                        <Typography variant="h6" sx={{ fontWeight: 800 }}>
                          Big Screens, Bigger Smiles
                        </Typography>
                        <Chip
                          label="Top picks"
                          size="small"
                          sx={{
                            fontWeight: 700,
                            bgcolor: alpha(theme.palette.primary.main, 0.1),
                            color: theme.palette.primary.main,
                          }}
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md="auto">
                      <Button variant="outlined" size="small">Explore TVs</Button>
                    </Grid>
                  </Grid>
                  <Divider sx={{ my: { xs: 2, sm: 3 } }} />
                  <Tvitemlist />
                </Section>

                {/* Trust badges */}
                <Grid container spacing={2} sx={{ mb: { xs: 5, sm: 8 } }}>
                  {[{
                    title: "Secure payments",
                    caption: "100% protected checkout",
                  },{
                    title: "Fast delivery",
                    caption: "Across 20,000+ pincodes",
                  },{
                    title: "Easy returns",
                    caption: "Hassle‑free replacements",
                  }].map((b, i) => (
                    <Grid key={b.title} item xs={12} sm={4}>
                      <Paper
                        variant="outlined"
                        sx={{
                          borderRadius: 16,
                          p: 2.2,
                          textAlign: "center",
                          bgcolor: alpha(theme.palette.background.paper, 0.6),
                          transition: "transform .18s ease",
                          "&:hover": { transform: "translateY(-2px)" },
                        }}
                      >
                        <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 0.5 }}>{b.title}</Typography>
                        <Typography variant="body2" color="text.secondary">{b.caption}</Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Fade>
          </Box>
        </Slide>

        <Box sx={{ flexShrink: 0 }}>
          <Footer />
        </Box>

        <BackToTopFab />
      </Box>
    </>
  );
}
