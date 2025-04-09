import { Outlet } from "react-router-dom";
import Navlink from '../components/Navlink.jsx';

const ClothingLayout = ({ type, menLink, womenLink }) => {

  const addSelected = (isActive) => {
    return isActive ? 'sub-link selected' : 'sub-link';
  }

  return (
    <>
      <div className='top-page-shirts'>
        <Navlink title={`Men's ${type}`} to={menLink} classFunction={addSelected} />
        <Navlink title={`Women's ${type}`} to={womenLink} classFunction={addSelected} />
      </div>
      <Outlet />
    </>
  )
}

export default ClothingLayout;
