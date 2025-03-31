import React from 'react'

const Button = () => {
  const handleCLick = (e) => e.target.textContent = "Kuch bhi nahi hai, kam kar apna!!";

  const styles = {
    backgroundColor: "rgb(207, 207, 17)",
    color: "rgb(29, 16, 1)",
    padding: "10px 20px",
    border : "radius: 5px",
    border: "none",
    cursor: "pointer",
}

return (
  <button onDoubleClick={(e) => handleCLick(e)} style={styles}>
    Know More
  </button>
)
}

export default Button
