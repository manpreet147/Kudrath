import React from 'react'
import PropTypes from 'prop-types'

const Plants = ({
  name = "Plant",
  harvest=  9,
  isPlant = false,
}) => {
  return (
    <div className='plants'>
      <p>Name: {name}</p>
      <p>Harvested: {harvest} days ago</p>
      <p>Quality: {isPlant ? "Excellent" : "Bad"}</p>
    </div>
  );
}

Plants.propTypes = {
  name: PropTypes.string,
  harvest: PropTypes.number,
  isPlant: PropTypes.bool,
}

export default Plants
