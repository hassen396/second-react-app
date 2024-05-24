import React from "react";
import ReactDOM from "react-dom/client";
import Status from "./playBord.jsx";
import Bord from "./status.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Status />
    <Bord />
  </React.StrictMode>
);
