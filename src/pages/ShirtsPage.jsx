import '../styles/shirts-page.css';
import '../styles/common.css';
import { useEffect, useState } from 'react';
import DisplayItem from '../components/DisplayItem.jsx';

const KEY = '9r9NIUrem4oaWJKpe3MPYbXqvjkDAzEiVg0Sk3zk3Qs';

const ShirtsPage = () => {
  const [imgsDataMen, setImgsDataMen] = useState([]);
  const [imgsDataWoman, setImgsDataWoman] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        // fetch the data in parallel
        const [menRes, womenRes] = await Promise.all([
          fetch("https://fakestoreapi.com/products/category/men's clothing"),
          fetch("https://fakestoreapi.com/products/category/women's clothing")
        ]);

        const [menData, womenData] = await Promise.all([
          menRes.json(),
          womenRes.json()
        ]);

        setImgsDataMen(menData);
        setImgsDataWoman(womenData);
      } catch (error) {
        console.error("Error fetching clothing data:", error);
      }
    };

    fetchAll();
  }, []);

  if (!imgsDataMen.length || !imgsDataWoman.length) {
    return (
      <div className='spinner-container'>
        <div className='loading-spinner'></div>
      </div>
    );
  }

  return (
    <div id='shirts-page'>
      <DisplayItem imgsData={imgsDataMen.concat(imgsDataWoman)} />
    </div>
  )
}

export default ShirtsPage
