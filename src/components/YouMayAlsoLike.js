import React from 'react';
import './YouMayAlsoLike.css';

const YouMayAlsoLike = () => {
  // Placeholder data
  const coins = [
    { name: 'BNB', price: 319.34, change: 0.52 },
    { name: 'SOL', price: 109.33, change: -2.89 },
    { name: 'XRP', price: 0.63, change: 0.78 },
  ];

  return (
    <div>
      <h2>You May Also Like</h2>
      <div style={{ display: 'flex', overflowX: 'scroll' }}>
        {coins.map((coin, index) => (
          <div key={index} style={{ margin: '0 10px' }}>
            <h3>{coin.name}</h3>
            <p>${coin.price.toFixed(2)}</p>
            <p>{coin.change}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouMayAlsoLike;