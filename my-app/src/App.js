
import React from "react";
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
import { UserPage } from "./user";
import { SignUp } from "./signup";


function App() {

  const {useReduce} = useContext(CartContext)
  const {cart} = useContext(CartContext)
  const {getWishList}  =useContext(CartContext)
  const {isLoggedIn , setLogIn} =useContext(AuthContext)
  const {logInDisable , setLoginDisable} =useContext(AuthContext)
  const {SearchBarHandler} = useContext(CartContext)
  const {isSignIn ,setIsSignIn} =useContext(AuthContext)

 

    
  

  return (
    <div className="App">

<nav className="nav">


  <img className="bookstore" width="64" height="64" src="https://img.icons8.com/external-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto/64/000000/external-bookstore-book-store-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto.png" alt="external-bookstore-book-store-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto"/>


              

                <NavLink className="home" to="/">Home</NavLink> 
                <NavLink className="list" to="/productList">ProductList</NavLink>
                <NavLink className="cart" to="/productCart"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png" alt="shopping-cart"/>{  isLoggedIn ? cart.length : ""}<>{ isLoggedIn ? `$ ${useReduce}` :""}</></NavLink> 
                <NavLink className="wishlist" to="/wishlist" > <img width="40" height="40" src="https://img.icons8.com/ios-filled/40/like--v1.png" alt="like--v1"/>{ isLoggedIn ? getWishList.length:""}</NavLink>
                <NavLink to="/userProfile"><img width="40" height="40" src="https://img.icons8.com/external-itim2101-lineal-itim2101/64/000000/external-reader-life-style-avatar-itim2101-lineal-itim2101-1.png" alt="external-reader-life-style-avatar-itim2101-lineal-itim2101-1"/></NavLink>
                

                
                <>   <input className="searchbar" type="text" placeholder="Search for product" id="searchBar" onChange={SearchBarHandler}/></>
              
            </nav>

          
            
           

            

      

    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/mockman" element={<MockMan/>}></Route>
      <Route path="/productList" element={<ProductList/>}></Route>
      <Route path="/productCart" element={
        isSignIn ? <ProductCart/> :
        <AuthWrapper>
          <ProductCart/>
        </AuthWrapper>
      }></Route>
      <Route path="/productDetail/:productId" element={<ProductDetails/>}></Route>

      <Route path="/wishlist" element={

        isSignIn ? <GetWishlist/> :
        <AuthWrapper>
          <GetWishlist/>
        </AuthWrapper>
      }></Route>

      <Route path="/userProfile" element={
        isSignIn ? <UserPage/> :

      <AuthWrapper><UserPage/></AuthWrapper>
      
      
      }></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="signup" element={<SignUp/>}></Route>


    </Routes>

      
      
            
    </div>
  );
}

export default App;
