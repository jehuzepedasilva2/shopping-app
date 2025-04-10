import '../styles/item.css';
import '../styles/common.css';
import { useState, useContext } from 'react';
import { CartContext } from '../layouts/MainLayout.jsx';

const Item = ({ data, other=false }) => {

  let desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  let imgSrc = '', itemPrice = '';
  if (other) {
    imgSrc = data.urls.full;
    itemPrice = 99.99;
  } else {
    imgSrc = data.image;
    itemPrice = (Math.round(data.price * 100) / 100).toFixed(2);
  }

  const [showFullDesc, setShowFullDesc] = useState(false);
  const [idAdded, setIdAdded] = useState(0);
  const { _, setCartDetails } = useContext(CartContext);

  const handleBuyButton = (id) => {
    let prev = id;
    setIdAdded(previous => previous + 1);
    setCartDetails(previous => {
      return {items: [
          ...previous.items, 
          {id: prev, src: imgSrc, price: itemPrice, desc: desc}
        ], total: previous.total + Number(itemPrice)
      }
    });
  };

  return (
    <div className='item'>
      <img key={data.id + idAdded} src={imgSrc}></img>
      <div className='item-info'>
        {showFullDesc ? desc : desc.substring(0, 100) + '...'}
      </div>
      <button
        className='more-less-btn'
        onClick={() => setShowFullDesc((previous) => !previous)}
      >
        {showFullDesc ? 'Less Info' : 'More Info'}
      </button>
      <div className='item-price'>
        <button
          className='buy-btn'
          onClick={() => handleBuyButton(data.id + idAdded)}
        >
          Add to Cart
        </button>
        $ {itemPrice}
      </div>
    </div>
  );
}

export default Item;