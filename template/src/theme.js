import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#9E9E9E",
      dark: "#212121",
      main: "#197163",
      contrastText: "#FBECEC",
    },
    secondary: {
      light: "#212121",
      dark: "#9E9E9E",
      main: "#FFC107",
      contrastText: "#80DEEA",
    }
  },
});

export default theme
