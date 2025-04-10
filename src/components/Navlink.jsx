import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../layouts/MainLayout.jsx';
import { cartSvg } from '../assets/images/svgs/Svgs.jsx';

export default function Navlink({ title, to, classFunction }) {

  const { cartDetails, _ } = useContext(CartContext);

  return (
   <>
    <NavLink 
      to={to} 
      className={({ isActive }) => classFunction(isActive)}
    >
      {title !== 'CART' ? title : cartSvg}
      {title === 'CART' && cartDetails.items.length > 0 &&
        <div className='item-count'>{cartDetails.items.length}</div>
      }
    </NavLink>
   </>
  )
}
