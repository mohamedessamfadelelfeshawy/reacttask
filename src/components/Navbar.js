import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Navbar() {
  return (
    <div className='navbar'>
        <div>
            <Link to='/'>Home</Link>
        </div>
        <div>
            <Link to='/category-name/electronics'>electronics</Link>
        </div>
        <div>
            <Link to='/category-name/jewelery'>jewelery</Link>
        </div>
        <div>
            <Link to="/category-name/men's clothing">men's clothing</Link>
        </div>
        <div>
            <Link to="/category-name/women's clothing">women's clothing</Link>
        </div>
        <div>
            <Link to='/cart'>Cart</Link>
        </div>
    </div>
  )
}
