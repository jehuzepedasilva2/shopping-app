import '../styles/cart-page.css';
import '../styles/common.css';
import { CartContext } from '../layouts/MainLayout.jsx';
import { useContext } from 'react';

const CartPage = () => {

  const { cartDetails, _ } = useContext(CartContext);

  return (
    <div>
      <h1 className='main-headings'>Cart</h1>
      <h2>Number of Items: {cartDetails.numItems}</h2>
      <h2>Total: {cartDetails.total}</h2>
    </div>
  )
}

export default CartPage
