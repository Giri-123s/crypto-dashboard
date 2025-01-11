// CoinCarousel.js
import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import './CoinCarousel.css';

const CoinCarousel = ({ title, coins }) => {
  return (
    <div className="coin-carousel">
      <h2>{title}</h2>
      <div className="carousel">
        {coins.map((coin, index) => (
          <div key={index} className="coin-card">
            <h3>{coin.name} <span className={`change ${coin.change > 0 ? 'positive' : 'negative'}`}>{coin.change}%</span></h3>
            <p>${coin.price.toFixed(2)}</p>
            <Sparklines data={coin.sparkline}>
              <SparklinesLine color={coin.change > 0 ? 'green' : 'red'} />
            </Sparklines>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinCarousel;