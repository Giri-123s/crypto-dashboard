import React, { useEffect } from 'react';
import './TradingViewChart.css';

const TradingViewChart = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        container_id: 'tradingview_chart',
        autosize: true,
        symbol: 'BTCUSD',
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'light',
        style: '1',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        allow_symbol_change: true,
        details: true,
        hotlist: true,
        calendar: true,
        news: ['headlines'],
        studies: ['BB@tv-basicstudies'],
      });
    };
    document.body.appendChild(script);
  }, []);

  return <div id="tradingview_chart" style={{ height: '500px' }}></div>;
};

export default TradingViewChart;