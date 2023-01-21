import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/urbanist";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store";


//global acess to MUI theme//
const theme = createTheme({
  palette: {
    // https://color.adobe.com/hanawilo-color-theme-20881290/
    darkPurple: "#360568",
    medPurple: "#5B2A86",
    lightPurple: "#7785AC",
    teal: "#9AC6C5",
    lightGreen: "#A5E6BA",
    green: "#3FFF80",
    white: "white",
    black: "black",
    background: {
      default: "#360568",
    },
    text: {
      primary: "#FFFFFF",
    },
  },

  typography: {
    fontFamily: [
      "Urbanist",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});



ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
      </ThemeProvider>
  </Provider>
);
