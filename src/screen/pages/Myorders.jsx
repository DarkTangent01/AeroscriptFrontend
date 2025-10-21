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
  InputAdornment,
  ToggleButtonGroup,
  ToggleButton,
  Button,
  MenuItem,
  Pagination,
  Avatar,
  useScrollTrigger,
  Zoom,
  Fab,
} from "@mui/material";
import { styled, alpha, useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ReplayIcon from "@mui/icons-material/Replay";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import Header from "../home/components/Header";
import Footer from "../home/components/Footer";
import Menulist from "../home/components/Menulist";

// ===== Shared look & feel (denser on large screens) =====
const Section = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: 20,
  boxShadow:
    "0 12px 28px rgba(0,0,0,0.06), 0 6px 12px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.06)",
  background:
    theme.palette.mode === "light"
      ? theme.palette.background.paper
      : alpha(theme.palette.background.default, 0.8),
  [theme.breakpoints.up("sm")]: { padding: theme.spacing(2.5) },
  [theme.breakpoints.up("lg")]: { padding: theme.spacing(3) }, // still premium, but compact
}));

const sampleImg = (w = 400, h = 300, seed) =>
  seed
    ? `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`
    : `https://picsum.photos/${w}/${h}`;

function BackToTopFab() {
  const trigger = useScrollTrigger({ threshold: 220 });
  return (
    <Zoom in={trigger}>
      <Box sx={{ position: "fixed", bottom: { xs: 72, sm: 32 }, right: 24, zIndex: 1300 }}>
        <Fab color="primary" size="medium" aria-label="back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <ArrowUpwardIcon />
        </Fab>
      </Box>
    </Zoom>
  );
}

// ===== Mock data =====
const ORDERS = Array.from({ length: 7 }).map((_, i) => ({
  id: `OD${20251000 + i}`,
  date: `2025-10-${10 + i}`,
  status: i % 4 === 0 ? "Delivered" : i % 4 === 1 ? "Shipped" : i % 4 === 2 ? "Out for delivery" : "Processing",
  eta: i % 4 === 0 ? null : `Oct ${11 + i}, 2025`,
  total: 1499 * (i + 1),
  items: [
    {
      title: `Wireless Earbuds Pro ${i + 1}`,
      seller: "Aero Official Store",
      price: 1299 + i * 50,
      qty: 1,
      image: sampleImg(320, 220, `order-${i}-1`),
    },
    {
      title: `Type-C Fast Cable ${i + 1}`,
      seller: "Aero Essentials",
      price: 299 + i * 10,
      qty: 2,
      image: sampleImg(320, 220, `order-${i}-2`),
    },
  ],
}));

// ===== Helpers =====
const statusColor = (theme, status) => {
  switch (status) {
    case "Delivered":
      return { bg: alpha(theme.palette.success.main, 0.12), fg: theme.palette.success.main };
    case "Out for delivery":
      return { bg: alpha(theme.palette.info.main, 0.12), fg: theme.palette.info.main };
    case "Shipped":
      return { bg: alpha(theme.palette.primary.main, 0.12), fg: theme.palette.primary.main };
    default:
      return { bg: alpha(theme.palette.warning.main, 0.12), fg: theme.palette.warning.dark };
  }
};

function OrderItemRow({ item }) {
  return (
    <Grid container spacing={1.5} alignItems="center">
      <Grid item xs={3} sm={2.5} md={2}>
        <Paper variant="outlined" sx={{ p: 0.5, borderRadius: 2, overflow: "hidden" }}>
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "100%", display: "block", aspectRatio: "16/10", objectFit: "cover" }}
          />
        </Paper>
      </Grid>
      <Grid item xs={9} sm={6.5} md={7}>
        <Typography variant="subtitle2" sx={{ fontWeight: 700, lineHeight: 1.25 }}>{item.title}</Typography>
        <Typography variant="caption" color="text.secondary">Sold by {item.seller}</Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 0.5 }} useFlexGap>
          <Chip size="small" label={`Qty: ${item.qty}`} />
          <Chip size="small" label={`₹${item.price}`} variant="outlined" />
        </Stack>
      </Grid>
      <Grid item xs={12} md={3}>
        <Stack direction={{ xs: "row", md: "column" }} spacing={1} justifyContent="flex-end" alignItems={{ xs: "center", md: "flex-end" }}>
          <Button startIcon={<LocalShippingIcon />} size="small" variant="contained">Track</Button>
          <Button startIcon={<ReceiptLongIcon />} size="small" variant="outlined">Invoice</Button>
          <Button startIcon={<SupportAgentIcon />} size="small" variant="text">Support</Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

function OrderCard({ order }) {
  const theme = useTheme();
  const col = statusColor(theme, order.status);
  return (
    <Section sx={{ mb: 2.5 }}>
      <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", sm: "center" }} spacing={1.25}>
        <Stack direction="row" spacing={1.25} alignItems="center">
          <Avatar sx={{ bgcolor: col.fg, color: "#fff", width: 40, height: 40 }}>{order.id.slice(-2)}</Avatar>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>Order #{order.id}</Typography>
            <Typography variant="caption" color="text.secondary">Placed on {order.date}</Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center" useFlexGap flexWrap="wrap">
          <Chip size="small" label={order.status} sx={{ bgcolor: col.bg, color: col.fg, fontWeight: 700 }} />
          {order.eta && <Chip size="small" variant="outlined" label={`ETA: ${order.eta}`} />}
          <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>Total: ₹{order.total}</Typography>
        </Stack>
      </Stack>

      <Divider sx={{ my: 1.5 }} />

      <Stack spacing={1.75}>
        {order.items.map((it, idx) => (
          <OrderItemRow key={idx} item={it} />
        ))}
      </Stack>

      <Divider sx={{ my: 1.5 }} />

      <Stack direction={{ xs: "column", sm: "row" }} spacing={1} alignItems={{ xs: "stretch", sm: "center" }} justifyContent="space-between">
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          <Button size="small" startIcon={<PictureAsPdfIcon />}>Download PDF</Button>
          <Button size="small" startIcon={<ReplayIcon />}>Return/Replace</Button>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" size="small">Help</Button>
          <Button variant="contained" size="small">Buy Again</Button>
        </Stack>
      </Stack>
    </Section>
  );
}

function OrdersEmpty() {
  return (
    <Section sx={{ textAlign: "center", py: 6 }}>
      <Avatar src={sampleImg(160,160,'empty-state')} sx={{ width: 96, height: 96, mx: "auto", mb: 2 }} />
      <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5 }}>No orders yet</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Browse top deals and start your shopping journey.</Typography>
      <Button variant="contained">Start Shopping</Button>
    </Section>
  );
}

export default function Orders() {
  const theme = useTheme();
  const [status, setStatus] = React.useState("all");
  const [query, setQuery] = React.useState("");
  const [sort, setSort] = React.useState("recent");

  const filtered = React.useMemo(() => {
    let arr = [...ORDERS];
    if (status !== "all") arr = arr.filter(o => o.status.toLowerCase().includes(status));
    if (query) arr = arr.filter(o => o.id.toLowerCase().includes(query.toLowerCase()) || o.items.some(it => it.title.toLowerCase().includes(query.toLowerCase())));
    if (sort === "recent") arr = arr.sort((a,b) => b.id.localeCompare(a.id));
    if (sort === "price_high") arr = arr.sort((a,b) => b.total - a.total);
    if (sort === "price_low") arr = arr.sort((a,b) => a.total - b.total);
    return arr;
  }, [status, query, sort]);

  return (
    <>
      <Helmet>
        <title>My Orders • AeroScript</title>
        <meta name="description" content="Track orders, download invoices, and manage returns with a premium, responsive dashboard." />
      </Helmet>

      <Header />
      <Box sx={(t) => t.mixins.toolbar} />

      {/* Full-bleed background with custom gutters */}
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

        {/* Use the full width but keep a comfortable max content width */}
        <Container
          maxWidth={false}
          sx={{
            pt: 2.5,
            px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 },
          }}
        >
          <Box
            sx={{
              mx: "auto",
              width: "100%",
              maxWidth: { lg: 1480, xl: 1600 }, // wider than default MUI 'xl'
            }}
          >
            {/* Filters / toolbar */}
            <Section sx={{ mb: 2.5 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={6} lg={7}>
                  <TextField
                    fullWidth
                    placeholder="Search by order ID or item"
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
                </Grid>
                <Grid item xs={12} md={6} lg={5}>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25} justifyContent={{ sm: "flex-end" }} useFlexGap flexWrap="wrap">
                    <ToggleButtonGroup
                      value={status}
                      exclusive
                      onChange={(e, v) => v && setStatus(v)}
                      size="small"
                    >
                      <ToggleButton value="all">All</ToggleButton>
                      <ToggleButton value="processing">Processing</ToggleButton>
                      <ToggleButton value="shipped">Shipped</ToggleButton>
                      <ToggleButton value="delivery">Out for delivery</ToggleButton>
                      <ToggleButton value="delivered">Delivered</ToggleButton>
                    </ToggleButtonGroup>
                    <TextField
                      select
                      size="small"
                      value={sort}
                      onChange={(e) => setSort(e.target.value)}
                      sx={{ minWidth: 160 }}
                    >
                      <MenuItem value="recent">Most recent</MenuItem>
                      <MenuItem value="price_high">Price: High to Low</MenuItem>
                      <MenuItem value="price_low">Price: Low to High</MenuItem>
                    </TextField>
                    <Button variant="outlined" startIcon={<FilterListIcon />}>More Filters</Button>
                  </Stack>
                </Grid>
              </Grid>
            </Section>

            {/* Main Grid: content + sticky sidebar */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", lg: "1fr 360px", xl: "1fr 380px" },
                gap: { xs: 2.5, lg: 3 },
                alignItems: "start",
              }}
            >
              {/* Orders list */}
              <Box>
                {filtered.length === 0 ? (
                  <OrdersEmpty />
                ) : (
                  filtered.map((o) => <OrderCard key={o.id} order={o} />)
                )}
                <Stack direction="row" justifyContent="center" sx={{ mt: 3 }}>
                  <Pagination count={5} color="primary" />
                </Stack>
              </Box>

              {/* Sticky sidebar */}
              <Box sx={{ position: { lg: "sticky" }, top: { lg: (theme.mixins.toolbar.minHeight || 64) + 16 }, height: "fit-content" }}>
                <Section sx={{ mb: 2.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1.25 }}>This year</Typography>
                  <Stack spacing={1.25}>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography color="text.secondary">Total spend</Typography>
                      <Typography sx={{ fontWeight: 800 }}>₹{(filtered.reduce((a,b)=>a+b.total,0)).toLocaleString()}</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography color="text.secondary">Active orders</Typography>
                      <Typography sx={{ fontWeight: 800 }}>{filtered.filter(o=>o.status!=="Delivered").length}</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography color="text.secondary">Delivered</Typography>
                      <Typography sx={{ fontWeight: 800 }}>{filtered.filter(o=>o.status==="Delivered").length}</Typography>
                    </Stack>
                  </Stack>
                </Section>

                <Section>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1.25 }}>Quick help</Typography>
                  <Stack spacing={1}>
                    <Button startIcon={<SupportAgentIcon />} variant="outlined" size="small" fullWidth>Contact support</Button>
                    <Button startIcon={<ReceiptLongIcon />} variant="outlined" size="small" fullWidth>Invoices center</Button>
                    <Button startIcon={<LocalShippingIcon />} variant="outlined" size="small" fullWidth>Delivery FAQs</Button>
                  </Stack>
                </Section>
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
