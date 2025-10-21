// Filename: Menulist.jsx — Premium secondary navbar + "All" Drawer (MUI v5, RRD v5)

import * as React from "react";
import { Link as RouterLink, withRouter } from "react-router-dom";
import {
  Box,
  Container,
  Stack,
  Button,
  Paper,
  MenuList,
  MenuItem,
  useTheme,
  useMediaQuery,
  Popper,
  ClickAwayListener,
  Grid,
  Typography,
  Divider,
  Chip,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import MemoryIcon from "@mui/icons-material/Memory";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import KitchenIcon from "@mui/icons-material/Kitchen";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

/* -------------------- data -------------------- */
const FashionItems = [
  { name: "All", link: "/allStore" },
  { name: "Men's Top Wears", link: "/mensStores" },
  { name: "Men's Bottom Wears", link: "/bottomWears" },
  { name: "Womens Ethnic", link: "/womenEnthic" },
  { name: "Womens Western", link: "/womensWestern" },
  { name: "Men's Footwear", link: "/footwears" },
  { name: "Watches & Accessories", link: "/accessories" },
  { name: "Bags & Suitcases", link: "/suitecaseStores" },
  { name: "Kids", link: "/kids" },
  { name: "Essentials", link: "/essentials" },
  { name: "Winters", link: "/winterStores" },
];

const ElectronicsItems = [
  { name: "Audio", link: "/audios" },
  { name: "Cameras & Accessories", link: "/camerasperipherals" },
  { name: "Computer Peripherals", link: "/computerperipherals" },
  { name: "Gaming", link: "/gaming" },
  { name: "Health & Personal Care", link: "/healthcare" },
  { name: "Laptop Accessories", link: "/laptopaccessories" },
  { name: "Laptop & Desktop", link: "/laptopdesktop" },
  { name: "Mobile Accessories", link: "/mobileaccessories" },
  { name: "Powerbank", link: "/powerbankstore" },
  { name: "Smart Home", link: "/smartautomations" },
  { name: "Smart Wearables", link: "/smartwarables" },
  { name: "Storage", link: "/storagesstore" },
  { name: "Tablets", link: "/tablets" },
];

const HomeItems = [
  { name: "Home Furnishings", link: "/furnishings" },
  { name: "Living Room", link: "/livingroomstores" },
  { name: "Kitchen & Dining", link: "/kitchenstores" },
  { name: "Bedroom", link: "/bedroomstores" },
  { name: "Home Decoration", link: "/decorationstore" },
  { name: "Tools & Utility", link: "/utilitystore" },
  { name: "Lightings & Electricals", link: "/electricalsstore" },
  { name: "Space Saving", link: "/spacestore" },
  { name: "Cleaning & Bath", link: "/bathandcleaning" },
  { name: "Kids Furniture", link: "/kidsfurnitures" },
  { name: "Pet & Gardening", link: "/gardeningstores" },
];

const AppliancesItems = [
  { name: "Televisions", link: "/televisionstore" },
  { name: "Washing Machines", link: "/washingmachinestore" },
  { name: "Air Conditioners", link: "/airconfitioners" },
  { name: "Refrigerators", link: "/refigeratoresstore" },
  { name: "Kitchen Appliances", link: "/kitchenappliances" },
  { name: "Home Appliances", link: "/homeappliances" },
  { name: "Seasonal Appliances", link: "/seasonalappliances" },
  { name: "Premium Appliances", link: "/premiumappliances" },
  { name: "Buying Guides", link: "/buyingstores" },
  { name: "Aeroscript Benefits", link: "/benefits" },
];

const MoreItems = [
  { name: "Beauty & Personal Care", link: "/personalcare" },
  { name: "Men's Grooming", link: "/groomingstore" },
  { name: "Food & Drinks", link: "/foodstores" },
  { name: "Nutrition & Health Care", link: "/nutritionstore" },
  { name: "Baby Care", link: "/babycare" },
  { name: "Toys & School Supplies", link: "/schoolsupplies" },
  { name: "Sports & Fitness", link: "/sportsandfitness" },
  { name: "Books & Music", link: "/musicsstore" },
  { name: "Stationery & Office", link: "/officestore" },
  { name: "Auto Accessories", link: "/autoaccessories" },
  { name: "Safety & Hygiene", link: "/essentialsstores" },
];

/* -------------------- visual styles -------------------- */
const NAVY = "#0f1e33";
const NAVY_DARK = "#0b1626";

const Bar = styled("div")(({ theme }) => ({
  width: "100%",
  background: `linear-gradient(180deg, ${NAVY}, ${NAVY_DARK})`,
  borderBottom: `1px solid ${alpha("#fff", 0.08)}`,
}));

const NavItem = styled(Button)(({ theme }) => ({
  color: "rgba(255,255,255,0.92)",
  textTransform: "none",
  fontWeight: 700,
  fontSize: 14,
  padding: "10px 12px",
  borderRadius: 8,
  gap: 6,
  position: "relative",
  "& .MuiSvgIcon-root": { fontSize: 18 },
  "&:hover": { backgroundColor: alpha("#fff", 0.06) },
  "&::after": {
    content: '""',
    position: "absolute",
    left: 10,
    right: 10,
    bottom: 0,
    height: 2,
    borderRadius: 2,
    background: "linear-gradient(90deg, rgba(90,167,255,.95), rgba(127,203,255,.95))",
    opacity: 0,
    transform: "scaleX(.4)",
    transformOrigin: "center",
    transition: "transform .18s ease, opacity .18s ease",
  },
  "&:hover::after": { opacity: 1, transform: "scaleX(1)" },
  "&.active": { backgroundColor: alpha("#fff", 0.06) },
  "&.active::after": { opacity: 1, transform: "scaleX(1)" },
}));

/* -------------------- helpers -------------------- */
const usePathname = (props) => {
  if (props?.location?.pathname) return props.location.pathname;
  if (typeof window !== "undefined") return window.location.pathname || "/";
  return "/";
};

/* -------------------- Hover Menu -------------------- */
function HoverMenu({ label, startIcon, items = [], megaSections, isActive }) {
  const theme = useTheme();
  const isTouch = useMediaQuery("(hover: none), (pointer: coarse)");
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMega = Boolean(megaSections) && isDesktop;

  const btnRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const closeTimer = React.useRef(null);
  const listRef = React.useRef(null);

  const openMenu = () => {
    clearTimeout(closeTimer.current);
    if (btnRef.current) setOpen(true);
  };
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };
  const closeNow = () => {
    clearTimeout(closeTimer.current);
    setOpen(false);
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      closeNow();
      btnRef.current?.focus();
    }
    if ((e.key === "Enter" || e.key === "ArrowDown") && !open) {
      e.preventDefault();
      openMenu();
      setTimeout(() => listRef.current?.querySelector("a,button,li")?.focus?.(), 0);
    }
  };

  const handlers = isTouch
    ? { onClick: () => setOpen((v) => !v) }
    : { onMouseEnter: openMenu, onMouseLeave: scheduleClose };

  return (
    <>
      <NavItem
        ref={btnRef}
        className={isActive ? "active" : ""}
        disableRipple
        aria-haspopup="menu"
        aria-expanded={open ? "true" : undefined}
        onKeyDown={onKeyDown}
        {...handlers}
      >
        {startIcon}
        {label}
        <ExpandMoreRoundedIcon sx={{ opacity: 0.7 }} />
      </NavItem>

      {(items.length > 0 || isMega) && (
        <Popper
          open={open}
          anchorEl={btnRef.current}
          placement="bottom-start"
          modifiers={[
            { name: "offset", options: { offset: [0, 8] } },
            { name: "preventOverflow", options: { padding: 8 } },
          ]}
          onMouseEnter={!isTouch ? openMenu : undefined}
          onMouseLeave={!isTouch ? scheduleClose : undefined}
          sx={{ zIndex: (t) => t.zIndex.modal }}
        >
          <ClickAwayListener onClickAway={closeNow}>
            <Paper
              elevation={12}
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                p: isMega ? 2 : 0.5,
                minWidth: isMega ? 640 : 220,
                boxShadow: "0 18px 40px rgba(0,0,0,0.24)",
              }}
            >
              {isMega ? (
                <Grid container spacing={2} sx={{ p: 0.5, maxWidth: 960 }} ref={listRef}>
                  {megaSections.map((col) => (
                    <Grid item xs={12} sm={4} key={col.title}>
                      <Typography variant="overline" sx={{ color: "text.secondary", letterSpacing: 0.6, fontWeight: 900 }}>
                        {col.title}
                      </Typography>
                      <Divider sx={{ my: 1 }} />
                      <MenuList dense disablePadding>
                        {col.items.map((name) => (
                          <MenuItem
                            key={name}
                            component={RouterLink}
                            to="/"
                            onClick={closeNow}
                            sx={{ py: 1, px: 1.25, borderRadius: 1 }}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <MenuList dense disablePadding ref={listRef}>
                  {items.map((i) => (
                    <MenuItem
                      key={i.link}
                      component={RouterLink}
                      to={i.link}
                      onClick={closeNow}
                      sx={{ py: 1, px: 1.25, borderRadius: 1 }}
                    >
                      {i.name}
                    </MenuItem>
                  ))}
                </MenuList>
              )}
            </Paper>
          </ClickAwayListener>
        </Popper>
      )}
    </>
  );
}

/* -------------------- Drawer: "All" -------------------- */
function AllDrawer({ open, onClose }) {
  const theme = useTheme();
  const [openElectronics, setOpenElectronics] = React.useState(true);
  const [openFashion, setOpenFashion] = React.useState(true);
  const [openHome, setOpenHome] = React.useState(false);
  const [openAppliances, setOpenAppliances] = React.useState(false);
  const [openMore, setOpenMore] = React.useState(false);

  const Section = ({ icon, title, open, toggle, items }) => (
    <>
      <ListItemButton onClick={toggle} sx={{ px: 2.25, py: 1.25 }}>
        <ListItemIcon sx={{ color: "text.secondary", minWidth: 36 }}>{icon}</ListItemIcon>
        <ListItemText
          primary={title}
          primaryTypographyProps={{ fontWeight: 800, fontSize: 14.5 }}
        />
        {open ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          {items.map((i) => (
            <ListItemButton
              key={i.link + i.name}
              component={RouterLink}
              to={i.link}
              onClick={onClose}
              sx={{
                pl: 7,
                py: 1,
                "&:hover": { backgroundColor: alpha(theme.palette.primary.main, 0.06) },
              }}
            >
              <ListItemText primary={i.name} primaryTypographyProps={{ fontSize: 14 }} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
      <Divider />
    </>
  );

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: 320, sm: 360, md: 380 },
          bgcolor: "#ffffff",                 // ✅ Light surface
          color: "text.primary",              // ✅ Dark text
          borderRight: `1px solid ${theme.palette.divider}`,
        },
      }}
    >
      {/* Header row */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1.25,
          borderBottom: `1px solid ${theme.palette.divider}`,
          bgcolor: "background.paper",
        }}
      >
        <Stack spacing={0.25}>
          <Typography variant="subtitle2" sx={{ fontWeight: 900, color: "text.primary" }}>
            Browse all categories
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ color: "text.secondary" }}>
            <FmdGoodOutlinedIcon sx={{ fontSize: 16 }} />
            <Typography variant="caption">Deliver to 221001</Typography>
          </Stack>
        </Stack>
        <IconButton onClick={onClose} size="small" aria-label="Close">
          <CloseRoundedIcon />
        </IconButton>
      </Box>

      {/* Quick actions */}
      <Box sx={{ px: 2, py: 1.25 }}>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          <Chip
            label="Sign in"
            color="warning"
            component={RouterLink}
            to="/user"
            clickable
            onClick={onClose}
            sx={{ fontWeight: 800 }}
          />
          <Chip
            label="Top Offers"
            component={RouterLink}
            to="/offers"
            clickable
            onClick={onClose}
            variant="outlined"                 // ✅ better contrast on white
          />
          <Chip
            label="Mobiles"
            component={RouterLink}
            to="/mobilestore"
            clickable
            onClick={onClose}
            variant="outlined"
          />
          <Chip
            label="Grocery"
            component={RouterLink}
            to="/grocerystore"
            clickable
            onClick={onClose}
            variant="outlined"
          />
        </Stack>
      </Box>

      <Divider />

      {/* Sections */}
      <List disablePadding>
        {/* Single-click rows */}
        <ListItemButton component={RouterLink} to="/offers" onClick={onClose} sx={{ px: 2.25, py: 1.25 }}>
          <ListItemIcon sx={{ color: "text.secondary", minWidth: 36 }}>
            <LocalOfferIcon />
          </ListItemIcon>
          <ListItemText primary="Top Offers" primaryTypographyProps={{ fontWeight: 800, fontSize: 14.5 }} />
        </ListItemButton>
        <ListItemButton component={RouterLink} to="/grocerystore" onClick={onClose} sx={{ px: 2.25, py: 1.25 }}>
          <ListItemIcon sx={{ color: "text.secondary", minWidth: 36 }}>
            <LocalGroceryStoreIcon />
          </ListItemIcon>
          <ListItemText primary="Grocery (Fresh)" primaryTypographyProps={{ fontWeight: 800, fontSize: 14.5 }} />
        </ListItemButton>
        <ListItemButton component={RouterLink} to="/mobilestore" onClick={onClose} sx={{ px: 2.25, py: 1.25 }}>
          <ListItemIcon sx={{ color: "text.secondary", minWidth: 36 }}>
            <SmartphoneIcon />
          </ListItemIcon>
          <ListItemText primary="Mobiles" primaryTypographyProps={{ fontWeight: 800, fontSize: 14.5 }} />
        </ListItemButton>
        <Divider />

        {/* Collapsible groups */}
        <Section
          icon={<MemoryIcon />}
          title="Electronics"
          open={openElectronics}
          toggle={() => setOpenElectronics((v) => !v)}
          items={ElectronicsItems}
        />
        <Section
          icon={<CheckroomIcon />}
          title="Fashion"
          open={openFashion}
          toggle={() => setOpenFashion((v) => !v)}
          items={FashionItems}
        />
        <Section
          icon={<HomeOutlinedIcon />}
          title="Home & Kitchen"
          open={openHome}
          toggle={() => setOpenHome((v) => !v)}
          items={HomeItems}
        />
        <Section
          icon={<KitchenIcon />}
          title="Appliances"
          open={openAppliances}
          toggle={() => setOpenAppliances((v) => !v)}
          items={AppliancesItems}
        />
        <Section
          icon={<MoreHorizIcon />}
          title="More"
          open={openMore}
          toggle={() => setOpenMore((v) => !v)}
          items={MoreItems}
        />
      </List>

      {/* Mini footer */}
      <Box sx={{ mt: "auto", px: 2, py: 1.5, borderTop: `1px solid ${theme.palette.divider}`, color: "text.secondary" }}>
        <Typography variant="caption">
          © {new Date().getFullYear()} Aeroscript.in • Crafted for speed & clarity
        </Typography>
      </Box>
    </Drawer>
  );
}


/* --------------------------------- Menulist bar --------------------------------- */
function MenulistBase(props) {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const pathname = usePathname(props);

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const active = (startsWith) => pathname.startsWith(startsWith);

  return (
    <>
      {/* Sticky secondary bar */}
      <Box sx={{ position: "sticky", top: { xs: 56, md: 60 }, zIndex: (t) => t.zIndex.appBar - 1 }}>
        <Bar>
          <Container maxWidth={false} disableGutters>
            <Box sx={{ maxWidth: "min(1440px, 98vw)", mx: "auto", px: { xs: 1, sm: 2 } }}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={{ xs: 0.25, sm: 0.5, md: 0.75 }}
                sx={{
                  overflowX: { xs: "auto", md: "visible" },
                  scrollbarWidth: "none",
                  "&::-webkit-scrollbar": { display: "none" },
                  minHeight: 44,
                }}
              >
                {/* ALL → opens Drawer */}
                <NavItem onClick={() => setDrawerOpen(true)} className={pathname === "/" ? "active" : ""}>
                  <MenuIcon />
                  All
                </NavItem>

                {/* quick links */}
                <NavItem component={RouterLink} to="/offers" className={active("/offers") ? "active" : ""}>
                  <LocalOfferIcon sx={{ mr: 0.5 }} />
                  Top Offers
                </NavItem>

                <NavItem component={RouterLink} to="/grocerystore" className={active("/grocerystore") ? "active" : ""}>
                  <LocalGroceryStoreIcon sx={{ mr: 0.5 }} />
                  Fresh
                </NavItem>

                <NavItem component={RouterLink} to="/mobilestore" className={active("/mobilestore") ? "active" : ""}>
                  <SmartphoneIcon sx={{ mr: 0.5 }} />
                  Mobiles
                </NavItem>

                {/* dropdowns */}
                <HoverMenu
                  label="Electronics"
                  startIcon={<MemoryIcon sx={{ mr: 0.5 }} />}
                  items={ElectronicsItems}
                  megaSections={[
                    { title: "Mobiles", items: ["Smartphones", "Cases", "Powerbanks", "Cables", "Chargers"] },
                    { title: "Computing", items: ["Laptops", "Desktops", "Monitors", "Storage", "Peripherals"] },
                    { title: "Audio & Cameras", items: ["Headphones", "Speakers", "DSLRs", "Action Cams"] },
                  ]}
                  isActive={active("/electronics")}
                />

                <HoverMenu
                  label="Fashion"
                  startIcon={<CheckroomIcon sx={{ mr: 0.5 }} />}
                  items={FashionItems}
                  megaSections={[
                    { title: "Men", items: ["T-Shirts", "Shirts", "Jeans", "Footwear"] },
                    { title: "Women", items: ["Kurtas & Sets", "Dresses", "Tops", "Sarees"] },
                    { title: "Kids", items: ["Clothing", "Footwear", "Toys"] },
                  ]}
                  isActive={active("/fashion")}
                />

                <HoverMenu
                  label="Home & Kitchen"
                  startIcon={<HomeOutlinedIcon sx={{ mr: 0.5 }} />}
                  items={HomeItems}
                  megaSections={[
                    { title: "Furnishings", items: ["Bedsheets", "Curtains", "Cushions"] },
                    { title: "Kitchen & Dining", items: ["Cookware", "Dinnerware", "Storage"] },
                    { title: "Decor", items: ["Wall Art", "Lighting", "Clocks"] },
                  ]}
                  isActive={active("/home")}
                />

                <HoverMenu
                  label="Appliances"
                  startIcon={<KitchenIcon sx={{ mr: 0.5 }} />}
                  items={AppliancesItems}
                  megaSections={[
                    { title: "TV & Entertainment", items: ["Smart TVs", "Streaming", "Soundbars"] },
                    { title: "Large Appliances", items: ["ACs", "Refrigerators", "Washing Machines"] },
                    { title: "Kitchen", items: ["Microwaves", "Chimneys", "Cooktops"] },
                  ]}
                  isActive={active("/appliances")}
                />

                <NavItem component={RouterLink} to="/travels" className={active("/travels") ? "active" : ""}>
                  <FlightTakeoffIcon sx={{ mr: 0.5 }} />
                  Travels
                </NavItem>

                <HoverMenu
                  label="More"
                  startIcon={<MoreHorizIcon sx={{ mr: 0.5 }} />}
                  items={MoreItems}
                  isActive={active("/more")}
                />
              </Stack>
              {!isMdUp && (
                <Box sx={{ py: 0.5, fontSize: 12, color: "rgba(255,255,255,0.65)" }}>
                  Swipe to see more →
                </Box>
              )}
            </Box>
          </Container>
        </Bar>
      </Box>

      {/* The premium Drawer */}
      <AllDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}

const Menulist = withRouter(MenulistBase);
export default Menulist;
