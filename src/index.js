import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RelayEnvironmentProvider } from "react-relay";

import RelayEnvironment from "./RelayEnvironment";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <App />
  </RelayEnvironmentProvider>
);
