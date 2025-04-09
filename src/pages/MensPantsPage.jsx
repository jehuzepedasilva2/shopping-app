import { useEffect, useState } from 'react';
import DisplayItem from '../components/DisplayItem';
import '../styles/common.css';

const KEY = '9r9NIUrem4oaWJKpe3MPYbXqvjkDAzEiVg0Sk3zk3Qs';

const MensPantsPage = () => {

  const [imgData, setImgData] = useState([]);

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=men-pants&client_id=${KEY}`)
    .then(response => response.json())
    .then(data => setImgData(data.results))
    .catch(error => console.log(error));
  }, [])

  return (
    <div id='pants-men-page'>
      <DisplayItem imgsData={imgData} other={true} />
    </div>
  )
}

export default MensPantsPage;
