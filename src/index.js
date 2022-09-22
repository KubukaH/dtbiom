import ReactDOM from "react-dom/client";
import './index.css';
import { ThemeProvider } from "@material-tailwind/react";
import "swiper/swiper-bundle.min.css";
// import "swiper/scss/bundle";

import { App } from "./app";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
