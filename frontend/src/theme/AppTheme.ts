import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#5ACCCC",
      light: "#CFFAFA",
      dark: "#335C6E",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#53C2C2",
      dark: "#28B8B8",
    },
    warning: {
      main: "#FABD33",
      dark: "#FAAD00",
    },
  },
  //   https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap add mulish to typography
  typography: {
    fontFamily: ["Mulish", "sans-serif"].join(","),
  },
});
