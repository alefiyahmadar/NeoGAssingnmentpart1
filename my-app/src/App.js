import "./App.css";
import logo from "./logo.png";
import MockMan from "mockman-js"
import {Route , Routes , NavLink, useLocation, useNavigate} from "react-router-dom"

import { HomePage } from "./home";
import { ProductList } from "./productListing";
import { ProductCart } from "./Cart";
import { useContext, useState } from "react";
import { CartContext } from "./cartProvider";
import { ProductDetails } from "./productDetails";
import { GetWishlist } from "./wishlist";
import { LoginPage } from "./login";
import { AuthWrapper } from "./AuthWrapper";
import { AuthContext } from "./AuthContext";


function App() {

  const {useReduce} = useContext(CartContext)
  const {cart} = useContext(CartContext)
  const {getWishList}  =useContext(CartContext)
  const {isLoggedIn , setLogIn} =useContext(AuthContext)
  const {logInDisable , setLoginDisable} =useContext(AuthContext)

 

    
  

  return (
    <div className="App">

<nav className="navbar">
                <NavLink to="/">Home</NavLink> | |
                <NavLink to="/productList">ProductList</NavLink>| |
                <NavLink to="/productCart"><img width="50" height="50" src="https://img.icons8.com/dusk/64/shopping-cart--v1.png" alt="shopping-cart--v1"/>{cart.length}<>${useReduce}</></NavLink> 
                <NavLink  to="/wishlist" > <img width="50" height="50" src="https://img.icons8.com/cotton/64/like--v4.png" alt="like--v4" />{getWishList.length}</NavLink>
                
              
            </nav>

            

      

    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/mockman" element={<MockMan/>}></Route>
      <Route path="/productList" element={<ProductList/>}></Route>
      <Route path="/productCart" element={
        <AuthWrapper>
          <ProductCart/>
        </AuthWrapper>
      }></Route>
      <Route path="/productDetail/:productId" element={<ProductDetails/>}></Route>

      <Route path="/wishlist" element={
        <AuthWrapper>
          <GetWishlist/>
        </AuthWrapper>
      }></Route>
      <Route path="/login" element={<LoginPage/>}></Route>


    </Routes>

      
      
            
    </div>
  );
}

export default App;
