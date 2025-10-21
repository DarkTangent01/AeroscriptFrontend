// Filename: Home.jsx
import React from "react";
import { Box, Paper, Grid, Typography, useTheme } from "@mui/material";

export default function Home() {
  const theme = useTheme();

  const cards = [
    { title: "Total Users", value: "1,245", color: theme.palette.primary.main },
    { title: "Orders Today", value: "87", color: theme.palette.success.main },
    { title: "Pending Payments", value: "12", color: theme.palette.warning.main },
    { title: "Total Revenue", value: "₹84,560", color: theme.palette.info.main },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3,
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.grey[100]})`,
      }}
    >
      <Typography variant="h5" fontWeight={700} mb={3}>
        Dashboard Overview
      </Typography>

      <Grid container spacing={3}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={4}
              sx={{
                height: 160,
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ mb: 1 }}
              >
                {card.title}
              </Typography>
              <Typography
                variant="h4"
                fontWeight={700}
                sx={{ color: card.color }}
              >
                {card.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
