import React from 'react'


const ProfilePic = () => {
    
    const handleCLick = (e) => e.target.style.display = "none";

  return (
    <div>
      <img onClick={(e) => handleCLick(e)} src={require('./Images/2.jpg')} alt='Greens'></img>;
    </div>
  )
}

export default ProfilePic
