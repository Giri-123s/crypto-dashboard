// TrendingCoins.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TrendingCoins.css';

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/search/trending')
      .then(response => {
        setTrendingCoins(response.data.coins.slice(0, 3));
      })
      .catch(error => {
        console.error('Error fetching trending coins:', error);
      });
  }, []);

  return (
    <div className="trending-coins">
      <h2>Trending Coins (24h)</h2>
      <ul>
        {trendingCoins.map(coin => (
          <li key={coin.item.id} className="coin-item">
            <div className="coin-info">
              <img src={coin.item.small} alt={coin.item.name} className="coin-icon" />
              <span>{coin.item.name} ({coin.item.symbol.toUpperCase()})</span>
            </div>
            <span className="coin-change">{coin.item.price_btc.toFixed(2)}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingCoins;