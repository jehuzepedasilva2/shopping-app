import { useState, useEffect } from "react";
import Shirt from "../components/DisplayItem";
import '../styles/common.css';

const KEY ='9r9NIUrem4oaWJKpe3MPYbXqvjkDAzEiVg0Sk3zk3Qs';

const MensShirtPage = () => {
    const [imgsData, setImgsData] = useState([]);
  
    useEffect(() => {
      const getImageData = async() => {
        const response = await fetch(`https://fakestoreapi.com/products/category/men's clothing`);
        const data = await response.json();
        setImgsData(data);
      }
      getImageData();
    } ,[])

    // useEffect(() => {
    //   fetch(`https://api.unsplash.com/search/photos?query=mens-shirt&client_id=${KEY}`)
    //   .then(response => response.json())
    //   .then(data => setImgsData(data.results))
    //   .catch(error => console.log(error))
    // }, [])

    // console.log(imgsData);
    
  return (
    <div id='shirts-men-page'>
      <Shirt imgsData={imgsData} />
    </div>
  )
}

export default MensShirtPage
