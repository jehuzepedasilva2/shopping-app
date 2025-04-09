import Item from '../components/Item.jsx'
import '../styles/shirt.css';

export default function Shirt({ imgsData }) {

  return (
    <div className='items'>
      <div className='item-img-container'>
        {imgsData.map((data) => {
            return <Item key={data.id} data={data} />
          })
        }
      </div>
    </div>
  );
}