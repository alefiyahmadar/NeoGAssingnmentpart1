import "./App.css";
import logo from "./logo.png";
import MockMan from "mockman-js"
import {Route , Routes , NavLink} from "react-router-dom"

import { HomePage } from "./home";
import { ProductList } from "./productListing";
import { ProductCart } from "./Cart";
import { useContext } from "react";
import { CartContext } from "./cartProvider";
import { ProductDetails } from "./productDetails";
import { GetWishlist } from "./wishlist";

function App() {

  const {useReduce} = useContext(CartContext)
  const {cart} = useContext(CartContext)
  const {getWishList}  =useContext(CartContext)

  return (
    <div className="App">

<nav>
                <NavLink to="/">Home</NavLink> | |
                <NavLink to="/productList">ProductList</NavLink>| |
                <NavLink to="/productCart">Cart</NavLink> | | 
                <NavLink to="/wishlist" >WishList</NavLink>
              
            </nav>

            <p>TotalItems {cart.length}</p>
            <p>TotalCost : {useReduce}</p>
            <p>TotalWishes : {getWishList.length}</p>

      

    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/mockman" element={<MockMan/>}></Route>
      <Route path="/productList" element={<ProductList/>}></Route>
      <Route path="/productCart" element={<ProductCart/>}></Route>
      <Route path="/productDetail/:productId" element={<ProductDetails/>}></Route>
      <Route path="/wishlist" element={<GetWishlist/>}></Route>


    </Routes>

      
      
            
    </div>
  );
}

export default App;
