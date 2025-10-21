// Filename: Grocery.jsx
import React from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  Container,
  Paper,
  Typography,
  Grid,
  Stack,
  Chip,
  Divider,
  Button,
  Fade,
  Slide,
  useTheme,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import Header from "../home/components/Header";
import Footer from "../home/components/Footer";
import Menulist from "../home/components/Menulist";

/* ---------- Shared Styling ---------- */
const glassCard = (theme) => ({
  background: `linear-gradient(180deg, ${alpha(theme.palette.background.paper, 0.85)}, ${alpha(
    theme.palette.background.paper,
    0.92
  )})`,
  backdropFilter: "blur(8px)",
  border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
  boxShadow: "0 10px 24px rgba(0,0,0,0.06), 0 6px 12px rgba(0,0,0,0.04)",
});

const Section = styled(Paper)(({ theme }) => ({
  borderRadius: 16,
  padding: theme.spacing(2),
  [theme.breakpoints.up("md")]: { padding: theme.spacing(2.5) },
  ...glassCard(theme),
  transition: "transform .18s ease, box-shadow .18s ease",
  "&:hover": { transform: "translateY(-1px)", boxShadow: "0 16px 36px rgba(0,0,0,0.08)" },
}));

/* ---------- Hero Section ---------- */
const HeroCard = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: 16,
  overflow: "hidden",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  marginBottom: theme.spacing(3),
  "& img": {
    width: "100%",
    height: "auto",
    aspectRatio: "16/5", // compact hero
    objectFit: "cover",
    display: "block",
  },
}));

const HeroOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.10) 100%)",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingLeft: theme.spacing(6),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.down("sm")]: { paddingLeft: theme.spacing(3) },
}));

const BrandBadge = styled("span")(({ theme }) => ({
  display: "inline-block",
  padding: "6px 10px",
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: 0.2,
  color: "#fff",
  background: alpha("#000", 0.35),
  border: `1px solid ${alpha("#fff", 0.35)}`,
  backdropFilter: "blur(6px)",
}));

/* ---------- Product Cards & Rail ---------- */
const ProductCard = ({ item }) => (
  <Paper
    variant="outlined"
    sx={{
      p: 1.5,
      borderRadius: 2,
      height: 300,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      transition: "transform .18s ease, box-shadow .18s ease",
      "&:hover": { transform: "translateY(-2px)", boxShadow: "0 6px 16px rgba(0,0,0,0.08)" },
    }}
  >
    <Box sx={{ borderRadius: 1.5, overflow: "hidden", height: 160, mb: 1 }}>
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        loading="lazy"
      />
    </Box>
    <Typography variant="body2" sx={{ fontWeight: 700 }} noWrap>
      {item.title}
    </Typography>
    <Typography variant="caption" color="text.secondary" noWrap>
      {item.subtitle}
    </Typography>
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>₹{item.price}</Typography>
      {item.cut && (
        <Typography variant="caption" color="text.secondary" sx={{ textDecoration: "line-through" }}>
          ₹{item.cut}
        </Typography>
      )}
      {item.off && <Chip size="small" label={`${item.off}% off`} color="success" />}
    </Stack>
  </Paper>
);

const RailHeader = ({ title, chip }) => (
  <Grid container alignItems="center" spacing={2} sx={{ mb: 1 }}>
    <Grid item xs={12} md>
      <Stack direction="row" spacing={1.2} alignItems="center">
        <Typography variant="h6" sx={{ fontWeight: 800 }}>{title}</Typography>
        {chip && <Chip size="small" label={chip} color="primary" />}
      </Stack>
    </Grid>
    <Grid item xs={12} md="auto">
      <Button size="small" variant="outlined">View All</Button>
    </Grid>
  </Grid>
);

// forwardRef so sections can be scrolled to / observed
const ProductRail = React.forwardRef(function ProductRail(
  { title, chip, items = [], id },
  ref
) {
  return (
    <Section id={id} ref={ref} sx={{ mb: { xs: 3.5, sm: 5 } }}>
      <RailHeader title={title} chip={chip} />
      <Divider sx={{ my: { xs: 1.5, sm: 2 } }} />
      <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
        {items.map((it, idx) => (
          <Grid key={idx} item xs={6} sm={4} md={3} lg={2} xl={2}>
            <ProductCard item={it} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
});

/* ---------- Sticky Category Bar ---------- */
const StickyBar = styled(Paper)(({ theme }) => ({
  position: "sticky",
  top: (theme.mixins.toolbar?.minHeight || 64) + 8, // just below header/menulist
  zIndex: 102,
  borderRadius: 12,
  padding: "8px 10px",
  ...glassCard(theme),
  overflowX: "auto",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  "&::-webkit-scrollbar": { display: "none" },
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  borderRadius: 999,
  fontWeight: 700,
}));

/* ---------- Images ---------- */
const IMAGES = {
  hero:
    "https://images.pexels.com/photos/4199096/pexels-photo-4199096.jpeg?auto=compress&cs=tinysrgb&w=1920",
  fruits:
    "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=800",
  veggies:
    "https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=800",
  dairy:
    "https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=800",
  beverages:
    "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=800",
  snacks:
    "https://images.pexels.com/photos/694099/pexels-photo-694099.jpeg?auto=compress&cs=tinysrgb&w=800",
  household:
    "https://images.pexels.com/photos/4239127/pexels-photo-4239127.jpeg?auto=compress&cs=tinysrgb&w=800",
};

/* ---------- Main Page ---------- */
export default function Grocery() {
  const theme = useTheme();
  const [show, setShow] = React.useState(false);

  // section refs for scroll & spy
  const fruitsRef = React.useRef(null);
  const veggiesRef = React.useRef(null);
  const dairyRef = React.useRef(null);
  const beveragesRef = React.useRef(null);
  const snacksRef = React.useRef(null);
  const householdRef = React.useRef(null);

  const [active, setActive] = React.useState("fruits");

  React.useEffect(() => {
    const t = setTimeout(() => setShow(true), 40);
    return () => clearTimeout(t);
  }, []);

  // IntersectionObserver for active chip highlighting
  React.useEffect(() => {
    const opts = { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }; // middle of screen
    const map = [
      ["fruits", fruitsRef],
      ["veggies", veggiesRef],
      ["dairy", dairyRef],
      ["beverages", beveragesRef],
      ["snacks", snacksRef],
      ["household", householdRef],
    ];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const found = map.find(([, r]) => r.current === e.target);
          if (found) setActive(found[0]);
        }
      });
    }, opts);
    map.forEach(([, r]) => r.current && observer.observe(r.current));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (ref) => {
    if (!ref?.current) return;
    const topOffset = (theme.mixins.toolbar?.minHeight || 64) + 16 + 56; // header + spacing + stickybar approx
    const rect = ref.current.getBoundingClientRect();
    const absoluteTop = window.scrollY + rect.top - topOffset;
    window.scrollTo({ top: absoluteTop, behavior: "smooth" });
  };

  const categories = [
    { key: "fruits", label: "Fruits", ref: fruitsRef },
    { key: "veggies", label: "Vegetables", ref: veggiesRef },
    { key: "dairy", label: "Dairy & Bakery", ref: dairyRef },
    { key: "beverages", label: "Beverages", ref: beveragesRef },
    { key: "snacks", label: "Snacks", ref: snacksRef },
    { key: "household", label: "Household", ref: householdRef },
  ];

  return (
    <>
      <Helmet>
        <title>Grocery Store • AeroScript</title>
        <meta
          name="description"
          content="Grocery by AeroScript — shop fresh fruits, vegetables, dairy and essentials with a premium experience."
        />
      </Helmet>

      <Header />
      <Box sx={(t) => t.mixins.toolbar} />

      <Box
        component="main"
        sx={{
          bgcolor: theme.palette.mode === "light" ? "#f6f7fb" : "background.default",
          minHeight: "100vh",
          pb: 8,
          backgroundImage:
            theme.palette.mode === "light"
              ? `radial-gradient(circle at 10% 10%, ${alpha(theme.palette.primary.main, 0.06)} 0, transparent 35%),
                 radial-gradient(circle at 90% 0%, ${alpha(theme.palette.secondary.main, 0.06)} 0, transparent 40%)`
              : "none",
        }}
      >
        <Menulist />

        <Slide in={show} direction="up" timeout={300}>
          <Box>
            <Fade in={show} timeout={380}>
              <Container maxWidth="xl" sx={{ mt: 3, mb: { xs: 6, sm: 9 }, px: { xs: 2, md: 3 } }}>
                {/* Hero */}
                <HeroCard>
                  <img src={IMAGES.hero} alt="Grocery Hero" />
                  <HeroOverlay>
                    <Fade in={show} timeout={800}>
                      <Box>
                        <BrandBadge>Grocery by AeroScript</BrandBadge>
                        <Typography
                          variant="h4"
                          sx={{ fontWeight: 900, mt: 1.2, mb: 0.8, textShadow: "0 3px 8px rgba(0,0,0,0.4)" }}
                        >
                          Freshness. Quality. Convenience.
                        </Typography>
                        <Typography variant="subtitle1" sx={{ mb: 2, maxWidth: 520, lineHeight: 1.45, opacity: 0.95 }}>
                          Handpicked fruits & veggies, daily-fresh dairy, and all your home essentials — curated for you.
                        </Typography>
                        <Button variant="contained" color="primary" size="medium" onClick={() => scrollTo(fruitsRef)}>
                          Shop Now
                        </Button>
                      </Box>
                    </Fade>
                  </HeroOverlay>
                </HeroCard>

                {/* Sticky Category Bar */}
                <StickyBar elevation={0} sx={{ mb: 2.5 }}>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{ minWidth: 0, overflowX: "auto", py: 0.5 }}
                  >
                    {categories.map((c) => (
                      <CategoryChip
                        key={c.key}
                        label={c.label}
                        onClick={() => scrollTo(c.ref)}
                        color={active === c.key ? "primary" : "default"}
                        variant={active === c.key ? "filled" : "outlined"}
                        clickable
                      />
                    ))}
                  </Stack>
                </StickyBar>

                {/* Product Sections */}
                <ProductRail
                  id="fruits"
                  ref={fruitsRef}
                  title="Fresh Fruits"
                  chip="Farm Fresh"
                  items={Array.from({ length: 10 }).map((_, i) => ({
                    title: `Apple Pack ${i + 1}`,
                    subtitle: "1kg • Premium quality",
                    price: 149 + i * 5,
                    cut: 199 + i * 5,
                    off: 20,
                    image: IMAGES.fruits,
                  }))}
                />

                <ProductRail
                  id="veggies"
                  ref={veggiesRef}
                  title="Vegetables & Greens"
                  chip="Daily Picks"
                  items={Array.from({ length: 10 }).map((_, i) => ({
                    title: `Broccoli ${i + 1}`,
                    subtitle: "500g • Organic",
                    price: 79 + i * 4,
                    cut: 99 + i * 4,
                    off: 15,
                    image: IMAGES.veggies,
                  }))}
                />

                <ProductRail
                  id="dairy"
                  ref={dairyRef}
                  title="Dairy & Bakery"
                  chip="Top Rated"
                  items={Array.from({ length: 10 }).map((_, i) => ({
                    title: `Milk & Bread Combo ${i + 1}`,
                    subtitle: "Fresh every morning",
                    price: 89 + i * 3,
                    cut: 109 + i * 3,
                    off: 18,
                    image: IMAGES.dairy,
                  }))}
                />

                <ProductRail
                  id="beverages"
                  ref={beveragesRef}
                  title="Beverages"
                  chip="Chill & Refresh"
                  items={Array.from({ length: 10 }).map((_, i) => ({
                    title: `Orange Juice ${i + 1}`,
                    subtitle: "1L • No added sugar",
                    price: 99 + i * 4,
                    cut: 129 + i * 4,
                    off: 22,
                    image: IMAGES.beverages,
                  }))}
                />

                <ProductRail
                  id="snacks"
                  ref={snacksRef}
                  title="Snacks & Packaged Foods"
                  chip="Bestsellers"
                  items={Array.from({ length: 10 }).map((_, i) => ({
                    title: `Potato Chips ${i + 1}`,
                    subtitle: "Crunchy & Tasty",
                    price: 49 + i * 2,
                    cut: 69 + i * 2,
                    off: 25,
                    image: IMAGES.snacks,
                  }))}
                />

                <ProductRail
                  id="household"
                  ref={householdRef}
                  title="Household Essentials"
                  chip="Everyday Use"
                  items={Array.from({ length: 10 }).map((_, i) => ({
                    title: `Detergent Pack ${i + 1}`,
                    subtitle: "1kg • Fresh scent",
                    price: 199 + i * 10,
                    cut: 249 + i * 10,
                    off: 20,
                    image: IMAGES.household,
                  }))}
                />
              </Container>
            </Fade>
          </Box>
        </Slide>

        <Footer />
      </Box>
    </>
  );
}
