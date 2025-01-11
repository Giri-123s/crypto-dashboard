// AboutBitcoin.js
import React from 'react';
import './AboutBitcoin.css';

const AboutBitcoin = () => {
  return (
    <div className="about-bitcoin">
      <h2>About Bitcoin</h2>
      <div className="about-content">
        <h3>What is Bitcoin?</h3>
        <p>
          Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. 
          It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. 
          BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
        </p>
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. 
          Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. 
          Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed.
        </p>
        <p>
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. 
          Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. 
          Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. 
          Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. 
          Integer pellentesque enim convallis ultricies at.
        </p>
        <p>
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. 
          Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. 
          Purus ultrices tincidunt volutpat in eget. Ullamcorper dui.
        </p>
      </div>
      <h3>Already Holding Bitcoin?</h3>
      <div className="holding-cards">
        <div className="holding-card">
          <img src="https://img.freepik.com/free-photo/graph-growth-development-improvement-profit-success-concept_53876-120075.jpg?semt=ais_hybrid" alt="Profits" className="card-image" />
          <div className="card-content">
            <h4>Calculate your Profits</h4>
            <button>Check Now →</button>
          </div>
        </div>
        <div className="holding-card">
          <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2023-09/29/full/1696008957-6591.jpg" alt="Tax" className="card-image" />
          <div className="card-content">
            <h4>Calculate your tax liability</h4>
            <button>Check Now →</button>
          </div>
        </div>
      </div>
      <p>
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. 
        Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. 
        Purus ultrices tincidunt volutpat in eget. Ullamcorper dui.
      </p>
    </div>
  );
};

export default AboutBitcoin;