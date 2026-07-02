import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // lấy root render component App
  <StrictMode>
    <App />
  </StrictMode>,
);
