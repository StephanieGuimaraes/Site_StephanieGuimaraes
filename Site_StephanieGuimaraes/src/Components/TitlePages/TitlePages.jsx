//import React from 'react'
import './TitlePages.css'
import propTypes from 'prop-types';

const TitlePages = ({title}) => {
  return (
    <div className='title'>
        <h1>{title}</h1>
    </div>
  )
}

TitlePages.propTypes = {
    title: propTypes.string.isRequired,
  };
  
export default TitlePages