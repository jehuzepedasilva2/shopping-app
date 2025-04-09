import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState, createContext } from "react";
import HomePage from "../pages/Homepage";

// to use:
// import { useContext } from 'react'
// import { CartContext } from '../layouts/MainLayout.jsx'
// const { cartDetails, setCartDetails } = useContext(CartContext);

const CartContext = createContext();

export default function MainLayout() {

  const [cartDetails, setCartDetails] = useState({numItems: 0, total: 0})

  return (
    <CartContext.Provider value={{cartDetails, setCartDetails}}>
      <Navbar/>
      <Outlet />
    </CartContext.Provider>
  )
}

export { CartContext }
