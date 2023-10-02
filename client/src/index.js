import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

import "./index.css";
import App from "./App";

const theme = extendTheme({
  colors: {
    brand: {
      colourOne: "#d7d7d7",
      colourTwo: "#765c46",
      colourThree: "#302723",
      colourFour: "#9f9891",
      colourFive: "#c0a77d",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
