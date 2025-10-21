// Filename: Loading.jsx
import React from "react";
import { Box, CircularProgress, useTheme } from "@mui/material";

export default function Loading({ size = 50, color = "secondary" }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        minHeight: "120px",
        bgcolor: "transparent",
      }}
    >
      <CircularProgress
        size={size}
        color={color}
        thickness={4.2}
        sx={{
          animationDuration: "1.2s",
          color:
            color === "secondary"
              ? theme.palette.secondary.main
              : theme.palette.primary.main,
        }}
      />
    </Box>
  );
}
