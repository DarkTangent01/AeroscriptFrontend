// Filename: Header.jsx (MUI v5 — Premium navy header, RRD v5)
import * as React from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { alpha, styled } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  MenuItem,
  Menu,
  Box,
  Button,
  Badge,
  Container,
  useScrollTrigger,
  Divider,
  Select,
  FormControl,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Chip,
  Tooltip,
  Popover,
  TextField,
  Paper,
  Collapse,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import ReplayIcon from "@mui/icons-material/Replay";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ClearIcon from "@mui/icons-material/Clear";

/* ---------- theme helpers ---------- */
const NAVY = "#0f1e33";
const NAVY_DARK = "#0b1626";

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 8 });
  return React.cloneElement(children, {
    sx: {
      ...(children.props.sx || {}),
      boxShadow: trigger ? "0 10px 28px rgba(0,0,0,0.22)" : "none",
      backgroundImage: trigger
        ? `linear-gradient(180deg, ${alpha(NAVY, 0.98)}, ${alpha(NAVY_DARK, 0.98)})`
        : `linear-gradient(180deg, ${NAVY}, ${NAVY_DARK})`,
      backdropFilter: trigger ? "saturate(1.08) blur(6px)" : "none",
      transition: "box-shadow .25s, background .25s, backdrop-filter .25s",
    },
  });
}

/* ---------- Premium Brand mark ---------- */
const BrandLink = styled(RouterLink)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "baseline",
  textDecoration: "none",
  position: "relative",
  padding: "2px 6px 2px 4px",
  borderRadius: 10,
  transform: "translateZ(0)",
  "&:hover": { textDecoration: "none" },
  "&:hover .brand-accent": { opacity: 1, transform: "scaleX(1)" },
  "&:hover .script": {
    backgroundImage:
      "linear-gradient(90deg, #7fd0ff 0%, #4ca4ff 50%, #7fd0ff 100%)",
  },
}));

const BrandWord = styled("span")(({ theme }) => ({
  fontWeight: 900,
  letterSpacing: 0.2,
  lineHeight: 1,
  fontSize: 22,
  color: "#fff",
  textShadow: "0 1px 0 rgba(0,0,0,.35)",
  [theme.breakpoints.up("sm")]: { fontSize: 24 },
}));

const ScriptWord = styled(BrandWord)(({ theme }) => ({
  marginLeft: 2,
  backgroundImage:
    "linear-gradient(90deg, #5ab2ff 0%, #9fe3ff 50%, #5ab2ff 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
  textShadow: "none",
  transition: "background-image .35s ease",
}));

const TldPill = styled("span")(({ theme }) => ({
  marginLeft: 6,
  padding: "1px 6px",
  borderRadius: 8,
  fontSize: 12,
  fontWeight: 800,
  lineHeight: 1.35,
  backgroundColor: theme.palette.warning.main,
  color: theme.palette.getContrastText(theme.palette.warning.main),
  boxShadow: "0 2px 6px rgba(0,0,0,.25)",
  transform: "translateY(1px)",
}));

const BrandUnderline = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 8,
  right: 8,
  bottom: -3,
  height: 2,
  borderRadius: 2,
  background:
    "linear-gradient(90deg, rgba(90,167,255,.95), rgba(127,203,255,.95))",
  opacity: 0,
  transform: "scaleX(.35)",
  transformOrigin: "center",
  transition: "opacity .25s ease, transform .25s ease",
}));

/* ---------- Search ---------- */
const SearchWrap = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  borderRadius: 12,
  backgroundColor: alpha("#ffffff", 0.08),
  "&:hover": { backgroundColor: alpha("#ffffff", 0.14) },
  border: `1px solid ${alpha("#ffffff", 0.18)}`,
  width: "100%",
  transition: "background-color .2s, border-color .2s",
}));

const SearchIconBox = styled("div")(({ theme }) => ({
  height: "100%",
  position: "absolute",
  right: 2,
  display: "grid",
  placeItems: "center",
  padding: theme.spacing(0, 0.5),
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  color: "#fff",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.05, 5.5, 1.05, 1.25),
    fontSize: 14.5,
  },
}));

const SuggestionItem = ({ text, onClick }) => (
  <MenuItem onClick={onClick} sx={{ fontSize: 14, py: 1 }}>
    <SearchIcon sx={{ fontSize: 18, mr: 1, color: "text.secondary" }} />
    {text}
  </MenuItem>
);

export default function Header() {
  const history = useHistory();

  // state
  const [showPromo, setShowPromo] = React.useState(true);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [accountAnchor, setAccountAnchor] = React.useState(null);
  const accountOpen = Boolean(accountAnchor);
  const [category, setCategory] = React.useState("all");
  const [locAnchor, setLocAnchor] = React.useState(null);
  const [pincode, setPincode] = React.useState("221001");
  const [q, setQ] = React.useState("");
  const [suggestAnchor, setSuggestAnchor] = React.useState(null);
  const searchRef = React.useRef(null);

  const categories = [
    { value: "all", label: "All" },
    { value: "mobiles", label: "Mobiles" },
    { value: "electronics", label: "Electronics" },
    { value: "fashion", label: "Fashion" },
    { value: "home", label: "Home" },
    { value: "appliances", label: "Appliances" },
    { value: "grocery", label: "Grocery" },
  ];

  const suggestions = React.useMemo(() => {
    const base = [
      "iphone 15",
      "samsung galaxy s24",
      "oneplus nord",
      "smart tv 55 inch",
      "laptop i5 16gb",
      "headphones bt 5.3",
      "air fryer",
      "mens running shoes",
      "washing machine 7kg",
      "fruits & vegetables",
    ];
    if (!q) return base.slice(0, 6);
    return base.filter((s) => s.toLowerCase().includes(q.toLowerCase())).slice(0, 8);
  }, [q]);

  const handleSearchSubmit = (term) => {
    const query = typeof term === "string" ? term : q;
    if (!query) return;
    setSuggestAnchor(null);
    history.push(`/search?cat=${category}&q=${encodeURIComponent(query)}`);
  };

  // Keyboard: '/' focuses search
  React.useEffect(() => {
    const onKey = (e) => {
      const tag = (e.target.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea") return;
      if (e.key === "/") {
        e.preventDefault();
        searchRef.current?.querySelector("input")?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ElevationScroll>
        <AppBar position="fixed" elevation={0} sx={{ zIndex: (t) => t.zIndex.appBar }}>
          {/* MAIN BAR */}
          <Container maxWidth="xl" disableGutters>
            <Toolbar variant="dense" sx={{ minHeight: 62, px: { xs: 1, sm: 2 }, gap: 1.25 }}>
              {/* Mobile menu */}
              <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
                <IconButton color="inherit" size="large" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
                  <MenuRoundedIcon />
                </IconButton>
              </Box>

              {/* Brand (upgraded) */}
              <BrandLink to="/" aria-label="Aeroscript home">
                <BrandWord>Aero</BrandWord>
                <ScriptWord className="script">script</ScriptWord>
                <TldPill>.in</TldPill>
                <BrandUnderline className="brand-accent" />
              </BrandLink>

              {/* Location */}
              <Tooltip title="Change delivery pincode">
                <Button
                  size="small"
                  onClick={(e) => setLocAnchor(e.currentTarget)}
                  startIcon={<FmdGoodOutlinedIcon sx={{ fontSize: 18 }} />}
                  sx={{
                    display: { xs: "none", md: "inline-flex" },
                    color: "rgba(255,255,255,0.85)",
                    textTransform: "none",
                    borderRadius: 999,
                    px: 1.25,
                    "&:hover": { bgcolor: alpha("#fff", 0.08) },
                  }}
                >
                  Deliver to {pincode}
                </Button>
              </Tooltip>

              {/* Search */}
              <Box sx={{ flexGrow: 1, maxWidth: 880 }}>
                <SearchWrap ref={searchRef}>
                  <FormControl
                    size="small"
                    sx={{
                      minWidth: 112,
                      borderRight: "1px solid rgba(255,255,255,0.12)",
                      "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                      "& .MuiSelect-select": {
                        color: "rgba(255,255,255,0.92)",
                        pl: 1.25,
                        pr: 3,
                        py: 1,
                        fontSize: 13.5,
                      },
                      "& svg": { color: "rgba(255,255,255,0.7)" },
                    }}
                  >
                    <Select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      displayEmpty
                      inputProps={{ "aria-label": "Category" }}
                    >
                      {categories.map((c) => (
                        <MenuItem key={c.value} value={c.value}>
                          {c.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <SearchInput
                    placeholder="Search for products, brands and more…   (Press / to focus)"
                    inputProps={{ "aria-label": "search" }}
                    value={q}
                    onChange={(e) => {
                      setQ(e.target.value);
                      setSuggestAnchor(searchRef.current);
                    }}
                    onFocus={() => setSuggestAnchor(searchRef.current)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSearchSubmit();
                      if (e.key === "Escape") {
                        setQ("");
                        if (e.currentTarget && typeof e.currentTarget.blur === "function") e.currentTarget.blur();
                        setSuggestAnchor(null);
                      }
                    }}
                  />
                  <SearchIconBox>
                    {q ? (
                      <IconButton size="small" color="inherit" onClick={() => setQ("")} aria-label="Clear search">
                        <ClearIcon />
                      </IconButton>
                    ) : (
                      <IconButton size="small" color="inherit" onClick={() => handleSearchSubmit()} aria-label="Search">
                        <SearchIcon />
                      </IconButton>
                    )}
                  </SearchIconBox>
                </SearchWrap>

                {/* Suggestions */}
                <Popover
                  open={Boolean(suggestAnchor)}
                  anchorEl={suggestAnchor}
                  onClose={() => setSuggestAnchor(null)}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  transformOrigin={{ vertical: "top", horizontal: "left" }}
                  PaperProps={{
                    sx: {
                      mt: 0.5,
                      width: "100%",
                      maxWidth: 880,
                      borderRadius: 2,
                      boxShadow: "0 16px 40px rgba(0,0,0,0.24)",
                    },
                  }}
                >
                  <Paper elevation={0}>
                    {suggestions.length === 0 ? (
                      <MenuItem disabled sx={{ fontSize: 14 }}>
                        No suggestions
                      </MenuItem>
                    ) : (
                      suggestions.map((s) => <SuggestionItem key={s} text={s} onClick={() => handleSearchSubmit(s)} />)
                    )}
                  </Paper>
                </Popover>
              </Box>

              {/* Actions */}
              <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5 }}>
                <Tooltip title="Account">
                  <Button
                    color="inherit"
                    onClick={(e) => setAccountAnchor(e.currentTarget)}
                    sx={{ textTransform: "none" }}
                    startIcon={<PersonOutlineIcon />}
                  >
                    Login
                  </Button>
                </Tooltip>

                <Tooltip title="Orders">
                  <Button
                    color="inherit"
                    component={RouterLink}
                    to="/orders"
                    sx={{ textTransform: "none" }}
                    startIcon={
                      <Badge color="error" variant="dot" overlap="circular">
                        <ListAltOutlinedIcon />
                      </Badge>
                    }
                  >
                    Orders
                  </Button>
                </Tooltip>

                <Tooltip title="Notifications">
                  <IconButton color="inherit" aria-label="Notifications">
                    <Badge badgeContent={3} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                </Tooltip>

                <Tooltip title="Cart">
                  <Button
                    color="inherit"
                    component={RouterLink}
                    to="/cart"
                    sx={{ textTransform: "none" }}
                    startIcon={
                      <Badge badgeContent={2} color="error">
                        <ShoppingCartIcon />
                      </Badge>
                    }
                  >
                    Cart
                  </Button>
                </Tooltip>
              </Box>
            </Toolbar>
          </Container>

          {/* PROMO STRIP (inside AppBar) */}
          <Collapse in={showPromo} unmountOnExit>
            <Box
              sx={{
                bgcolor: NAVY_DARK,
                color: "rgba(255,255,255,0.9)",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <Container maxWidth="xl" sx={{ py: 0.75 }}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={1}
                >
                  <Stack direction="row" spacing={1.25} alignItems="center">
                    <LocalOfferIcon fontSize="small" />
                    <Typography variant="body2">
                      Free delivery on orders over ₹499 • Extra 10% off with code:
                      <Chip size="small" label="AERO10" color="warning" sx={{ ml: 1, fontWeight: 700 }} />
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ opacity: 0.9, fontSize: 13 }}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <SupportAgentIcon fontSize="small" />
                      <span>24×7 Support</span>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <ReplayIcon fontSize="small" />
                      <span>Easy Returns</span>
                    </Stack>
                    <Button
                      size="small"
                      variant="text"
                      onClick={() => setShowPromo(false)}
                      sx={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      Dismiss
                    </Button>
                  </Stack>
                </Stack>
              </Container>
            </Box>
          </Collapse>

          <Divider sx={{ opacity: 0.12 }} />
        </AppBar>
      </ElevationScroll>

      {/* EXTRA OFFSET for promo height (pages already add 1 x mixins.toolbar) */}
      <Box sx={{ height: showPromo ? 36 : 0 }} />

      {/* Account menu */}
      <Menu
        anchorEl={accountAnchor}
        open={accountOpen}
        onClose={() => setAccountAnchor(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            mt: 1,
            borderRadius: 2,
            minWidth: 220,
            boxShadow: "0 10px 25px rgba(0,0,0,0.18), 0 6px 8px rgba(0,0,0,0.08)",
          },
        }}
      >
        <MenuItem component={RouterLink} to="/user" onClick={() => setAccountAnchor(null)} sx={{ columnGap: 1 }}>
          <ExitToAppIcon fontSize="small" />
          <Typography>Login / Sign up</Typography>
        </MenuItem>
        <MenuItem component={RouterLink} to="/orders" onClick={() => setAccountAnchor(null)} sx={{ columnGap: 1 }}>
          <ListAltOutlinedIcon fontSize="small" />
          <Typography>Orders</Typography>
        </MenuItem>
        <MenuItem onClick={() => setAccountAnchor(null)} sx={{ columnGap: 1 }}>
          <NotificationsIcon fontSize="small" />
          <Typography>Notifications</Typography>
        </MenuItem>
      </Menu>

      {/* Location popover */}
      <Popover
        open={Boolean(locAnchor)}
        anchorEl={locAnchor}
        onClose={() => setLocAnchor(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        PaperProps={{ sx: { mt: 1, borderRadius: 2, p: 2, width: 320 } }}
      >
        <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1 }}>
          Choose delivery location
        </Typography>
        <TextField
          label="Pincode"
          size="small"
          fullWidth
          value={pincode}
          onChange={(e) => setPincode(e.target.value.replace(/\D/g, "").slice(0, 6))}
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*", maxLength: 6 }}
        />
        <Stack direction="row" justifyContent="flex-end" spacing={1} sx={{ mt: 1 }}>
          <Button size="small" onClick={() => setLocAnchor(null)}>Cancel</Button>
          <Button size="small" variant="contained" onClick={() => setLocAnchor(null)}>
            Apply
          </Button>
        </Stack>
      </Popover>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 320, bgcolor: NAVY_DARK, color: "white" } }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            Aeroscript<span style={{ color: "#ffb300" }}>.in</span>
          </Typography>
        </Box>
        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />
        <List>
          <ListItemButton component={RouterLink} to="/user" onClick={() => setDrawerOpen(false)}>
            <ListItemIcon sx={{ color: "white" }}>
              <PersonOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Login / Sign up" />
          </ListItemButton>

          <ListItemButton component={RouterLink} to="/orders" onClick={() => setDrawerOpen(false)}>
            <ListItemIcon sx={{ color: "white" }}>
              <ListAltOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItemButton>

          <ListItemButton component={RouterLink} to="/cart" onClick={() => setDrawerOpen(false)}>
            <ListItemIcon sx={{ color: "white" }}>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Cart" />
          </ListItemButton>
        </List>
        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />
        <Box sx={{ p: 2 }}>
          <Typography variant="overline" sx={{ opacity: 0.8 }}>
            Quick Links
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 1 }} useFlexGap flexWrap="wrap">
            <Chip label="Mobiles" size="small" component={RouterLink} to="/mobiles" clickable />
            <Chip label="Electronics" size="small" component={RouterLink} to="/electronics" clickable />
            <Chip label="Fashion" size="small" component={RouterLink} to="/fashion" clickable />
            <Chip label="Home" size="small" component={RouterLink} to="/home" clickable />
            <Chip label="Grocery" size="small" component={RouterLink} to="/grocery" clickable />
            <Chip label="Appliances" size="small" component={RouterLink} to="/appliances" clickable />
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
}
