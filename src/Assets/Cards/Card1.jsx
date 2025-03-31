import React from 'react'
import lettuce from '../Images/1.jpg';


const Card1 = () => {
  return (

    <div className='card'>
      <h2 className='card-title'>Ghar ki Kheti</h2>
      <p className='card-text'>Ghar mai uagaye gaye subziya bade pyaar aur dhyan se (I grow fresh and organic vegetables) </p>
      <img className="card-image" src={lettuce} alt="lettuce" />

    </div>


  )
}

export default Card1
