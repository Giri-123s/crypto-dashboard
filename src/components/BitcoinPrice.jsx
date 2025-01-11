// BitcoinPrice.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BitcoinPrice.css';

const BitcoinPrice = () => {
  const [priceData, setPriceData] = useState(null);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/simple/price', {
      params: {
        ids: 'bitcoin',
        vs_currencies: 'usd,inr',
        include_24hr_change: 'true'
      }
    })
    .then(response => {
      setPriceData(response.data.bitcoin);
    })
    .catch(error => {
      console.error('Error fetching Bitcoin price:', error);
    });
  }, []);

  if (!priceData) return <div>Loading...</div>;

  return (
    <div className="bitcoin-price">
      <h2>Bitcoin Price</h2>
      <p>USD: ${priceData.usd} ({priceData.usd_24h_change.toFixed(2)}% 24h)</p>
      <p>INR: ₹{priceData.inr}</p>
    </div>
  );
};

export default BitcoinPrice;