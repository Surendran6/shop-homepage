import React,{useState} from "react";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import  ShopingItems  from "./components/ShopingItems";
import ShopFooter  from "./components/ShopFooter";
import  ShopNavbar  from "./components/ShopNavbar";

function App() {  
  const [cart, setCart] = useState(0)
  return (
    <div>      
      <ShopNavbar cart = {cart} />
      <ShopingItems cart = {cart}  setCart = {setCart} />
      <ShopFooter />
    </div>
  )
}
export default App;
