import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {

  const addSelected = (isActive) => {
    return isActive ? 'link selected' : 'link';
  }

  return (
    <div id="navbar">
      <NavLink to='/home' className={({ isActive }) => addSelected(isActive)}>Home</NavLink>
      <NavLink to='/shirts' className={({ isActive }) => addSelected(isActive)}>Shirts</NavLink>
      <NavLink to='/pants' className={({ isActive }) => addSelected(isActive)}>Pants</NavLink>
      <NavLink to='/cart' className={({ isActive }) => addSelected(isActive)}>Cart</NavLink>
    </div>
  );
}

// at 1:44:37 in react crash course