import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";

import GlobalStyle from "./shared/styles/Global";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);
