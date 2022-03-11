import { createTheme } from "@material-ui/core";
import App from "./App";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import ReactDOM from "react-dom";

// let theme = createTheme({
//   palette: {
//     primary: {
//       main: purple[500],
//     },
//   },
// });

ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
