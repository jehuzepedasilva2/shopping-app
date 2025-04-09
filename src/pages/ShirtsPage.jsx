import '../styles/shirts-page.css';
import '../styles/common.css';
import { useEffect, useState } from 'react';
import DisplayItem from '../components/DisplayItem.jsx';

const KEY = '9r9NIUrem4oaWJKpe3MPYbXqvjkDAzEiVg0Sk3zk3Qs';

const ShirtsPage = () => {
  // const [imgData, setImgData] = useState([]);
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

    // useEffect(() => {
    //   fetch(`https://api.unsplash.com/search/photos?query=shirts&client_id=${KEY}`)
    //   .then(response => response.json())
    //   .then(data => setImgData(data.results))
    //   .catch(error => console.log(error));
    // }, [])


  return (
    <div id='shirts-page'>
      <DisplayItem imgsData={imgsDataMen.concat(imgsDataWoman)} />
      {/* <DisplayItem imgsData={imgData} other={true} /> */}
    </div>
  )
}

export default ShirtsPage
