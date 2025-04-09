import '../styles/shirts-page.css';
import '../styles/common.css';
import { useEffect, useState } from 'react';
import DisplayItem from '../components/DisplayItem.jsx';

const ShirtsPage = () => {
  const [imgsDataMen, setImgsDataMen] = useState([]);
  const [imgsDataWoman, setImgsDataWoman] = useState([]);

  useEffect(() => {
    const getImageData = async(gender, setImgsData) => {
      const response = await fetch(`https://fakestoreapi.com/products/category/${gender}`);
      const data = await response.json();
      setImgsData(data);
    }
    getImageData("men's clothing", setImgsDataMen);
    getImageData("women's clothing", setImgsDataWoman);
  } ,[])


  return (
    <div id='shirts-page'>
      <DisplayItem imgsData={imgsDataMen.concat(imgsDataWoman)} />
    </div>
  )
}

export default ShirtsPage
