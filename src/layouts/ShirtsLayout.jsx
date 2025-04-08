import { Outlet } from "react-router-dom";
import Navlink from '../components/Navlink.jsx';

const ShirtsLayout = () => {

  const addSelected = (isActive) => {
    return isActive ? 'sub-link selected' : 'sub-link';
  }

  return (
    <>
      <div className='top-page-shirts'>
        <Navlink title="Men's Shirts" to='/shirts/men' classFunction={addSelected} />
        <Navlink title="Womans's Shirts" to='/shirts/woman' classFunction={addSelected} />
      </div>
      <Outlet />
    </>
  )
}

export default ShirtsLayout
