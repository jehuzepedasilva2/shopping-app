import '../styles/item.css';
import { useState, useContext } from 'react';
import { CartContext } from '../layouts/MainLayout.jsx';

const Item = ({ data, other=false }) => {

  let desc = '', imgSrc = '', itemPrice = '';
  if (other) {
    console.log(data.alt_description, data);
    desc = data.alt_description;
    imgSrc = data.urls.full;
    itemPrice = 99.99;
    // itemPrice = (Math.random() * (140 - 30)) + 30;
    // itemPrice = Math.round(itemPrice * 100) / 100;
  } else {
    desc = data.description;
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
            setCartDetails(previous => {return {numItems: previous.numItems + 1, total: previous.total + Number(data.price)}}) 
          }}
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default Item;