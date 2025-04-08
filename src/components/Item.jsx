import '../styles/item.css';

const Item = ({ data }) => {

  if (!data) {
    return <p>Loading...</p>
  }

  return (
    <div className='item'>
      <img key={data.id} src={data.image}></img>
      <div className='item-info'>
        {data.description}
      </div>
      <div className='item-price'>
        ${data.price}
      </div>
    </div>
  );
}

export default Item;