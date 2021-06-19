import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NavigationBar from "./components/Header/NavigationBar";
import reportWebVitals from "./reportWebVitals";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <NavigationBar />
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
