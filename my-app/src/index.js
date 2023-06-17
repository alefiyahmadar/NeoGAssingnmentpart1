import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter } from "react-router-dom" ;


import { CartProvider } from "./context/cartProvider";
import { AuthContextProvider } from "./context/AuthContext";




// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
      <AuthContextProvider> <App /></AuthContextProvider>
     </CartProvider>

    
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById("root")
);
