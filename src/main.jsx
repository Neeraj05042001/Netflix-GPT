import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Body from "./Components/Body.jsx";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Body />
  </StrictMode>
);
