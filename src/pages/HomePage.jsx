import '../styles/home-page.css';
import '../styles/common.css';
import frontImage from '../assets/images/homepage_image.png';

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='slogan-container-1'>
        <span>Theory</span> in Motion.
      </div>
      <div className='slogan-container-2'>
        Strength in <span>Form</span>.
      </div>
      <img id='homepage-img' src={frontImage}></img>
    </div>
  )
}

export default HomePage
