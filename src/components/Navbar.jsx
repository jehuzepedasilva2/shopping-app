import { NavLink } from 'react-router-dom';
import logo from '../assets/images/steel_theory_logo.png';
import '../styles/navbar.css';

export default function Navbar() {

  const addSelected = (isActive) => {
    return isActive ? 'link selected' : 'link';
  }

  return (
    <div id="navbar">
      <div className='left-nav'>
        <img src={logo} />
      </div>
      <div className='right-nav'>
        <NavLink 
          to='/home' 
          className={({ isActive }) => addSelected(isActive)}
        >
            HOME
        </NavLink>
        <NavLink 
          to='/shirts' 
          className={({ isActive }) => addSelected(isActive)}
        >
          SHIRTS
        </NavLink>
        <NavLink 
          to='/pants' 
          className={({ isActive }) => addSelected(isActive)}
        >
          PANTS
        </NavLink>
        <NavLink 
          to='/cart' 
          className={({ isActive }) => addSelected(isActive)}
        >
          CART
        </NavLink>
      </div>
    </div>
  );
}

// at 1:44:37 in react crash course