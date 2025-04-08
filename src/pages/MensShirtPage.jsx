import { useState, useEffect } from "react";
import Shirt from "../components/Shirt";

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
    
  return (
    <div>
      <Shirt imgsData={imgsData}/>
    </div>
  )
}

export default MensShirtPage
