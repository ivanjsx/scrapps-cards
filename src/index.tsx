// libraries
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// components
import App from "./components/app/app";

// styles
import "./index.css";


const root = createRoot(
  document.querySelector("#root") as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
