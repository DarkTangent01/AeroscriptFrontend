import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
      },
      grid: {
          display: 'flex',
          padding: '5px !important',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          margin: 'auto',
      },
      mainMenu: {
          marginTop: '50px',
      },
      btn: {
          fontSize: '14px',
          color: 'black!important'
      }
}))

const Menulist = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [anchorE3, setAnchorE3] = React.useState(null);
  const [anchorE4, setAnchorE4] = React.useState(null);
  const [anchorE5, setAnchorE5] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickItemforelectronics = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleCloseItemforelectronics = () => {
    setAnchorE2(null);
  };

  const handleClickItemforhome = (event) => {
    setAnchorE3(event.currentTarget);
  };
  const handleCloseItemforhome = () => {
    setAnchorE3(null);
  };

  const handleClickItemforappliances = (event) => {
    setAnchorE4(event.currentTarget);
  };
  const handleCloseItemforappliances = () => {
    setAnchorE4(null);
  };

  const handleClickItemforbeautytoysandmore = (event) => {
    setAnchorE5(event.currentTarget);
  };
  const handleCloseItemforbeautytoysandmore = () => {
    setAnchorE5(null);
  };

  const FashionItems = [
    { name: "All", link: "/allStore" },
    { name: "Men's Top Wears", link: "/mensStores" },
    { name: "Men's Bottom Wears", link: "/bottomWears" },
    { name: "Womens Enthic", link: "/womenEnthic" },
    { name: "Womens Western", link: "/womensWestern" },
    { name: "Men's Footwear", link: "/footwears" },
    { name: "Watches & Accessories", link: "/accessories" },
    { name: "Bag's Suitecases & Luggess", link: "/suitecaseStores" },
    { name: "kids", link: "/kids" },
    { name: "Essentials", link: "/essentials" },
    { name: "Winters", link: "/winterStores" },
  ];

  const ElectronicsItems = [
    { name: "Audio", link: "/audios" },
    { name: "Electronics GST Store", link: "/gststore" },
    { name: "Cameras & Accessories", link: "/camerasperipherals" },
    { name: "Computer Peripherals", link: "/computerperipherals" },
    { name: "Gaming", link: "/gaming" },
    { name: "Health & Personal Care", link: "/healthcare" },
    { name: "Laptop Accessories", link: "/laptopaccessories" },
    { name: "Laptop and Desktop", link: "/laptopdesktop" },
    { name: "Mobile Accessories", link: "/mobileaccessories" },
    { name: "Powerbank", link: "/powerbankstore" },
    { name: "Smart Home automation", link: "/smartautomations" },
    { name: "Smart Wearables", link: "/smartwarables" },
    { name: "Storage", link: "/storagesstore" },
    { name: "Tablets", link: "/tablets" },
  ];

  const HomeItems = [
    { name: "Home Furnishings", link: "/furnishings" },
    { name: "Living Room", link: "/livingroomstores" },
    { name: "Kitchen & Dining", link: "/kitchenstores" },
    { name: "Bedroom Room", link: "/bedroomstores" },
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
    { name: "Refigerators", link: "/refigeratoresstore" },
    { name: "Kitchen Appliances", link: "/kitchenappliances" },
    { name: "Home Appliances", link: "/homeappliances" },
    { name: "Seasonal Appliances", link: "/seasonalappliances" },
    { name: "Premium Appliances", link: "/premiumappliances" },
    { name: "Buying Guides", link: "/buyingstores" },
    { name: "Aeroscript Benefits", link: "/benefits" },
  ];

  const BeautytoysMore = [
    { name: "Beauty & Personal Care", link: "/personalcare" },
    { name: "Men's Grooming", link: "/groomingstore" },
    { name: "Food & Drinks", link: "/foodstores" },
    { name: "Nutrition & Health Care", link: "/nutritionstore" },
    { name: "Baby Care", link: "/babycare" },
    { name: "Toys & School Supplies", link: "/schoolsupplies" },
    { name: "Sports & Fitness", link: "/sportsandfitness" },
    { name: "Books & Music", link: "/musicsstore" },
    { name: "Stationry & Office Supplies", link: "/officestore" },
    { name: "Auto Accessories", link: "/autoaccessories" },
    { name: "Safety & Hygiene Essentials", link: "/essentialsstores" },
  ];

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid className={classes.grid} item xs={6} sm={1}>
          <Button className={classes.btn} component={Link} to="/offers">Top Offers</Button>
          </Grid>
          <Grid className={classes.grid} item xs={6} sm={1}>
          <Button className={classes.btn} component={Link} to="/grocerystore">Grocery</Button>
          </Grid>
          <Grid className={classes.grid} item xs={6} sm={1}>
          <Button className={classes.btn} component={Link} to="/mobilestore">Mobiles</Button>
          </Grid>


          <Grid className={classes.grid} item xs={6} sm={1}>
          <Button className={classes.btn} aria-controls="simple-menu" aria-haspopup="true" onMouseOver={handleClick}>Fashion</Button>
      <Menu className={classes.mainMenu} id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClick={handleClose}
      >
        {FashionItems.map((items) => (
          <MenuItem component={Link} to={items.link} onClick={handleClose}>
            {items.name}
          </MenuItem>
        ))}
      </Menu>
          </Grid>

          <Grid className={classes.grid} item xs={6} sm={1}>
          <Button className={classes.btn} aria-controls="simple-menu" aria-haspopup="true" onMouseOver={handleClickItemforelectronics}>Electronics</Button>
      <Menu className={classes.mainMenu} id="simple-menu" anchorEl={anchorE2} keepMounted open={Boolean(anchorE2)} onClick={handleCloseItemforelectronics}>
        {ElectronicsItems.map((electronicsitem) => (
          <MenuItem component={Link} to={electronicsitem.link} onClick={handleCloseItemforelectronics}>
            {electronicsitem.name}
          </MenuItem>
        ))}
      </Menu>
          </Grid>

          <Grid className={classes.grid} item xs={6} sm={1}>
          <Button className={classes.btn} aria-controls="simple-menu" aria-haspopup="true" onMouseOver={handleClickItemforhome}>Home</Button>
      <Menu className={classes.mainMenu} id="simple-menu" anchorEl={anchorE3} keepMounted open={Boolean(anchorE3)} onClick={handleCloseItemforhome}>
        {HomeItems.map((homeitem) => (
          <MenuItem component={Link} to={homeitem.link} onClick={handleCloseItemforhome}>
            {homeitem.name}
          </MenuItem>
        ))}
      </Menu>
          </Grid>
          <Grid className={classes.grid} item xs={6} sm={1}>
            <Button className={classes.btn} aria-controls="simple-menu" aria-haspopup="true" onMouseOver={handleClickItemforappliances}>Appliances</Button>
      <Menu className={classes.mainMenu} id="simple-menu" anchorEl={anchorE4} keepMounted open={Boolean(anchorE4)} onClick={handleCloseItemforappliances}>
        {AppliancesItems.map((appliancesitem) => (
          <MenuItem component={Link} to={appliancesitem.link} onClick={handleCloseItemforappliances}>
            {appliancesitem.name}
          </MenuItem>
        ))}
      </Menu>
          </Grid>
          <Grid className={classes.grid} item xs={6} sm={1}>
          <Button className={classes.btn} component={Link} to="/travels">Travels</Button>
          </Grid>

          <Grid className={classes.grid} item xs={6} sm={1}>
          <Button className={classes.btn} aria-controls="simple-menu" aria-haspopup="true" onMouseOver={handleClickItemforbeautytoysandmore}>Toys & More</Button>
      <Menu className={classes.mainMenu} id="simple-menu" anchorEl={anchorE5} keepMounted open={Boolean(anchorE5)} onClick={handleCloseItemforbeautytoysandmore}>
        {BeautytoysMore.map((beautytoymoreitem) => (
          <MenuItem component={Link} to={beautytoymoreitem.link} onClick={handleCloseItemforbeautytoysandmore}>
            {beautytoymoreitem.name}
          </MenuItem>
        ))}
      </Menu>
          </Grid>
        </Grid>
      </div>
      
    </>
  );
};

export default Menulist;
