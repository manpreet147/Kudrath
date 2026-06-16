import React from 'react'
import './Card.css';
import lettuce1 from '../Images/3.jpg';

const Card2 = () => {
  return (
    <div className='card'>
      <h2 className='card-title'>Ghar mai Kheti</h2>
      <p className='card-text'>Ghar mai uagaye gaye subziya bade dhyan se (I grow fresh and organic vegetables) </p>
      <img className="card-image" src={lettuce1} alt="lettuce1" />
    </div>
  )
}

export default Card2
