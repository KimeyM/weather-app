import React from 'react';
import Logo from '../../img/logo.png';
import SearchBar from '../searchBar/searchBar.jsx';
import './nav.css';
import { Link } from "react-router-dom";


function Nav({onSearch}) {
  return (
    <div className='containerNav'>
      <nav>
        <div className='containerNavLink'>
          <img src={Logo} width="30" height="30" alt="" />
          <Link to="/" style={{textDecoration:'none', color:'var(--pink)', fontWeight:'600', fontSize:'28px', letterSpacing:'1px'}}>
          Weather App
          </Link>
        </div>   
        <SearchBar
          onSearch={onSearch}
        />
      </nav>
    </div>
  );
};

export default Nav;
