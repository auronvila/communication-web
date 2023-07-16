import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/style.css";
import { RouterProvider } from "react-router-dom";
import routes from "~/routes/index.jsx";
import { Provider } from "react-redux";
import store from "~/stores/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
