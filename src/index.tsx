// Import Third-party Modules
import React from "react";
import ReactDOM from "react-dom/client";

// Import User-defined Modules
import { App } from "./App";
import "./index.css";

// Using ReactDOM createRoot method to create a root & render the app component
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
