// Filename: Cards.jsx (MUI v5 – polished product card)
import * as React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Cards({
  image,
  title,
  description,
  view = "#",
  url = "#",
  price,            // optional: "₹12,999"
  mrp,              // optional: "₹15,999"
  badge,            // optional: "Best Seller" / "New" / "Top Deal"
  ctaView = "View",
  ctaBuy = "Buy Now",
}) {
  return (
    <Card
      elevation={0}
      sx={{
        width: 300,
        borderRadius: 3,
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        overflow: "hidden",
        transition: "transform .2s ease, box-shadow .2s ease, border-color .2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
          borderColor: "transparent",
        },
      }}
    >
      <CardActionArea
        component={RouterLink}
        to={view}
        sx={{ alignItems: "stretch" }}
      >
        {/* Image with fixed aspect & optional badge */}
        <Box sx={{ position: "relative" }}>
          {/* Use a fixed ratio so all cards look uniform */}
          <Box
            sx={{
              aspectRatio: "16 / 10",      // modern browsers; keeps layout tidy
              width: "100%",
              bgcolor: "grey.100",
            }}
          >
            <CardMedia
              component="img"
              src={image}
              alt={title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",      // product hero feel; switch to "cover" for banners
                p: 2,
                display: "block",
              }}
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/600x375?text=Image+Unavailable";
              }}
            />
          </Box>

          {badge && (
            <Chip
              label={badge}
              color="secondary"
              size="small"
              sx={{
                position: "absolute",
                top: 12,
                left: 12,
                fontWeight: 600,
                borderRadius: 2,
              }}
            />
          )}
        </Box>

        {/* Content */}
        <CardContent sx={{ pt: 1.5, pb: 0 }}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, textAlign: "center" }}
            gutterBottom
          >
            {title}
          </Typography>

          {price && (
            <Box
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: "center",
                alignItems: "center",
                mb: 0.5,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 800, color: "primary.main" }}>
                {price}
              </Typography>
              {mrp && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textDecoration: "line-through" }}
                >
                  {mrp}
                </Typography>
              )}
              {price && mrp && (
                <Typography variant="caption" sx={{ color: "success.main", fontWeight: 700 }}>
                  {calcOff(mrp, price)}% off
                </Typography>
              )}
            </Box>
          )}

          {description && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                textAlign: "center",
                px: 1,
                display: "-webkit-box",
                WebkitLineClamp: 3,   // trim to 3 lines
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                minHeight: 60,        // keeps rows aligned
              }}
            >
              {description}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>

      {/* Actions */}
      <CardActions
        sx={{
          gap: 1,
          px: 2,
          py: 2,
          pt: 1.5,
          justifyContent: "space-between",
        }}
      >
        <Button
          component={RouterLink}
          to={view}
          variant="outlined"
          size="small"
          sx={{
            flex: 1,
            borderRadius: 999,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          {ctaView}
        </Button>

        <Button
          component={RouterLink}
          to={url}
          variant="contained"
          color="secondary"
          size="small"
          sx={{
            flex: 1,
            borderRadius: 999,
            textTransform: "none",
            fontWeight: 700,
            boxShadow: "none",
            "&:hover": { boxShadow: "0 6px 16px rgba(0,0,0,.15)" },
          }}
        >
          {ctaBuy}
        </Button>
      </CardActions>
    </Card>
  );
}

/** utils */
function parseMoney(v) {
  // accepts "₹15,999" or "15999"
  const n = `${v}`.replace(/[^\d.]/g, "");
  return Number(n || 0);
}
function calcOff(mrp, price) {
  const M = parseMoney(mrp);
  const P = parseMoney(price);
  if (!M || !P || P >= M) return 0;
  return Math.round(((M - P) / M) * 100);
}
