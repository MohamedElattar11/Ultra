import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'


 function Nav() {
  return (
    <div className='navbar'>
    <div className='container'>
    <div className='logo'>
      <h2 className='logo-text'> Ultra <span>Tech</span></h2>
    </div>
    <ul className='ul-list'>
    <li className='list-item'><Link to='/'>Home</Link></li>
    <li className='list-item'><Link to='/work'>Our Work</Link></li>
    <li className='list-item'><Link to='/portfolio'>Portfolio</Link></li>
    <li className='list-item'><Link to='/profile'>Profile</Link></li>
    <li className='list-item'><Link to='/contact'>Contact</Link></li>
    </ul>
    </div>
    </div>
  )
}
export default Nav;
