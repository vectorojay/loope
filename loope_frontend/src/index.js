import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));

const env = process.env.REACT_APP_GOOGLE_API_TOKEN;
root.render(
  <React.StrictMode>
    <Router>
      <GoogleOAuthProvider clientId={env}>
        <App />
      </GoogleOAuthProvider>
    </Router>
  </React.StrictMode>
);
