import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Body from "./Components/Body.jsx";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={appStore}>
      <Body />
    </Provider>
  </StrictMode>
);
