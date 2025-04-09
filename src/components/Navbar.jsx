import logo from '../assets/images/steel_theory_logo.png';
import '../styles/navbar.css';
import Navlink from './Navlink.jsx';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const addSelected = (isActive) => {
    return isActive ? 'link selected' : 'link';
  }

  return (
    <div id="navbar">
      <Link to='/home' className='left-nav'>
        <img src={logo} />
      </Link>
      <div className='right-nav'>
        <Navlink title='HOME' to='/home' classFunction={addSelected} />
        <Navlink title='SHIRTS' to='/shirts' classFunction={addSelected} />
        <Navlink title='PANTS' to='/pants' classFunction={addSelected} />
        <Navlink title='CART' to='/cart' classFunction={addSelected} />
      </div>
    </div>
  );
}

// at 1:44:37 in react crash course