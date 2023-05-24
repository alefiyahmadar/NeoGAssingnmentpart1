import "./App.css";
import logo from "./logo.png";
import MockMan from "mockman-js"
import {Route , Routes , NavLink} from "react-router-dom"

import { HomePage } from "./home";
import { ProductList } from "./productListing";

function App() {
  return (
    <div className="App">

<nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/productList">ProductList</NavLink>
            </nav>

      

    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/mockman" element={<MockMan/>}></Route>
      <Route path="/productList" element={<ProductList/>}></Route>



    </Routes>

      
      
            
    </div>
  );
}

export default App;
