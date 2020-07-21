import React from 'react';
import PropTypes from 'prop-types';
import './FourColGrid.css';

const FourColGrid = ({ header, loading, children }) => {

  const renderElements = () => {
    const gridElements = children.map( (element, i) => (
      <div key={i} className="grid-element">
        {element}
      </div>
    ))
    return gridElements;
  }

  return (
    <div className="grid">
      {header && !loading ? <h1>{header}</h1> : null}
      <div className="grid-content">
         {renderElements()}
      </div>
    </div>
  )
}

FourColGrid.propTypes = {
  header: PropTypes.string,
  loading: PropTypes.bool
}

export default FourColGrid;