//global styles
import "./index.css";

//react
import React from "react";
import ReactDOM from "react-dom/client";

//router
import RouterGameApp from "./router/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterGameApp />
  </React.StrictMode>
);
