import '../styles/pants-page.css';
import '../styles/common.css';
import { useEffect, useState } from 'react';
import DisplayItem from '../components/DisplayItem';

const KEY = '9r9NIUrem4oaWJKpe3MPYbXqvjkDAzEiVg0Sk3zk3Qs';

const PantsPage = () => {

  const [imgData, setImgData] = useState([]);

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=pants&client_id=${KEY}`)
    .then(response => response.json())
    .then(data => setImgData(data.results))
    .catch(error => console.log(error));
  }, [])

  // console.log(imgData);

  return (
    <div id='pants-page'>
      <DisplayItem imgsData={imgData} other={true} />
    </div>
  )
}

export default PantsPage
