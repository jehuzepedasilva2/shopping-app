import '../styles/cart-page.css';
import '../styles/common.css';
import { CartContext } from '../layouts/MainLayout.jsx';
import { useContext } from 'react';

const CartPage = () => {

  const { cartDetails, setCartDetails } = useContext(CartContext);

  if (cartDetails.items.length === 0) {
    return <div className='empty-cart'>EMPTY CART</div>
  }

  const handleDeleteItem = (id) => {
    const updatedItems = cartDetails.items.filter((currItem) => currItem.id !== id);
    //  update price and curr items here
    // setCartDetails(previous => {return {previous.total - , items: updatedItems}});
  }

  return (
    <div id='cart-page'>
      <h1 className='main-headings'>Cart</h1>
      <div className='cart-list'>
        {cartDetails.items.map(item => {
          return (
            <div key={item.id} className='cart-item'>
              <div className='cart-item-img'>
                <img src={item.src}></img>
              </div>
              <div className='cart-item-info'>
                <p className='cart-item-info-desc'>
                  {item.desc} 
                </p>
                <h2 className='cart-item-info-price'>
                  <button 
                    className='del-item'
                    onClick={item => handleDeleteItem(item.id)}
                  >
                    Delete
                  </button>
                  $ {item.price}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
      <div className='cart-total'>
        Number of Items: {cartDetails.items.length} <br></br> Total: $ {(Math.round(cartDetails.total * 100) / 100).toFixed(2)}
      </div>
    </div>
  )
}

export default CartPage
