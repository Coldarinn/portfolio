import ReactDOM from "react-dom/client";
import React from "react";

import "normalize.css";
import "@/modules/styles/global.css";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
