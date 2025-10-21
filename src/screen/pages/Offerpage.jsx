// Filename: TopOffers.jsx — Premium "Top Offers" page (MUI v5, React 17/18, RRD v5 compatible)

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
  IconButton,
  Tooltip,
  Rating,
  Checkbox,
  Avatar,
  Popover,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Skeleton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import BoltIcon from "@mui/icons-material/Bolt";
import DiscountIcon from "@mui/icons-material/Discount";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentsIcon from "@mui/icons-material/Payments";
import ClearIcon from "@mui/icons-material/Clear";
import SortIcon from "@mui/icons-material/Sort";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import Header from "../home/components/Header";
import Footer from "../home/components/Footer";
import Menulist from "../home/components/Menulist";

/* ----------------------------- visual helpers ----------------------------- */
const glass = (theme) => ({
  background: `linear-gradient(180deg, ${alpha(theme.palette.background.paper, 0.86)}, ${alpha(
    theme.palette.background.paper,
    0.94
  )})`,
  border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
  boxShadow: "0 10px 24px rgba(0,0,0,0.06), 0 6px 12px rgba(0,0,0,0.04)",
  backdropFilter: "blur(8px)",
});

const Section = styled(Paper)(({ theme }) => ({
  borderRadius: 16,
  padding: theme.spacing(2),
  [theme.breakpoints.up("md")]: { padding: theme.spacing(2.5) },
  ...glass(theme),
}));

const Hero = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: 16,
  overflow: "hidden",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  marginBottom: theme.spacing(2.5),
  "& img": {
    width: "100%",
    height: "auto",
    aspectRatio: "16/6", // compact hero (smaller than before)
    objectFit: "cover",
    display: "block",
  },
}));

const HeroOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  color: "#fff",
  paddingLeft: theme.spacing(4.5),
  paddingRight: theme.spacing(2),
  background: "linear-gradient(90deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.28) 45%, rgba(0,0,0,.08) 100%)",
  [theme.breakpoints.down("sm")]: { paddingLeft: theme.spacing(2.5) },
}));

const StickyDock = styled(Paper)(({ theme }) => ({
  position: "sticky",
  top: (theme.mixins.toolbar?.minHeight || 64) + 10,
  zIndex: 102,
  borderRadius: 12,
  padding: theme.spacing(1),
  ...glass(theme),
}));

const ActiveFiltersBar = styled(Paper)(({ theme }) => ({
  position: "sticky",
  top: (theme.mixins.toolbar?.minHeight || 64) + 10 + 56,
  zIndex: 101,
  borderRadius: 12,
  padding: theme.spacing(0.75, 1),
  ...glass(theme),
}));

const BrandRail = styled(Paper)(({ theme }) => ({
  borderRadius: 12,
  padding: theme.spacing(1),
  ...glass(theme),
  overflowX: "auto",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  "&::-webkit-scrollbar": { display: "none" },
}));

const BadgePill = styled("span")(({ theme, color = "primary" }) => ({
  fontSize: 10.5,
  fontWeight: 800,
  textTransform: "uppercase",
  padding: "4px 8px",
  borderRadius: 999,
  background: alpha(theme.palette[color].main, 0.12),
  color: theme.palette[color].main,
  border: `1px solid ${alpha(theme.palette[color].main, 0.22)}`,
}));

/* ----------------------------- data & helpers ----------------------------- */
// High-quality, stable Pexels images (royalty-free)
const HERO_IMG =
  "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1920";

// small square-ish images that look good inside cards
const IMG = {
  phones:
    "https://images.pexels.com/photos/6078121/pexels-photo-6078121.jpeg?auto=compress&cs=tinysrgb&w=800",
  tv: "https://images.pexels.com/photos/2796145/pexels-photo-2796145.jpeg?auto=compress&cs=tinysrgb&w=800",
  laptop:
    "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
  buds:
    "https://images.pexels.com/photos/3760840/pexels-photo-3760840.jpeg?auto=compress&cs=tinysrgb&w=800",
  cam:
    "https://images.pexels.com/photos/51383/camera-dslr-lens-reflection-51383.jpeg?auto=compress&cs=tinysrgb&w=800",
  mixer:
    "https://images.pexels.com/photos/3764010/pexels-photo-3764010.jpeg?auto=compress&cs=tinysrgb&w=800",
  watch:
    "https://images.pexels.com/photos/277406/pexels-photo-277406.jpeg?auto=compress&cs=tinysrgb&w=800",
  shoes:
    "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=800",
};

const BRANDS = [
  { name: "Apple", color: "#111", text: "#fff" },
  { name: "Samsung", color: "#0f4cfe", text: "#fff" },
  { name: "OnePlus", color: "#EB0028", text: "#fff" },
  { name: "Xiaomi", color: "#ff6a00", text: "#fff" },
  { name: "Sony", color: "#222", text: "#fff" },
  { name: "LG", color: "#a50034", text: "#fff" },
  { name: "HP", color: "#0b6fb3", text: "#fff" },
  { name: "Dell", color: "#007DB8", text: "#fff" },
];

const CATS = ["Mobiles", "Electronics", "Appliances", "Fashion", "Home", "Grocery"];

// Create mock items across marketplace categories
const itemsSeed = [
  {
    id: "P1",
    title: "iPhone 15",
    brand: "Apple",
    category: "Mobiles",
    img: IMG.phones,
    price: 59999,
    mrp: 69999,
    off: 14,
    rating: 4.6,
    fast: true,
    bank: true,
    coupon: 1000,
    lightning: true,
  },
  {
    id: "P2",
    title: "Galaxy S24",
    brand: "Samsung",
    category: "Mobiles",
    img: IMG.phones,
    price: 54999,
    mrp: 63999,
    off: 14,
    rating: 4.5,
    fast: true,
    exchange: true,
  },
  {
    id: "P3",
    title: "OnePlus Nord CE",
    brand: "OnePlus",
    category: "Mobiles",
    img: IMG.phones,
    price: 19999,
    mrp: 24999,
    off: 20,
    rating: 4.3,
    fast: true,
    coupon: 500,
  },
  {
    id: "P4",
    title: 'Smart TV 55" 4K',
    brand: "Sony",
    category: "Electronics",
    img: IMG.tv,
    price: 34999,
    mrp: 44999,
    off: 22,
    rating: 4.2,
    bank: true,
  },
  {
    id: "P5",
    title: "Laptop i5 16GB",
    brand: "HP",
    category: "Electronics",
    img: IMG.laptop,
    price: 42999,
    mrp: 52999,
    off: 19,
    rating: 4.1,
    exchange: true,
  },
  {
    id: "P6",
    title: "TWS Earbuds Pro",
    brand: "Sony",
    category: "Electronics",
    img: IMG.buds,
    price: 3999,
    mrp: 6999,
    off: 43,
    rating: 4.4,
    fast: true,
    bank: true,
  },
  {
    id: "P7",
    title: "Mirrorless Camera",
    brand: "Sony",
    category: "Electronics",
    img: IMG.cam,
    price: 62999,
    mrp: 79999,
    off: 21,
    rating: 4.5,
  },
  {
    id: "P8",
    title: "Kitchen Mixer 750W",
    brand: "LG",
    category: "Appliances",
    img: IMG.mixer,
    price: 3499,
    mrp: 4999,
    off: 30,
    rating: 4.0,
    fast: true,
  },
  {
    id: "P9",
    title: "Smart Watch GPS",
    brand: "Apple",
    category: "Electronics",
    img: IMG.watch,
    price: 29999,
    mrp: 35999,
    off: 17,
    rating: 4.6,
    bank: true,
  },
  {
    id: "P10",
    title: "Running Shoes",
    brand: "Xiaomi",
    category: "Fashion",
    img: IMG.shoes,
    price: 1999,
    mrp: 2999,
    off: 33,
    rating: 4.2,
    fast: true,
  },
];

/* ----------------------------- card component ----------------------------- */

const CardRoot = styled(Paper)(({ theme }) => ({
  ...glass(theme),
  borderRadius: 14,
  transition: "transform .18s ease, box-shadow .18s ease",
  height: 340,
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 12px 28px rgba(0,0,0,.08)",
  },
}));

function DealCard({
  item,
  onQuickView,
  onToggleCompare,
  onToggleWish,
  wished,
  compared,
}) {
  const effPrice = Math.max(0, item.price - (item.coupon || 0));
  const hasCoupon = item.coupon && item.coupon > 0;

  return (
    <CardRoot variant="outlined">
      {/* media */}
      <Box sx={{ position: "relative", p: 1.25 }}>
        <Box sx={{ borderRadius: 2, overflow: "hidden", height: 160 }}>
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </Box>

        {/* badges */}
        <Stack direction="row" spacing={0.5} sx={{ position: "absolute", top: 10, left: 12 }}>
          {item.lightning && (
            <BadgePill color="warning">
              <BoltIcon fontSize="inherit" style={{ verticalAlign: "-2px", marginRight: 4 }} />
              Lightning
            </BadgePill>
          )}
          {item.bank && (
            <BadgePill color="info">
              <PaymentsIcon fontSize="inherit" style={{ verticalAlign: "-2px", marginRight: 4 }} />
              Bank
            </BadgePill>
          )}
          {item.fast && (
            <BadgePill color="success">
              <LocalShippingIcon fontSize="inherit" style={{ verticalAlign: "-2px", marginRight: 4 }} />
              Fast
            </BadgePill>
          )}
        </Stack>

        {/* actions */}
        <Stack direction="row" spacing={0.5} sx={{ position: "absolute", top: 8, right: 8 }}>
          <Tooltip title="Wishlist">
            <IconButton
              size="small"
              onClick={() => onToggleWish(item)}
              sx={{ bgcolor: "background.paper" }}
              aria-label="Add to wishlist"
            >
              {wished ? <FavoriteIcon color="error" fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Compare">
            <Checkbox
              checked={compared}
              onChange={() => onToggleCompare(item)}
              inputProps={{ "aria-label": "Compare" }}
              sx={{
                bgcolor: "background.paper",
                borderRadius: 1,
                "& .MuiSvgIcon-root": { fontSize: 20 },
              }}
              icon={<CompareArrowsIcon />}
              checkedIcon={<CompareArrowsIcon color="primary" />}
            />
          </Tooltip>
        </Stack>
      </Box>

      {/* content */}
      <Box sx={{ px: 1.5, pb: 1.25, mt: -0.5, display: "flex", flexDirection: "column", gap: 0.5 }}>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ minWidth: 0 }}>
          <Avatar
            sx={{
              width: 22,
              height: 22,
              bgcolor: BRANDS.find((b) => b.name === item.brand)?.color || "primary.main",
              color: BRANDS.find((b) => b.name === item.brand)?.text || "#fff",
              fontSize: 12,
              fontWeight: 800,
            }}
          >
            {item.brand[0]}
          </Avatar>
          <Typography variant="body2" noWrap sx={{ fontWeight: 700 }}>
            {item.title}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
            ₹{effPrice.toLocaleString()}
          </Typography>
          {hasCoupon && (
            <Chip
              size="small"
              icon={<DiscountIcon sx={{ fontSize: 16 }} />}
              label={`-₹${item.coupon.toLocaleString()} coupon`}
              color="success"
            />
          )}
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="caption" color="text.secondary" sx={{ textDecoration: "line-through" }}>
            ₹{item.mrp.toLocaleString()}
          </Typography>
          <Chip size="small" label={`${item.off}% off`} color="success" />
          <Rating size="small" value={item.rating} precision={0.1} readOnly />
        </Stack>

        <Typography variant="caption" color="text.secondary">
          {item.fast ? "Free Fast Delivery" : "Standard Delivery"} • {item.bank ? "Bank Offer" : "Coupons available"}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mt: "auto" }}>
          <Button size="small" variant="outlined" onClick={() => onQuickView(item)}>
            Quick view
          </Button>
          <Button size="small" variant="contained">Buy now</Button>
        </Stack>
      </Box>
    </CardRoot>
  );
}

/* ------------------------------ main component ---------------------------- */

export default function TopOffers() {
  const theme = useTheme();
  const [show, setShow] = React.useState(false);

  // page state
  const [sort, setSort] = React.useState("trending");
  const [brands, setBrands] = React.useState([]); // selected brands
  const [cats, setCats] = React.useState([]); // selected categories
  const [wishlist, setWishlist] = React.useState([]);
  const [compare, setCompare] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // quick view
  const [qv, setQv] = React.useState(null);

  React.useEffect(() => {
    const t1 = setTimeout(() => setShow(true), 40);
    const t2 = setTimeout(() => setLoading(false), 500); // skeletons
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // derived list
  const filtered = React.useMemo(() => {
    let arr = [...itemsSeed];
    if (brands.length) arr = arr.filter((x) => brands.includes(x.brand));
    if (cats.length) arr = arr.filter((x) => cats.includes(x.category));
    switch (sort) {
      case "price_low":
        arr.sort((a, b) => (a.price - (a.coupon || 0)) - (b.price - (b.coupon || 0)));
        break;
      case "price_high":
        arr.sort((a, b) => (b.price - (b.coupon || 0)) - (a.price - (a.coupon || 0)));
        break;
      case "discount":
        arr.sort((a, b) => b.off - a.off);
        break;
      case "rating":
        arr.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // trending: prioritize lightning, bank, coupon
        arr.sort((a, b) => Number(b.lightning) - Number(a.lightning) || Number(b.bank) - Number(a.bank) || Number(!!b.coupon) - Number(!!a.coupon));
    }
    return arr;
  }, [brands, cats, sort]);

  // actions
  const toggleBrand = (name) =>
    setBrands((prev) => (prev.includes(name) ? prev.filter((b) => b !== name) : [...prev, name]));
  const toggleCat = (name) =>
    setCats((prev) => (prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name]));
  const clearAll = () => {
    setBrands([]);
    setCats([]);
  };
  const toggleWish = (item) =>
    setWishlist((w) => (w.find((i) => i.id === item.id) ? w.filter((i) => i.id !== item.id) : [...w, item]));
  const toggleCompare = (item) =>
    setCompare((c) => {
      const exists = c.find((i) => i.id === item.id);
      if (exists) return c.filter((i) => i.id !== item.id);
      return [...c.slice(-3), item]; // max 4
    });

  return (
    <>
      <Helmet>
        <title>Top Offers • AeroScript</title>
        <meta
          name="description"
          content="Top Offers by AeroScript — lightning deals, best discounts and coupons across Mobiles, Electronics, Appliances, Fashion, Home & Grocery."
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

        <Slide in={show} direction="up" timeout={280}>
          <Box>
            <Fade in={show} timeout={360}>
              <Container maxWidth="xl" sx={{ mt: 3, mb: { xs: 6, sm: 9 }, px: { xs: 2, md: 3 } }}>
                {/* Hero (compact) */}
                <Hero>
                  <img src={HERO_IMG} alt="Top offers hero" />
                  <HeroOverlay>
                    <Box>
                      <Chip
                        size="small"
                        label="Top Offers by AeroScript"
                        sx={{ color: "#fff", bgcolor: alpha("#000", 0.35), border: "1px solid rgba(255,255,255,.35)", backdropFilter: "blur(6px)" }}
                      />
                      <Typography variant="h4" sx={{ fontWeight: 900, mt: 1, mb: 0.5, textShadow: "0 3px 8px rgba(0,0,0,.4)" }}>
                        Mega Deal Zone
                      </Typography>
                      <Typography variant="subtitle1" sx={{ maxWidth: 560, opacity: 0.95 }}>
                        Handpicked blockbuster offers across categories. Hurry — ends tonight!
                      </Typography>
                      <Stack direction="row" spacing={1.25} sx={{ mt: 1.5 }}>
                        <Button variant="contained" color="warning" startIcon={<BoltIcon />}>Shop Deals</Button>
                        <Button variant="text" color="inherit" endIcon={<InfoOutlinedIcon />}>T&Cs</Button>
                      </Stack>
                    </Box>
                  </HeroOverlay>
                </Hero>

                {/* Sticky Sort & Filter Dock */}
                <StickyDock elevation={0} sx={{ mb: 1.25 }}>
                  <Grid container spacing={1} alignItems="center">
                    <Grid item xs={12} md>
                      <Stack direction="row" spacing={1} alignItems="center" sx={{ overflowX: "auto", "&::-webkit-scrollbar": { display: "none" } }}>
                        {CATS.map((c) => (
                          <Chip
                            key={c}
                            label={c}
                            onClick={() => toggleCat(c)}
                            color={cats.includes(c) ? "primary" : "default"}
                            variant={cats.includes(c) ? "filled" : "outlined"}
                            clickable
                            sx={{ borderRadius: 999, fontWeight: 700 }}
                          />
                        ))}
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md="auto">
                      <Stack direction="row" spacing={1} alignItems="center" justifyContent={{ xs: "space-between", md: "flex-end" }}>
                        <FormControl size="small" sx={{ minWidth: 160 }}>
                          <InputLabel>Sort</InputLabel>
                          <Select
                            label="Sort"
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            startAdornment={<SortIcon sx={{ mr: 1 }} />}
                          >
                            <MenuItem value="trending">Trending</MenuItem>
                            <MenuItem value="discount">Highest Off</MenuItem>
                            <MenuItem value="price_low">Price: Low → High</MenuItem>
                            <MenuItem value="price_high">Price: High → Low</MenuItem>
                            <MenuItem value="rating">Top Rated</MenuItem>
                          </Select>
                        </FormControl>
                        <Button size="small" onClick={clearAll} startIcon={<ClearIcon />}>
                          Clear all
                        </Button>
                      </Stack>
                    </Grid>
                  </Grid>
                </StickyDock>

                {/* Active filter chips */}
                {(brands.length > 0 || cats.length > 0) && (
                  <ActiveFiltersBar elevation={0} sx={{ mb: 1.5 }}>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ flexWrap: "wrap", gap: 0.5 }}>
                      <Typography variant="caption" color="text.secondary" sx={{ mr: 0.5 }}>
                        Filters:
                      </Typography>
                      {brands.map((b) => (
                        <Chip key={b} label={b} onDelete={() => toggleBrand(b)} color="primary" variant="outlined" />
                      ))}
                      {cats.map((c) => (
                        <Chip key={c} label={c} onDelete={() => toggleCat(c)} color="secondary" variant="outlined" />
                      ))}
                    </Stack>
                  </ActiveFiltersBar>
                )}

                {/* Brand strip (click to filter) */}
                <BrandRail elevation={0} sx={{ mb: 2 }}>
                  <Stack direction="row" spacing={1}>
                    {BRANDS.map((b) => {
                      const active = brands.includes(b.name);
                      return (
                        <Chip
                          key={b.name}
                          avatar={<Avatar sx={{ bgcolor: b.color, color: b.text, fontWeight: 800, width: 24, height: 24 }}>{b.name[0]}</Avatar>}
                          label={b.name}
                          onClick={() => toggleBrand(b.name)}
                          variant={active ? "filled" : "outlined"}
                          color={active ? "primary" : "default"}
                          sx={{ borderRadius: 999, fontWeight: 700 }}
                          clickable
                        />
                      );
                    })}
                  </Stack>
                </BrandRail>

                {/* Grid */}
                <Section elevation={0}>
                  <Grid container alignItems="center" spacing={2} sx={{ mb: 0.5 }}>
                    <Grid item xs={12} sm>
                      <Stack direction="row" spacing={1.2} alignItems="center">
                        <BoltIcon color="warning" />
                        <Typography variant="h6" sx={{ fontWeight: 800 }}>
                          Lightning Deals — Limited Time
                        </Typography>
                        <Chip size="small" label="Ends today" color="warning" />
                      </Stack>
                    </Grid>
                  </Grid>
                  <Divider sx={{ my: 1.5 }} />

                  {/* Loading skeletons */}
                  {loading ? (
                    <Grid container spacing={{ xs: 2, md: 2.5 }}>
                      {Array.from({ length: 10 }).map((_, i) => (
                        <Grid key={i} item xs={6} sm={4} md={3} lg={2.4}>
                          <Paper variant="outlined" sx={{ ...glass(theme), borderRadius: 2, p: 1.25 }}>
                            <Skeleton variant="rectangular" height={160} sx={{ borderRadius: 1.5, mb: 1 }} />
                            <Skeleton width="80%" />
                            <Skeleton width="60%" />
                            <Skeleton width="50%" />
                            <Skeleton width="70%" />
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  ) : filtered.length === 0 ? (
                    <Box sx={{ textAlign: "center", py: 6 }}>
                      <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                        No deals match your filters
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Try removing a brand or category, or reset filters to see all offers.
                      </Typography>
                      <Button variant="outlined" onClick={clearAll}>Reset filters</Button>
                    </Box>
                  ) : (
                    <Grid container spacing={{ xs: 2, md: 2.5 }}>
                      {filtered.map((it) => (
                        <Grid key={it.id} item xs={6} sm={4} md={3} lg={2.4}>
                          <DealCard
                            item={it}
                            onQuickView={setQv}
                            onToggleCompare={toggleCompare}
                            onToggleWish={toggleWish}
                            wished={!!wishlist.find((w) => w.id === it.id)}
                            compared={!!compare.find((c) => c.id === it.id)}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  )}
                </Section>
              </Container>
            </Fade>
          </Box>
        </Slide>

        {/* Quick View Dialog */}
        <Dialog open={!!qv} onClose={() => setQv(null)} maxWidth="md" fullWidth>
          {qv && (
            <>
              <DialogTitle>
                {qv.title}
                <Chip size="small" sx={{ ml: 1 }} label={qv.brand} />
              </DialogTitle>
              <DialogContent dividers>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ aspectRatio: "4/3", borderRadius: 2, overflow: "hidden" }}>
                      <img
                        src={qv.img}
                        alt={qv.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Stack spacing={1.2}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="h6" sx={{ fontWeight: 900 }}>
                          ₹{(qv.price - (qv.coupon || 0)).toLocaleString()}
                        </Typography>
                        {qv.coupon ? (
                          <Chip size="small" color="success" label={`-₹${qv.coupon} coupon`} />
                        ) : null}
                      </Stack>
                      <Typography variant="body2" color="text.secondary">
                        MRP: ₹{qv.mrp.toLocaleString()} • {qv.off}% off
                      </Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Rating size="small" value={qv.rating} precision={0.1} readOnly />
                        <Typography variant="caption" color="text.secondary">
                          {qv.rating.toFixed(1)} / 5
                        </Typography>
                      </Stack>
                      <Divider />
                      <Stack spacing={1} sx={{ fontSize: 14 }}>
                        <Row icon={<LocalShippingIcon fontSize="small" />} text={qv.fast ? "Free Fast Delivery" : "Standard delivery"} />
                        <Row icon={<PaymentsIcon fontSize="small" />} text={qv.bank ? "Bank offers available" : "Coupons available"} />
                        {qv.lightning && <Row icon={<BoltIcon fontSize="small" />} text="Lightning deal — limited time" />}
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setQv(null)}>Close</Button>
                <Button variant="contained">Add to cart</Button>
                <Button variant="outlined">Buy now</Button>
              </DialogActions>
            </>
          )}
        </Dialog>

        {/* Compare tray (appears when user selects 2+) */}
        {compare.length >= 2 && (
          <Paper
            elevation={0}
            sx={{
              position: "fixed",
              left: "50%",
              transform: "translateX(-50%)",
              bottom: 16,
              zIndex: 1200,
              borderRadius: 14,
              p: 1,
              width: "min(980px, 92vw)",
              ...glass(theme),
            }}
          >
            <Grid container alignItems="center" spacing={1}>
              <Grid item xs={12} md>
                <Stack direction="row" spacing={1} sx={{ overflowX: "auto", "&::-webkit-scrollbar": { display: "none" } }}>
                  {compare.map((c) => (
                    <Chip
                      key={c.id}
                      label={c.title}
                      onDelete={() => toggleCompare(c)}
                      variant="outlined"
                      sx={{ flexShrink: 0 }}
                    />
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={12} md="auto">
                <Stack direction="row" spacing={1}>
                  <Button variant="contained" startIcon={<CompareArrowsIcon />}>
                    Compare ({compare.length})
                  </Button>
                  <IconButton onClick={() => setCompare([])}>
                    <ClearIcon />
                  </IconButton>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        )}

        <Footer />
      </Box>
    </>
  );
}

/* ------------------------------- tiny helper ------------------------------ */
function Row({ icon, text }) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {icon}
      <Typography variant="body2">{text}</Typography>
    </Stack>
  );
}