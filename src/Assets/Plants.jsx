import React from 'react'
import PropTypes from 'prop-types'

const Plants = (props) => {
  return (
    <div className='plants'>
      <p>Name: {props.name}</p>
      <p>Harvested: {props.harvest} days ago</p>
      <p>Quality: {props.isPlant ? "Excellent" : "Bad"}</p>
    </div>
  );
}

Plants.propTypes = {
  name: PropTypes.string,
  harvest: PropTypes.number,
  isPlant: PropTypes.bool,
}

Plants.defaultProps = {
  name:"Plant",
  harvest: 9,
  isPlant: false,
}

export default Plants
