import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GeneralContextProvider from "./contexts/GeneralContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GeneralContextProvider>
    <App />
  </GeneralContextProvider>
);
