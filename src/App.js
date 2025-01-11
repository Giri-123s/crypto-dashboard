// App.js
import React from 'react';
import Header from './components/Header';
import BitcoinPrice from './components/BitcoinPrice';
import TradingViewChart from './components/TradingViewChart';
import TrendingCoins from './components/TrendingCoins';
import PromoCard from './components/PromoCard';
import Performance from './components/Performance';
import Sentiment from './components/Sentiment';
import AboutBitcoin from './components/AboutBitcoin';
import Tokenomics from './components/Tokenomics';
import Team from './components/Team';
import CoinCarousel from './components/CoinCarousel';
import './App.css';

function App() {
  const youMayAlsoLikeCoins = [
    { name: 'BNB', price: 319.34, change: 0.52, sparkline: [320, 321, 319, 318, 319] },
    { name: 'SOL', price: 109.33, change: -2.89, sparkline: [110, 109, 108, 107, 109] },
    { name: 'XRP', price: 0.63, change: 0.78, sparkline: [0.62, 0.63, 0.64, 0.63, 0.63] },
    { name: 'ADA', price: 0.61, change: -1.57, sparkline: [0.62, 0.61, 0.60, 0.61, 0.61] },
    { name: 'AVAX', price: 41.05, change: -3.78, sparkline: [42, 41, 40, 41, 41] },
  ];

  const trendingCoins = [
    { name: 'BTC', price: 45332.83, change: 0.10, sparkline: [45000, 45200, 45300, 45400, 45300] },
    { name: 'ETH', price: 2375.15, change: -0.21, sparkline: [2380, 2370, 2360, 2370, 2375] },
    { name: 'stETH', price: 2371.72, change: -0.34, sparkline: [2375, 2370, 2365, 2370, 2371] },
    { name: 'UNI', price: 7.3192, change: -4.02, sparkline: [7.5, 7.4, 7.3, 7.2, 7.3] },
    { name: 'CFG', price: 0.7736, change: -1.76, sparkline: [0.78, 0.77, 0.76, 0.77, 0.77] },
  ];

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="left-section">
          <BitcoinPrice />
          <TradingViewChart />
          <Performance />
          <Sentiment />
          <AboutBitcoin />
          <Tokenomics />
          <Team />
          <CoinCarousel title="You May Also Like" coins={youMayAlsoLikeCoins} />
          <CoinCarousel title="Trending Coins" coins={trendingCoins} />
        </div>
        <div className="right-section">
          <PromoCard />
          <TrendingCoins />
        </div>
      </main>
    </div>
  );
}

export default App;