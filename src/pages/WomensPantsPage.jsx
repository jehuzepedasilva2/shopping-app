import { useEffect, useState } from 'react';
import DisplayItem from '../components/DisplayItem';

const KEY = '9r9NIUrem4oaWJKpe3MPYbXqvjkDAzEiVg0Sk3zk3Qs';

const WomensPantsPage = () => {

  const [imgData, setImgData] = useState([]);

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=women-pants&client_id=${KEY}`)
    .then(response => response.json())
    .then(data => setImgData(data.results))
    .catch(error => console.log(error));
  }, [])

  return (
    <div id='pants-women-page'>
      <DisplayItem imgsData={imgData} other={true} />
    </div>
  )
}

export default WomensPantsPage;
