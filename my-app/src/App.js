
import React from "react";
import "./App.css";


import {Route , Routes , NavLink} from "react-router-dom"

import { HomePage } from "./pages/home";
import { ProductList } from "./pages/productListing";
import { ProductCart } from "./pages/Cart";
import { useContext } from "react";
import { CartContext } from "./context/cartProvider";
import { ProductDetails } from "./pages/productDetails";
import { GetWishlist } from "./pages/wishlist";
import { LoginPage } from "./pages/login";
import { AuthWrapper } from "./pages/AuthWrapper";
import { AuthContext } from "./context/AuthContext";
import { UserPage } from "./pages/user";
import { SignUp } from "./pages/signup";
import { CheckOut } from "./pages/checkout";


function App() {

  const {useReduce} = useContext(CartContext)
  const {cart} = useContext(CartContext)
  const {getWishList}  =useContext(CartContext)
  
  const {SearchBarHandler} = useContext(CartContext)
  const {isSignIn } =useContext(AuthContext)

 

    
  

  return (
    <div className="App">

<nav className="nav">
             
<img className="bookstore" width="64" height="64" src="https://img.icons8.com/external-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto/64/000000/external-bookstore-book-store-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto.png" alt="external-bookstore-book-store-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto"/>




              <p className="naviinfo">

   
                <NavLink className="home" to="/">Home</NavLink> 
                <NavLink className="list" to="/productList">ProductList</NavLink>
                <NavLink className="cart" to="/productCart"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png" alt="shopping-cart"/>{  cart.length }<>{ `$ ${useReduce}` }</></NavLink> 
                <NavLink className="wishlist" to="/wishlist" > <img width="40" height="40" src="https://img.icons8.com/ios-filled/40/like--v1.png" alt="like--v1"/>{ getWishList.length}</NavLink>
                <NavLink to="/userProfile"><img width="40" height="40" src="https://img.icons8.com/external-itim2101-lineal-itim2101/64/000000/external-reader-life-style-avatar-itim2101-lineal-itim2101-1.png" alt="external-reader-life-style-avatar-itim2101-lineal-itim2101-1"/></NavLink>
                </p>

                
                <>   <input className="searchbar" type="text" placeholder="Search for product" id="searchBar" onChange={SearchBarHandler}/></>
              
            </nav>

          
            
           

            

      

    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      
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
      <Route path="/checkout" element={<CheckOut/>}></Route>


    </Routes>

      
     
      
      
            
    </div>
  );
}

export default App;
