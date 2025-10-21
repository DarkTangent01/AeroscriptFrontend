// Filename: Mobiles.jsx
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
  Slider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Rating,
  IconButton,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import CloseIcon from "@mui/icons-material/Close";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

import Header from "../home/components/Header";
import Footer from "../home/components/Footer";
import Menulist from "../home/components/Menulist";

/* ---------- Shared styling (AeroScript look) ---------- */
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

/* ---------- Hero ---------- */
const HeroCard = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: 16,
  overflow: "hidden",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  marginBottom: theme.spacing(3),
  "& img": {
    width: "100%",
    height: "auto",
    aspectRatio: "16/5",
    objectFit: "cover",
    display: "block",
  },
}));

const HeroOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  background: "linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.08) 100%)",
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

/* ---------- Sticky bars ---------- */
const StickyBar = styled(Paper)(({ theme }) => ({
  position: "sticky",
  top: (theme.mixins.toolbar?.minHeight || 64) + 8,
  zIndex: 102,
  borderRadius: 12,
  padding: "8px 10px",
  ...glassCard(theme),
  overflowX: "auto",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  "&::-webkit-scrollbar": { display: "none" },
}));

const FiltersBar = styled(Paper)(({ theme }) => ({
  position: "sticky",
  top: (theme.mixins.toolbar?.minHeight || 64) + 8 + 48 + 10,
  zIndex: 101,
  borderRadius: 12,
  padding: theme.spacing(1.25),
  ...glassCard(theme),
}));

const CategoryChip = styled(Chip)({
  borderRadius: 999,
  fontWeight: 700,
});

/* ---------- Product card & rail ---------- */
const Badge = styled("span")(({ theme, color = "primary" }) => ({
  fontSize: 10.5,
  fontWeight: 800,
  textTransform: "uppercase",
  padding: "4px 8px",
  borderRadius: 999,
  background: alpha(theme.palette[color].main, 0.12),
  color: theme.palette[color].main,
  border: `1px solid ${alpha(theme.palette[color].main, 0.22)}`,
}));

const CardRoot = styled(Paper)(({ theme }) => ({
  p: 1.5,
  borderRadius: 2,
  height: 340,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "transform .18s ease, box-shadow .18s ease",
  ...glassCard(theme),
  "&:hover": { transform: "translateY(-2px)", boxShadow: "0 6px 16px rgba(0,0,0,0.08)" },
}));

const ProductCard = ({ item, selected, onToggleCompare }) => (
  <CardRoot variant="outlined" sx={{ p: 1.5 }}>
    <Box sx={{ borderRadius: 1.5, overflow: "hidden", height: 170, mb: 1, position: "relative" }}>
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        loading="lazy"
      />
      <Box sx={{ position: "absolute", top: 8, left: 8, display: "flex", gap: 0.5 }}>
        {item.noCostEmi && <Badge>NO COST EMI</Badge>}
        {item.exchange && <Badge color="success">EXCHANGE</Badge>}
      </Box>
      <Checkbox
        checked={selected}
        onChange={() => onToggleCompare(item)}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
        inputProps={{ "aria-label": "select to compare" }}
      />
    </Box>

    <Typography variant="body2" sx={{ fontWeight: 700 }} noWrap>
      {item.title}
    </Typography>
    <Typography variant="caption" color="text.secondary" noWrap title={item.subtitle}>
      {item.subtitle}
    </Typography>

    <Stack direction="row" spacing={1} alignItems="center">
      <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>₹{item.price.toLocaleString()}</Typography>
      <Typography variant="caption" color="text.secondary" sx={{ textDecoration: "line-through" }}>
        ₹{item.cut.toLocaleString()}
      </Typography>
      <Chip size="small" label={`${item.off}% off`} color="success" />
      <Rating size="small" value={item.rating} precision={0.5} readOnly />
    </Stack>
  </CardRoot>
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

const ProductRail = React.forwardRef(function ProductRail(
  { title, chip, items = [], id, compare, onToggleCompare },
  ref
) {
  return (
    <Section id={id} ref={ref} sx={{ mb: { xs: 3.5, sm: 5 } }}>
      <RailHeader title={title} chip={chip} />
      <Divider sx={{ my: { xs: 1.5, sm: 2 } }} />
      <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
        {items.map((it, idx) => (
          <Grid key={idx} item xs={6} sm={4} md={3} lg={2} xl={2}>
            <ProductCard
              item={it}
              selected={!!compare.find((c) => c.sku === it.sku)}
              onToggleCompare={onToggleCompare}
            />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
});

/* ---------- Compare tray ---------- */
const CompareTray = styled(Paper)(({ theme }) => ({
  position: "fixed",
  left: "50%",
  transform: "translateX(-50%)",
  bottom: 16,
  zIndex: 1200,
  borderRadius: 14,
  padding: theme.spacing(1, 1.25),
  ...glassCard(theme),
  width: "min(980px, 92vw)",
}));

/* ---------- Images (Pexels CDN) ---------- */
const IMAGES = {
  hero: "https://images.pexels.com/photos/6078121/pexels-photo-6078121.jpeg?auto=compress&cs=tinysrgb&w=1920",
  accessories: "https://images.pexels.com/photos/5077421/pexels-photo-5077421.jpeg?auto=compress&cs=tinysrgb&w=800",
};

// Per-brand images (picked to visually match brand aesthetics)
const BRAND_IMAGES = {
  Apple: "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=800",
  Samsung: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800",
  OnePlus: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=800",
  Xiaomi: "https://images.pexels.com/photos/6078120/pexels-photo-6078120.jpeg?auto=compress&cs=tinysrgb&w=800",
  Realme: "https://images.pexels.com/photos/461729/pexels-photo-461729.jpeg?auto=compress&cs=tinysrgb&w=800",
  Vivo: "https://images.pexels.com/photos/1034153/pexels-photo-1034153.jpeg?auto=compress&cs=tinysrgb&w=800",
  Oppo: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800",
  Nothing: "https://images.pexels.com/photos/6078121/pexels-photo-6078121.jpeg?auto=compress&cs=tinysrgb&w=800",
};

// Fallback per-rail images (if a brand isn't in the map for some reason)
const RAIL_IMAGES = {
  budget: "https://images.pexels.com/photos/6078120/pexels-photo-6078120.jpeg?auto=compress&cs=tinysrgb&w=800",
  midrange: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800",
  flagships: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=800",
  fiveg: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800",
  gaming: "https://images.pexels.com/photos/1337247/pexels-photo-1337247.jpeg?auto=compress&cs=tinysrgb&w=800",
  camera: "https://images.pexels.com/photos/163124/phone-photo-lens-camera-163124.jpeg?auto=compress&cs=tinysrgb&w=800",
};

/* ---------- Data helpers ---------- */
const BRANDS = ["Apple", "Samsung", "OnePlus", "Xiaomi", "Realme", "Vivo", "Oppo", "Nothing"];
const RAMS = ["4GB", "6GB", "8GB", "12GB"];
const STORAGES = ["64GB", "128GB", "256GB"];
const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];
const sku = () => Math.random().toString(36).slice(2, 9).toUpperCase();

const imgForBrand = (brand, fallbackKey) =>
  BRAND_IMAGES[brand] || RAIL_IMAGES[fallbackKey] || BRAND_IMAGES.Samsung;

const mkItems = (fallbackKey, basePrice, titlePrefix, n, cutDelta, off) =>
  Array.from({ length: n }).map((_, i) => {
    const brand = rand(BRANDS);
    const ram = rand(RAMS);
    const storage = rand(STORAGES);
    const price = basePrice + i * 500;
    const item = {
      sku: `${titlePrefix}-${sku()}`,
      title: `${brand} ${titlePrefix} ${i + 1}`,
      subtitle: `${ram} · ${storage} · 120Hz · 50MP`,
      price,
      cut: price + (cutDelta ?? 2500),
      off: off ?? 18,
      image: imgForBrand(brand, fallbackKey),
      rating: Math.round((3 + Math.random() * 2) * 2) / 2, // 3.0 - 5.0
      brand,
      ram,
      storage,
      noCostEmi: Math.random() > 0.4,
      exchange: Math.random() > 0.55,
      is5g: Math.random() > 0.5,
      isGaming: Math.random() > 0.6,
      isCamera: Math.random() > 0.6,
    };
    return item;
  });

/* ---------- Main Page ---------- */
export default function Mobiles() {
  const theme = useTheme();
  const [show, setShow] = React.useState(false);

  // refs for sections
  const budgetRef = React.useRef(null);
  const midRef = React.useRef(null);
  const flagRef = React.useRef(null);
  const fivegRef = React.useRef(null);
  const gamingRef = React.useRef(null);
  const cameraRef = React.useRef(null);
  const accRef = React.useRef(null);

  const [active, setActive] = React.useState("budget");

  // filters
  const [price, setPrice] = React.useState([6000, 80000]);
  const [brands, setBrands] = React.useState([]);
  const [rams, setRams] = React.useState([]);
  const [storages, setStorages] = React.useState([]);
  const [rating, setRating] = React.useState(0);

  // compare
  const [compare, setCompare] = React.useState([]);
  const [openCompare, setOpenCompare] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setShow(true), 40);
    return () => clearTimeout(t);
  }, []);

  // scroll-spy
  React.useEffect(() => {
    const opts = { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 };
    const map = [
      ["budget", budgetRef],
      ["midrange", midRef],
      ["flagships", flagRef],
      ["5g", fivegRef],
      ["gaming", gamingRef],
      ["camera", cameraRef],
      ["accessories", accRef],
    ];
    const ob = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const f = map.find(([, r]) => r.current === e.target);
          if (f) setActive(f[0]);
        }
      });
    }, opts);
    map.forEach(([, r]) => r.current && ob.observe(r.current));
    return () => ob.disconnect();
  }, []);

  const scrollTo = (ref) => {
    if (!ref?.current) return;
    const topOffset =
      (theme.mixins.toolbar?.minHeight || 64) + 16 /*gap*/ + 48 /*cat bar*/ + 10 /*gap*/ + 72 /*filters approx*/;
    const rect = ref.current.getBoundingClientRect();
    const absoluteTop = window.scrollY + rect.top - topOffset;
    window.scrollTo({ top: absoluteTop, behavior: "smooth" });
  };

  const categories = [
    { key: "budget", label: "Budget", ref: budgetRef },
    { key: "midrange", label: "Mid-range", ref: midRef },
    { key: "flagships", label: "Flagships", ref: flagRef },
    { key: "5g", label: "5G", ref: fivegRef },
    { key: "gaming", label: "Gaming", ref: gamingRef },
    { key: "camera", label: "Camera", ref: cameraRef },
    { key: "accessories", label: "Accessories", ref: accRef },
  ];

  // sample data per rail (now brand-aware images)
  const DATA = {
    budget: mkItems("budget", 7999, "Aero One", 10, 2500, 25),
    midrange: mkItems("midrange", 14999, "Aero Neo", 10, 3000, 22),
    flagships: mkItems("flagships", 49999, "Aero Pro", 10, 7000, 12),
    "5g": mkItems("fiveg", 16999, "Aero 5G", 10, 4000, 18),
    gaming: mkItems("gaming", 29999, "Aero X", 10, 6000, 15),
    camera: mkItems("camera", 35999, "Aero Cam", 10, 6500, 14),
    accessories: Array.from({ length: 10 }).map((_, i) => ({
      sku: `ACC-${sku()}`,
      title: `Aero Accessory ${i + 1}`,
      subtitle: "Cables · Chargers · Cases",
      price: 499 + i * 50,
      cut: 999 + i * 50,
      off: 30,
      image: IMAGES.accessories,
      rating: Math.round((3 + Math.random() * 2) * 2) / 2,
      brand: "Aero",
      ram: "-",
      storage: "-",
      noCostEmi: Math.random() > 0.7,
      exchange: false,
      is5g: false,
      isGaming: false,
      isCamera: false,
    })),
  };

  // filter function
  const applyFilters = (arr) =>
    arr.filter((it) => {
      if (it.price < price[0] || it.price > price[1]) return false;
      if (brands.length && !brands.includes(it.brand)) return false;
      if (rams.length && !rams.includes(it.ram)) return false;
      if (storages.length && !storages.includes(it.storage)) return false;
      if (rating && it.rating < rating) return false;
      return true;
    });

  // compare handlers
  const toggleCompare = (item) => {
    setCompare((prev) => {
      const exists = prev.find((p) => p.sku === item.sku);
      if (exists) return prev.filter((p) => p.sku !== item.sku);
      return [...prev, item].slice(-4);
    });
  };
  const clearFilters = () => {
    setPrice([6000, 80000]);
    setBrands([]);
    setRams([]);
    setStorages([]);
    setRating(0);
  };

  return (
    <>
      <Helmet>
        <title>Mobiles • AeroScript</title>
        <meta
          name="description"
          content="Mobiles by AeroScript — shop budget to flagship smartphones, 5G, gaming phones, camera champions, and accessories."
        />
      </Helmet>

      <Header />
      <Box sx={(t) => t.mixins.toolbar} />

      <Box
        component="main"
        sx={{
          bgcolor: theme.palette.mode === "light" ? "#f6f7fb" : "background.default",
          minHeight: "100vh",
          pb: 10,
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
                  <img src={IMAGES.hero} alt="Mobiles Hero" />
                  <HeroOverlay>
                    <Fade in={show} timeout={800}>
                      <Box>
                        <BrandBadge>Mobiles by AeroScript</BrandBadge>
                        <Typography
                          variant="h4"
                          sx={{ fontWeight: 900, mt: 1.2, mb: 0.8, textShadow: "0 3px 8px rgba(0,0,0,0.4)" }}
                        >
                          Find your next smartphone.
                        </Typography>
                        <Typography variant="subtitle1" sx={{ mb: 2, maxWidth: 520, lineHeight: 1.45, opacity: 0.95 }}>
                          From budget heroes to flagship powerhouses — 5G, gaming, and epic cameras.
                        </Typography>
                        <Button variant="contained" color="primary" size="medium" onClick={() => scrollTo(budgetRef)}>
                          Shop Now
                        </Button>
                      </Box>
                    </Fade>
                  </HeroOverlay>
                </HeroCard>

                {/* Sticky Category Bar */}
                <StickyBar elevation={0} sx={{ mb: 1.5 }}>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ minWidth: 0, overflowX: "auto", py: 0.5 }}>
                    {[
                      { key: "budget", label: "Budget", ref: budgetRef },
                      { key: "midrange", label: "Mid-range", ref: midRef },
                      { key: "flagships", label: "Flagships", ref: flagRef },
                      { key: "5g", label: "5G", ref: fivegRef },
                      { key: "gaming", label: "Gaming", ref: gamingRef },
                      { key: "camera", label: "Camera", ref: cameraRef },
                      { key: "accessories", label: "Accessories", ref: accRef },
                    ].map((c) => (
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

                {/* Sticky Filters Bar */}
                <FiltersBar elevation={0} sx={{ mb: 2.5 }}>
                  <Grid container spacing={1.5} alignItems="center">
                    {/* Price */}
                    <Grid item xs={12} md={5}>
                      <Stack spacing={0.5}>
                        <Typography variant="caption" color="text.secondary">Price</Typography>
                        <Slider
                          value={price}
                          min={4000}
                          max={100000}
                          onChange={(_, v) => setPrice(v)}
                          valueLabelDisplay="auto"
                        />
                        <Typography variant="caption">
                          ₹{price[0].toLocaleString()} — ₹{price[1].toLocaleString()}
                        </Typography>
                      </Stack>
                    </Grid>

                    {/* Brand */}
                    <Grid item xs={6} md={2.25}>
                      <FormControl fullWidth size="small">
                        <InputLabel>Brand</InputLabel>
                        <Select
                          multiple
                          value={brands}
                          label="Brand"
                          onChange={(e) => setBrands(e.target.value)}
                          renderValue={(sel) => sel.join(", ")}
                        >
                          {BRANDS.map((b) => (
                            <MenuItem key={b} value={b}>{b}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>

                    {/* RAM */}
                    <Grid item xs={6} md={1.75}>
                      <FormControl fullWidth size="small">
                        <InputLabel>RAM</InputLabel>
                        <Select
                          multiple
                          value={rams}
                          label="RAM"
                          onChange={(e) => setRams(e.target.value)}
                          renderValue={(sel) => sel.join(", ")}
                        >
                          {RAMS.map((r) => (
                            <MenuItem key={r} value={r}>{r}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>

                    {/* Storage */}
                    <Grid item xs={6} md={1.75}>
                      <FormControl fullWidth size="small">
                        <InputLabel>Storage</InputLabel>
                        <Select
                          multiple
                          value={storages}
                          label="Storage"
                          onChange={(e) => setStorages(e.target.value)}
                          renderValue={(sel) => sel.join(", ")}
                        >
                          {STORAGES.map((s) => (
                            <MenuItem key={s} value={s}>{s}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>

                    {/* Rating */}
                    <Grid item xs={6} md={1.25}>
                      <Stack alignItems="flex-start">
                        <Typography variant="caption" color="text.secondary" sx={{ mb: 0.5 }}>
                          Min Rating
                        </Typography>
                        <Rating
                          value={rating}
                          precision={0.5}
                          onChange={(_, v) => setRating(v || 0)}
                        />
                      </Stack>
                    </Grid>

                    <Grid item xs={12} md="auto">
                      <Stack direction="row" spacing={1}>
                        <Button
                          variant="outlined"
                          startIcon={<RestartAltIcon />}
                          onClick={clearFilters}
                          size="small"
                        >
                          Reset
                        </Button>
                      </Stack>
                    </Grid>
                  </Grid>
                </FiltersBar>

                {/* Rails (brand-aware images + filters applied) */}
                <ProductRail
                  id="budget"
                  ref={budgetRef}
                  title="Budget Phones"
                  chip="Under ₹12,999"
                  items={applyFilters(DATA.budget)}
                  compare={compare}
                  onToggleCompare={toggleCompare}
                />
                <ProductRail
                  id="midrange"
                  ref={midRef}
                  title="Mid-range Bestsellers"
                  chip="Value Picks"
                  items={applyFilters(DATA.midrange)}
                  compare={compare}
                  onToggleCompare={toggleCompare}
                />
                <ProductRail
                  id="flagships"
                  ref={flagRef}
                  title="Flagship Series"
                  chip="Pro Power"
                  items={applyFilters(DATA.flagships)}
                  compare={compare}
                  onToggleCompare={toggleCompare}
                />
                <ProductRail
                  id="5g"
                  ref={fivegRef}
                  title="5G Smartphones"
                  chip="Future Ready"
                  items={applyFilters(DATA["5g"])}
                  compare={compare}
                  onToggleCompare={toggleCompare}
                />
                <ProductRail
                  id="gaming"
                  ref={gamingRef}
                  title="Gaming Phones"
                  chip="High FPS"
                  items={applyFilters(DATA.gaming)}
                  compare={compare}
                  onToggleCompare={toggleCompare}
                />
                <ProductRail
                  id="camera"
                  ref={cameraRef}
                  title="Camera Flagships"
                  chip="Pro Cameras"
                  items={applyFilters(DATA.camera)}
                  compare={compare}
                  onToggleCompare={toggleCompare}
                />
                <ProductRail
                  id="accessories"
                  ref={accRef}
                  title="Accessories"
                  chip="Essentials"
                  items={applyFilters(DATA.accessories)}
                  compare={compare}
                  onToggleCompare={toggleCompare}
                />
              </Container>
            </Fade>
          </Box>
        </Slide>

        {/* Compare Tray */}
        {compare.length >= 2 && (
          <CompareTray elevation={0}>
            <Grid container alignItems="center" spacing={1}>
              <Grid item xs={12} md>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ overflowX: "auto" }}>
                  {compare.map((it) => (
                    <Chip
                      key={it.sku}
                      label={it.title}
                      onDelete={() => toggleCompare(it)}
                      variant="outlined"
                      sx={{ flexShrink: 0 }}
                    />
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={12} md="auto">
                <Stack direction="row" spacing={1}>
                  <Button
                    variant="contained"
                    startIcon={<CompareArrowsIcon />}
                    onClick={() => setOpenCompare(true)}
                  >
                    Compare ({compare.length})
                  </Button>
                  <IconButton onClick={() => setCompare([])}>
                    <CloseIcon />
                  </IconButton>
                </Stack>
              </Grid>
            </Grid>
          </CompareTray>
        )}

        {/* Compare Dialog */}
        <Dialog open={openCompare} onClose={() => setOpenCompare(false)} maxWidth="lg" fullWidth>
          <DialogTitle>
            Compare Phones
            <IconButton onClick={() => setOpenCompare(false)} sx={{ position: "absolute", right: 8, top: 8 }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Grid container spacing={2}>
              {compare.map((it) => (
                <Grid item xs={12} sm={6} md={4} key={it.sku}>
                  <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                    <Box sx={{ aspectRatio: "4/3", overflow: "hidden", borderRadius: 1.5, mb: 1 }}>
                      <img
                        src={it.image}
                        alt={it.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800 }} noWrap>
                      {it.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" noWrap>
                      {it.subtitle}
                    </Typography>
                    <Divider sx={{ my: 1.25 }} />
                    <Stack spacing={0.6}>
                      <Row label="Price" value={`₹${it.price.toLocaleString()}`} />
                      <Row label="RAM" value={it.ram} />
                      <Row label="Storage" value={it.storage} />
                      <Row label="Rating" value={<Rating size="small" value={it.rating} precision={0.5} readOnly />} />
                      <Row label="5G" value={it.is5g ? "Yes" : "No"} />
                      <Row label="Gaming" value={it.isGaming ? "Optimized" : "—"} />
                      <Row label="Camera" value={it.isCamera ? "Pro" : "—"} />
                      <Row label="No Cost EMI" value={it.noCostEmi ? "Available" : "—"} />
                      <Row label="Exchange" value={it.exchange ? "Available" : "—"} />
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenCompare(false)}>Close</Button>
          </DialogActions>
        </Dialog>

        <Footer />
      </Box>
    </>
  );
}

/* ---------- Minor helper ---------- */
function Row({ label, value }) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>
      {typeof value === "string" ? (
        <Typography variant="caption" sx={{ fontWeight: 700 }}>
          {value}
        </Typography>
      ) : (
        value
      )}
    </Stack>
  );
}
