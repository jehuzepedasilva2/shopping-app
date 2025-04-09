import { useState, useEffect } from "react";
import Shirt from "../components/Shirt";

const WomensShirtPage = () => {
    const [imgsData, setImgsData] = useState([]);
  
    useEffect(() => {
      const getImageData = async() => {
        const response = await fetch(`https://fakestoreapi.com/products/category/women's clothing`);
        const data = await response.json();
        setImgsData(data);
      }
      getImageData();
    } ,[])
    
  return (
    <div id='shirts-women-page'>
      <Shirt imgsData={imgsData}/>
    </div>
  )
}

export default WomensShirtPage
