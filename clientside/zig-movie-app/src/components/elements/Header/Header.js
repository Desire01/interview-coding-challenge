import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="header">
    <div className="header-content">
      <Link to="/">
        <img className="logo" src="/images/Movie_logo.png" alt="logo" />
      </Link>
      <img className="tmdb-logo" src="/images/tmdb_logo.png" alt="tmdb-logo" />
    </div>
  </div>
)

export default Header;