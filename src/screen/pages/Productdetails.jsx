// Filename: Productdetails.jsx
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Paper,
  Rating,
  Divider,
} from "@mui/material";
import Header from "../home/components/Header";
import Footer from "../home/components/Footer";

export default function Productdetails() {
  const product = {
    name: "Sony Bravia 55-inch 4K Ultra HD Smart LED TV",
    price: "₹69,990",
    description:
      "Experience lifelike visuals with the Sony Bravia 4K HDR Smart TV featuring X1 Processor, Dolby Vision, and built-in Google TV.",
    rating: 4.5,
    image:
      "https://m.media-amazon.com/images/I/71S8U9VzLTL._SL1500_.jpg",
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100vh",
          pt: 10,
          px: { xs: 2, sm: 4, md: 8 },
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
            maxWidth: 1200,
            mx: "auto",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          {/* Product Image */}
          <Box
            component="img"
            src={product.image}
            alt={product.name}
            sx={{
              width: { xs: "100%", md: "45%" },
              borderRadius: 2,
              objectFit: "cover",
              boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
            }}
          />

          {/* Product Details */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" fontWeight={700} mb={1}>
              {product.name}
            </Typography>

            <Rating
              value={product.rating}
              precision={0.5}
              readOnly
              sx={{ mb: 2 }}
            />

            <Typography variant="h4" color="primary" fontWeight={600}>
              {product.price}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.8, mb: 3 }}
            >
              {product.description}
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    py: 1.2,
                    fontWeight: 600,
                    borderRadius: 2,
                    boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
                  }}
                >
                  Buy Now
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  size="large"
                  sx={{
                    py: 1.2,
                    fontWeight: 600,
                    borderRadius: 2,
                    borderWidth: 2,
                    "&:hover": { borderWidth: 2 },
                  }}
                >
                  Add to Cart
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
      <Footer />
    </>
  );
}
