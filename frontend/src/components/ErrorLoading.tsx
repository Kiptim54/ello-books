import React from "react";
import { Box, Typography } from "@mui/material";

export default function ErrorLoading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography
        variant="h4"
        color="warning.dark"
        fontWeight="bold"
        textAlign="center"
      >
        {" "}
        Ooops! Error loading the books...
      </Typography>
    </Box>
  );
}
