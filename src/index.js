import ReactDOM from "react-dom/client";
import './index.css';
import { ThemeProvider } from "@material-tailwind/react";
import { StrictMode } from "react";
import "alpinejs";

import { App } from "./app";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
