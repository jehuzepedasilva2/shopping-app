import { useState, useEffect } from "react";
import DisplayItem from "../components/DisplayItem";
import '../styles/common.css';

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

  if (!imgsData.length) {
    return (
      <div className='spinner-container'>
        <div className='loading-spinner'></div>
      </div>
    );
  }
    
  return (
    <div id='shirts-women-page'>
      <DisplayItem imgsData={imgsData}/>
    </div>
  )
}

export default WomensShirtPage
