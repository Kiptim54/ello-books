import React from "react";
import { Box, Typography, Link } from "@mui/material";
import ElloLogo from "../assets/logoEllo.svg";

export default function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 2,
        mb: 4,
        px: 4,
      }}
    >
      <img src={ElloLogo} alt="Ello Logo" />

      <Typography
        color="secondary"
        fontWeight="bold"
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <Link
          href="https://www.ello.com/#how-it-works"
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none", color: "secondary" }}
        >
          Discover Ello
        </Link>
      </Typography>
    </Box>
  );
}
