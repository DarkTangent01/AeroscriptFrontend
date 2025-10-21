// Filename: notfound.jsx (MUI v5 – Ultra Animated 404)
// All styling inline with MUI sx; no external CSS or libs.

import * as React from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Stack,
  TextField,
  InputAdornment,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Notfound() {
  const theme = useTheme();
  const history = useHistory();
  const [query, setQuery] = React.useState("");

  // simple parallax cursor
  const [mouse, setMouse] = React.useState({ x: 0.5, y: 0.5 });
  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMouse({ x, y });
  };

  const onSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    history.push(`/search?q=${encodeURIComponent(q)}`);
  };

  // particles preset
  const particles = React.useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        size: 6 + ((i * 23) % 12),
        top: `${(i * 177) % 95}%`,
        left: `${(i * 97) % 95}%`,
        delay: (i * 0.35) % 6,
        dur: 6 + ((i * 11) % 7),
      })),
    []
  );

  // parallax helpers
  const px = (d) => `translate(${(mouse.x - 0.5) * d}px, ${(mouse.y - 0.5) * d}px)`;

  return (
    <>
      <Helmet>
        <title>404 — Page not found | Aeroscript</title>
      </Helmet>

      <Box
        onMouseMove={onMove}
        sx={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          position: "relative",
          overflow: "hidden",
          // animated gradient backdrop
          background:
            "radial-gradient(1200px 800px at 10% 10%, rgba(124,77,255,.10), transparent 50%), radial-gradient(1200px 800px at 120% -10%, rgba(30,136,229,.12), transparent 50%), linear-gradient(180deg, #eef3ff 0%, #f7f9ff 100%)",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "-20%",
            background:
              "conic-gradient(from 0deg, rgba(124,77,255,.08), rgba(30,136,229,.08), rgba(255,77,90,.06), rgba(124,77,255,.08))",
            animation: "spin 26s linear infinite",
          },
          "@keyframes spin": {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
        }}
      >
        {/* floating blurred blobs with parallax */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            filter: "blur(26px)",
            "& .blob": {
              position: "absolute",
              borderRadius: "50%",
              opacity: 0.55,
              animation: "float 18s ease-in-out infinite",
            },
            "& .b1": {
              width: 340,
              height: 340,
              top: -60,
              left: -60,
              transform: px(20),
              background:
                "radial-gradient(circle at 30% 30%, rgba(124,77,255,.55), rgba(124,77,255,0))",
              animationDelay: "0s",
            },
            "& .b2": {
              width: 420,
              height: 420,
              bottom: -120,
              right: -80,
              transform: px(-16),
              background:
                "radial-gradient(circle at 60% 40%, rgba(30,136,229,.45), rgba(30,136,229,0))",
              animationDelay: "2.5s",
            },
            "& .b3": {
              width: 300,
              height: 300,
              top: 20,
              right: 120,
              transform: px(10),
              background:
                "radial-gradient(circle at 50% 50%, rgba(255,77,90,.28), rgba(255,77,90,0))",
              animationDelay: "6s",
            },
            "@keyframes float": {
              "0%": { transform: "translateY(0px) scale(1)" },
              "50%": { transform: "translateY(18px) scale(1.02)" },
              "100%": { transform: "translateY(0px) scale(1)" },
            },
          }}
        >
          <Box className="blob b1" />
          <Box className="blob b2" />
          <Box className="blob b3" />
        </Box>

        {/* sparkles */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            "& .p": {
              position: "absolute",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,255,255,.9) 0%, rgba(255,255,255,.2) 40%, rgba(255,255,255,0) 70%)",
              animation: "twinkle var(--dur)s ease-in-out infinite",
              boxShadow: "0 0 12px rgba(255,255,255,.35)",
            },
            "@keyframes twinkle": {
              "0%, 100%": { transform: "scale(.6)", opacity: 0.5 },
              "50%": { transform: "scale(1)", opacity: 1 },
            },
          }}
        >
          {particles.map((p, i) => (
            <Box
              key={i}
              className="p"
              sx={{
                width: p.size,
                height: p.size,
                top: p.top,
                left: p.left,
                animationDelay: `${p.delay}s`,
                "--dur": p.dur,
              }}
            />
          ))}
        </Box>

        {/* content */}
        <Container maxWidth="md" disableGutters sx={{ position: "relative", zIndex: 1 }}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 4,
              p: { xs: 3, sm: 5 },
              mx: "auto",
              backdropFilter: "saturate(130%) blur(10px)",
              background: "linear-gradient(180deg, rgba(255,255,255,.92), rgba(255,255,255,.86))",
              boxShadow:
                "0 18px 56px rgba(17, 24, 39, 0.14), 0 8px 22px rgba(17, 24, 39, 0.10)",
              overflow: "hidden",
              position: "relative",
              // animated border glow
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                padding: "1px",
                borderRadius: 16,
                background:
                  "linear-gradient(140deg, rgba(124,77,255,.45), rgba(30,136,229,.45), rgba(255,77,90,.35))",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                animation: "borderPulse 3.4s ease-in-out infinite",
              },
              "@keyframes borderPulse": {
                "0%, 100%": { filter: "blur(0px)", opacity: 0.65 },
                "50%": { filter: "blur(3px)", opacity: 1 },
              },
            }}
          >
            <Stack
              direction={{ xs: "column-reverse", md: "row" }}
              alignItems="center"
              spacing={{ xs: 3, md: 6 }}
              sx={{ position: "relative" }}
            >
              {/* Left: Text + Actions */}
              <Stack spacing={2} flex={1} textAlign={{ xs: "center", md: "left" }}>
                {/* Animated 404 (stroke-dash shimmer) */}
                <Box sx={{ height: { xs: 120, sm: 150 }, mb: 1 }}>
                  <svg
                    viewBox="0 0 600 200"
                    width="100%"
                    height="100%"
                    style={{ transform: px(4) }}
                  >
                    <defs>
                      <linearGradient id="grad404" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#7c4dff" />
                        <stop offset="50%" stopColor="#1e88e5" />
                        <stop offset="100%" stopColor="#ff4d5a" />
                      </linearGradient>
                    </defs>
                    <text
                      x="50%"
                      y="65%"
                      textAnchor="middle"
                      fontSize="132"
                      fontWeight="900"
                      fill="none"
                      stroke="url(#grad404)"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray="24 22"
                    >
                      404
                      <animate
                        attributeName="stroke-dashoffset"
                        from="0"
                        to="-400"
                        dur="3.5s"
                        repeatCount="indefinite"
                      />
                    </text>
                    <text
                      x="50%"
                      y="65%"
                      textAnchor="middle"
                      fontSize="132"
                      fontWeight="900"
                      fill="rgba(0,0,0,.06)"
                    >
                      404
                    </text>
                  </svg>
                </Box>

                <Typography variant="h4" fontWeight={900}>
                  Lost in the aisles?
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  The page you’re looking for may have moved or doesn’t exist. Try a quick search or head back home.
                </Typography>

                {/* Search */}
                <Box component="form" onSubmit={onSearch}>
                  <TextField
                    fullWidth
                    placeholder="Search products, categories, brands…"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                {/* Actions */}
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.25}
                  sx={{ pt: 0.5 }}
                  justifyContent={{ xs: "center", md: "flex-start" }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    component={RouterLink}
                    to="/"
                    startIcon={<HomeIcon />}
                    sx={{
                      px: 3,
                      fontWeight: 800,
                      letterSpacing: 0.2,
                      transition: "transform .15s ease, box-shadow .15s ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 14px 30px rgba(30,136,229,.28)",
                      },
                      "&:active": { transform: "translateY(0px) scale(.99)" },
                    }}
                  >
                    Go Home
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => window.history.back()}
                    startIcon={<ArrowBackIcon />}
                    sx={{
                      px: 3,
                      fontWeight: 800,
                      borderWidth: 2,
                      "&:hover": { borderWidth: 2, transform: "translateY(-2px)" },
                      transition: "transform .15s ease",
                    }}
                  >
                    Go Back
                  </Button>
                  <Button
                    variant="text"
                    size="large"
                    component={RouterLink}
                    to="/contact"
                    startIcon={<SupportAgentIcon />}
                    sx={{
                      px: 3,
                      fontWeight: 800,
                      "&:hover": { transform: "translateY(-2px)" },
                      transition: "transform .15s ease",
                    }}
                  >
                    Contact Support
                  </Button>
                </Stack>
              </Stack>

              {/* Right: Rocket Illustration */}
              <Box
                sx={{
                  width: { xs: 220, sm: 260, md: 300 },
                  height: { xs: 220, sm: 260, md: 300 },
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    transform: `${px(12)} rotate(-8deg)`,
                    transformOrigin: "center",
                    animation: "bob 4s ease-in-out infinite",
                    "@keyframes bob": {
                      "0%, 100%": { translate: "0 0" },
                      "50%": { translate: "0 -6px" },
                    },
                  }}
                >
                  <svg viewBox="0 0 220 220" width="100%" height="100%">
                    {/* glow */}
                    <ellipse cx="110" cy="170" rx="48" ry="12" fill="rgba(0,0,0,.10)" />
                    {/* body */}
                    <g>
                      <path
                        d="M110 30c30 28 36 76 22 116H88C74 106 80 58 110 30z"
                        fill="#ffffff"
                        stroke="#e0e7ff"
                        strokeWidth="3"
                      />
                      <circle cx="110" cy="90" r="16" fill="#e3f2fd" stroke="#90caf9" strokeWidth="3" />
                      <circle cx="110" cy="90" r="8" fill="#90caf9" />
                      {/* wings */}
                      <path d="M88 110L62 126 70 92z" fill="#7c4dff" opacity=".9" />
                      <path d="M132 110l26 16-8-34z" fill="#1e88e5" opacity=".9" />
                      {/* flame */}
                      <g>
                        <path
                          d="M100 146c8 8 12 18 10 28 10-8 18-18 20-30-10 2-20 2-30 2z"
                          fill="url(#flameGrad)"
                        >
                          <animate
                            attributeName="d"
                            dur="0.8s"
                            repeatCount="indefinite"
                            values="
                            M100 146c8 8 12 18 10 28 10-8 18-18 20-30-10 2-20 2-30 2z;
                            M100 146c10 10 12 20 8 30 12-10 20-20 22-32-12 3-20 3-30 2z;
                            M100 146c8 8 12 18 10 28 10-8 18-18 20-30-10 2-20 2-30 2z"
                          />
                        </path>
                        <defs>
                          <linearGradient id="flameGrad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#ffcc80" />
                            <stop offset="60%" stopColor="#ff7043" />
                            <stop offset="100%" stopColor="#ff3d00" />
                          </linearGradient>
                        </defs>
                      </g>
                    </g>
                  </svg>
                </Box>
              </Box>
            </Stack>
          </Paper>

          <Typography
            variant="caption"
            align="center"
            display="block"
            sx={{ mt: 2, color: "text.secondary" }}
          >
            Error code: 404 • If you believe this is a mistake, please{" "}
            <Typography
              component={RouterLink}
              to="/contact"
              color="primary"
              sx={{ textDecoration: "none", fontWeight: 700 }}
            >
              let us know
            </Typography>
            .
          </Typography>
        </Container>
      </Box>
    </>
  );
}
