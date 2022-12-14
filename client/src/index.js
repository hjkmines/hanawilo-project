import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
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

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // createRoot(container!) if you use TypeScript

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
