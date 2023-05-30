import { createRoot } from "react-dom/client";
import { App } from "./main";
import { LocationProvider } from "@reach/router";
import { history } from "./_components/history";

const container = document.getElementById("mudimba");
const root = createRoot(container);

root.render(
  <LocationProvider history={history}>
    <App />
  </LocationProvider>
);
