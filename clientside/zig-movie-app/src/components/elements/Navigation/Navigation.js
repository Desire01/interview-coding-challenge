import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navigation.css';

const Navigation = ({ movie }) => (
  <div className="navigation">
    <div className="navigation-content">
      <Link to="/">
        <p>Home</p>
      </Link>
      <p>/</p>
      <p>{movie}</p>
    </div>
  </div>
)

Navigation.propTypes = {
  movie: PropTypes.string
}

export default Navigation;