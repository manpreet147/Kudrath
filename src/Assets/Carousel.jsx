import React from 'react'
import Card1 from './Cards/Card1';
import Card2 from './Cards/Card2';

const Carousel = () => {
  return (
    <div style={{ width: '80%', maxWidth: '1000px', margin: '0 auto', padding: '20px', background: '#f8f8f8' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        <Card1 />
        <Card2 />
      </div>
    </div>
  )
}

export default Carousel
