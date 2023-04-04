import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import "./index.css";
import App from "./App";



const root = createRoot(document.getElementById("root"));

root.render(
  
    <Provider store={store}>
      <App />
    </Provider>
);
