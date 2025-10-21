// Filename: Cart.jsx
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
  TextField,
  IconButton,
  Button,
  Avatar,
  Fab,
  useTheme,
  useScrollTrigger,
  Zoom,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import LockIcon from "@mui/icons-material/Lock";

import Header from "../home/components/Header";
import Footer from "../home/components/Footer";
import Menulist from "../home/components/Menulist";

// ---------- shared look ----------
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
  borderRadius: 18,
  padding: theme.spacing(2),
  [theme.breakpoints.up("md")]: { padding: theme.spacing(2.5) },
  ...glassCard(theme),
}));
function BackToTopFab() {
  const trigger = useScrollTrigger({ threshold: 220 });
  return (
    <Zoom in={trigger}>
      <Box sx={{ position: "fixed", bottom: 32, right: 24, zIndex: 1300 }}>
        <Fab color="primary" size="medium" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <ArrowUpwardIcon />
        </Fab>
      </Box>
    </Zoom>
  );
}
const img = (w=400,h=300,seed) => seed
  ? `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`
  : `https://picsum.photos/${w}/${h}`;

// ---------- mock data ----------
const CART_ITEMS = Array.from({ length: 4 }).map((_, i) => ({
  id: i + 1,
  title: `Wireless Headphones ${i + 1}`,
  subtitle: "Bluetooth 5.3 • 40H Battery • Noise Cancel",
  price: 2999 + i * 300,
  cut: 4999 + i * 400,
  qty: 1,
  image: img(640, 480, `cart-${i}`),
}));

// ---------- pieces ----------
function CartItem({ item, onQtyChange, onRemove }) {
  return (
    <Section sx={{ mb: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={3.5}>
          <Paper variant="outlined" sx={{ p: 0.5, borderRadius: 2, overflow: "hidden" }}>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", display: "block", aspectRatio: "4/3", objectFit: "cover", borderRadius: 6 }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={5.5}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{item.title}</Typography>
          <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
            {item.subtitle}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>₹{item.price.toLocaleString()}</Typography>
            <Typography variant="caption" color="text.secondary" sx={{ textDecoration: "line-through" }}>
              ₹{item.cut.toLocaleString()}
            </Typography>
            <Chip
              size="small"
              color="success"
              label={`${Math.round(((item.cut - item.price) / item.cut) * 100)}% off`}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={3}>
          <Stack direction="row" justifyContent={{ xs: "flex-start", md: "flex-end" }} alignItems="center" spacing={1}>
            <IconButton size="small" onClick={() => onQtyChange(item.id, item.qty - 1)} disabled={item.qty <= 1}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{item.qty}</Typography>
            <IconButton size="small" onClick={() => onQtyChange(item.id, item.qty + 1)}>
              <AddIcon />
            </IconButton>
            <IconButton color="error" onClick={() => onRemove(item.id)}>
              <DeleteOutlineIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
}
function SummaryCard({ subtotal, shipping, discount, tax, stickyTop }) {
  const total = subtotal + shipping + tax - discount;
  return (
    <Section
      sx={{
        position: { lg: "sticky" },
        top: { lg: stickyTop }, // keeps alignment under header
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>Order Summary</Typography>
      <Stack spacing={1.25}>
        <Row label="Subtotal" value={`₹${subtotal.toLocaleString()}`} />
        <Row label="Shipping" value={shipping > 0 ? `₹${shipping.toFixed(0)}` : "₹0"} />
        <Row label="Discount" value={`-₹${discount.toFixed(2)}`} valueSx={{ color: "success.main" }} />
        <Row label="Tax" value={`₹${tax.toFixed(2)}`} />
        <Divider />
        <Row
          label={<Typography variant="subtitle1" sx={{ fontWeight: 800 }}>Total</Typography>}
          value={<Typography variant="h6" sx={{ fontWeight: 900 }}>
            ₹{total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </Typography>}
        />
      </Stack>
      <Button variant="contained" fullWidth size="large" sx={{ mt: 3, py: 1.3, fontWeight: 700 }} startIcon={<LockIcon />}>
        Proceed to Checkout
      </Button>
      <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 1, textAlign: "center" }}>
        <LockIcon fontSize="inherit" sx={{ mr: 0.3 }} /> 100% Secure Checkout
      </Typography>
    </Section>
  );
}
function Row({ label, value, valueSx }) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography color="text.secondary">{label}</Typography>
      <Box sx={valueSx}>{typeof value === "string" ? <Typography sx={{ fontWeight: 700 }}>{value}</Typography> : value}</Box>
    </Stack>
  );
}

// ---------- page ----------
export default function Cart() {
  const theme = useTheme();
  const [cart, setCart] = React.useState(CART_ITEMS);

  const handleQtyChange = (id, qty) =>
    setCart((prev) => prev.map((it) => (it.id === id ? { ...it, qty: Math.max(1, qty) } : it)));
  const handleRemove = (id) => setCart((prev) => prev.filter((it) => it.id !== id));

  const subtotal = cart.reduce((acc, it) => acc + it.price * it.qty, 0);
  const shipping = subtotal > 3000 ? 0 : 99;
  const discount = subtotal * 0.05;
  const tax = subtotal * 0.08;

  // exact sticky offset: header toolbar height + page title height + spacing
  const stickyTop = (theme.mixins.toolbar?.minHeight || 64) + 16 + 40; // 40≈ title height

  return (
    <>
      <Helmet>
        <title>My Cart • AeroScript</title>
        <meta name="description" content="Premium cart with sticky summary and secure checkout." />
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
        <Container maxWidth={false} sx={{ pt: 3, px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 } }}>
          <Box sx={{ mx: "auto", width: "100%", maxWidth: { lg: 1480, xl: 1600 } }}>
            {/* TITLE ROW (full width) */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 800 }}>
                Shopping Cart ({cart.length} {cart.length === 1 ? "item" : "items"})
              </Typography>
            </Box>

            {/* STRICT 2-COLUMN GRID */}
            <Box
              sx={{
                display: "grid",
                gap: 24,
                gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1fr) 380px" },
                alignItems: "start",
              }}
            >
              {/* Left: items column */}
              <Box>
                {cart.length === 0 ? (
                  <Section sx={{ textAlign: "center", py: 6 }}>
                    <Avatar src={img(200, 200, "empty-cart")} sx={{ width: 100, height: 100, mx: "auto", mb: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Your cart is empty</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      Explore products and add them to your cart.
                    </Typography>
                    <Button variant="contained">Continue Shopping</Button>
                  </Section>
                ) : (
                  cart.map((item) => (
                    <CartItem key={item.id} item={item} onQtyChange={handleQtyChange} onRemove={handleRemove} />
                  ))
                )}
              </Box>

              {/* Right: sticky summary column */}
              <Box>
                <SummaryCard
                  subtotal={subtotal}
                  shipping={shipping}
                  discount={discount}
                  tax={tax}
                  stickyTop={stickyTop}
                />
              </Box>
            </Box>
          </Box>
        </Container>

        <BackToTopFab />
        <Footer />
      </Box>
    </>
  );
}
