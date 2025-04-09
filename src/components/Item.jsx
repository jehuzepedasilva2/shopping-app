import '../styles/item.css';
import { useState, useContext } from 'react';
import { CartContext } from '../layouts/MainLayout.jsx';

const Item = ({ data }) => {

  const [showFullDesc, setShowFullDesc] = useState(false);
  const { cartDetails, setCartDetails } = useContext(CartContext);

  if (!data) {
    return <p>Loading...</p>
  }

  console.log(cartDetails);

  return (
    <div className='item'>
      <img key={data.id} src={data.image}></img>
      <div className='item-info'>
        {showFullDesc ? data.description : data.description.substring(0, 90) + '...'}
      </div>
      <button
        className='more-less-btn'
        onClick={() => setShowFullDesc((previous) => !previous)}
      >
        {showFullDesc ? 'Less' : 'More'}
      </button>
      <div className='item-price'>
        ${data.price}
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