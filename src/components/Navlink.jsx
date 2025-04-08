import { NavLink } from 'react-router-dom';

export default function Navlink({ title, to, classFunction }) {
  return (
   <>
    <NavLink 
      to={to} 
      className={({ isActive }) => classFunction(isActive)}
    >
      {title}
    </NavLink>
   </>
  )
}
