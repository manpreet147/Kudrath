import React from 'react'

const Food = () => {
    const food1 = "Karela";
    const food2 = "arbi";

  return (
    <ul>
        <li>Baigan</li>
        <li>{food1}</li>
        <li>{food2.toUpperCase()}</li>
    </ul>
  )
}

export default Food
