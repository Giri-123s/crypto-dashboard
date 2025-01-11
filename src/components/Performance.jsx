// Performance.js
import React from 'react';
import './Performance.css';

const Performance = () => {
  return (
    <div className="performance">
      <h2>Performance</h2>
      <div className="performance-metrics">
        <div className="metric">
          <span>Today's Low</span>
          <span>46,930.22</span>
        </div>
        <div className="bar">
          <div className="bar-inner" style={{ width: '50%' }}></div>
          <span className="current-price">48,637.83</span>
        </div>
        <div className="metric">
          <span>Today's High</span>
          <span>49,343.83</span>
        </div>
      </div>
      <div className="performance-metrics">
        <div className="metric">
          <span>52W Low</span>
          <span>16,930.22</span>
        </div>
        <div className="bar">
          <div className="bar-inner" style={{ width: '75%' }}></div>
        </div>
        <div className="metric">
          <span>52W High</span>
          <span>49,743.83</span>
        </div>
      </div>
      <h3>Fundamentals</h3>
      <div className="fundamentals">
        <div className="fundamental-item">
          <span>Bitcoin Price</span>
          <span>$16,815.46</span>
        </div>
        <div className="fundamental-item">
          <span>24h Low / 24h High</span>
          <span>$16,382.07 / $16,874.12</span>
        </div>
        <div className="fundamental-item">
          <span>7d Low / 7d High</span>
          <span>$16,382.07 / $16,874.12</span>
        </div>
        <div className="fundamental-item">
          <span>Trading Volume</span>
          <span>$23,249,202,782</span>
        </div>
        <div className="fundamental-item">
          <span>Market Cap Rank</span>
          <span>#1</span>
        </div>
        <div className="fundamental-item">
          <span>Market Cap</span>
          <span>$323,507,290,047</span>
        </div>
        <div className="fundamental-item">
          <span>Market Cap Dominance</span>
          <span>38.343%</span>
        </div>
        <div className="fundamental-item">
          <span>Volume / Market Cap</span>
          <span>0.0718</span>
        </div>
        <div className="fundamental-item">
          <span>All-Time High</span>
          <span>$69,044.77 <span className="negative">-75.6%</span></span>
        </div>
        <div className="fundamental-item">
          <span>All-Time Low</span>
          <span>$67.81 <span className="positive">24729.1%</span></span>
        </div>
      </div>
    </div>
  );
};

export default Performance;