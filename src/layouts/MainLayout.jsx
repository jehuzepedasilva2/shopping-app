import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState, createContext } from "react";

// to use:
// import { useContext } from 'react'
// import { CartContext } from '../layouts/MainLayout.jsx'
// const { cartDetails, setCartDetails } = useContext(CartContext);

const CartContext = createContext();

export default function MainLayout() {

  const [cartDetails, setCartDetails] = useState({total: 0, items: []})

  return (
    <CartContext.Provider value={{cartDetails, setCartDetails}}>
      <Navbar/>
      <Outlet />
    </CartContext.Provider>
  )
}

export { CartContext }
