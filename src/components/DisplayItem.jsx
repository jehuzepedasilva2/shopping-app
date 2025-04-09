import Item from './Item.jsx'
import '../styles/shirt.css';

export default function DisplayItem({ imgsData, other=false }) {

  return (
    <div className='items'>
      <div className='item-img-container'>
        {imgsData.map((data) => {
            return <Item key={data.id} data={data} other={other}/>
          })
        }
      </div>
    </div>
  );
}