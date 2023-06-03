import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter } from "react-router-dom" ;

import { CartContext } from "./cartProvider";
import { CartProvider } from "./cartProvider";
import { AuthContextProvider } from "./AuthContext";




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
