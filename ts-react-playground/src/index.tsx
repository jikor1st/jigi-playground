import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

// css
// import { resetStyle, globalStyle } from "@/lib/styles";

// routers
import { BrowserRouter, HashRouter } from "react-router-dom";

// styled-component
// import { createGlobalStyle, ThemeProvider } from 'styled-components';

// const GlobalStyles = createGlobalStyle`${resetStyle}${globalStyle}`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
