import React from 'react';
import './NavBar.css';
import NavButtons from './NavButtons';

const NavBar = () => {
    return (
        <section className='navbar-container'>
            <h2 className='page-title'>Discogs</h2>
            <input className='search-bar' type='text' placeholder='Search albums, artists, and more'/>
            <NavButtons/>
        </section>
    )
}

export default NavBar;
