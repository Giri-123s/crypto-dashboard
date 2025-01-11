// Sentiment.js
import React from 'react';
import './Sentiment.css';

const Sentiment = () => {
  return (
    <div className="sentiment">
      <h2>Sentiment</h2>
      <div className="key-events">
        <h3>Key Events</h3>
        <div className="event-cards">
          <div className="event-card">
            <div className="event-icon">📄</div>
            <div className="event-content">
              <h4>Lorem ipsum dolor sit amet consectetur.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. 
                Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in.
              </p>
            </div>
          </div>
          <div className="event-card">
            <div className="event-icon">📈</div>
            <div className="event-content">
              <h4>Lorem ipsum dolor sit amet consectetur.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. 
                Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="analyst-estimates">
        <h3>Analyst Estimates</h3>
        <div className="estimates">
          <div className="estimate-circle">
            <span>76%</span>
          </div>
          <div className="estimate-bars">
            <div className="bar">
              <span>Buy</span>
              <div className="bar-inner" style={{ width: '76%' }}></div>
              <span>76%</span>
            </div>
            <div className="bar">
              <span>Hold</span>
              <div className="bar-inner" style={{ width: '8%', backgroundColor: '#ccc' }}></div>
              <span>8%</span>
            </div>
            <div className="bar">
              <span>Sell</span>
              <div className="bar-inner" style={{ width: '16%', backgroundColor: 'red' }}></div>
              <span>16%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;