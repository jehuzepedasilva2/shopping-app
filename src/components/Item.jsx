import '../styles/item.css';
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
    itemPrice = data.price;
  }

  const [showFullDesc, setShowFullDesc] = useState(false);
  const { cartDetails, setCartDetails } = useContext(CartContext);

  return (
    <div className='item'>
      <img key={data.id} src={imgSrc}></img>
      <div className='item-info'>
        {showFullDesc || desc.length < 90 ? desc : desc.substring(0, 90) + '...'}
      </div>
      {desc.length > 90 && <button
        className='more-less-btn'
        onClick={() => setShowFullDesc((previous) => !previous)}
      >
        {showFullDesc ? 'Less' : 'More'}
      </button>}
      <div className='item-price'>
        ${itemPrice}
        <button
          className='buy-btn'
          onClick={() => { 
            setCartDetails(previous => {return {numItems: previous.numItems + 1, total: previous.total + Number(itemPrice)}}) 
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Item;