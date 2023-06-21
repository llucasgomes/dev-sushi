import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyle from "./shared/styles/Global";
import { Rotas } from "./routes";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Rotas} />
    <GlobalStyle />
  </React.StrictMode>
);
