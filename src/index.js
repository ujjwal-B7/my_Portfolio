import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
AOS.init();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Toaster position="top-right" />
  </React.StrictMode>
);
